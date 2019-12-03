<template>
  <div>
    <v-row>
      <v-col v-for="platform in platforms" :key="platform.platform.id" cols="1">
        <v-icon v-if="platform.platform.slug === 'pc'">
          mdi-windows
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
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Platforms",
  props: {
    platforms: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped></style>
