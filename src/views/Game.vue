<template>
  <div class="home">
    <Game v-if="gameName === 'randomWords'" :apiFunction="apiFunction" :isVideo=true></Game>
    <Game v-else-if="gameName === 'alphabet'" :apiFunction="apiFunction" :isVideo=false></Game>
  </div>
</template>

<script>
// @ is an alias to /src
import Game from '@/components/Game.vue'
import {getRandomWord, getRandomLetter} from '@/models/gameApi.js'

export default {
  name: 'Home',
  props:["gameName"],
  components: {
    Game
  },
  data(){
    return {}
  },
  computed:{
    apiFunction(){
      switch(this.gameName){
        case "alphabet":
          return getRandomLetter
        case "randomWords":
          return getRandomWord
        default:
          return getRandomWord
      }
    }
  },
  beforeMount() {
    console.log(this.gameName)
  }
}
</script>


<style scoped>
  .home{
    height: 100%;
    width: 100%;
  }


</style>
