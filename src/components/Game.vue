<template>
  <div id="game">
    <div id="gameDiv">
      <video v-if="isVideo" :src="mediaURL" autoplay controls loop muted></video>
      <img id="img" v-else :src="mediaURL">
      <input type="text" placeholder="Entrer votre mot ici" v-model="currentInput">
      <div class="buttons" >
        <button type="button" class="btn btn-success" v-on:click="validate">Valider</button>
      </div>
    </div>
    <div v-if="isFinish" id="endDiv" class="resultBackgound">
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

export default {
  name: "Game",
  props:{
    isVideo : Boolean,
    apiFunction: Function
  },
  beforeMount() {
    this.newWord()
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
      if(this.isVideo){
        return process.env.VUE_APP_BACK_END_GET_VIDEO + this.currentWord
      }
      else{
        return process.env.VUE_APP_BACK_END_GET_PICTURE + this.currentWord
      }

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
      this.apiFunction().then((res) =>{
        this.currentWord = res
      })
    },
    nextRound(){
      this.apiFunction().then((res) =>{
        this.currentWord = res
        this.isFinish = false;
        this.currentInput = "";
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
  width: 90%;
  min-height: 300px;
  min-width: 200px;
  max-width: 80%;
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


.resultBackgound{
  background-color: grey;
  opacity: 0.9;
}

video{
  height: auto;
  width: 100%;
  max-height: 80%;
}

.result{
  font-size: 4rem
}

input{
  width: 100%;
}

#img{
  max-width: 30%;
}

</style>
