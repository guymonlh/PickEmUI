import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

import { WeekDetailComponent }      from './week-detail/week-detail.component';
//import { LoginComponent } from './login/login.component';

import { AuthGuard } from './core/auth-guard.service';
import { CanDeactivateGuard } from './core/can-deactivate-guard.service';
import { UserProfileService } from './core/user-profile.service';
import { PageNotFoundComponent } from './page-not-found.component';

/***************************************************************
* Lazy Loading to Eager Loading
*
* 1. Remove the module and NgModule imports in `app.module.ts`
*
* 2. Remove the lazy load route from `app.routing.ts`
*
* 3. Change the module's default route path from '' to 'pathname'
*****************************************************************/
const routes: Routes = [
     { path: '', pathMatch: 'full', redirectTo: 'app/app.module#AppModule', },
      // { path: 'login', component: LoginComponent },
//   {
//     path: 'admin',
//     loadChildren: 'app/admin/admin.module#AdminModule',
//     canActivate: [AuthGuard],
//     canActivateChild: [AuthGuard],
//     canLoad: [AuthGuard],
//   },
     { path: 'detail/:id', component: WeekDetailComponent },
     { path: 'week', redirectTo: 'app/app.module#AppModule' },
//   { path: 'characters', loadChildren: 'app/characters/characters.module#CharactersModule' },
//   { path: 'vehicles', loadChildren: 'app/vehicles/vehicles.module#VehiclesModule' },
//   { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    CanDeactivateGuard,
    UserProfileService
  ]
})
export class AppRoutingModule { }
