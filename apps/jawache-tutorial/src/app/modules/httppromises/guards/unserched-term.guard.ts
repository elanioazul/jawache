import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SuperappComponent } from '../components/superapp/superapp.component';

@Injectable({
  providedIn: 'root'
})
export class UnserchedTermGuard implements CanDeactivate<SuperappComponent> {

  constructor() {}

  canDeactivate(
    component: SuperappComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("UnsearchedTermGuard");
    console.log(currentRoute.params);
    console.log(currentState.url);
    return component.canDeactivate() || window.confirm("Are you sure?");
    //return confirm('You have unsaved changes! If you leave, your changes will be lost.');
  }
  
}
