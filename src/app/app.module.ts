import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ShowAllComponent } from './user/show-all/show-all.component';
import { AddEditComponent } from './user/add-edit/add-edit.component';

//Componentes rol Admin
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

//Componentes rol Profesor
import { ProfesorComponent } from './profesor/profesor.component';
import { ProfesorHomeComponent } from './profesor/profesor-home/profesor-home.component';

//Componentes rol Estudiante
import { EstudianteComponent } from './estudiante/estudiante.component';
import { EstudianteHomeComponent } from './estudiante/estudiante-home/estudiante-home.component';

//Componentes del proyecto
import { SharedService } from './shared.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ShowAllComponent,
    AddEditComponent,
    AdminComponent,
    AdminHomeComponent,
    ProfesorComponent,
    EstudianteComponent,
    ProfesorHomeComponent,
    EstudianteHomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
