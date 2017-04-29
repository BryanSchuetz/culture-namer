<template>
  <div class="copy">
    This is the Vue bit.
    <router-view></router-view>
  </div>
</template>

<script>
import Marked from 'marked'
export default {
  data () {
    return {
      
    }
  },
    filters: {
      md: function (val) {
          return Marked(val)
      }
  },
  computed: {
  },
  methods: {
    shipit(){
      this.$router.push('/ship/little-gravitas')
    } 
  }
}
</script>