import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; //add this
import { AboutComponent } from './about/about.component'; //add this
import { ContactComponent } from './contact/contact.component'; 
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about/:id',
    component: AboutComponent
  },
  //adaug o ruta noua pt componenta Contact
  {
    path: 'contact',
    component: ContactComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
