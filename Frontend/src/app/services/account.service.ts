import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../modules/account";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private actualAccount: string;
  private accountUrl : string;

  constructor(private http: HttpClient) {
    this.accountUrl='http://localhost:8081/accounts';
  }

  public findAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountUrl+ '/all');
  }

  public save(account: Account):Observable<Account> {
    return this.http.put<Account>(this.accountUrl+'/add', account);
  }

  public setActualAccount(compName: string): void {
    this.actualAccount=compName;
  }
  public getActualAccount(): string {
    return this.actualAccount;
  }

}
