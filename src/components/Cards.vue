<template>
  <v-container>
    <v-row>
      <v-col v-for="(char, index) in chars" :key="index" cols="2.5">
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

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon @click="toFavorites(char)">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <Pagination :totalPages="totalPages" @pageChanged="loadChars" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      chars: [],
      // favorites: [],
      page: 1,
      totalPages: null
    };
  },
  mounted() {
    this.$store.dispatch("GET_CHAR");
  },
  methods: {
    async loadChars(pageNumber) {
      this.chars = await fetch(
        `${this.$store.getters.GET_URL}/people?page=${pageNumber}`
      )
        .then(response => {
          return response.json();
        })
        .then(response => {
          if (response.next != null) {
            this.totalPages = Math.ceil(
              response.count / response.results.length
            );
          }
          return response.results;
        });
    },
    toFavorites(char) {
      this.GET_FAVORITES.push(char);
      this.$store.dispatch("SET_FAVORITES", this.GET_FAVORITES);
    }
  },
  computed: {
    ...mapGetters(["GET_FAVORITES"])
  },
  created() {
    this.loadChars(this.page);
  },
  components: {
    Pagination
  }
};
</script>

<style>
.card {
  cursor: pointer;
}
.card:hover {
  opacity: 0.8;
}
</style>
