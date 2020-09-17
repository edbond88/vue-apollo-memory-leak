<template>
  <div id="app">
    <header class="test-nav">
      <nav>
        <button @click="showValue = 'empty'">show empty</button>
        <button @click="showValue = 'many'">show many</button>
        <button @click="showValue = 'many-apollo'">show many with apollo</button>
        <br>
        <button @click="handleGc">Clear Graphql cache</button>
      </nav>
    </header>
    <div>
      <TestEmpty v-if="showValue === 'empty'"/>
      <TestMany v-else-if="showValue === 'many'"/>
      <TestManyWithApollo v-else-if="showValue === 'many-apollo'"/>
    </div>
  </div>
</template>

<script>
import TestEmpty from "./TestEmpty";
import TestMany from "./TestMany";
import apolloClient from "./apolloClient";
import TestManyWithApollo from "./TestManyWithApollo";

export default {
  name: "App",
  components: { TestEmpty, TestMany, TestManyWithApollo },
  data() {
    return {
      showValue: "empty"
    };
  },
  methods: {
    handleGc() {
      apolloClient.cache.evict({ fieldName: 'countries' });
      apolloClient.cache.gc();
    }
  },
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
