<template>
  <div>
    <v-menu transition="slide-y-transition" bottom>
      <template v-slot:activator="{ on }">
        <v-btn
          rounded
          color="primary"
          v-on="on"
          :disabled="youtubeTrailer.length < 1"
        >
          <v-icon left v-if="youtubeTrailer.length > 0">mdi-play</v-icon>
          {{ youtubeTrailer < 1 ? "No Trailer Found" : "Watch Trailer" }}
        </v-btn>
      </template>
      <v-list light>
        <v-list-item
          v-for="el in youtubeTrailer"
          :key="el.key"
          @click="openYoutubeDialog(el.key)"
        >
          <v-list-item-title class="primary--text">
            {{ el.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <VideoDialog ref="dialog" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import VideoDialog from "~/components/Details/VideoDialog.vue";
import { IVideos } from "~/types/movie.interface";

@Component({
  name: "TrailerMenu",
  components: { VideoDialog }
})
export default class TrailerMenu extends Vue {
  @Prop(Object) readonly videos!: IVideos;

  $refs!: {
    dialog: VideoDialog;
  };

  get youtubeTrailer(): { name: string; key: string }[] {
    return this.videos.results
      .filter(
        (el) =>
          el.site.toLocaleLowerCase() === "youtube" && el.type === "Trailer"
      )
      .map((el) => ({
        name: el.name,
        key: el.key
      }));
  }

  openYoutubeDialog(key: string): void {
    this.$refs.dialog.key = key;
    this.$refs.dialog.dialog = true;
  }
}
</script>

<style scoped></style>
