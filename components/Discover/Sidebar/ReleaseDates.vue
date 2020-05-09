<template>
  <div>
    <div class="title">{{ tv ? "Air Dates" : "Release Dates" }}</div>
    <div class="my-3">
      <v-menu
        ref="fromDate"
        v-model="fromDateMenu"
        :close-on-content-click="false"
        :return-value.sync="fromDateSynced"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="fromDateSynced"
            label="From Date"
            prepend-icon="mdi-calendar"
            readonly
            v-on="on"
            outlined
            dense
            clearable
            hide-details
          ></v-text-field>
        </template>
        <v-date-picker light v-model="fromDateSynced" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="fromDateMenu = false">
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.fromDate.save(fromDateSynced)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </div>
    <div>
      <v-menu
        ref="toDate"
        v-model="toDateMenu"
        :close-on-content-click="false"
        :return-value.sync="toDateSynced"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="toDateSynced"
            label="To Date"
            prepend-icon="mdi-calendar"
            readonly
            v-on="on"
            outlined
            dense
            clearable
            hide-details
          ></v-text-field>
        </template>
        <v-date-picker light v-model="toDateSynced" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="toDateMenu = false">
            Cancel
          </v-btn>
          <v-btn text color="primary" @click="$refs.toDate.save(toDateSynced)">
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from "nuxt-property-decorator";

@Component({
  name: "ReleaseDates"
})
export default class ReleaseDates extends Vue {
  @Prop({ type: Boolean, default: false }) readonly tv!: boolean;
  @PropSync("fromDate") fromDateSynced!: string;
  @PropSync("toDate") toDateSynced!: string;

  fromDateMenu = false;
  toDateMenu = false;
}
</script>

<style scoped></style>
