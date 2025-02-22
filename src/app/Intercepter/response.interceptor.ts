import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthServicesService } from '../Services/auth-services.service';

export const responseInterceptor: HttpInterceptorFn = (req, next) => {

  // const router = inject(Router);
  const AuthServices = inject(AuthServicesService);





  console.log('ResponseInterceptor', req);
  return next(req).pipe(
    tap(
      (event) => {
        if (event instanceof HttpResponse) {
          console.log('Response', event);
        }
      },
      (error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          console.log('Unauthorized request - redirecting to login');
          // this.router.navigate(['/login']);
          AuthServices.logout();
          // router.navigate(['/login']);
        }
      }
    )
  );
};
function localTap(arg0: (event: any) => void): import("rxjs").OperatorFunction<import("@angular/common/http").HttpEvent<unknown>, import("@angular/common/http").HttpEvent<unknown>> {
  throw new Error('Function not implemented.');
}

