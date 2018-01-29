<template>
      <router-view></router-view> 
</template>

<script>
      import { mapActions } from 'vuex'
      export default {
            name: 'app',
            mounted() {
                  this.getAll();
            },
            methods: {
                  ...mapActions(['getAll']),
            }
      };
</script>
