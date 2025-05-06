import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { TokenService } from "./services/token.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class TokenInceptor implements HttpInterceptor {
   constructor(private tokenService: TokenService) {}
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = this.tokenService.getToken();
      if (token) {
      const cloned = req.clone({
         headers: req.headers.set('Authorization', `${token}`)
      });
      return next.handle(cloned)
      }
      return next.handle(req)
      }
}