<template>
  <div>
    <v-timeline>
      <v-timeline-item small v-for="el in Object.keys(casts)" :key="el">
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold primary--text`"
            v-text="el"
          ></span>
        </template>
        <div class="py-4">
          <div
            v-for="(i, idx) in casts[el]"
            :key="idx"
            class="mb-3"
            @click="
              $router.push({
                name: i.type === 'movie' ? 'movie-id' : 'tv-id',
                params: { id: i.id }
              })
            "
            style="cursor: pointer;"
          >
            <span class="font-weight-bold">{{ i.title }}</span>
            <span class="font-italic grey--text" v-if="i.character">as</span>
            <span v-if="i.character">{{ i.character }}</span>
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { ICombinedCreditsCast } from "~/types/person.interface";
import moment from "moment";

@Component({
  name: "Timeline"
})
export default class Timeline extends Vue {
  @Prop(Array) readonly cast!: ICombinedCreditsCast[];

  get casts(): {
    [key: string]: {
      character: string;
      id: number;
      title: string | undefined;
      year: string;
      type: string;
    }[];
  } {
    const obj: {
      [key: string]: {
        character: string;
        id: number;
        title: string | undefined;
        year: string;
        type: string;
      }[];
    } = {};
    this.cast
      .filter((el) => el.media_type === "tv" || el.media_type === "movie")
      .sort(
        (a, b) =>
          moment(b.release_date || b.first_air_date).valueOf() -
          moment(a.release_date || a.first_air_date).valueOf()
      )
      .forEach((el, idx) => {
        const year = `${moment(el.first_air_date || el.release_date).format(
          "YYYY"
        )}`;
        if (idx === 0 || !obj.hasOwnProperty(year)) {
          obj[year] = [
            {
              character: el.character,
              id: el.id,
              title: el.name || el.title,
              year,
              type: el.media_type
            }
          ];
        } else {
          obj[year].push({
            character: el.character,
            id: el.id,
            title: el.name || el.title,
            year,
            type: el.media_type
          });
        }
      });
    return obj;
  }
}
</script>

<style scoped></style>
