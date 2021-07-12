import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInUsersGuard implements CanActivate {

  constructor(private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("OnlyLoggedInUsers");
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      window.alert("You don't have permission to view this page");
      return false;
    }
  }
  
}
