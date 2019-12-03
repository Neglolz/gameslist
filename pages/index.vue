<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <!--TITLE-->
    <v-row class="pt-10">
      <v-col>
        <div class="pt-10 center page-title pl-10">En vedette</div>
      </v-col>
    </v-row>
    <!--SEARCH BAR-->
    <v-row class="center">
      <v-col cols="10">
        <v-text-field
          v-model="search"
          outlined
          clearable
          rounded
          solo
          flat
          label="Rechercher"
          type="text"
          color="dark-grey"
          class="search-filter"
        >
          <template v-slot:append>
            <v-fade-transition leave-absolute>
              <v-progress-circular
                v-if="loading"
                size="24"
                color="dark-grey"
                indeterminate
              />
              <v-icon>
                mdi-magnify
              </v-icon>
            </v-fade-transition>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
    <div class="d-flex cards-list pt-10 center">
      <!--<content-loader v-if="!data" :speed="2" :animate="true" />-->
      <v-col
        v-for="game in filteredDatas"
        :key="game.id"
        cols="12"
        xs="8"
        md="6"
        sm="8"
        lg="4"
        class="center"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            :elevation="hover ? 12 : 2"
            @mouseover="showVideo(game)"
            @mouseleave="hideVideo(game)"
          >
            <v-img
              v-show="!game.showvideo"
              :src="game.background_image"
              position="top"
              height="199"
            />
            <video
              v-show="game.showvideo"
              height="200"
              muted
              loop
              autoplay
              style="margin-bottom: -8px"
              class="video"
            >
              <source :src="game.clip.clip" type="video/mp4" />
              <source :src="game.clip.clip" type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
            <v-card-title>{{ game.name }}</v-card-title>

            <v-card-text>
              <v-row class="mx-0">
                <platforms :platforms="game.parent_platforms" />
                <div class="pl-3 pt-2 critic font-weight-medium text-right">
                  {{ game.metacritic }}
                </div>
              </v-row>
              <!--RATINGS-->
              <v-row class="center">
                <v-rating
                  :value="game.rating"
                  :length="game.rating_top"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="30"
                />
              </v-row>

              <v-row class="center">
                <div class="grey--text font-weight-medium rating-value">
                  {{ game.rating }} ({{ game.ratings_count }})
                </div>
              </v-row>
              <!--DATE DE SORTIE-->
              <v-row class="pl-3 pt-4 center">
                Date de sortie: {{ game.released }}
              </v-row>

              <!--GENRES-->
              <v-row class="center pl-3 pt-3">
                <div
                  v-for="genre in game.genres"
                  :key="genre.id"
                  class="clickable"
                >
                  <v-chip
                    :color="'#' + asciiToHexa(genre.name)"
                    label
                    class="ml-1 mr-1 clickable"
                    text-color="white"
                    @click="redirect('genre', game.genres.id)"
                  >
                    {{ genre.name }}
                  </v-chip>
                </div>
              </v-row>
            </v-card-text>

            <v-card-actions class="justify-center">
              <nuxt-link :to="'/game/' + game.id" class="link">
                <v-btn color="indigo" text class="mb-2">
                  Voir
                </v-btn>
              </nuxt-link>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Platforms from "@/components/platforms"
import { ContentLoader } from "vue-content-loader"

export default {
  async asyncData() {
    const { data } = await axios.get(`https://api.rawg.io/api/games`)
    return {
      games: data.results,
      data: data
    }
  },
  components: {
    Platforms,
    ContentLoader
  },
  data: () => ({
    loading: false,
    selection: 1,
    showvideo: false,
    search: ""
  }),
  computed: {
    filteredDatas() {
      if (this.search !== "") {
        return this.games.filter(game => {
          return game.name.toUpperCase().match(this.search.toUpperCase())
        })
      }
      return this.games
    }
  },
  methods: {
    showVideo(game) {
      game.showvideo = true
      this.$forceUpdate()
    },
    hideVideo(game) {
      game.showvideo = false
      this.$forceUpdate()
    },
    asciiToHexa(str) {
      var arr1 = []
      for (var n = 0, l = str.length; n < l; n++) {
        var hex = Number(str.charCodeAt(n)).toString(16)
        arr1.push(hex)
      }
      return arr1.join("").substring(arr1.length - 6, arr1.length)
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
