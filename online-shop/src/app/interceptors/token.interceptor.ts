import { AuthService } from '../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user/user.service';
import { Injector } from '@angular/core';
import { APP_KEY, APP_SECRET } from './../services/constants'
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    private auth: AuthService;

    constructor(
        private injector: Injector,
        private toastr: ToastrService
    ) {

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.auth = this.injector.get(AuthService);

        if (!this.auth.isAuthenticated()) {
            request = request.clone({
                headers: request.headers
                    .set('Authorization', 'Basic ' + btoa(APP_KEY + ":" + APP_SECRET))
                    .set('Content-Type', 'application/json')
            });

            return next.handle(request).do((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    //this.toastr.success('Success!');
                    console.log(event);
                }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        // redirect to the login route
                        // or show a modal
                        //this.toastr.error('Error!');
                        console.log(event);
                    }
                }
            });;
        }

        request = request.clone({
            headers: request.headers
                .set('Authorization', 'Kinvey ' + localStorage.getItem('authToken'))
                .set('Content-Type', 'application/json')
        });

        return next.handle(request).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                //this.toastr.success('Success!');
                console.log(event);
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    // redirect to the login route
                    // or show a modal
                    //this.toastr.error('Error!');
                    console.log(event);
                }
            }
        });
    }
}