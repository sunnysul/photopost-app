import { CanActivateFn, Router } from '@angular/router';
import { AuthServicesService } from './auth-services.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export const authGardGuard: CanActivateFn = (route, state) => {

  const httpClient = inject(HttpClient);
  const router = inject(Router);
  const auth = new AuthServicesService(httpClient, router);

  if (!auth.isAuthenticated()) {
    auth.logout();
    return false;
  }






  return true;
};
