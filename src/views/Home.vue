<template>
  <div id="home">
    <div class="menu">
      <img src="@/assets/logo_lsf.png">
      <div class="btnContainer">
        <router-link data-testid="randomWords" class="btn btn-success" to="/game/randomWords"> Tests sur environ 555 mots</router-link>
        <router-link data-testid="alphabet" class="btn btn-success" to="/game/alphabet"> Alphabet LSF </router-link>
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
  margin-top: 10px;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  height: 60%;
}

.btn{
  margin-top: 10px;
}

img{
  width: 50%;
}

.menu{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#title{

}


</style>
