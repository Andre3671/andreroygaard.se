<script >
 import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  data() {
    return {
      words: ['utvecklare', 'backendutvecklare', 'fullstackutvecklare'],
      currentWord: 'utvecklare',
      currentIndex: 0,
    };
  },
  mounted() {
    this.startWordRotation();
  },
  methods: {
    startWordRotation() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.words.length;
        this.currentWord = this.words[this.currentIndex];
      }, 2000); // Byt ord varannan sekund
    },
  },
};
</script>

<template>
 
<img id="image" src="/src/assets/bild.jpg" />
 <h3 class="introtext" style="font-size: 25px;">Välkommen till min portfolio!</h3> 
<div id="textcontainer">
  <p class="introtext" > André  är en <span style="color: #006817;"><b>{{currentWord}}</b></span> som brinner för det han gör och älskar att ta sig an nya utmaningar</p>
</div>

  
</template>
<style>
#image{
  width: 400px;
  border-radius: 15rem;
}
.introtext{
  margin: 0 auto;
  font-family: "Roboto Condensed", sans-serif;
  color: whitesmoke;

}
#textcontainer{
  margin-top: 1.5rem;
  width: 400px;
  font-size: 20px;
  display: inline-block;
  justify-content: center;
}
</style>