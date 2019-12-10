<template>
  <v-app>
    <container>
      <v-app-bar app dark color="dark-grey">
        <v-app-bar-nav-icon />
        <v-toolbar-title>Gameslist</v-toolbar-title>
        <v-spacer />
        <v-row justify="center" align="center">
          <v-col cols="10">
            <v-text-field
              dense
              outlined
              clearable
              rounded
              solo
              flat
              label="Rechercher"
              type="text"
              color="dark-grey"
              class="search-filter"
              style="display:flex;position:relative"
            >
              <!--<v-btn icon>-->
              <!--<v-icon>mdi-magnify</v-icon>-->
              <!--</v-btn>-->
              <!--<v-btn icon>-->
              <!--<v-icon>mdi-heart</v-icon>-->
              <!--</v-btn>-->
              <!--<v-btn icon>-->
              <!--<v-icon>mdi-dots-vertical</v-icon>-->
              <!--</v-btn>-->
            </v-text-field>
          </v-col>
        </v-row>
      </v-app-bar>
    </container>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Gameslist"
    }
  }
}
</script>

<style>
.search-filter .v-label {
  left: 20px !important;
}
.search-filter .v-icon {
  margin-right: 15px !important;
}
</style>
