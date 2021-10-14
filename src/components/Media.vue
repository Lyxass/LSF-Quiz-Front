<template>
  <div id="media">
    <video v-if="isVideo" :src="mediaURL" autoplay controls loop muted></video>
    <img id="img" v-else :src="mediaURL">
  </div>
</template>

<script>
export default {
  name: "media",
  props:{
    isVideo : Boolean
  },
  computed: {
    mediaURL: function(){
      console.log("in media :" , this.isVideo)
      if(this.isVideo){
        return process.env.VUE_APP_BACK_END_GET_VIDEO + this.$store.state.gameStore.currentWord
      }
      else{
        return process.env.VUE_APP_BACK_END_GET_PICTURE + this.$store.state.gameStore.currentWord
      }

    }
  },
}
</script>

<style scoped>
  video, img{
    max-width: 70%
  }
</style>
