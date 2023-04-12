import { Component, EventEmitter, Input, Output } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent {
  ngOnInit(){
    // console.log(this.detailMovie.similars);
  }
  @Input() detailMovie:any={}
  @Input() infoVideo:any={}

  @Output() showList = new EventEmitter()
  @Output() askRequiredMovie = new EventEmitter<string>()
  @Output() askVideo = new EventEmitter<string>()

  isVideoVisible:boolean=false

  backToList(){
    this.showList.emit()
  }

  requiredMovie(title:string){
    console.log(title);
    this.askRequiredMovie.emit(title)
  }

  showVideo(){
    this.askVideo.emit(this.detailMovie.id)
    console.log(this.detailMovie.id);
    this.isVideoVisible=true
    console.log(this.infoVideo);
    setTimeout(()=>{console.log(this.infoVideo);
    },555    )
  }

  closeVideoBox(){
    this.isVideoVisible=false
  }

  
}//END class DetailMovieComponent
