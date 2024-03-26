import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  calculateMaxK(x: number, y: number, n: number): Observable<any> {
    const body = { x, y, n };
    return this.http.post<any>(`${this.baseUrl}/max-k/calculate`, body);
  }
}
