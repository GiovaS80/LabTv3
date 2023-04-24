import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent 
{
  apiLoaded = false;
  ngOnInit()
  {
    if (!this.apiLoaded) 
    {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
  @Input() detailMovie:any={}
  @Input() infoVideo:string=''

  @Output() showList = new EventEmitter()
  @Output() askRequiredMovie = new EventEmitter<string>()
  @Output() askVideo = new EventEmitter<string>()
  @Output() movieForPurchase = new EventEmitter()

  isVideoVisible:boolean=false

  videoId = '';

  playerConfig = 
  {
    controls: 1,
    mute: 0,
    autoplay: 1
  };

  onReady(e: any): void {console.log(e, 'its ready')}

  backToList(){this.showList.emit()}

  requiredMovie(title:string){this.askRequiredMovie.emit(title)}

  showVideo()
  {
    this.askVideo.emit(this.detailMovie.id)
    setTimeout(()=>{this.isVideoVisible=true},555)
  }

  closeVideoBox(){this.isVideoVisible=false}

  buy(){this.movieForPurchase.emit()}
  
}//END class DetailMovieComponent
