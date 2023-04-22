import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './restrictedArea.component.html',
  styleUrls: ['./restrictedArea.component.css']
})
export class RestrictedAreaComponent 
{
  constructor
  (
    private loginService:LoginService,
    private apiService:ApiService,
    private router:Router
  ){}

  ngOnInit():void
  {
    if(!this.loginService.IsLoggedIn()){      
      this.router.navigate(['login'])
    }
    else{
      this.userName=sessionStorage.getItem('firstname')
    }
  }
  userName:string | null=''
  favorite:Array<any>=this.apiService.favoriteMovie

  remove(movie:any)
  {
    if(confirm(`sei sicuro di voler eliminare il film ${movie.title}?`))
    {
      this.apiService.favoriteMovie=this.favorite=this.favorite.filter((e:any) => {
        return e!=movie
      })
    }
  }

}//END class CatalogComponent
