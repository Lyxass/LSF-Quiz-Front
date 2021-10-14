<template>
  <div id="home">
    <div class="menu">
      <h1 id="title"> LSF Game !</h1>
      <div class="btnContainer">
        <router-link class="btn btn-success" to="/game/randomWords"> Jeu </router-link>
        <router-link class="btn btn-success" to="/game/alphabet"> Alphabet LSF </router-link>
      </div>
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

.btnContainer{
  display: flex;
  flex-direction: column;
  height: 60%;
}

.btn{
  margin-top: 10px;
}

#title{

}


</style>
