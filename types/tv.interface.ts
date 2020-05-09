import { IGenres } from "~/types/genres.interface";
import {
  ICredits,
  IMovieImages,
  IReviews,
  IVideos
} from "~/types/movie.interface";

export interface ITvDetails {
  backdrop_path: "/6ZdQTBy20HzWudZthAV7NkZWfIb.jpg";
  created_by: ITvCreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: IGenres[];
  homepage: "http://www.cwtv.com/shows/the-flash/";
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
  };
  name: string;
  next_episode_to_air: {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
  };
  networks: {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  seasons: ISeasons[] | null;
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
  images?: IMovieImages;
  recommendations?: {
    page: number;
    results: ITvRecommendationsSimilar[];
  };
  reviews?: IReviews;
  similar?: {
    page: number;
    results: ITvRecommendationsSimilar[];
  };
  videos?: IVideos;
  credits?: ICredits;
}

export interface ITvCreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string | null;
}

export interface ITvRecommendationsSimilar {
  backdrop_path: string | null;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  networks?: {
    id: number;
    logo: {
      path: string;
      aspect_ratio: number;
    };
    name: string;
    origin_country: string;
  }[];
  popularity: number;
}

export interface ISeasons {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}
