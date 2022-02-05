<template>
  <div id="inputContainer">
    <input class="inputDiv" type="text" placeholder="Entrer votre mot ici" v-model="currentInput" v-on:keyup.enter="validate">
  </div>
</template>

<script>
export default {
  name: "TextGame",
  data(){
    return{
    }
  },
  methods:{
    formatString(str){
      str = str.toLowerCase()
      str = str.replace(/\s/g, '');
      str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      return str
    },
    validate(){
      let userResponse = this.formatString(this.currentInput)
      let currentWord = this.formatString(this.currentWord)
      console.log("La réponse saisie :" , userResponse)
      console.log("la bonne reponse : ", this.currentWord)

      this.$store.commit("setIsCorrect", userResponse === currentWord)
      this.$store.commit("setIsFinish", true)
    },
  },
  computed: {
    currentInput: {
      get () {
        return this.$store.state.gameStore.currentInput
      },
      set (value) {
        this.$store.commit("setCurrentInput", value)
      }
    },
    currentWord(){
      return this.$store.state.gameStore.currentWord
    }
  }
}
</script>

<style scoped lang="scss">

#inputContainer {
  position: absolute;
  bottom: 20px;
  left:0;
  width: 100%;
  padding: 2%;
  //background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inputDiv{
  border-radius: 10px;
  background-color:grey;
  opacity: 0.9;
  width: 100%;
  color: white;
  text-align: center;
  height: 40px;
  max-width: 500px;

}

.inputDiv::-webkit-input-placeholder{
    color:white;
  }

</style>
