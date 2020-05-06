<template>
  <v-snackbar
    top
    :color="$store.state.snackbar.color"
    :timeout="3000"
    v-model="show"
    :multi-line="$device.isMobile"
  >
    {{ message }}
    <v-btn text dark @click.native="show = false">Close</v-btn>
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "Snackbar"
})
export default class Snackbar extends Vue {
  show = false;
  message = "";

  created(): void {
    this.$store.watch(
      state => state.snackbar.isActive,
      () => {
        if (this.$store.state.snackbar.isActive) {
          this.show = true;
          this.message = this.$store.state.snackbar.snack;
        }
        // this.$store.dispatch("snackbar/setSnack", "");
      }
    );
  }
}
</script>

<style scoped></style>
