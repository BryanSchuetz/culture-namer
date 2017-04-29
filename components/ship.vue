<template>
  <div class="image">
    <h2 class="msg">{{ $route.params.name }}</h2>
    <router-link to="/ship/read-the-instructions">single</router-link>
  </div>
</template>

<script>
export default {
  name: 'single',
  data () {
    return {
      singleMsg: 'Single Template'
    }
  }
}
</script>
