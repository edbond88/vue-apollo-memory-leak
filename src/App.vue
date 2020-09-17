<template>
  <div id="app">
    <header class="test-nav">
      <nav>
        <!-- <button @click="handleGc">cache.gc()</button> -->
        <button @click="showValue = 'empty'">show empty</button>
        <button @click="showValue = 'many'">show many</button>
      </nav>
    </header>
    <div>
      <TestEmpty v-if="showValue === 'empty'"/>
      <TestMany v-else-if="showValue === 'many'"/>
    </div>
  </div>
</template>

<script>
import TestEmpty from "./TestEmpty";
import TestMany from "./TestMany";

export default {
  name: "App",
  components: { TestEmpty, TestMany },
  data() {
    return {
      showValue: ""
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
