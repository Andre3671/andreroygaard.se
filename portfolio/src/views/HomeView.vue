<script setup>
import Intro from '../components/Intro.vue'
import Theicons from '../components/Icons.vue'
import projects from '../components/projects.vue'
</script>

<template>
  <main>
    <Intro />
    <Theicons/>
    <!-- <projects/> -->
  </main>
</template>
<style>
main{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  flex-direction: column;
}
</style>
