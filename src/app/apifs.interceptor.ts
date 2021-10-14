import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, timeout } from 'rxjs/operators';

@Injectable()
export class ApifsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Intercepting Request", request);
    request = request.clone({ params: request.params.set("limit","10")})

    return next.handle(request)
      .pipe(
        timeout(5000),
        tap( response => {
        // risposta arrivata
        console.log("Intercepting Response", response);
      }));
  }
}
