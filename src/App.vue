<template>
  <div id="app">
    <knowledge-base></knowledge-base>
  </div>
</template>

<script>
import KnowledgeBase from './views/KnowledgeBase.vue';

export default {
  name: 'App',
  components: {
    KnowledgeBase,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
