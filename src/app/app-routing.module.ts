import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'user',component:UserComponent },
  { path:'adm', component:AdminComponent },
  { path:'prf', component:ProfesorComponent },
  { path:'est', component:EstudianteComponent },
  { path:'login', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
