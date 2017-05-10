<template>
  <div class="copy">
    <h3>{{ siteData.callToAction }}</h3>
    <p v-html="markdownify(siteData.description)"></p>
    <router-view></router-view>
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
    axios.get('/data/ships.json'),then(response => thhis.shipData = response.data);
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