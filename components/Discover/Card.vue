<template>
  <div
    style="cursor: pointer; position: relative;"
    class="pt-3"
    @click="
      $router.push({
        name: tv ? 'tv-id' : 'movie-id',
        params: { id: id.toString() }
      })
    "
  >
    <v-hover v-slot:default="{ hover }">
      <v-img class="oys-border-radius" :src="poster">
        <v-expand-transition>
          <div
            v-if="hover"
            style="height: 100%; background-color: #0e1a3f; opacity: 0.8;"
            class="d-flex justify-center align-center white--text text-center pa-3"
          >
            {{ title }}
          </div>
        </v-expand-transition>
      </v-img>
    </v-hover>
    <div
      :class="{
        'movie-rating': true,
        'py-1': true,
        'text-center': true,
        'oys-border-radius': true,
        success: rating >= 7.5,
        warning: rating >= 5 && rating < 7.5,
        error: rating >= 0 && rating < 5,
        'darken-2': true
      }"
    >
      {{ rating }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { SECURE_BASE_URL } from "~/constants/tmdb-image.constant";

@Component({
  name: "DiscoverCard"
})
export default class DiscoverCard extends Vue {
  @Prop() readonly rating!: number;
  @Prop() readonly title!: string;
  @Prop() readonly image!: string;
  @Prop(Boolean) readonly tv!: boolean;
  @Prop(Number) readonly id!: number;

  get poster(): string {
    return this.image
      ? `${SECURE_BASE_URL}/w342${this.image}`
      : "https://critics.io/img/movies/poster-placeholder.png";
  }
}
</script>

<style scoped lang="scss">
.movie-rating {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
}
</style>
