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
import {getRandomFromApi} from '@/models/gameApi.js'

export default {
  name: 'Home',
  props: ["gameName"],
  components: {
    Game
  },
  methods: {
    getNewWord() {
      return getRandomFromApi(this.apiURL).then((res) => {
        this.setCurrentWord(res)
      });
    },
    setCurrentWord(value) {
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
        this.isVideo = true;
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
