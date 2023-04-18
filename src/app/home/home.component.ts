import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private apiService:ApiService,
    private router:Router
    ){}
  ngOnInit():void{ }

  fullListMovie:Array<any>=this.apiService.fullListMovie
  movieDetail:any

  videoInfo:string=''

  isListVisible:boolean=true

  movieToSearch:string=''

  getListMovie(){
    this.apiService.getList().subscribe(
      {
        next: (result:any) => console.log(result),
        error: (err:any) => console.log(err),
        complete: () => console.log()
      }
    )//END subscribe
  }//END getListMovie

  showDetail(id:string){
    // this.apiService.getDetail(id).subscribe(
    //   {
    //     next: (result:any) => console.log(result),
    //     error: (err:any) => console.log(err),
    //     complete: () => console.log() 
    //   }
    // )//END subscribe
    this.movieDetail=this.apiService.chosenMovie
    
    this.isListVisible=false 
    // console.log(id);
    
    // this.apiService.getDetail(id)   
  }//END showDetail

  getInfoVideo(id:string){
    // console.log(id);
    this.apiService.getVideo(id).subscribe(
      {
        next: (result:any) => console.log(result),
        error: (err:any) => {
          this.videoInfo=this.apiService.videoMovie.videoId
          // console.log('sto in errore') 
          // console.log(err)
        },
        complete: () => {
          console.log('ok ho finito') 
          this.videoInfo=this.apiService.videoMovie.videoId
        }
      }
    )//END subscribe
    console.log(this.videoInfo);
  }//END getInfoVideo

  returnToTheList(){
    this.isListVisible=true
  }

  searchRequiredMovie(title:string){
    // console.log(title);
    this.movieToSearch=title
    this.returnToTheList()
    //  this.router.navigate(['/LabTvIndex.html/ricerca'])
  }

}//END class HomeComponent
