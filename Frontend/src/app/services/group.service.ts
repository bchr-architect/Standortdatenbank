import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Group } from '../modules/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private groupUrl : string;

  constructor(private http: HttpClient) {
    this.groupUrl='http://localhost:8081/groups';
  }

  public findAll(): Observable<Group[]> {

    return this.http.get<Group[]>(this.groupUrl+ '/all');
  }

  public save(group: Group):Observable<Group> {
    return this.http.post<Group>(this.groupUrl+'/add', group);
  }
}
