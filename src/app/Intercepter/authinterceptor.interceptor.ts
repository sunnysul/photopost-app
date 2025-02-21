import { HttpInterceptorFn } from '@angular/common/http';

export const authinterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  if (localStorage.getItem('token')) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  console.log("Interceptor");
  console.log('Request', req);




  return next(req);
};
