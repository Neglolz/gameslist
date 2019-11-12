<template>
  <div class="d-flex cards-list">
    <v-col cols="3"
           v-for="game in games"
           :key="game.id">
      <v-card
        max-width="400"
        class="mx-1 my-3"
      >
        <v-img
          position="top"
          height="200"
          :src="game.background_image"
          gradient="to top, rgba(255,255,255,.1), rgba(0,0,0,.25)"
        ></v-img>

        <v-card-title>{{ game.name }}</v-card-title>

        <v-card-text>

          <platforms :platforms="game.parent_platforms"></platforms>
          <v-row
            align="left"
            class="mx-0"
          >
            <v-rating
              :value="game.rating"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ml-4">{{ game.rating }} ({{ game.ratings_count }})</div>
          </v-row>

          <div>Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.</div>
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn
            color="indigo"
            text
            @click="reserve"
            class="mb-2"
          >
            Voir
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </div>
</template>

<script>
  import axios from 'axios'
  import Platforms from '@/components/platforms'

  export default {
    async asyncData () {
      const { data } = await axios.get(`https://api.rawg.io/api/games`)
      return {
        games: data.results,
        data: data
      }
    },
    components:{
      Platforms
    },
    data: () => ({
      loading: false,
      selection: 1,
    }),
    methods: {
      reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>

<style scoped>
  .cards-list {
    flex-wrap: wrap;
    margin: auto;
  }
</style>
