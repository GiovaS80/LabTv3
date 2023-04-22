import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }
  ngOnInit(): void 
  {
    if(this.apiService.fullListMovie.length==0)
    {
      this.getListMovie()
    }
    else
    {
      this.fullListMovie=this.apiService.fullListMovie
      this.isThereAnError=false
      this.isListVisible=true
      console.log(this.apiService.fullListMovie.length);
    }
  }

  fullListMovie: Array<any> = []
  movieDetail: any

  videoInfo: string = ''
  movieToSearch: string = ''
  errorMsg:string = ''

  isThereAnError:boolean = true
  isListVisible: boolean = false
  isDetailVisible: boolean = false


  getListMovie() 
  {
    this.apiService.getList().subscribe(
      {
        next: (result: any) => 
        {
          console.log(result)
        },
        error: (err: any) => console.log(err),
        complete: () => console.log()
      }
    )//END subscribe
  }//END getListMovie

  showDetail(id: string) 
  {
    // this.apiService.getDetail(id).subscribe(
    //   {
    //     next: (result:any) => console.log(result),
    //     error: (err:any) => console.log(err),
    //     complete: () => console.log() 
    //   }
    // )//END subscribe
    this.movieDetail = this.apiService.chosenMovie

    this.isListVisible = false
    this.isDetailVisible=true
    // console.log(id);

    // this.apiService.getDetail(id)   
  }//END showDetail

  getInfoVideo(id: string) 
  {
    // console.log(id);
    this.apiService.getVideo(id).subscribe(
      {
        next: (result: any) => console.log(result),
        error: (err: any) => {
          this.videoInfo = this.apiService.videoMovie.videoId
          // console.log('sto in errore') 
          // console.log(err)
        },
        complete: () => {
          console.log('ok ho finito')
          this.videoInfo = this.apiService.videoMovie.videoId
        }
      }
    )//END subscribe
    console.log(this.videoInfo);
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
    //  this.router.navigate(['/LabTvIndex.html/ricerca'])
  }

  addToFavorites() 
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
  }//END addToFavorites

}//END class HomeComponent
