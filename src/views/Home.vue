<template>
  <div id="home">
    <div class="menu">
      <h1> LSF Game !</h1>
      <router-link to="/game/randomWords"> Jeu </router-link>
      <router-link to="/game/alphabet"> Alphabet LSF </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

#home{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.centeredContent{

}
</style>
