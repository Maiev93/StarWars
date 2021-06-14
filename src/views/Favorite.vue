<template>
  <v-container>
    <v-row>
      <v-col v-for="char in GET_FAVORITES" :key="char.name" cols="2.5">
        <v-card class="card">
          <v-img
            :src="
              `https://starwars-visualguide.com/assets/img/characters/` +
                char.url.slice(-3, -1) +
                `.jpg`
            "
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="700px"
          >
            <v-card-title v-text="char.name"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["GET_FAVORITES"])
  }
};
</script>
