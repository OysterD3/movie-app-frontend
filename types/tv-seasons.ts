export interface ITvSeasons {
  _id: string;
  air_date: string;
  episodes: IEpisodes[];
  name: string;
  overview: string;
  id: number;
  poster_path: string | null;
  season_number: number;
}

export interface IEpisodes {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  show_id: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
  crew: IEpisodeCrew[];
  guest_stars: IEpisodeGuestStars[];
}

export interface IEpisodeCrew {
  id: number;
  credit_id: string;
  name: string;
  department: string;
  job: string;
  gender: number;
  profile_path: string;
}

export interface IEpisodeGuestStars {
  id: number;
  name: string;
  credit_id: string;
  character: string;
  order: number;
  gender: number;
  profile_path: string | null;
}
