<template>
  <div>
    <container>
      <v-parallax :src="data.background_image">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4">{{ data.name }}</h1>
          </v-col>
        </v-row>
      </v-parallax>
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
