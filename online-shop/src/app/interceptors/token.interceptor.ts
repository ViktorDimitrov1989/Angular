import { AuthService } from '../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user/user.service';
import { Injector } from '@angular/core';
import { APP_KEY, APP_SECRET } from './../services/constants'


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    private auth: AuthService;
    private request: HttpRequest<any>;
    private next: HttpHandler;

    constructor(
        private injector: Injector
    ) { }
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.auth = this.injector.get(AuthService);
        this.next = next;
        this.request = request;

        if (request.url.endsWith('adverts')) {
            console.log('here')
            return this.handleAdvertsRequests();
        }

        if (!this.auth.isAuthenticated()) {
            return this.handleNoAuthRequests();
        }

        return this.handleAuthRequests();
    }


    handleAdvertsRequests(): Observable<HttpEvent<any>> {

        this.request = this.request.clone({
            headers: this.request.headers
                .set('Authorization', 'Basic ' + btoa("penka:1234a"))
                .set('Content-Type', 'application/json')
        });

        return this.handleResponse();
    }

    handleNoAuthRequests(): Observable<HttpEvent<any>> {
        this.request = this.request.clone({
            headers: this.request.headers
                .set('Authorization', 'Basic ' + btoa(APP_KEY + ":" + APP_SECRET))
                .set('Content-Type', 'application/json')
        });

        return this.handleResponse();
    }

    handleAuthRequests(): Observable<HttpEvent<any>> {
        this.request = this.request.clone({
            headers: this.request.headers
                .set('Authorization', 'Kinvey ' + localStorage.getItem('authToken'))
                .set('Content-Type', 'application/json')
        });

        return this.handleResponse();
    }

    handleResponse(): Observable<HttpEvent<any>> {
        return this.next.handle(this.request).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                console.log(event);
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    // redirect to the login route
                    // or show a modal
                    console.log(event);
                }
            }
        });
    }

}


