<template>
  <div id="gameContainer">
    <router-link to="/" id="backToMenu"> ← </router-link>
    <Media :isVideo=isVideo> </Media>
    <TextGame v-if="!useAlphabeticKeyboard"></TextGame>
    <div v-if="isFinish" id="endDiv" class="resultBackgound">
      <div id="endDivSuccess">
        <p class="text-success result" v-if="isCorrect" >Bravo !</p>
        <p class="text-danger result" v-else >Dommage !</p>
        <h2 v-if="isCorrect"> La lettre était bien : </h2>
        <h2 v-else> La lettre était : </h2>
        <h1><strong>{{currentWord}}</strong></h1>
        <button type="button" class="btn btn-success" v-on:click="nextRound">Suivant</button>
      </div>
    </div>
  </div>
</template>

<script>
import Media from '@/components/Media.vue'
import TextGame from '@/components/input/TextGame.vue'

export default {
  name: "Game",
  components: {
    Media,TextGame
  },
  props:["isVideo","useAlphabeticKeyboard", "apiGetFunction"],
  beforeMount() {
    this.nextRound()
  },
  methods:{
    nextRound(){
      this.$emit('newRound')
    }
  },
  computed:{
    isFinish(){
      return this.$store.state.gameStore.isFinish
    },
    isCorrect(){
      return this.$store.state.gameStore.isCorrect
    },
    currentWord(){
      return this.$store.state.gameStore.currentWord
    },
  }
}
</script>

<style scoped>

#endDiv{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}

#endDivSuccess, #endDivFailed{
  width: 30%;
  min-height: 500px;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

#gameContainer{
  min-height: 500px;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.resultBackgound{
  background-color: grey;
  opacity: .9;
}

#backToMenu{
  position: absolute;
  top:0;
  left: 0;
  color: white;
  border-radius: 10px;
  background-color: grey;
  margin: 10px;
  padding: 10px;
  width: 50px;
  height: 45px;
  text-decoration: none;
}
</style>
