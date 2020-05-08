<template>
  <v-dialog max-width="640px" v-model="dialog">
    <iframe
      id="ytplayer"
      type="text/html"
      width="640"
      height="360"
      :src="`https://www.youtube.com/embed/${key}`"
    ></iframe>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { IVideos } from "~/types/movie.interface";

@Component({
  name: "VideoDialog"
})
export default class VideoDialog extends Vue {
  dialog = false;
  key = "";
}
</script>

<style scoped></style>
