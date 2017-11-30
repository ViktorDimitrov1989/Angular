import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/observable';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //console.log(req);

        if(!sessionStorage.getItem('authToken')){
            return next.handle(req);
        }

        req = req.clone({
            headers: req.headers
                .set('Authorization', sessionStorage.getItem('authToken'))
                .set('Content-Type', 'application/json')
        })

        return next.handle(req);
    }


}