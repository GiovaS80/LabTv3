export interface ListMovie 
{
    id: string,
    rank: string,
    rankUpDown: string,
    title: string
    fullTitle: string,
    year: string,
    image: string,
    crew: string,
    imDbRating: string,
    imDbRatingCount: string
}//END interface ListMovie

export interface DetailMovie
{
    id: string,
    title: string,
    fullTitle: string,
    year: string,
    image: string,
    plot: string,
    directors: string,
    stars: string,
    genres: string,
    similars: Array<Similar>
}

interface Similar
{
    id: string,
    title: string,
    image: string
}