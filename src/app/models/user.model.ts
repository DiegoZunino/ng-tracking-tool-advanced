export class User {

  constructor(public user: { email: string, role: string, id: number }, private token: string, private tokenExpirationDate: Date) {}

  get accessToken(): string | null {
    if(!this.tokenExpirationDate || new Date() > this.tokenExpirationDate){
      return null;
    }
    return this.token;
  }
}
