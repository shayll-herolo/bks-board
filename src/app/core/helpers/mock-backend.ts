import {
  HttpEvent, HttpHandler,

  HttpInterceptor, HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import { User } from '../models';


const users: User[] = [
  {
    id: 1,
    username: 'user',
    password: 'user',
    firstName: 'Gady',
    lastName: 'Sukenik',
  },
];

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null).pipe(delay(2000), mergeMap(handleRoute));

    function handleRoute() {
      switch (true) {
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function authenticate() {
      const { username, password } = body;
      const user = users.find(
        (x) => x.username === username && x.password === password
      );
      if (!user) { return error('Username or password is incorrect'); }
      return ok({
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        token: `fake-jwt-token.${user.id}`,
      });
    }

    // helper functions

    function ok(resBody) {
      return of(new HttpResponse({ status: 200, body: resBody }));
    }

    function error(message) {
      return throwError({ status: 400, error: { message } });
    }
  }
}
