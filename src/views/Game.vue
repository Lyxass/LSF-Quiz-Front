<template>
  <div class="home">
    <Game v-if="gameName === 'randomWords'" @newRound="getNewWord"
          :isVideo="isVideo" :useAlphabeticKeyboard="useAlphabeticKeyboard"></Game>
    <Game v-else-if="gameName === 'alphabet'" @newRound="getNewWord"
          :isVideo="isVideo" :useAlphabeticKeyboard="useAlphabeticKeyboard"></Game>
  </div>
</template>

<script>
// @ is an alias to /src
import Game from '@/components/Game.vue'
import {getRandomWord, getRandomLetter} from '@/models/gameApi.js'

export default {
  name: 'Home',
  props: ["gameName"],
  components: {
    Game
  },
  methods: {
    getNewWord() {
      switch (this.gameName) {
        case "alphabet":
          return getRandomLetter().then((res) =>{
            this.setCurrentWord(res)
          });
        default:
          return getRandomWord().then((res) =>{
            this.setCurrentWord(res)
          });
      }
    },
    setCurrentWord(value){
        this.$store.commit("setState", {stateToUpdate:"currentWord", newValue:value.toLowerCase()})
        this.$store.commit("setState", {stateToUpdate:"isFinish", newValue:false})
        this.$store.commit("setState", {stateToUpdate:"currentInput", newValue:""})
    }
  },
  data() {
    return {
      isVideo: false,
      useAlphabeticKeyboard: false,
    }
  },
  beforeCreate() {

  },
  computed: {},
  beforeMount() {
    switch (this.gameName) {
      case "alphabet":
        this.isVideo = false;
        this.useAlphabeticKeyboard = false;
        break;
      case "randomWords":
        this.isVideo = true;
        this.useAlphabeticKeyboard = false;
        break;
      default:
        this.isVideo = true;
        this.useAlphabeticKeyboard = false;
        break
    }
  }
}

</script>


<style scoped>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
