<template>
  <div class="icon-wrapper">
    <font-awesome-icon :icon="favIcon" size="2x"/>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  props: {
    favIcon: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
