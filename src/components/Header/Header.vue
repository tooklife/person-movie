<template>
  <mt-header fixed
             title="私人影院">
    <slot></slot>
  </mt-header>
</template>

<script>
import '../../../node_modules/mint-ui/lib/style.css'
import Vue from 'vue';

export default {
  name: 'Header'
}
</script>

<style scoped>
.mint-header {
  background-color: #f03d37;
  z-index: 1;
}
</style>
