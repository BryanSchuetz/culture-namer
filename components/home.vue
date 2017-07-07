<template>
  <div class="copy inception"> 
    <h3>{{ siteData.callToAction }}</h3>
    <p v-html="markdownify(siteData.description)"></p>
    <div class="button"><a v-on:click.prevent="$router.push(shipData[Math.floor(Math.random() * shipData.length)].url)" class="btn btn--lg btn--green">Pick a Random Ship</a></div>
  </div>
</template>

<script>
import marked from 'marked'
import axios from 'axios'
export default {
  data () {
    return {
      siteData: [],
      shipData: [],
    }
  },
  created(){
    axios.get('/data/data.json').then(response => this.siteData = response.data);
    axios.get('/data/ships.json').then(response => this.shipData = response.data);
  },
    filters: {
      md: function (val) {
          return marked(val);
      }
  },
  computed: {
    
  },
  methods: {
     markdownify: function (val) {
          return marked(val);
     } 
  }
}
</script> 