export interface IDiscoverMovie {
  page: number;
  total_results: number;
  total_pages: number;
  results: IDiscoverResults[];
}

export interface IDiscoverResults {
  popularity: number;
  id: number;
  video: false;
  vote_count: number;
  vote_average: number;
  title: string;
  release_date: string;
  original_language: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  poster_path: string;
}
