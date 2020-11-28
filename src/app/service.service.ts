import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IPersoana } from './persoana';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public _url : string = '/assets/persoane.json'

  constructor(private http : HttpClient) { }

  getPersoana$(): Observable<IPersoana[]> {
    return this.http.get<IPersoana[]>(this._url)
  }
}
