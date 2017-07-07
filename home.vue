<template>
  <div class="copy"> 
    <h3>{{ siteData.callToAction }}</h3>
    <p v-html="markdownify(siteData.description)"></p>
    <div class="button"><a href="" class="btn btn--lg btn--green">Pick a Random Ship</a></div>
  </div>
</template>

<script>

import marked from 'marked'
import axios from 'axios'
export default {
  data () {
    return {
      siteData: {},
      shipData: {}
    }
  },
  mounted(){
    axios.get('/data/data.json').then(response => this.siteData = response.data);
    axios.get('/data/ships.json'),then(response => this.shipData = response.data);
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
      this.$router.push('/ship/little-gravitas')
    },
     markdownify: function (val) {
          return marked(val);
     } 
  }
}
</script> 