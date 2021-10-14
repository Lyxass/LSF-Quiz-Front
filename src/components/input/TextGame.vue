<template>
  <div id="inputContainer">
    <input type="text" placeholder="Entrer votre mot ici" v-model="currentInput" v-on:keyup.enter="validate">
    <div class="buttons" >
      <button type="button" class="btn btn-success" v-on:click="validate">Valider</button>
    </div>
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
    validate(){
      let userResponse = this.currentInput
      userResponse = userResponse.replace(/\s/g, '');
      console.log("La réponse saisie :" , userResponse)
      console.log("la bonne reponse : ", this.currentWord)

      this.$store.commit("setState", {stateToUpdate:"isCorrect", newValue:userResponse === this.currentWord})
      this.$store.commit("setState", {stateToUpdate:"isFinish", newValue:true})
    },
  },
  computed: {
    currentInput: {
      get () {
        return this.$store.state.gameStore.currentInput
      },
      set (value) {
        this.$store.commit("setState", {stateToUpdate:"currentInput", newValue:value})
      }
    },
    currentWord(){
      return this.$store.state.gameStore.currentWord
    }
  }
}
</script>

<style scoped>

</style>
