import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './../models/User';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService{
    private baseUrl: string = "https://baas.kinvey.com";
    private appKey = 'kid_BkQyYOtlM';
    private appSecret = '2921371a83ae4aafaa50af7411426edd';

    public user: Subject<any> = new Subject();

    constructor(
        private http: HttpClient
    ){}

    registerUser(user: User){
        let authHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(this.appKey + ':' + this.appSecret)
        });

        const httpOptions = {
            headers: authHeaders
        }

        delete user['confirmPassword'];
        user['role'] = 'user';

        this.http.post(`${this.baseUrl}/user/${this.appKey}`, JSON.stringify(user), httpOptions).subscribe(user => {
            this.user.next(user)
        });
    }


}