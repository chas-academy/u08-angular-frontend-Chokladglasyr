import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from './services/token.service';
import { inject } from '@angular/core';

export const testInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(TokenService)
  
  if (token) {
    const cloned = req.clone({
       headers: req.headers.set('Authorization', `${token}`)
    });
    return next(cloned)
 }
 return next(req)
 };
