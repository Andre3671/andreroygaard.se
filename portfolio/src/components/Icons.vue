<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

</script>
<template>
  <div class="iconcontainer">
    
      <a href="https://www.linkedin.com/in/andre-roygaard/" class="icon"><FontAwesomeIcon :icon="['fab', 'linkedin']" size="2xl" /> </a>
      <a href="https://github.com/Andre3671" class="icon"><FontAwesomeIcon :icon="['fab', 'github']" size="2xl" /> </a>
    
  </div>
</template>

<style scoped>
.iconcontainer{
  display: flex;
  justify-content: space-between;
  width: 10%;
  margin-top: 1rem;
}
.icon{
  color: whitesmoke;
}
.icon:hover{
  color: green;
}
</style>
