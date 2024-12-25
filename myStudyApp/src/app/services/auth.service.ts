import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth';
  private userUrl = 'http://localhost:8080/api/users';
  
  constructor(private http: HttpClient) { }

  login(login: string, password: string): Observable<any> {
    const body = { login, password };    
    return this.http.post(this.apiUrl, body);
  }

  getUserPermission(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer Token ${token}`
    });
    return this.http.get(`${this.userUrl}/user`, { headers });
  }

  getAdminPermission(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer Token ${token}`
    });
    return this.http.get(`${this.userUrl}/admin`, { headers });
  }

}
