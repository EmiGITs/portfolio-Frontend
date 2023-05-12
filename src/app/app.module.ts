import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { EditAboutComponent } from './PopUp/edit-about/edit-about.component';
import {AuthInterceptor} from "./helpers/auth.interceptor";
import { EditExperienciaComponent } from './PopUp/edit-experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './PopUp/edit-educacion/edit-educacion.component';
import { EditSkillComponent } from './PopUp/edit-skill/edit-skill.component';
import { EditProjectoComponent } from './PopUp/edit-projecto/edit-projecto.component';
import { CreateExperienciaComponent } from './PopUp/create-experiencia/create-experiencia.component';
import { CreateEducacionComponent } from './PopUp/create-educacion/create-educacion.component';
import { CreateSkillComponent } from './PopUp/create-skill/create-skill.component';
import { CreateProjectoComponent } from './PopUp/create-projecto/create-projecto.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    AboutComponent,
    LoginComponent,
    EditAboutComponent,
    EditExperienciaComponent,
    EditEducacionComponent,
    EditSkillComponent,
    EditProjectoComponent,
    CreateExperienciaComponent,
    CreateEducacionComponent,
    CreateSkillComponent,
    CreateProjectoComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
