<template>
  <section class="mx-2">
    <div class="my-10">
      <h3
        style="
          width: 100%;
          border-bottom: 1px solid #fff;
          line-height: 0.1em;
          margin: 10px 0 20px;
        "
      >
        <span style="background: #000; padding: 0 10px;">
          {{ heading }}
        </span>
      </h3>
    </div>
    <div>
      <ul class="oys-genres-tab" style="float: right;">
        <li v-for="(el, idx) in genres">
          <div class="d-inline-block">{{ el.name }}</div>
          <span
            class="oys-genres-tab-splitter"
            v-if="idx !== genres.length - 1"
          ></span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { IGenres } from "~/types/genres.interface";
import { MOVIE_GENRES } from "~/constants/genres.constant";

@Component({
  name: "LatestList"
})
export default class LatestList extends Vue {
  @Prop({ type: String, default: "Latest" }) readonly heading!: string;

  get genres(): IGenres[] {
    return MOVIE_GENRES.slice(0, 7);
  }
}
</script>

<style scoped></style>
