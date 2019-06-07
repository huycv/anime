<template>
  <div class="animated fadeIn">
    <v-container>
      <v-layout row wrap>
        <v-flex xs8>
          <v-carousel
            width="100%"
            height="100%"
            dark>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade"
              transition="fade">

            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AnimeHomePage extends Vue {
  private items: any[] = [
    {src: 'http://getwallpapers.com/wallpaper/full/9/0/c/543250.jpg'},
    {src: 'http://getwallpapers.com/wallpaper/full/a/e/4/242640.jpg'},
    {src: 'http://getwallpapers.com/wallpaper/full/d/5/7/473813.jpg'},
  ]
}
</script>