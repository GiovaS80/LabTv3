import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path:'', redirectTo:'/LabTvIndex.html'},
  { path: '',   redirectTo: '/LabTvIndex.html', pathMatch: 'full' },
  {path:'LabTvIndex.html/ricerca', component:HomeComponent},
  {path:'LabTvIndex.html', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
