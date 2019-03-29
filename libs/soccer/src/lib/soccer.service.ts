import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoccerService {

  constructor(private http: HttpClient) { }
  getContinents(): Observable<any> {
    return this.http.get('/api/continents');
  }
}
