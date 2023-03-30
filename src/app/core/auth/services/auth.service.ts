import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {AuthRequest, AuthResponse} from "../../../models/auth.model";
import {User} from "../../../models/user.model";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  public user$ = this.userSubject.asObservable();
  private tokenExpirationTimeout: NodeJS.Timeout | null = null;

  constructor(private httpClient: HttpClient, private router: Router) {}

  private handleUserAuthentication(response: AuthResponse) {
    const tokenExpirationDate = new Date();
    tokenExpirationDate.setMinutes(tokenExpirationDate.getMinutes() + environment.tokenExpiresIn)
    var user = new User(response.user, response.accessToken, tokenExpirationDate);
    localStorage.setItem('userData', JSON.stringify(user));
    this.userSubject.next(user);
    this.autologout(environment.tokenExpiresIn * 60000)
  }

  signup(request: AuthRequest): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${environment.baseUrl}/signup`, request).pipe(
      tap((response) => this.handleUserAuthentication(response))
    );
  }

  login(request: AuthRequest): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${environment.baseUrl}/login`, request).pipe(
      tap((response) => this.handleUserAuthentication(response))
    );
  }

  logout(): void {
    this.userSubject.next(null);
    localStorage.removeItem('userData');

    if(this.tokenExpirationTimeout) {
      clearTimeout(this.tokenExpirationTimeout);
      this.tokenExpirationTimeout = null;
    }
  }

  autologin(){
    const userData : {
      user: {
        email: string;
        role: string;
        id: number;
      };
      token: string;
      tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData')!);

    if(!userData){
      return;
    }

    const tokenExpirationDate = new Date(userData.tokenExpirationDate);
    const user = new User(userData.user, userData.token, tokenExpirationDate);

    if(user.accessToken) {
      this.userSubject.next(user);
      this.autologout(tokenExpirationDate.getTime() - new Date().getTime())
    }
  }

  autologout(tokenExpiresInMs: number){
    console.log(`Token expires in ${tokenExpiresInMs/60000} minutes`);
    this.tokenExpirationTimeout = setTimeout(() => {
      this.logout()
      this.router.navigateByUrl('/auth');
    }, tokenExpiresInMs)
  }
}
