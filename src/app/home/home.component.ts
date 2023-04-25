import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoginService } from '../services/login.service';
import { ListMovie } from '../models/movie-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent 
{
  constructor
    (
      private apiService: ApiService,
      private loginService: LoginService,
    ) { }
  ngOnInit(): void 
  {
    if (this.apiService.fullListMovie.length != 0) 
    {
      this.fullListMovie = this.apiService.fullListMovie
      this.errorMsg = ''
      this.isListVisible = true
      this.didTheDataArrive = true
      console.log(this.apiService.fullListMovie.length);
    }
    else {this.getListMovie()}
  }

  fullListMovie: Array<ListMovie> = []
  movieDetail: any

  videoInfo: string = ''
  movieToSearch: string = ''
  errorMsg: string = ''

  didTheDataArrive: boolean = false
  isListVisible: boolean = false
  isDetailVisible: boolean = false


  getListMovie() 
  {
    console.log('getListMovie');
    this.didTheDataArrive = false
    this.apiService.getList().subscribe
    (
      {
        next: (result: any) => 
        {
          this.errorMsg = result.errorMessage
          this.apiService.fullListMovie = this.fullListMovie = result.items
        },
        error: (err: any) => 
        {
          this.errorMsg = err.name + '\n' + err.message
          console.error(err)
        },
        complete: () => 
        {
          this.didTheDataArrive = true
          this.isListVisible = true
        }
      }
    )//END subscribe
  }//END getListMovie

  showDetail(id: string) 
  {
    this.didTheDataArrive = false
    this.isListVisible = false
    this.apiService.getDetail(id).subscribe
    (
      {
        next: (result: any) => 
        {
          this.errorMsg = result.errorMessage
          this.movieDetail = result
        },
        error: (err: any) => 
        {
          this.errorMsg = err.name + '\n' + err.message
          console.error(err)
        },
        complete: () => 
        {
          this.didTheDataArrive = true
          this.isDetailVisible = true
        }
      }
    )//END subscribe    
  }//END showDetail

  getInfoVideo(id: string) 
  {
    this.didTheDataArrive = false
    this.apiService.getVideo(id).subscribe
    (
      {
        next: (result: any) => 
        {
          this.errorMsg = result.errorMessage
          this.videoInfo = result.videoId
        },
        error: (err: any) => 
        {
          this.errorMsg = err.name + '\n' + err.message
          this.isDetailVisible=false
          console.error(err)
        },
        complete: () => this.didTheDataArrive = true
      }
    )//END subscribe
  }//END getInfoVideo

  returnToTheList() 
  {
    this.isListVisible = true
    this.isDetailVisible = false
  }

  searchRequiredMovie(title: string) 
  {
    this.movieToSearch = title
    this.returnToTheList()
  }

  addToFavorites() 
  {
    if (this.loginService.IsLoggedIn()) 
    {
      if (this.apiService.favoriteMovie.includes(this.movieDetail)) 
      {
        alert(`Il Film ${this.movieDetail.title} e' gia' presente nella Tua area riservata`)
      }
      else 
      {
        this.apiService.favoriteMovie.push(this.movieDetail)
        alert(`Il Film ${this.movieDetail.title} e' stato aggiunto nella Tua area riservata`)
      }
    }//END if user is loggedin
    else
    {
      alert('Effettua il LogIn per Aquistare. Se non sei Registrato, registrati per non perdere le novita.')
    }
  }//END addToFavorites

}//END class HomeComponent
