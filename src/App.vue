<template>
  <v-app class="char">
    <nav class="char__nav">
      <router-link class="char__link" to="/">All Characters</router-link>
      <router-link class="char__link" to="/Favorite">Favorite </router-link>
    </nav>

    <v-main>
      <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.char__nav {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
}
.char__link {
  text-decoration: none;
  color: black;
  font-size: 20px;
  margin: 0 1%;
}
.char__link:hover {
  color: slateblue;
}
</style>
