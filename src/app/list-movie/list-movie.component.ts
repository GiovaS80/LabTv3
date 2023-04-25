import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ListMovie } from '../models/movie-interface';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css'],
  template: 'The href is: {{href}}'
})
export class ListMovieComponent 
{
  constructor(private router:Router){}
  ngOnInit():void
  { 
    this.listMovie=this.fullListMovie.slice(0,24)
    this.index=25
    this.href = this.router.url;
    if(this.searchMovie!='')
    {      
      this.search=this.searchMovie
      this.searchFunction(this.search)
    }
  }//END ngOnInit
  
  @Input() fullListMovie:Array<ListMovie>=[]
  @Input() searchMovie:string=''

  @Output() movieDetail = new EventEmitter<string>()

  listMovie:Array<ListMovie>=[]

  index:number=0

  search:string=''
  public href: string = "";

  isSearchBarVisible:boolean=this.router.url=='/LabTv.com/ricerca'

  movieDetailToRequest(movie:any){this.movieDetail.emit(movie.id)}

  onScroll()
  {
    if(this.index<=100 && !this.isSearchBarVisible)
    {
      const tempArray=this.fullListMovie.slice(this.index,(this.index+24))
      this.index=this.index+25
      this.listMovie.push(...tempArray)      
    }
  }

  searchFunction(value:any)
  {
    this.listMovie=this.fullListMovie.filter((e:any) => 
    {
      return e.title.toLowerCase().includes(value.toLowerCase())
    })
  }

  back(){this.searchFunction('')}

}//END class ListMovieComponent