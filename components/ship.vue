<template>
  <div class="copy inception-inception">
    <div v-for="ship in shipData" v-if="ship.url.includes($route.params.name)">
      <h3>{{ ship.name }}</h3>
      <p>This ship first appeard in the book <a v-for="book in bookData" v-if="ship.book === book.name" v-bind:href="book.url">{{ ship.book }}</a>—the ship is a {{ ship.typeLong }} ({{ ship.typeAbrev }}). <span v-for="type in shipTypeData" v-if="ship.typeAbrev === type.type">{{ type.description }}</span></p>
      <p v-if="ship.content.length > 0"><span class="note">Note:</span> {{ ship.content }}</p>
    </div>
    <div class="button"><a v-on:click.prevent="$router.push(shipData[Math.floor(Math.random() * shipData.length)].url)" class="btn btn--lg btn--green">Pick a Random Ship</a></div>
  </div>
</template>

<script>

import marked from 'marked'
import axios from 'axios'
export default {
  data () {
    return {
      shipData: {},
      bookData: {},
      shipTypeData: {}
    }
  },
  created(){
    axios.get('/data/ships.json').then(response => this.shipData = response.data);
    axios.get('/data/books.json').then(response => this.bookData = response.data);
    axios.get('/data/ship-types.json').then(response => this.shipTypeData = response.data);
  },
    filters: {
      md: function (val) {
          return marked(val);
      }
  },
  computed: {
    
  },
  methods: {
    shipit(){
      this.$router.push('/ships/little-gravitas')
    },
     markdownify: function (val) {
          return marked(val);
     } 
  }
}
</script> 