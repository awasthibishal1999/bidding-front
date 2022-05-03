import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { BidComponent } from './bid/bid.component';
import { BuyComponent } from './buy/buy.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { SellComponent } from './sell/sell.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
// import {AuthGuard} from "./guards/auth.guard";
// import { Role } from './role';
// import { AdminComponent } from './admin/admin.component';
// import { NotFoundComponent } from './error/not-found/not-found.component';
// import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path:'register', component: RegisterComponent},
  {path:'buy-product', component:BuyComponent},
  {path:'sell-product', component:SellComponent},
  {path:'products/:id', component:ProductDetailsComponent},
  {path:'bid-products/:id', component:BidComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

//   {path: 'login', component: LoginComponent},
//   {path: 'register', component: RegisterComponent},

//   { path: 'profile',
//     component: UserProfileComponent,
//     canActivate: [AuthGuard],
//     data: { roles: [Role.ADMIN, Role.USER]}
//   },

//   { path: 'admin',
//     component: AdminComponent,
//     canActivate: [AuthGuard],
//     data: {roles: [Role.ADMIN]}
//   },

//   {path: '404', component: NotFoundComponent},
//   {path: '401', component: UnauthorizedComponent},

// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {
//   // constructor(private router: Router) {
//   //   this.router.errorHandler = (error: any) => {
//   //     this.router.navigate(['/404']);
//   //   };
//   // }
//  }
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
