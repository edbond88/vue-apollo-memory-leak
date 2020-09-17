<template>
  <div class="test-empty">
    <h1>Empty</h1>
    <button @click="click">Click</button>
  </div>
</template>

<script>
export default {
  name: "TestEmpty",

  methods: {
    click() {
      console.log(1);
    }
  }
};
</script>
