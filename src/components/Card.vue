<template>
  <v-card>
    <v-img
      :src="src"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="500px"
    >
      <v-card-title v-text="title"></v-card-title>
    </v-img>

    <v-card-actions>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    src: String,
    title: String
  }
};
</script>
