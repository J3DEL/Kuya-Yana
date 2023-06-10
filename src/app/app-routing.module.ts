import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModuleModule } from './auth/auth-routing.module.module';
import { NoFoundPagesComponent } from './no-found-pages/no-found-pages.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'**', component: NoFoundPagesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AuthRoutingModuleModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
