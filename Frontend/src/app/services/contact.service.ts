import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../modules/contact";


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactUrl : string;

  constructor(private http: HttpClient) {
    this.contactUrl='http://localhost:8081/contacts';
  }

  public findAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactUrl+ '/all');
  }

  public save(contact: Contact):Observable<Contact> {
    return this.http.post<Contact>(this.contactUrl+'/add', contact);
  }

  findAllByAccount(compName: string): Observable<Contact[]> {
    let params = new HttpParams()
      .set ("compName",compName)
    return this.http.get<Contact[]>(this.contactUrl+'/all/account',{params});

  }
}

