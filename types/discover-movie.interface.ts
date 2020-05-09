export interface IDiscover {
  page: number;
  total_results: number;
  total_pages: number;
  results: IDiscoverMovieResults[] | IDiscoverTvResults[];
}

export interface IDiscoverMovieResults {
  popularity: number;
  id: number;
  video: false;
  vote_count: number;
  vote_average: number;
  title: string;
  release_date: string;
  original_language: string;
  genre_ids: number[];
  backdrop_path: string | null;
  adult: boolean;
  overview: string;
  poster_path: string | null;
}

export interface IDiscoverTvResults {
  popularity: number;
  id: number;
  video: false;
  vote_count: number;
  vote_average: number;
  name: string;
  first_air_date: string;
  original_language: string;
  genre_ids: number[];
  backdrop_path: string | null;
  adult: boolean;
  overview: string;
  poster_path: string | null;
  origin_country: string[];
  original_name: string;
}
