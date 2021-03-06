import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:5000';
const LOGIN = '/login';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  authFunc(payload) {
    return this.http.post(baseUrl + LOGIN, payload)
  }
}
