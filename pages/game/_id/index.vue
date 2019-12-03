<template>
  <div>
    <pre>
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
