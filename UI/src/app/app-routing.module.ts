import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibaryComponent } from './libary/libary.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    path:'books/library',
    component:LibaryComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
