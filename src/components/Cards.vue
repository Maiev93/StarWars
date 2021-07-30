<template>
  <v-container>
    <v-row>
      <v-col>
          <input class="input" type="text" v-model="search" @keydown.enter="loadChars">
          <button class="search-button" @click="loadChars">Search!</button>
      </v-col>
    </v-row>
    
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
      search: '',
      page: 1,
      totalPages: null
    };
  },
  methods: {
    async loadChars(pageNumber) {
      let charURL = (this.search != '') ? `${this.$store.getters.GET_URL}/people?search=${this.search}` : `${this.$store.getters.GET_URL}/people?page=${pageNumber}`;
      this.chars = await fetch(
        charURL
      )
        .then(response => {
          return response.json();
        })
        .then(response => {
          if (response.next != null) {
            this.totalPages = Math.ceil(
              response.count / response.results.length
            );
          } else {
            this.totalPages = 1;
          }
          return response.results;
        });
    },
    toFavorites(char) {
      if(this.GET_FAVORITES.indexOf(char) === -1) {
        this.GET_FAVORITES.push(char);
      }      
      this.$store.dispatch("SET_FAVORITES", this.GET_FAVORITES);
    },
  },
  computed: {
    ...mapGetters(["GET_FAVORITES"]),
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
.input {
  outline: none;
  border: 1px solid #8E8E8E;
  width: 80%;
  border-radius: 5px 0 0 5px;
}
.search-button {
  outline: none;
  background: #bbb;
  border: 1px solid #bbb;
  width: 10%;
  border-radius: 0 5px 5px 0;
}
</style>
