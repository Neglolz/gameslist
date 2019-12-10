<template>
  <div>
    <container>
      <v-card>
        <v-parallax :src="data.background_image" height="350">
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="display-1 font-weight-thin mb-4">{{ data.name }}</h1>
            </v-col>
          </v-row>
          <div style="display:flex">
            <v-alert v-if="data.metacritic > 85" type="success">
              {{ data.metacritic }}
            </v-alert>
            <v-alert
              v-else-if="data.metacritic < 85 && data.metacritic > 65"
              type="info"
            >
              {{ data.metacritic }}
            </v-alert>
            <v-alert
              v-else-if="data.metacritic < 65 && data.metacritic > 45"
              type="warning"
            >
              {{ data.metacritic }}
            </v-alert>
            <v-alert v-else type="error">
              {{ data.metacritic }}
            </v-alert>
            <v-spacer />
            <v-alert type="success">Release date : {{ data.released }}</v-alert>
          </div>
        </v-parallax>
        {{ data.description }}
      </v-card>
    </container>
    <pre>
      <br/><br/><br/><br/>
      <br/><br/><br/><br/>
      <br/><br/><br/><br/>
      {{ data }}
    </pre>
  </div>
</template>

<script>
import axios from "axios"
export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games/${params.id}`
    )
    return {
      games: data.results,
      data: data
    }
  }
}
</script>

<style scoped></style>
