<template>
  <div>

  </div>
</template>

<script>
import genListAvailableWords from "@/models/video.js"

export default {
  name: "Game",
  beforeCreate() {
    console.log(process.env.VUE_APP_MEDIA_PATH)
    console.log(genListAvailableWords)
  }

}
</script>

<style scoped>

</style>
