import { inject } from '@angular/core';
import { Observable } from "rxjs";
import { HttpRequest, HttpEvent, HttpHandlerFn} from '@angular/common/http';
import { Constants } from '../constants/common';

export function spotifyInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) : Observable<HttpEvent<unknown>> {
    
    if(req.url === Constants.auth_url){
        return next(req);
    }

    const reqWithToken = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))
    })

    return next(reqWithToken);
}