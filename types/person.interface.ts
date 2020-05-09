export interface IPerson {
  birthday: string;
  known_for_department: string;
  id: number;
  place_of_birth: string;
  combined_credits: {
    id: number;
    cast: ICombinedCreditsCast[];
    crew: ICombinedCreditsCrew[];
  };
  profile_path: string;
  imdb_id: string;
  deathday: null;
  images: {
    profiles: IProfileImages[];
  };
  name: string;
  also_known_as: string[];
  biography: string;
  homepage: null;
  adult: boolean;
  gender: number;
  popularity: number;
  tagged_images: {
    results: ITaggedImages[];
    page: number;
    total_results: number;
    id: number;
    total_pages: number;
  };
}

export interface ICombinedCreditsCast {
  id: number;
  original_language: string;
  original_title?: string;
  original_name?: string;
  origin_country?: string[];
  episode_count?: number;
  name?: string;
  overview: string;
  vote_count: number;
  video: boolean;
  media_type: string;
  credit_id: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  popularity: number;
  title?: string;
  character: string;
  genre_ids: number[];
  adult: boolean;
  backdrop_path: string | null;
  poster_path: string | null;
}

export interface ICombinedCreditsCrew extends ICombinedCreditsCast {
  department: string;
  job: string;
}

export interface IProfileImages {
  iso_639_1: null;
  aspect_ratio: number;
  vote_count: number;
  height: number;
  vote_average: number;
  file_path: string;
  width: number;
}

export interface ITaggedImages extends IProfileImages {
  media_type: string;
  media: ITaggedImagesMovie | ITaggedImagesTv;
}

export interface ITaggedImagesMovie {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string | null;
  id: number;
  adult: boolean;
  backdrop_path: string | null;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export interface ITaggedImagesTv {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string | null;
  id: number;
  adult: boolean;
  backdrop_path: string | null;
  original_language: string;
  original_name: string;
  genre_ids: number[];
  name: string;
  vote_average: number;
  overview: string;
  release_date: string;
}
