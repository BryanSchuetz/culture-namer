<template>
  <div class="copy">
  
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
  }
}
</script>