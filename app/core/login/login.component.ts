import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ToastService } from '../toast/toast.service';
import { UserProfileService } from '../user-profile.service';

import { LoginService } from './login.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnDestroy {
  private loginSub: Subscription;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private userProfileService: UserProfileService) {
  }

  public get isLoggedIn() : boolean {
    return this.userProfileService.isLoggedIn;
  }

  login() {
    this.loginSub = this.loginService
      .login()
      .mergeMap(loginResult => this.route.queryParams)
      .map(qp => qp['redirectTo'])
      .subscribe(redirectTo => {
        this.toastService.activate(`Successfully logged in`);
      //  if (this.userProfileService.isLoggedIn) {
      //    let url = redirectTo ? [redirectTo] : [ '/' ];
       //   this.router.navigate(url);
      //  }
      });
  }

  logout() {
    this.loginService.logout();
    this.toastService.activate(`Successfully logged out`);
  }

  ngOnDestroy() {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }
}
