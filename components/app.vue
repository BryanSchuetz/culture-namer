<template>
  <div class="copy"> 
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import marked from 'marked'
import axios from 'axios'
export default {
  data () {
    return {
    }
  },
  created(){
  },
    filters: {
  },
  computed: {
  },
  methods: {
  }
}
</script> 