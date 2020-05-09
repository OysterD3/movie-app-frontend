import { IEpisodes } from "~/types/tv-seasons";
import { ActionContext } from "vuex";

export interface ISeasonsVuex {
  id: number | string;
  seasons: number;
  episodes: IEpisodeVuex[];
}

export interface IEpisodeVuex extends IEpisodes {
  images: {
    stills: IStills[];
  };
}

export interface IStills {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: null | string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export const state = (): ISeasonsVuex => ({
  id: "",
  seasons: -1,
  episodes: []
});

export const mutations = {
  PUSH_EPISODE(
    ctx: ISeasonsVuex,
    payload: { season: number; episode: IEpisodeVuex; id: number | string }
  ): void {
    if (ctx.seasons !== payload.season || ctx.id !== payload.id) {
      ctx.id = payload.id;
      ctx.seasons = payload.season;
      ctx.episodes = [payload.episode];
    } else {
      ctx.episodes.push(payload.episode);
    }
  }
};

export const actions = {
  async FETCH_EPISODE(
    { commit }: ActionContext<any, any>,
    {
      id,
      season,
      episode
    }: { id: string | number; season: number; episode: number }
  ): Promise<void> {
    const data = (await (this as any).$axios.$get(
      `/tv/${id}/season/${season}/episode/${episode}?api_key=${process.env.API_KEY}&append_to_response=images`
    )) as IEpisodeVuex;
    commit("PUSH_EPISODE", { id, season, episode: data });
  }
};
