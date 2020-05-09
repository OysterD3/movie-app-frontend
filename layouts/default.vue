<template>
  <v-app id="oyster-app">
    <Snackbar />
    <v-content>
      <v-app-bar class="transparent" flat>
        <v-btn text dark @click="$router.push({ name: 'index' })">Home</v-btn>
        <v-btn text dark @click="$router.push({ name: 'movie' })">
          Movies
        </v-btn>
        <v-btn text dark @click="$router.push({ name: 'tv' })">
          TV Shows
        </v-btn>
      </v-app-bar>
      <nuxt />
    </v-content>
    <v-divider class="mt-3" />
    <v-footer padless class="transparent">
      <v-col cols class="text-center">
        Developed by
        <a href="https://github.com/OysterD3" class="white--text">Oyster</a>
        with
        <a href="https://www.themoviedb.org/" class="white--text">TheMovieDB</a>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import Snackbar from "~/components/Snackbar.vue";

@Component({
  name: "DefaultLayout",
  components: { Snackbar }
})
export default class DefaultLayout extends Vue {}
</script>

<style scoped>
#oyster-app {
  background: linear-gradient(#0e1a3f, #0b1123);
}
</style>
