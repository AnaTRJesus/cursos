import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { CamelCasePipe } from './camel-case.pipe';

const appRouters: Routes = [

  {path:'cursos', component: CursosComponent},
  {path:'login', component: LoginComponent},
  {path:'', component: HomeComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursosComponent,
    LoginComponent,
    FormComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouters),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
