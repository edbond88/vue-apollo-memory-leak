<template>
  <div class="test-many">
    <div v-for="post in list" :key="post.uuid">{{post.comment}}</div>
  </div>
</template>

<script>
// import { gql } from "@apollo/client";

export default {
  name: "TestMany",

  data() {
    return {
      list: this.getNodes()
    };
  },

  // apollo: {
  //   countries: {
  //     query: gql`
  //       query Countries {
  //         countries {
  //           name
  //         }
  //       }
  //     `,
  //   }
  // },

  destroyed() {
    // console.log('md', this);
    // this.$off();
    // apolloClient.cache.evict({ fieldName: 'themes' });
    // apolloClient.cache.evict({ id: 'ROOT_QUERY', fieldName: 'themes' });
    // apolloClient.cache.gc();
    // delete this.themes;
  },

  methods: {
    getNodes() {
      const count = 100;
      let list = [];
      for (let i = 0; i < count; i++) {
        const uuid = Math.random();
        list.push({
          uuid,
          comment: `${uuid} - lorem`
        });
      }

      return list;
    },

    handleClick(e) {
      console.log(e);
    }
  }
};
</script>
