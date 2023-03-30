import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from "@angular/core";
import {AuthService} from "../auth/services/auth.service";
import {Subject, takeUntil} from "rxjs";

@Directive({
  selector:'[isAuthenticated]'
})
export class IsAuthenticatedDirective implements OnInit, OnDestroy{
  @Input('isAuthenticated') condition!: boolean;
  private stop$ = new Subject<boolean>();
  private isVisible: boolean = false;

  constructor(private authService: AuthService, private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) {}

  ngOnInit(): void {
    this.authService.user$.pipe(takeUntil(this.stop$)).subscribe(
      (user) => {
        if(user && this.condition || !user && !this.condition){
          if(!this.isVisible){
            this.viewContainerRef.createEmbeddedView(this.templateRef);
            this.isVisible = true;
          }
        } else {
          this.viewContainerRef.clear();
          this.isVisible = false;
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.stop$.next(true);
  }
}
