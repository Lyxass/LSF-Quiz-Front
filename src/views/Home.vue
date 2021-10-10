<template>
  <div class="home">
    <Game></Game>
  </div>
</template>

<script>
// @ is an alias to /src
import Game from '@/components/Game.vue'

export default {
  name: 'Home',
  components: {
    Game
  }
}
</script>


<style scoped>
  .home{
    height: 100%;
    width: 100%;
  }


</style>
