<template>
  <div id="game">
    <div id="gameDiv">
      <video :src="mediaURL" autoplay controls></video>
      <input type="text" placeholder="Entrer votre mot ici" v-model="currentInput">
      <div class="buttons" >
        <button type="button" class="btn btn-success" v-on:click="validate">Valider</button>
      </div>
    </div>
    <div v-if="isFinish" id="endDiv" v-bind:class="{ resultBackgound: isFinish }">
      <div id="endDivSuccess" v-if="isCorrect">
        <p class="text-success result">Bravo !</p>
        <h2> Le mot est bien : </h2>
        <h1><strong>{{currentWord}}</strong></h1>
        <button type="button" class="btn btn-success" v-on:click="nextRound">Suivant</button>
      </div>
      <div id="endDivFailed" v-else>
        <p class="text-danger result">Dommage !</p>
        <h2> Le mot était : </h2>
        <h1><strong>{{currentWord}}</strong></h1>
        <button type="button" class="btn btn-success" v-on:click="nextRound">Suivant</button>
      </div>
    </div>
  </div>
</template>

<script>

import {getRandomWord} from "@/models/gameApi"

export default {
  name: "Game",
  beforeMount() {
    this.newWord()
    console.log("Media URL : ",this.mediaURL)
  },
  data(){
    return{
      isFinish: false,
      isCorrect: false,
      currentInput: "",
      currentWord: "",
    }
  },
  computed: {
    mediaURL: function(){
      console.log("env : ", process.env.VUE_APP_BACK_END_GET_FILE)
      console.log("env2 : ", this.currentWord)
      console.log(process.env.VUE_APP_BACK_END_GET_FILE + this.currentWord)
      return process.env.VUE_APP_BACK_END_GET_FILE + this.currentWord
    }
  },
  methods:{
    validate(){
      let userResponse = this.currentInput
      userResponse = userResponse.replace(/\s/g, '');
      this.isCorrect = userResponse === this.currentWord
      this.isFinish = true
    },
    async newWord(){
      getRandomWord().then((res) =>{
        this.currentWord = res
      })
    },
    nextRound(){
      getRandomWord().then((res) =>{
        this.currentWord = res
        this.isFinish = false;
      })
    }
  }

}
</script>

<style scoped lang="scss">
#game {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#gameDiv{
  width: 30%;
  min-height: 500px;
  min-width: 500px;
  *{
    margin-bottom: 10px;
  }
}

#endDiv{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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


.resultBackgound{
  background-color: grey;
  opacity: 0.9;
}

video{
  height: auto;
  width: 100%;
}

.result{
  font-size: 4rem
}

input{
  width: 100%;
}

</style>
