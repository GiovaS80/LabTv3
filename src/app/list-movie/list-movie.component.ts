import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css'],
  template: 'The href is: {{href}}'
})
export class ListMovieComponent {
  public href: string = "";
  constructor(private router:Router){}
  ngOnInit():void{ 
    this.listMovie=this.fullListMovie.slice(0,24)
    this.index=25
    this.href = this.router.url;
    // console.log(this.fullListMovie);
    // console.log(this.router.url);
    // console.log(this.router.url=='/LabTvIndex.html/ricerca');
    // console.log(this.searchMovie);
    if(this.searchMovie!=''){
     
      // this.isSearchBarVisible=true
      this.search='Master Gardener'
      this.searchFunction(this.search)
    }
  }
  
  @Input() fullListMovie:any=[]
  @Input() searchMovie:string=''

  @Output() movieDetail = new EventEmitter<string>()

  listMovie:Array<any>=[]

  index:number=0

  search:string=''

  isSearchBarVisible:boolean=this.router.url=='/LabTvIndex.html/ricerca'

  movieDetailToRequest(movie:any){
  //  console.log(movie);
    this.movieDetail.emit(movie.id)
  }

  onScroll(){
    if(this.index<=100 && !this.isSearchBarVisible){
      const tempArray=this.fullListMovie.slice(this.index,(this.index+24))
      this.index=this.index+25
      this.listMovie.push(...tempArray)      
    }
  }

  searchFunction(value:any){
    // console.log(value);
    
    this.listMovie=this.fullListMovie.filter((e:any) => {
      // console.log(e.title);
      // console.log(e.title.toLowerCase().includes(value.toLowerCase()));
      return e.title.toLowerCase().includes(value.toLowerCase())
    }) 
    // console.log(this.listMovie);
    // console.log(this.search);
    
    // console.log(value);
    
  }

  

}//END class ListMovieComponent
