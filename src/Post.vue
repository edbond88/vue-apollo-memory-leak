<template>
  <div class="post">
    {{post.comment}}
  </div>
</template>

<script>
export default {
  name: 'Post',

  props: {
    post: {
      type: Object,
      required: true
    },
  },
};
</script>

<style lang="scss"></style>
