<template>
  <div>
    <v-col cols="1" v-for="platform in platforms" :key="platform.platform.id">
      <v-icon v-if="platform.platform.slug === 'pc'">
        windows
      </v-icon>
      <v-icon v-if="platform.platform.slug === 'xbox'">
        mdi-xbox
      </v-icon>
      <v-icon v-if="platform.platform.slug === 'playstation'">
        mdi-playstation
      </v-icon>
      <v-icon v-if="platform.platform.slug === 'mac'">
        mdi-apple
      </v-icon>
      <v-icon v-if="platform.platform.slug === 'nintendo'">
        mdi-nintendo-switch
      </v-icon>
    </v-col>
  </div>
</template>

<script>
  export default {
    name: "platforms",
    props: {
      platforms: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style scoped>

</style>
