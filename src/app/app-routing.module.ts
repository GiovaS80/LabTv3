import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RestrictedAreaComponent } from './restrictedArea/restrictedArea.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // {path:'', redirectTo:'/LabTvIndex.html'},
  { path: '',   redirectTo: '/LabTvIndex.html', pathMatch: 'full' },
  {path:'LabTvIndex.html/ricerca', component:HomeComponent},
  {path:'LabTvIndex.html', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'favorite', component:RestrictedAreaComponent},
  {path:'login', component:LoginComponent},
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
