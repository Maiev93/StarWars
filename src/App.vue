<template>
  <v-app class="char">
    <v-navigation-drawer class="char__nav" height="100px" width="300px">
      <router-link class="char__link" to="/">Все персонажи </router-link>
      <router-link class="char__link" to="/Favorite">Любимые </router-link>
    </v-navigation-drawer>

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
