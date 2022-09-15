import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      // return this.loginService.username$.pipe(map((value)=>{
      //   if (value) {
      //     return true;
      //   }
      //   else {
      //     this.router.navigate(["login"]).then()
      //     return false;
      //   }
      // }))

      const userName = localStorage.getItem('name');
      if (userName) {
        return true;
      }
      else {
        this.router.navigate(["login"]).then()
        return false;
      }
  }

}
