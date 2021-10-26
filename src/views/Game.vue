<template>
  <div class="home">
    <Game v-if="gameName === 'randomWords' " @newRound="getNewWord"
          :isVideo="isVideo"></Game>
    <Game v-else-if="gameName === 'alphabet'" @newRound="getNewWord"
          :isVideo="isVideo"></Game>
    <Game v-else @newRound="getNewWord"
          :isVideo="isVideo"></Game>
  </div>
</template>

<script>
// @ is an alias to /src
import Game from '@/components/Game.vue'
import {getRandomFromApi} from '@/services/gameApi.js'

export default {
  name: 'Home',
  props: {
    gameName: String
  },
  components: {
    Game
  },
  methods: {
    getNewWord() {
      return getRandomFromApi(this.apiURL).then((res) => {
        if (res === undefined) {
          console.log("Unable to get the word from : ", this.apiURL)
        }
        this.setCurrentWord(res)
      });
    },
    setCurrentWord(value) {
      console.log("new word")
      this.$store.commit("setCurrentWord", value.toLowerCase())
      this.$store.commit("setIsFinish", false)
      this.$store.commit("setCurrentInput", "")
    }
  },
  data() {
    return {
      isVideo: false,
      apiURL: ""
    }
  },
  computed: {},
  beforeMount() {
    switch (this.gameName) {
      case "alphabet":
        this.isVideo = false;
        this.apiURL = process.env.VUE_APP_BACK_END_BASE_URL + "game/random-letter"
        break;
      case "randomWords":
        this.isVideo = true;
        this.apiURL = process.env.VUE_APP_BACK_END_BASE_URL + "game/random-word"
        break;
      default:
        console.log("default")
        this.isVideo = true;
        this.apiURL = process.env.VUE_APP_BACK_END_BASE_URL + "game/random-word"
        break;
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
