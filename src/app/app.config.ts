import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authinterceptorInterceptor } from './Intercepter/authinterceptor.interceptor';
import { responseInterceptor } from './Intercepter/response.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(withInterceptors([authinterceptorInterceptor, responseInterceptor]))]
};
