import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiService 
{
    constructor(private http: HttpClient) { }
    apiKeyImdb: string = 'k_5b2jac4w'
    wsImdbList: string = ''
    // 'https://imdb-api.com/en/API/MostPopularMovies/'+this.apiKeyImdb
    //id image title plot stars directors genres similars[{title}]
    cont:number=0
    getList(): Observable<any> 
    {
        console.log('cont = ' + this.cont);
        this.cont=this.cont+1
        return this.http.get(this.wsImdbList)
    }

    getDetail(id: string): Observable<any> 
    {
        console.log(id);
        const wsImdbDetail = ''
        // `https://imdb-api.com/it/API/Title/${this.apiKeyImdb}/${id}`
        return this.http.get(wsImdbDetail)
    }

    getVideo(id: string): Observable<any> 
    {
        const wsImdbVideo = ''
        // `https://imdb-api.com/en/API/YouTubeTrailer/${this.apiKeyImdb}/${id}`
        return this.http.get(wsImdbVideo)
    }

    fullListMovie: Array<any> =[]
    fullListMovies: Array<any> = [
        {
            "id": "tt10366206",
            "rank": "1",
            "rankUpDown": "0",
            "title": "John Wick: Chapter 4",
            "fullTitle": "John Wick: Chapter 4 (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Chad Stahelski (dir.), Keanu Reeves, Laurence Fishburne",
            "imDbRating": "8.3",
            "imDbRatingCount": "102166"
        },
        {
            "id": "tt2906216",
            "rank": "2",
            "rankUpDown": "+6",
            "title": "Dungeons & Dragons: Honor Among Thieves",
            "fullTitle": "Dungeons & Dragons: Honor Among Thieves (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZjAyMGMwYTEtNDk4ZS00YmY0LThhZjUtOWI4ZjFmZmU4N2I3XkEyXkFqcGdeQXVyMTEyNzQ1MTk0._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "John Francis Daley (dir.), Chris Pine, Michelle Rodriguez",
            "imDbRating": "7.6",
            "imDbRatingCount": "32685"
        },
        {
            "id": "tt14230388",
            "rank": "3",
            "rankUpDown": "+506",
            "title": "Asteroid City",
            "fullTitle": "Asteroid City (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZDAxZmNmOWQtZTM2YS00MzQxLWE1Y2YtOGFlOTFmYzNmZDMzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Wes Anderson (dir.), Jason Schwartzman, Scarlett Johansson",
            "imDbRating": "",
            "imDbRatingCount": "0"
        },
        {
            "id": "tt1630029",
            "rank": "4",
            "rankUpDown": "+24",
            "title": "Avatar: The Way of Water",
            "fullTitle": "Avatar: The Way of Water (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_UX128_CR0,1,128,176_AL_.jpg",
            "crew": "James Cameron (dir.), Sam Worthington, Zoe Saldana",
            "imDbRating": "7.7",
            "imDbRatingCount": "347008"
        },
        {
            "id": "tt6710474",
            "rank": "5",
            "rankUpDown": "-3",
            "title": "Everything Everywhere All at Once",
            "fullTitle": "Everything Everywhere All at Once (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Daniel Kwan (dir.), Michelle Yeoh, Stephanie Hsu",
            "imDbRating": "7.9",
            "imDbRatingCount": "421092"
        },
        {
            "id": "tt2911666",
            "rank": "6",
            "rankUpDown": "+4",
            "title": "John Wick",
            "fullTitle": "John Wick (2014)",
            "year": "2014",
            "image": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Chad Stahelski (dir.), Keanu Reeves, Michael Nyqvist",
            "imDbRating": "7.4",
            "imDbRatingCount": "673355"
        },
        {
            "id": "tt6079516",
            "rank": "7",
            "rankUpDown": "+39",
            "title": "I See You",
            "fullTitle": "I See You (2019)",
            "year": "2019",
            "image": "https://m.media-amazon.com/images/M/MV5BNzVkOWM5YTEtMDdkNi00YjMzLWEzNWEtODEwN2IyZTc4Yjg2XkEyXkFqcGdeQXVyMjc5MTg0MzQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Adam Randall (dir.), Helen Hunt, Jon Tenney",
            "imDbRating": "6.8",
            "imDbRatingCount": "56144"
        },
        {
            "id": "tt10151854",
            "rank": "8",
            "rankUpDown": "-5",
            "title": "Shazam! Fury of the Gods",
            "fullTitle": "Shazam! Fury of the Gods (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNzJlM2NmZTItOGQyYS00MmE2LTkwZGUtNDFkNmJmZjRjZjcxXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "David F. Sandberg (dir.), Zachary Levi, Asher Angel",
            "imDbRating": "6.3",
            "imDbRatingCount": "37498"
        },
        {
            "id": "tt15255288",
            "rank": "9",
            "rankUpDown": "+183",
            "title": "Murder Mystery 2",
            "fullTitle": "Murder Mystery 2 (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMzkyMjU1ZjMtMDJlMS00M2YzLWJhZDQtYjFjZTUyMzI2MDViXkEyXkFqcGdeQXVyMzQyMDgzOTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Jeremy Garelick (dir.), Adam Sandler, Jennifer Aniston",
            "imDbRating": "5.6",
            "imDbRatingCount": "28105"
        },
        {
            "id": "tt17663992",
            "rank": "10",
            "rankUpDown": "-6",
            "title": "Scream VI",
            "fullTitle": "Scream VI (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BODBjM2M4YTQtNmJlMS00MGU2LWI4ZGYtZTA1MzdmZDAyMjFkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Matt Bettinelli-Olpin (dir.), Courteney Cox, Melissa Barrera",
            "imDbRating": "7.1",
            "imDbRatingCount": "40118"
        },
        {
            "id": "tt13833688",
            "rank": "11",
            "rankUpDown": "-6",
            "title": "The Whale",
            "fullTitle": "The Whale (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BZDQ4Njg4YTctNGZkYi00NWU1LWI4OTYtNmNjOWMyMjI1NWYzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_UX128_CR0,1,128,176_AL_.jpg",
            "crew": "Darren Aronofsky (dir.), Brendan Fraser, Sadie Sink",
            "imDbRating": "7.7",
            "imDbRatingCount": "123009"
        },
        {
            "id": "tt6146586",
            "rank": "12",
            "rankUpDown": "+7",
            "title": "John Wick: Chapter 3 - Parabellum",
            "fullTitle": "John Wick: Chapter 3 - Parabellum (2019)",
            "year": "2019",
            "image": "https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Chad Stahelski (dir.), Keanu Reeves, Halle Berry",
            "imDbRating": "7.4",
            "imDbRatingCount": "374913"
        },
        {
            "id": "tt14209916",
            "rank": "13",
            "rankUpDown": "-6",
            "title": "Cocaine Bear",
            "fullTitle": "Cocaine Bear (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BODAwZDQ5ZjEtZDI1My00MTFiLTg0ZjUtOGE2YTBkOTdjODFhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Elizabeth Banks (dir.), Keri Russell, Alden Ehrenreich",
            "imDbRating": "6.0",
            "imDbRatingCount": "49217"
        },
        {
            "id": "tt6718170",
            "rank": "14",
            "rankUpDown": "+20",
            "title": "The Super Mario Bros. Movie",
            "fullTitle": "The Super Mario Bros. Movie (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Aaron Horvath (dir.), Chris Pratt, Anya Taylor-Joy",
            "imDbRating": "7.4",
            "imDbRatingCount": "28640"
        },
        {
            "id": "tt16419074",
            "rank": "15",
            "rankUpDown": "+3",
            "title": "Air",
            "fullTitle": "Air (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYmNlOTNlYjUtM2U3Yy00M2ZjLTkxZDQtN2NiNGZiZDI0ZjE3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Ben Affleck (dir.), Matt Damon, Jason Bateman",
            "imDbRating": "7.8",
            "imDbRatingCount": "8220"
        },
        {
            "id": "tt12758060",
            "rank": "16",
            "rankUpDown": "+132",
            "title": "Tetris",
            "fullTitle": "Tetris (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZmZmNTdiYjMtZDdmNi00ZGU4LThkYmQtZTFhZWNlYmUxYWZkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Jon S. Baird (dir.), Taron Egerton, Mara Huf",
            "imDbRating": "7.4",
            "imDbRatingCount": "20646"
        },
        {
            "id": "tt11145118",
            "rank": "17",
            "rankUpDown": "-4",
            "title": "Creed III",
            "fullTitle": "Creed III (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYWY1ZDY4MmQtYjhiYS00N2QwLTk1NzgtOWI2YzUwZThjNDYwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Michael B. Jordan (dir.), Michael B. Jordan, Tessa Thompson",
            "imDbRating": "7.0",
            "imDbRatingCount": "42007"
        },
        {
            "id": "tt4425200",
            "rank": "18",
            "rankUpDown": "+13",
            "title": "John Wick: Chapter 2",
            "fullTitle": "John Wick: Chapter 2 (2017)",
            "year": "2017",
            "image": "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Chad Stahelski (dir.), Keanu Reeves, Riccardo Scamarcio",
            "imDbRating": "7.4",
            "imDbRatingCount": "462754"
        },
        {
            "id": "tt2560078",
            "rank": "19",
            "rankUpDown": "-13",
            "title": "Boston Strangler",
            "fullTitle": "Boston Strangler (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BN2FmYmM1ODctNjkzNC00MzcyLTkyOWYtZmZjNjY2ZmU3MmI3XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Matt Ruskin (dir.), Keira Knightley, Carrie Coon",
            "imDbRating": "6.5",
            "imDbRatingCount": "16862"
        },
        {
            "id": "tt3155298",
            "rank": "20",
            "rankUpDown": "-11",
            "title": "Luther: The Fallen Sun",
            "fullTitle": "Luther: The Fallen Sun (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZTQwMWFhYWMtZmE0OS00MmMxLWE3NzAtYjU1NzIyZjdmODNhXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Jamie Payne (dir.), Idris Elba, Cynthia Erivo",
            "imDbRating": "6.4",
            "imDbRatingCount": "42649"
        },
        {
            "id": "tt7322224",
            "rank": "21",
            "rankUpDown": "-5",
            "title": "Triangle of Sadness",
            "fullTitle": "Triangle of Sadness (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BNDRiZjc0ZDMtMjhlYi00ZjAzLTg0MDQtZDI2NGEyYTBlN2M2XkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Ruben Östlund (dir.), Thobias Thorwid, Harris Dickinson",
            "imDbRating": "7.4",
            "imDbRatingCount": "121187"
        },
        {
            "id": "tt1745960",
            "rank": "22",
            "rankUpDown": "+17",
            "title": "Top Gun: Maverick",
            "fullTitle": "Top Gun: Maverick (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Joseph Kosinski (dir.), Tom Cruise, Jennifer Connelly",
            "imDbRating": "8.3",
            "imDbRatingCount": "565317"
        },
        {
            "id": "tt22297828",
            "rank": "23",
            "rankUpDown": "+55",
            "title": "Chor Nikal Ke Bhaga",
            "fullTitle": "Chor Nikal Ke Bhaga (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNDMwZjQ2YzUtZDQyMC00MjcwLTlmN2MtZGY4OGEyMzMzNTk4XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_UY176_CR6,0,128,176_AL_.jpg",
            "crew": "Ajay Singh (dir.), Yami Gautam, Sunny Kaushal",
            "imDbRating": "7.8",
            "imDbRatingCount": "33316"
        },
        {
            "id": "tt13345606",
            "rank": "24",
            "rankUpDown": "-2",
            "title": "Evil Dead Rise",
            "fullTitle": "Evil Dead Rise (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Lee Cronin (dir.), Alyssa Sutherland, Lily Sullivan",
            "imDbRating": "8.0",
            "imDbRatingCount": "1112"
        },
        {
            "id": "tt15339570",
            "rank": "25",
            "rankUpDown": "+29",
            "title": "Champions",
            "fullTitle": "Champions (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BOTYwMWJjZTgtMzJiNS00OGIzLWE1NDYtNjgwMDUwYjZiOTc5XkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Bobby Farrelly (dir.), Woody Harrelson, Kaitlin Olson",
            "imDbRating": "6.7",
            "imDbRatingCount": "6268"
        },
        {
            "id": "tt15679400",
            "rank": "26",
            "rankUpDown": "+16",
            "title": "Knock at the Cabin",
            "fullTitle": "Knock at the Cabin (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZDA0MzcxZTgtMTAzZC00MGJkLTg3YzItZjMzNjkwOTVlODNlXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "M. Night Shyamalan (dir.), Dave Bautista, Jonathan Groff",
            "imDbRating": "6.1",
            "imDbRatingCount": "62415"
        },
        {
            "id": "tt1618434",
            "rank": "27",
            "rankUpDown": "+131",
            "title": "Murder Mystery",
            "fullTitle": "Murder Mystery (2019)",
            "year": "2019",
            "image": "https://m.media-amazon.com/images/M/MV5BNTA2YTI5YjUtZWI4Zi00NWQ5LWFiYmEtOTBmNTUyNDAwNjllXkEyXkFqcGdeQXVyNjIzNzM4NzA@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Kyle Newacheck (dir.), Adam Sandler, Jennifer Aniston",
            "imDbRating": "6.0",
            "imDbRatingCount": "145358"
        },
        {
            "id": "tt11813216",
            "rank": "28",
            "rankUpDown": "-16",
            "title": "The Banshees of Inisherin",
            "fullTitle": "The Banshees of Inisherin (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BM2NlZDI0ZDktNTg5OS00ZjQ1LWI4MDEtN2I0MDE5NWRiNzA4XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Martin McDonagh (dir.), Colin Farrell, Brendan Gleeson",
            "imDbRating": "7.7",
            "imDbRatingCount": "192104"
        },
        {
            "id": "tt10640346",
            "rank": "29",
            "rankUpDown": "-12",
            "title": "Babylon",
            "fullTitle": "Babylon (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BNjlkYjc4NGMtZjc3MS00NjQ3LTk4MmUtMTkwZGZjODE1ZDVlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Damien Chazelle (dir.), Brad Pitt, Margot Robbie",
            "imDbRating": "7.2",
            "imDbRatingCount": "104548"
        },
        {
            "id": "tt12261776",
            "rank": "30",
            "rankUpDown": "-19",
            "title": "65",
            "fullTitle": "65 (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYzFhM2M1MDUtNDhmNC00YzEzLThiMzctYWYxZTc0MGJhNWYyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UY176_CR6,0,128,176_AL_.jpg",
            "crew": "Scott Beck (dir.), Adam Driver, Ariana Greenblatt",
            "imDbRating": "5.5",
            "imDbRatingCount": "21972"
        },
        {
            "id": "tt11315808",
            "rank": "31",
            "rankUpDown": "+151",
            "title": "Joker: Folie à Deux",
            "fullTitle": "Joker: Folie à Deux (2024)",
            "year": "2024",
            "image": "https://m.media-amazon.com/images/M/MV5BODUyODM1OGEtNTY3ZC00OTFjLTkyNDgtODU4MTk5NzkzYmQ5XkEyXkFqcGdeQXVyNjczMjc4NTA@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Todd Phillips (dir.), Lady Gaga, Brendan Gleeson",
            "imDbRating": "",
            "imDbRatingCount": "0"
        },
        {
            "id": "tt19623240",
            "rank": "32",
            "rankUpDown": "-18",
            "title": "Winnie the Pooh: Blood and Honey",
            "fullTitle": "Winnie the Pooh: Blood and Honey (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZDUwNDY1M2QtYmI2Zi00NmFmLTkzNzMtOTg4ODgxYmY5N2I2XkEyXkFqcGdeQXVyOTQzOTE5NTY@._V1_UX128_CR0,1,128,176_AL_.jpg",
            "crew": "Rhys Frake-Waterfield (dir.), Nikolai Leon, Maria Taylor",
            "imDbRating": "3.1",
            "imDbRatingCount": "14050"
        },
        {
            "id": "tt9764362",
            "rank": "33",
            "rankUpDown": "-1",
            "title": "The Menu",
            "fullTitle": "The Menu (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BMzdjNjI5MmYtODhiNS00NTcyLWEzZmUtYzVmODM5YzExNDE3XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Mark Mylod (dir.), Ralph Fiennes, Anya Taylor-Joy",
            "imDbRating": "7.2",
            "imDbRatingCount": "288098"
        },
        {
            "id": "tt11358390",
            "rank": "34",
            "rankUpDown": "-19",
            "title": "Renfield",
            "fullTitle": "Renfield (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNDIwYjVjMDMtOGYxMy00ZTRiLWE0YzktMjIwYmNhOGE4NGQ4XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Chris McKay (dir.), Nicholas Hoult, Nicolas Cage",
            "imDbRating": "7.1",
            "imDbRatingCount": "344"
        },
        {
            "id": "tt7405458",
            "rank": "35",
            "rankUpDown": "-15",
            "title": "A Man Called Otto",
            "fullTitle": "A Man Called Otto (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BNzg3OTEzMTgtYWU0OC00YTI0LWIxOTAtNmRkNTc0Nzg2YWU1XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UY176_CR6,0,128,176_AL_.jpg",
            "crew": "Marc Forster (dir.), Tom Hanks, Mariana Treviño",
            "imDbRating": "7.4",
            "imDbRatingCount": "54638"
        },
        {
            "id": "tt3915174",
            "rank": "36",
            "rankUpDown": "-15",
            "title": "Puss in Boots: The Last Wish",
            "fullTitle": "Puss in Boots: The Last Wish (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BNjMyMDBjMGUtNDUzZi00N2MwLTg1MjItZTk2MDE1OTZmNTYxXkEyXkFqcGdeQXVyMTQ5NjA0NDM0._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Joel Crawford (dir.), Antonio Banderas, Salma Hayek",
            "imDbRating": "7.9",
            "imDbRatingCount": "114042"
        },
        {
            "id": "tt11291274",
            "rank": "37",
            "rankUpDown": "-8",
            "title": "The Unbearable Weight of Massive Talent",
            "fullTitle": "The Unbearable Weight of Massive Talent (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BNDM2ODNiMWItOWRkNS00ODE3LWE2OGYtNTZkMDJkOWI1ODMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Tom Gormican (dir.), Nicolas Cage, Pedro Pascal",
            "imDbRating": "7.0",
            "imDbRatingCount": "114892"
        },
        {
            "id": "tt10545296",
            "rank": "38",
            "rankUpDown": "+72",
            "title": "The Hunger Games: The Ballad of Songbirds and Snakes",
            "fullTitle": "The Hunger Games: The Ballad of Songbirds and Snakes (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNjZmYTk1MTktMDZlZS00ZGY0LTliMGEtOGU4NjQ4NTMzZDVhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Francis Lawrence (dir.), Rachel Zegler, Hunter Schafer",
            "imDbRating": "",
            "imDbRatingCount": "0"
        },
        {
            "id": "tt13560574",
            "rank": "39",
            "rankUpDown": "-6",
            "title": "X",
            "fullTitle": "X (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BMTJiMmE5YWItOWZjYS00YTg0LWE0MTYtMzg2ZTY4YjNkNDEzXkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_UY176_CR6,0,128,176_AL_.jpg",
            "crew": "Ti West (dir.), Mia Goth, Jenna Ortega",
            "imDbRating": "6.6",
            "imDbRatingCount": "123341"
        },
        {
            "id": "tt7985704",
            "rank": "40",
            "rankUpDown": "-13",
            "title": "Operation Fortune: Ruse de guerre",
            "fullTitle": "Operation Fortune: Ruse de guerre (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNjcxOTJhZTEtMWFiYi00NTkwLTlkMzktZDQwMGQ0ZjM3YWU2XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Guy Ritchie (dir.), Jason Statham, Aubrey Plaza",
            "imDbRating": "6.3",
            "imDbRatingCount": "35146"
        },
        {
            "id": "tt1016150",
            "rank": "41",
            "rankUpDown": "-18",
            "title": "All Quiet on the Western Front",
            "fullTitle": "All Quiet on the Western Front (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BMzM4ZDJhYjYtZGY5Ny00NTk0LWI4ZTYtNjczZDFiMGI2ZjEzXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Edward Berger (dir.), Felix Kammerer, Albrecht Schuch",
            "imDbRating": "7.8",
            "imDbRatingCount": "191760"
        },
        {
            "id": "tt12593682",
            "rank": "42",
            "rankUpDown": "-2",
            "title": "Bullet Train",
            "fullTitle": "Bullet Train (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "David Leitch (dir.), Brad Pitt, Joey King",
            "imDbRating": "7.3",
            "imDbRatingCount": "335338"
        },
        {
            "id": "tt14153080",
            "rank": "43",
            "rankUpDown": "+10",
            "title": "A Good Person",
            "fullTitle": "A Good Person (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYzBkZGYyM2QtNzgwYy00NmZjLTk2ZTItYzY3ZTdjY2M0YmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Zach Braff (dir.), Florence Pugh, Morgan Freeman",
            "imDbRating": "7.3",
            "imDbRatingCount": "1412"
        },
        {
            "id": "tt5537002",
            "rank": "44",
            "rankUpDown": "+26",
            "title": "Killers of the Flower Moon",
            "fullTitle": "Killers of the Flower Moon (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZmMyMDc4NWMtZmUzNC00ZjczLWE1ZmYtYWQ3ZTk4ODBmYzE2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY176_CR69,0,128,176_AL_.jpg",
            "crew": "Martin Scorsese (dir.), Leonardo DiCaprio, Robert De Niro",
            "imDbRating": "",
            "imDbRatingCount": "0"
        },
        {
            "id": "tt10954600",
            "rank": "45",
            "rankUpDown": "-8",
            "title": "Ant-Man and the Wasp: Quantumania",
            "fullTitle": "Ant-Man and the Wasp: Quantumania (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BODZhNzlmOGItMWUyYS00Y2Q5LWFlNzMtM2I2NDFkM2ZkYmE1XkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Peyton Reed (dir.), Paul Rudd, Evangeline Lilly",
            "imDbRating": "6.4",
            "imDbRatingCount": "96614"
        },
        {
            "id": "tt10954984",
            "rank": "46",
            "rankUpDown": "+4",
            "title": "Nope",
            "fullTitle": "Nope (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BMGIyNTI3NWItNTJkOS00MGYyLWE4NjgtZDhjMWQ4Y2JkZTU5XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Jordan Peele (dir.), Daniel Kaluuya, Keke Palmer",
            "imDbRating": "6.8",
            "imDbRatingCount": "214463"
        },
        {
            "id": "tt15789038",
            "rank": "47",
            "rankUpDown": "+1441",
            "title": "Elemental",
            "fullTitle": "Elemental (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNjRiMzM1N2UtMWE1ZC00MGMxLThkM2UtMGIyNWFiZWY3OGE4XkEyXkFqcGdeQXVyMTUzMzY2NDQy._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Peter Sohn (dir.), Leah Lewis, Mamoudou Athie",
            "imDbRating": "",
            "imDbRatingCount": "0"
        },
        {
            "id": "tt23219684",
            "rank": "48",
            "rankUpDown": "0",
            "title": "Mighty Morphin Power Rangers: Once & Always",
            "fullTitle": "Mighty Morphin Power Rangers: Once & Always (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMTlmNzdiOWUtZmZiYi00ODkyLTk5ZGMtMTcwNzk1MmNjNjZiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Charlie Haskell (dir.), Catherine Sutherland, David Yost",
            "imDbRating": "",
            "imDbRatingCount": "0"
        },
        {
            "id": "tt5971474",
            "rank": "49",
            "rankUpDown": "-25",
            "title": "The Little Mermaid",
            "fullTitle": "The Little Mermaid (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYTUxYjczMWUtYzlkZC00NTcwLWE3ODQtN2I2YTIxOTU0ZTljXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Rob Marshall (dir.), Halle Bailey, Jonah Hauer-King",
            "imDbRating": "",
            "imDbRatingCount": "0"
        },
        {
            "id": "tt15325794",
            "rank": "50",
            "rankUpDown": "-20",
            "title": "Fall",
            "fullTitle": "Fall (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BNGI3MWYwYjItNzZhYi00ZWIzLTkyMzYtN2JmNjg3ODg1NTg4XkEyXkFqcGdeQXVyMTMwMDA5ODU3._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Scott Mann (dir.), Grace Caroline Currey, Virginia Gardner",
            "imDbRating": "6.4",
            "imDbRatingCount": "73768"
        },
        {
            "id": "tt6528290",
            "rank": "51",
            "rankUpDown": "+558",
            "title": "Knights of the Zodiac",
            "fullTitle": "Knights of the Zodiac (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZjRkNGM1Y2ItMDExMy00OGU3LWJjZjQtN2MwN2U2MmE2ZGJjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY176_CR6,0,128,176_AL_.jpg",
            "crew": "Tomasz Baginski (dir.), Madison Iseman, Mark Dacascos",
            "imDbRating": "",
            "imDbRatingCount": "0"
        },
        {
            "id": "tt0078111",
            "rank": "52",
            "rankUpDown": "+297",
            "title": "Pretty Baby",
            "fullTitle": "Pretty Baby (1978)",
            "year": "1978",
            "image": "https://m.media-amazon.com/images/M/MV5BNGZmNzBlZmItMDZjNC00YmIxLWI3OGYtZjViNjE3MzkwZjBlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Louis Malle (dir.), Brooke Shields, Keith Carradine",
            "imDbRating": "6.5",
            "imDbRatingCount": "11659"
        },
        {
            "id": "tt10365998",
            "rank": "53",
            "rankUpDown": "-9",
            "title": "Infinity Pool",
            "fullTitle": "Infinity Pool (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZDQxZTY0ZDItY2Y0Yy00OTIzLTkwYTgtNmNkODhiYTk4MzUwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Brandon Cronenberg (dir.), Alexander Skarsgård, Mia Goth",
            "imDbRating": "6.1",
            "imDbRatingCount": "24372"
        },
        {
            "id": "tt13375076",
            "rank": "54",
            "rankUpDown": "+36",
            "title": "The Pope's Exorcist",
            "fullTitle": "The Pope's Exorcist (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BYjA0MGU4MzYtYTYxMy00MjRhLTlmMDYtZTVhZDc1Y2QwNWY2XkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Julius Avery (dir.), Russell Crowe, Daniel Zovatto",
            "imDbRating": "6.2",
            "imDbRatingCount": "1933"
        },
        {
            "id": "tt0092099",
            "rank": "55",
            "rankUpDown": "+31",
            "title": "Top Gun",
            "fullTitle": "Top Gun (1986)",
            "year": "1986",
            "image": "https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Tony Scott (dir.), Tom Cruise, Tim Robbins",
            "imDbRating": "6.9",
            "imDbRatingCount": "469691"
        },
        {
            "id": "tt8760708",
            "rank": "56",
            "rankUpDown": "-8",
            "title": "M3GAN",
            "fullTitle": "M3GAN (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BMDk4MTdhYzEtODk3OS00ZDBjLWFhNTQtMDI2ODdjNzQzZTA3XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Gerard Johnstone (dir.), Allison Williams, Violet McGraw",
            "imDbRating": "6.4",
            "imDbRatingCount": "91440"
        },
        {
            "id": "tt12965390",
            "rank": "57",
            "rankUpDown": "+134",
            "title": "Perfect Addiction",
            "fullTitle": "Perfect Addiction (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMDU0NzkyMzctMjk5Ny00NzIwLWI2ZmEtZTI2ZThhZmUxMGQ2XkEyXkFqcGdeQXVyMTM0ODU0MTM1._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Castille Landon (dir.), Manu Bennett, Ryan Bown",
            "imDbRating": "5.3",
            "imDbRatingCount": "981"
        },
        {
            "id": "tt11245972",
            "rank": "58",
            "rankUpDown": "-20",
            "title": "Scream",
            "fullTitle": "Scream (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BYjExYTcwYmYtMWY2Zi00MGJlLTk3YjUtZTU1Zjg4MDc0Y2FjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Matt Bettinelli-Olpin (dir.), Neve Campbell, Courteney Cox",
            "imDbRating": "6.3",
            "imDbRatingCount": "130537"
        },
        {
            "id": "tt0068646",
            "rank": "59",
            "rankUpDown": "-10",
            "title": "The Godfather",
            "fullTitle": "The Godfather (1972)",
            "year": "1972",
            "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
            "crew": "Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
            "imDbRating": "9.2",
            "imDbRatingCount": "1894429"
        },
        {
            "id": "tt15398776",
            "rank": "60",
            "rankUpDown": "+21",
            "title": "Oppenheimer",
            "fullTitle": "Oppenheimer (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZWI2YWU2ODItYzBmNi00Yjc2LWJlMDQtMGJlMmUxM2M3NzMxXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Christopher Nolan (dir.), Cillian Murphy, Emily Blunt",
            "imDbRating": "",
            "imDbRatingCount": "0"
        },
        {
            "id": "tt8277246",
            "rank": "61",
            "rankUpDown": "+1428",
            "title": "His Only Son",
            "fullTitle": "His Only Son (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZTU5MTY4OGMtYTRiMS00ZTA1LThmMGQtOWQ4YzE4NThlYjljXkEyXkFqcGdeQXVyNzYzMjAyMzU@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "David Helling (dir.), Nicolas Mouawad, Sara Seyed",
            "imDbRating": "6.5",
            "imDbRatingCount": "788"
        },
        {
            "id": "tt0448115",
            "rank": "62",
            "rankUpDown": "-37",
            "title": "Shazam!",
            "fullTitle": "Shazam! (2019)",
            "year": "2019",
            "image": "https://m.media-amazon.com/images/M/MV5BOWZhZjE4NGQtODg5Ni00MjQ1LWJmMzAtNzQ2N2M1NzYzMDJkXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "David F. Sandberg (dir.), Zachary Levi, Mark Strong",
            "imDbRating": "7.0",
            "imDbRatingCount": "356723"
        },
        {
            "id": "tt11564570",
            "rank": "63",
            "rankUpDown": "-5",
            "title": "Glass Onion",
            "fullTitle": "Glass Onion (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Rian Johnson (dir.), Daniel Craig, Edward Norton",
            "imDbRating": "7.2",
            "imDbRatingCount": "376581"
        },
        {
            "id": "tt1392170",
            "rank": "64",
            "rankUpDown": "-4",
            "title": "The Hunger Games",
            "fullTitle": "The Hunger Games (2012)",
            "year": "2012",
            "image": "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Gary Ross (dir.), Jennifer Lawrence, Josh Hutcherson",
            "imDbRating": "7.2",
            "imDbRatingCount": "939359"
        },
        {
            "id": "tt0111161",
            "rank": "65",
            "rankUpDown": "-1",
            "title": "The Shawshank Redemption",
            "fullTitle": "The Shawshank Redemption (1994)",
            "year": "1994",
            "image": "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
            "imDbRating": "9.3",
            "imDbRatingCount": "2725174"
        },
        {
            "id": "tt14208870",
            "rank": "66",
            "rankUpDown": "-21",
            "title": "The Fabelmans",
            "fullTitle": "The Fabelmans (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BZGM1MzczNmQtMjBmYS00NTRhLWI0MzctNTFkZDc4OGUyODdjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Steven Spielberg (dir.), Michelle Williams, Gabriel LaBelle",
            "imDbRating": "7.6",
            "imDbRatingCount": "82173"
        },
        {
            "id": "tt3704428",
            "rank": "67",
            "rankUpDown": "-20",
            "title": "Elvis",
            "fullTitle": "Elvis (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BYzMzNTJjYmMtZTkxNS00MjI4LWI3YmQtOTQ4MDZjZDJlZjQyXkEyXkFqcGdeQXVyNjc0NzQzNTM@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Baz Luhrmann (dir.), Tom Hanks, Austin Butler",
            "imDbRating": "7.3",
            "imDbRatingCount": "203239"
        },
        {
            "id": "tt1877830",
            "rank": "68",
            "rankUpDown": "-6",
            "title": "The Batman",
            "fullTitle": "The Batman (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Matt Reeves (dir.), Robert Pattinson, Zoë Kravitz",
            "imDbRating": "7.8",
            "imDbRatingCount": "689672"
        },
        {
            "id": "tt14444726",
            "rank": "69",
            "rankUpDown": "-26",
            "title": "Tár",
            "fullTitle": "Tár (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BM2I0ZDcyYzItMGEyNi00YWVhLTlmNTQtOWVlYjE1ZGVhNWM0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Todd Field (dir.), Cate Blanchett, Noémie Merlant",
            "imDbRating": "7.5",
            "imDbRatingCount": "66267"
        },
        {
            "id": "tt1650062",
            "rank": "70",
            "rankUpDown": "+251",
            "title": "Super 8",
            "fullTitle": "Super 8 (2011)",
            "year": "2011",
            "image": "https://m.media-amazon.com/images/M/MV5BMjIzNjEyMzcwOF5BMl5BanBnXkFtZTcwMTkyMjE0NQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "J.J. Abrams (dir.), Elle Fanning, AJ Michalka",
            "imDbRating": "7.0",
            "imDbRatingCount": "358676"
        },
        {
            "id": "tt14362112",
            "rank": "71",
            "rankUpDown": "+4302",
            "title": "Trolls Band Together",
            "fullTitle": "Trolls Band Together (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMTY4MDk2YWUtNWY1My00YjAxLWI4ZGQtMmRhN2FiNDI4NDRjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Walt Dohrn (dir.), Anna Kendrick, Zooey Deschanel",
            "imDbRating": "",
            "imDbRatingCount": "0"
        },
        {
            "id": "tt9114286",
            "rank": "72",
            "rankUpDown": "-13",
            "title": "Black Panther: Wakanda Forever",
            "fullTitle": "Black Panther: Wakanda Forever (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Ryan Coogler (dir.), Letitia Wright, Lupita Nyong'o",
            "imDbRating": "6.7",
            "imDbRatingCount": "253271"
        },
        {
            "id": "tt0816692",
            "rank": "73",
            "rankUpDown": "-8",
            "title": "Interstellar",
            "fullTitle": "Interstellar (2014)",
            "year": "2014",
            "image": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Christopher Nolan (dir.), Matthew McConaughey, Anne Hathaway",
            "imDbRating": "8.6",
            "imDbRatingCount": "1887091"
        },
        {
            "id": "tt2071590",
            "rank": "74",
            "rankUpDown": "+382",
            "title": "Spinning Gold",
            "fullTitle": "Spinning Gold (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMjA3ZWRmZTgtZWJhNi00NjgxLWIzZWQtODdjZDMxODVkODAyXkEyXkFqcGdeQXVyMjI0NjI0Nw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Timothy Scott Bogart (dir.), Michelle Monaghan, Peyton List",
            "imDbRating": "6.2",
            "imDbRatingCount": "256"
        },
        {
            "id": "tt10855768",
            "rank": "75",
            "rankUpDown": "-23",
            "title": "Missing",
            "fullTitle": "Missing (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNWExMzg3NjAtZmZmYy00MWE3LWJkNjEtOTYzYTZjYTZkMjZiXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Nicholas D. Johnson (dir.), Tim Griffin, Ava Zaria Lee",
            "imDbRating": "7.1",
            "imDbRatingCount": "22967"
        },
        {
            "id": "tt5884796",
            "rank": "76",
            "rankUpDown": "+19",
            "title": "Plane",
            "fullTitle": "Plane (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BZDc4MzVkNzYtZTRiZC00ODYwLWJjZmMtMDIyNjQ1M2M1OGM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Jean-François Richet (dir.), Gerard Butler, Mike Colter",
            "imDbRating": "6.5",
            "imDbRatingCount": "45017"
        },
        {
            "id": "tt7131622",
            "rank": "77",
            "rankUpDown": "-5",
            "title": "Once Upon a Time in Hollywood",
            "fullTitle": "Once Upon a Time in Hollywood (2019)",
            "year": "2019",
            "image": "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Quentin Tarantino (dir.), Leonardo DiCaprio, Brad Pitt",
            "imDbRating": "7.6",
            "imDbRatingCount": "768812"
        },
        {
            "id": "tt19770238",
            "rank": "78",
            "rankUpDown": "-23",
            "title": "Aftersun",
            "fullTitle": "Aftersun (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BMTM3OTU0ZGUtNzYwYy00ODU3LWI3YjgtOWZlODliMmRiMWEzXkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Charlotte Wells (dir.), Paul Mescal, Frankie Corio",
            "imDbRating": "7.7",
            "imDbRatingCount": "56148"
        },
        {
            "id": "tt8178634",
            "rank": "79",
            "rankUpDown": "-28",
            "title": "RRR",
            "fullTitle": "RRR (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY176_CR0,0,128,176_AL_.jpg",
            "crew": "S.S. Rajamouli (dir.), N.T. Rama Rao Jr., Ram Charan",
            "imDbRating": "7.9",
            "imDbRatingCount": "146049"
        },
        {
            "id": "tt0110912",
            "rank": "80",
            "rankUpDown": "-11",
            "title": "Pulp Fiction",
            "fullTitle": "Pulp Fiction (1994)",
            "year": "1994",
            "image": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Quentin Tarantino (dir.), John Travolta, Uma Thurman",
            "imDbRating": "8.9",
            "imDbRatingCount": "2093420"
        },
        {
            "id": "tt0117571",
            "rank": "81",
            "rankUpDown": "-25",
            "title": "Scream",
            "fullTitle": "Scream (1996)",
            "year": "1996",
            "image": "https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Wes Craven (dir.), Neve Campbell, Courteney Cox",
            "imDbRating": "7.4",
            "imDbRatingCount": "358950"
        },
        {
            "id": "tt8772262",
            "rank": "82",
            "rankUpDown": "+27",
            "title": "Midsommar",
            "fullTitle": "Midsommar (2019)",
            "year": "2019",
            "image": "https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Ari Aster (dir.), Florence Pugh, Jack Reynor",
            "imDbRating": "7.1",
            "imDbRatingCount": "343147"
        },
        {
            "id": "tt26739529",
            "rank": "83",
            "rankUpDown": "-47",
            "title": "Money Shot: The Pornhub Story",
            "fullTitle": "Money Shot: The Pornhub Story (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BNTY0ODc5YTUtMzhhYS00NjY2LWFhMGUtZGFhYmQzZmViZTMwXkEyXkFqcGdeQXVyNDA3NjE5MDY@._V1_UY176_CR6,0,128,176_AL_.jpg",
            "crew": "Suzanne Hillinger (dir.), Noelle Perdue, Michael Stabile",
            "imDbRating": "5.4",
            "imDbRatingCount": "3102"
        },
        {
            "id": "tt1454029",
            "rank": "84",
            "rankUpDown": "-4",
            "title": "The Help",
            "fullTitle": "The Help (2011)",
            "year": "2011",
            "image": "https://m.media-amazon.com/images/M/MV5BMTM5OTMyMjIxOV5BMl5BanBnXkFtZTcwNzU4MjIwNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Tate Taylor (dir.), Viola Davis, Emma Stone",
            "imDbRating": "8.1",
            "imDbRatingCount": "469153"
        },
        {
            "id": "tt7181546",
            "rank": "85",
            "rankUpDown": "+85",
            "title": "Ballerina",
            "fullTitle": "Ballerina (2024)",
            "year": "2024",
            "image": "https://m.media-amazon.com/images/M/MV5BOGVmN2IyNTItMTI0MS00N2U0LWE0OTMtNzllMTBkYzAzMWU1XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UY176_CR69,0,128,176_AL_.jpg",
            "crew": "Len Wiseman (dir.), Keanu Reeves, Lance Reddick",
            "imDbRating": "",
            "imDbRatingCount": "0"
        },
        {
            "id": "tt0499549",
            "rank": "86",
            "rankUpDown": "+76",
            "title": "Avatar",
            "fullTitle": "Avatar (2009)",
            "year": "2009",
            "image": "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "James Cameron (dir.), Sam Worthington, Zoe Saldana",
            "imDbRating": "7.9",
            "imDbRatingCount": "1334331"
        },
        {
            "id": "tt6491178",
            "rank": "87",
            "rankUpDown": "-52",
            "title": "Dragged Across Concrete",
            "fullTitle": "Dragged Across Concrete (2018)",
            "year": "2018",
            "image": "https://m.media-amazon.com/images/M/MV5BMjE1MTk5NDQ5Ml5BMl5BanBnXkFtZTgwODUxNzg0NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "S. Craig Zahler (dir.), Mel Gibson, Vince Vaughn",
            "imDbRating": "6.9",
            "imDbRatingCount": "50278"
        },
        {
            "id": "tt15342244",
            "rank": "88",
            "rankUpDown": "+6516",
            "title": "Master Gardener",
            "fullTitle": "Master Gardener (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BMWVlMTFkNmYtZmQ0Yy00MzBiLTg0Y2YtYmExOTk1MDAyZmRjXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Paul Schrader (dir.), Joel Edgerton, Sigourney Weaver",
            "imDbRating": "6.3",
            "imDbRatingCount": "339"
        },
        {
            "id": "tt0446029",
            "rank": "89",
            "rankUpDown": "+436",
            "title": "Scott Pilgrim vs. the World",
            "fullTitle": "Scott Pilgrim vs. the World (2010)",
            "year": "2010",
            "image": "https://m.media-amazon.com/images/M/MV5BNWI5ODc4MTAtN2U2NC00ZDk3LWE3NjAtNjIyODE2YTlhYjYwXkEyXkFqcGdeQXVyOTA3ODI3NDA@._V1_UX128_CR0,1,128,176_AL_.jpg",
            "crew": "Edgar Wright (dir.), Michael Cera, Mary Elizabeth Winstead",
            "imDbRating": "7.5",
            "imDbRatingCount": "437815"
        },
        {
            "id": "tt15474916",
            "rank": "90",
            "rankUpDown": "-16",
            "title": "Smile",
            "fullTitle": "Smile (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BZjE2ZWIwMWEtNGFlMy00ZjYzLWEzOWEtYzQ0MDAwZDRhYzNjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Parker Finn (dir.), Sosie Bacon, Jessie T. Usher",
            "imDbRating": "6.5",
            "imDbRatingCount": "118188"
        },
        {
            "id": "tt0061512",
            "rank": "91",
            "rankUpDown": "+1827",
            "title": "Cool Hand Luke",
            "fullTitle": "Cool Hand Luke (1967)",
            "year": "1967",
            "image": "https://m.media-amazon.com/images/M/MV5BNjcwNTQ3Y2EtMjdmZi00ODBhLWFhNzQtOTc3MWU5NTZlMDViXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Stuart Rosenberg (dir.), Paul Newman, George Kennedy",
            "imDbRating": "8.1",
            "imDbRatingCount": "180474"
        },
        {
            "id": "tt9411972",
            "rank": "92",
            "rankUpDown": "-16",
            "title": "Where the Crawdads Sing",
            "fullTitle": "Where the Crawdads Sing (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BMTJmNGJmYTgtYjAxNy00YmMzLTk2YTYtMGIzMmUwNDMyMTY1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY176_CR6,0,128,176_AL_.jpg",
            "crew": "Olivia Newman (dir.), Daisy Edgar-Jones, Taylor John Smith",
            "imDbRating": "7.2",
            "imDbRatingCount": "90543"
        },
        {
            "id": "tt1160419",
            "rank": "93",
            "rankUpDown": "+15",
            "title": "Dune",
            "fullTitle": "Dune (2021)",
            "year": "2021",
            "image": "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Denis Villeneuve (dir.), Timothée Chalamet, Rebecca Ferguson",
            "imDbRating": "8.0",
            "imDbRatingCount": "661652"
        },
        {
            "id": "tt0439572",
            "rank": "94",
            "rankUpDown": "-27",
            "title": "The Flash",
            "fullTitle": "The Flash (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMDFhZTc3NWQtY2UyZS00OGYzLTgxNTUtYjYxMjZjMmEyMjcwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Andy Muschietti (dir.), Ben Affleck, Michael Shannon",
            "imDbRating": "",
            "imDbRatingCount": "0"
        },
        {
            "id": "tt5635026",
            "rank": "95",
            "rankUpDown": "+351",
            "title": "Peter Pan & Wendy",
            "fullTitle": "Peter Pan & Wendy (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BMzQ4ZDZlYWQtNzFiMi00ZWRmLTkxYTMtOGJhYzczMGE3YjAxXkEyXkFqcGdeQXVyMTQzNTA5MzYz._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "David Lowery (dir.), Alexander Molony, Ever Anderson",
            "imDbRating": "",
            "imDbRatingCount": "0"
        },
        {
            "id": "tt0241527",
            "rank": "96",
            "rankUpDown": "-19",
            "title": "Harry Potter and the Sorcerer's Stone",
            "fullTitle": "Harry Potter and the Sorcerer's Stone (2001)",
            "year": "2001",
            "image": "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Chris Columbus (dir.), Daniel Radcliffe, Rupert Grint",
            "imDbRating": "7.6",
            "imDbRatingCount": "803079"
        },
        {
            "id": "tt7144666",
            "rank": "97",
            "rankUpDown": "+52",
            "title": "The Black Phone",
            "fullTitle": "The Black Phone (2021)",
            "year": "2021",
            "image": "https://m.media-amazon.com/images/M/MV5BMWQxOGJlNTUtYTc1YS00NDkyLWExZjItMTFiYWEzMjAzYTdjXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_UY176_CR6,0,128,176_AL_.jpg",
            "crew": "Scott Derrickson (dir.), Mason Thames, Madeleine McGraw",
            "imDbRating": "6.9",
            "imDbRatingCount": "161465"
        },
        {
            "id": "tt12844910",
            "rank": "98",
            "rankUpDown": "-11",
            "title": "Pathaan",
            "fullTitle": "Pathaan (2023)",
            "year": "2023",
            "image": "https://m.media-amazon.com/images/M/MV5BM2QzM2JiNTMtYjU4Ny00MDZkLTk3MmUtYTRjMzVkZGJlNmYyXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_UY176_CR0,0,128,176_AL_.jpg",
            "crew": "Siddharth Anand (dir.), Shah Rukh Khan, Deepika Padukone",
            "imDbRating": "6.0",
            "imDbRatingCount": "134212"
        },
        {
            "id": "tt0468569",
            "rank": "99",
            "rankUpDown": "+1",
            "title": "The Dark Knight",
            "fullTitle": "The Dark Knight (2008)",
            "year": "2008",
            "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Christopher Nolan (dir.), Christian Bale, Heath Ledger",
            "imDbRating": "9.0",
            "imDbRatingCount": "2698029"
        },
        {
            "id": "tt12844100",
            "rank": "100",
            "rankUpDown": "+183",
            "title": "John Wick: Chapter 5",
            "fullTitle": "John Wick: Chapter 5 ( 183)",
            "year": " 183",
            "image": "https://imdb-api.com/images/128x176/nopicture.jpg",
            "crew": "Keanu Reeves",
            "imDbRating": "",
            "imDbRatingCount": "0"
        }
    ]//end fullListMovie


    chosenMovie: any = {
        "id": "tt14230388",
        "title": "Asteroid City",
        "originalTitle": "",
        "fullTitle": "Asteroid City (2023)",
        "type": "Movie",
        "year": "2023",
        "image": "https://m.media-amazon.com/images/M/MV5BZDAxZmNmOWQtZTM2YS00MzQxLWE1Y2YtOGFlOTFmYzNmZDMzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio0.6762_AL_.jpg",
        "releaseDate": "2023-06-23",
        "runtimeMins": null,
        "runtimeStr": null,
        "plot": "The itinerary of a Junior Stargazer convention is spectacularly disrupted by world-changing events.",
        "plotLocal": "Set in a fictional American desert town circa 1955, the itinerary of a Junior Stargazer/Space Cadet convention (organized to bring together students and parents from across the country for fellowship and scholarly competition) is spectacularly disrupted by world-changing events.",
        "plotLocalIsRtl": false,
        "awards": "",
        "directors": "Wes Anderson",
        "directorList": [
            {
                "id": "nm0027572",
                "name": "Wes Anderson"
            }
        ],
        "writers": "Wes Anderson, Roman Coppola",
        "writerList": [
            {
                "id": "nm0027572",
                "name": "Wes Anderson"
            },
            {
                "id": "nm0178910",
                "name": "Roman Coppola"
            }
        ],
        "stars": "Jason Schwartzman, Scarlett Johansson, Tom Hanks",
        "starList": [
            {
                "id": "nm0005403",
                "name": "Jason Schwartzman"
            },
            {
                "id": "nm0424060",
                "name": "Scarlett Johansson"
            },
            {
                "id": "nm0000158",
                "name": "Tom Hanks"
            }
        ],
        "actorList": [
            {
                "id": "nm0005403",
                "image": "https://m.media-amazon.com/images/M/MV5BMjAyNjY0NTgzNF5BMl5BanBnXkFtZTcwOTQ0ODk2Mw@@._V1_Ratio1.0000_AL_.jpg",
                "name": "Jason Schwartzman",
                "asCharacter": ""
            },
            {
                "id": "nm0424060",
                "image": "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_Ratio1.0000_AL_.jpg",
                "name": "Scarlett Johansson",
                "asCharacter": "Midge Campbell"
            },
            {
                "id": "nm0000158",
                "image": "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_Ratio1.0000_AL_.jpg",
                "name": "Tom Hanks",
                "asCharacter": ""
            },
            {
                "id": "nm0942482",
                "image": "https://m.media-amazon.com/images/M/MV5BMjI1NDYyNzk4OV5BMl5BanBnXkFtZTgwNDAyMzI1MDI@._V1_Ratio1.5000_AL_.jpg",
                "name": "Jeffrey Wright",
                "asCharacter": ""
            },
            {
                "id": "nm0842770",
                "image": "https://m.media-amazon.com/images/M/MV5BMTM4NzMzMTkwNV5BMl5BanBnXkFtZTcwMzU4MDg1Mw@@._V1_Ratio1.0000_AL_.jpg",
                "name": "Tilda Swinton",
                "asCharacter": ""
            },
            {
                "id": "nm0186505",
                "image": "https://m.media-amazon.com/images/M/MV5BMTA2NjEyMTY4MTVeQTJeQWpwZ15BbWU3MDQ5NDAzNDc@._V1_Ratio1.0000_AL_.jpg",
                "name": "Bryan Cranston",
                "asCharacter": ""
            },
            {
                "id": "nm0001570",
                "image": "https://m.media-amazon.com/images/M/MV5BMTYwNjQ5MTI1NF5BMl5BanBnXkFtZTcwMzU5MTI2Mw@@._V1_Ratio1.0000_AL_.jpg",
                "name": "Edward Norton",
                "asCharacter": ""
            },
            {
                "id": "nm0004778",
                "image": "https://m.media-amazon.com/images/M/MV5BMjI3ODkxMjU3OF5BMl5BanBnXkFtZTgwMTk2Njk3MTE@._V1_Ratio1.0000_AL_.jpg",
                "name": "Adrien Brody",
                "asCharacter": ""
            },
            {
                "id": "nm0000630",
                "image": "https://m.media-amazon.com/images/M/MV5BMjM5NjI1NzA1Ml5BMl5BanBnXkFtZTgwNDc0ODM3ODE@._V1_Ratio1.0000_AL_.jpg",
                "name": "Liev Schreiber",
                "asCharacter": ""
            },
            {
                "id": "nm0204706",
                "image": "https://m.media-amazon.com/images/M/MV5BOTM4Mjk5MjAwNF5BMl5BanBnXkFtZTcwNzQ3MTk3Mw@@._V1_Ratio1.0000_AL_.jpg",
                "name": "Hope Davis",
                "asCharacter": ""
            },
            {
                "id": "nm0661950",
                "image": "https://m.media-amazon.com/images/M/MV5BMGM4MTI3MWYtYzFkYy00MTA2LWI4MGQtYjZmOWNjZTQ2M2Y3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio1.3714_AL_.jpg",
                "name": "Steve Park",
                "asCharacter": "Roger"
            },
            {
                "id": "nm1670029",
                "image": "https://m.media-amazon.com/images/M/MV5BMjA4NjAyMDM2N15BMl5BanBnXkFtZTgwMDQ3ODgxNDM@._V1_Ratio1.0000_AL_.jpg",
                "name": "Rupert Friend",
                "asCharacter": "Montana"
            },
            {
                "id": "nm1638321",
                "image": "https://m.media-amazon.com/images/M/MV5BOGYzNjE2MDYtMjhhNi00MGE4LTk1ZDUtM2ZmODZlMmQ2ZjE3XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_Ratio1.5000_AL_.jpg",
                "name": "Maya Hawke",
                "asCharacter": ""
            },
            {
                "id": "nm0136797",
                "image": "https://m.media-amazon.com/images/M/MV5BMjMyOTM2OTk1Ml5BMl5BanBnXkFtZTgwMTI3MzkyNjM@._V1_Ratio1.0000_AL_.jpg",
                "name": "Steve Carell",
                "asCharacter": ""
            },
            {
                "id": "nm0000369",
                "image": "https://m.media-amazon.com/images/M/MV5BMzk4NjI3NjQ0MF5BMl5BanBnXkFtZTgwMzE3NzI5NzE@._V1_Ratio1.0000_AL_.jpg",
                "name": "Matt Dillon",
                "asCharacter": "Hank"
            },
            {
                "id": "nm2186865",
                "image": "https://m.media-amazon.com/images/M/MV5BNjllNmMzNWYtM2JjMS00ODg4LTk2OWEtYWE3OTc1NzMzMGM2XkEyXkFqcGdeQXVyNTc0NTQ3MQ@@._V1_Ratio1.0000_AL_.jpg",
                "name": "Hong Chau",
                "asCharacter": ""
            },
            {
                "id": "nm0000353",
                "image": "https://m.media-amazon.com/images/M/MV5BOWU4MTI2OTctODQ1ZS00MGM1LWJkM2EtODE3MGNkNmIyZDEwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.0000_AL_.jpg",
                "name": "Willem Dafoe",
                "asCharacter": ""
            },
            {
                "id": "nm3053338",
                "image": "https://m.media-amazon.com/images/M/MV5BMTgxNDcwMzU2Nl5BMl5BanBnXkFtZTcwNDc4NzkzOQ@@._V1_Ratio1.0000_AL_.jpg",
                "name": "Margot Robbie",
                "asCharacter": ""
            }
        ],
        "fullCast": null,
        "genres": "Commedia, Romanza",
        "genreList": [
            {
                "key": "Comedy",
                "value": "Commedia"
            },
            {
                "key": "Romance",
                "value": "Romanza"
            }
        ],
        "companies": "Focus Features, Indian Paintbrush, American Empirical Pictures",
        "companyList": [
            {
                "id": "co0042399",
                "name": "Focus Features"
            },
            {
                "id": "co0215519",
                "name": "Indian Paintbrush"
            },
            {
                "id": "co0108325",
                "name": "American Empirical Pictures"
            }
        ],
        "countries": "Stati Uniti d'America",
        "countryList": [
            {
                "key": "USA",
                "value": "Stati Uniti d'America"
            }
        ],
        "languages": "inglese",
        "languageList": [
            {
                "key": "English",
                "value": "inglese"
            }
        ],
        "contentRating": "R",
        "imDbRating": null,
        "imDbRatingVotes": null,
        "metacriticRating": null,
        "ratings": null,
        "wikipedia": null,
        "posters": null,
        "images": null,
        "trailer": null,
        "boxOffice": {
            "budget": "",
            "openingWeekendUSA": "",
            "grossUSA": "",
            "cumulativeWorldwideGross": ""
        },
        "tagline": null,
        "keywords": "written by director,1950s,year 1955,timeframe 1950s,astronomy",
        "keywordList": [
            "written by director",
            "1950s",
            "year 1955",
            "timeframe 1950s",
            "astronomy"
        ],
        "similars": [
            {
                "id": "tt12923632",
                "title": "Dead Ringers",
                "image": "https://m.media-amazon.com/images/M/MV5BNTNlNDUyMGYtMzA2ZS00YjkyLWJmNjgtNjdiNzUzYmU3MTVkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": ""
            },
            {
                "id": "tt15342244",
                "title": "Master Gardener",
                "image": "https://m.media-amazon.com/images/M/MV5BMWVlMTFkNmYtZmQ0Yy00MzBiLTg0Y2YtYmExOTk1MDAyZmRjXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": "6.3"
            },
            {
                "id": "tt9794044",
                "title": "Citadel",
                "image": "https://m.media-amazon.com/images/M/MV5BNjUzZjdhZGMtNjRiNi00MzM0LTg5Y2EtM2E2ZTRhMWViMDhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": ""
            },
            {
                "id": "tt6528290",
                "title": "Knights of the Zodiac",
                "image": "https://m.media-amazon.com/images/M/MV5BZjRkNGM1Y2ItMDExMy00OGU3LWJjZjQtN2MwN2U2MmE2ZGJjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.8019_AL_.jpg",
                "imDbRating": ""
            },
            {
                "id": "tt2906216",
                "title": "Dungeons & Dragons: Honor Among Thieves",
                "image": "https://m.media-amazon.com/images/M/MV5BZjAyMGMwYTEtNDk4ZS00YmY0LThhZjUtOWI4ZjFmZmU4N2I3XkEyXkFqcGdeQXVyMTEyNzQ1MTk0._V1_Ratio0.6860_AL_.jpg",
                "imDbRating": "7.6"
            },
            {
                "id": "tt10986410",
                "title": "Ted Lasso",
                "image": "https://m.media-amazon.com/images/M/MV5BMTdmZjBjZjQtY2JiNS00Y2ZlLTg2NzgtMjUzMGY2OTVmOWJiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": "8.8"
            },
            {
                "id": "tt8847712",
                "title": "The French Dispatch",
                "image": "https://m.media-amazon.com/images/M/MV5BNmQxZTNiODYtNzBhYy00MzVlLWJlN2UtNTc4YWZjMDIwMmEzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": "7.1"
            },
            {
                "id": "tt14586350",
                "title": "Love & Death",
                "image": "https://m.media-amazon.com/images/M/MV5BOGRhYmU2YWEtNThlMi00ZmQ4LWFiYTQtYjM0NDM3YTRlZmUxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": "8.7"
            },
            {
                "id": "tt8277246",
                "title": "His Only Son",
                "image": "https://m.media-amazon.com/images/M/MV5BZTU5MTY4OGMtYTRiMS00ZTA1LThmMGQtOWQ4YzE4NThlYjljXkEyXkFqcGdeQXVyNzYzMjAyMzU@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": "6.5"
            },
            {
                "id": "tt13157618",
                "title": "Secret Invasion",
                "image": "https://m.media-amazon.com/images/M/MV5BYjJiN2M5MmItNmUwMS00MzI4LWI3ZTgtMTUxYmI1YTA3ZDExXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": ""
            },
            {
                "id": "tt8749198",
                "title": "Daisy Jones & The Six",
                "image": "https://m.media-amazon.com/images/M/MV5BNDdkY2EwNTgtYTljYy00YmRiLWFiNWItMTZhZDdlMWM2MGY2XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": "8.1"
            }
        ],
        "tvSeriesInfo": null,
        "tvEpisodeInfo": null,
        "errorMessage": ""
    }//end chosenMovie

    videoMovie: any = {
        "imDbId": "tt14230388",
        "title": "Asteroid City",
        "fullTitle": "Asteroid City (2023)",
        "type": "Movie",
        "year": "2023",
        "videoId": "4r5L_PT5-34",
        "videoUrl": "https://www.youtube.com/watch?v=4r5L_PT5-34",
        "errorMessage": ""
    }

    favoriteMovie:Array<any>=[]

}//END class ApiService

// https://imdb-api.com/en/API/YouTubeTrailer/k_nxz2h3fm/tt1877830

// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US


////////////////////////

// https://api.themoviedb.org/3/movie/popular?api_key=<api_key>&language=en-US&page=1

// https://imdb-api.com/en/API/MostPopularMovies/<api_key>

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<api_key>&language=en-US

// https://imdb-api.com/it/API/Title/<api_key>/{movie_id}