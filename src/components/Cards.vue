<template>
  <v-container>
    <v-row dense>
      <v-col cols="12" md="3">
        <Card
          :title="CHARS[0].name"
          src="https://starwars-visualguide.com/assets/img/characters/1.jpg"
        />
        <div>{{ CHARS[0].name }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  components: { Card },
  mounted() {
    this.$store.dispatch("GET_CHAR");
  },
  computed: {
    ...mapGetters(["CHARS"])
  },
  methods: {}
};
</script>
