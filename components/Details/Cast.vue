<template>
  <div :class="{ 'oys-details-cast': !tv }">
    <h4 class="display-1 mx-4 pt-4">Casts</h4>
    <swiper class="swiper pa-4 pr-7" :options="swiperOption">
      <swiper-slide v-for="el in castProfilePic" :key="el.image">
        <v-img
          eager
          :src="el.image"
          contain
          class="oys-border-radius oys-shadow"
          @mouseover="hoverCast(el.image)"
          @mouseleave="hoverCast('')"
          style="position: relative;"
        >
          <div class="oys-details-cast--act">
            <div class="font-weight-bold subtitle-2 px-3 pt-3">
              {{ el.name }}
            </div>
            <div class="subtitle-2 font-weight-light px-3">
              {{ el.character }}
            </div>
          </div>
        </v-img>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";
import { ICast } from "~/types/movie.interface";
import { SECURE_BASE_URL } from "~/constants/tmdb-image.constant";

@Component({
  name: "DetailsCast"
})
export default class DetailsCast extends Vue {
  @Prop(Array) readonly cast!: ICast[];
  @Prop({ type: Boolean, default: false }) readonly tv!: boolean;

  swiperOption = {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };

  @Emit()
  hoverCast(image: string): string {
    return image;
  }

  get castProfilePic(): { image: string; name: string; character: string }[] {
    return this.cast
      .filter((el) => el.profile_path)
      .map((el) => ({
        image: `${SECURE_BASE_URL}/w185${el.profile_path}`,
        name: el.name,
        character: el.character
      }));
  }
}
</script>

<style scoped></style>
