<template>
  <div id="app">
    <div class="bg"></div>
    <Header class="header-component"></Header>
    <Icons class="icons-component"></Icons>
    <MyModal></MyModal>
  </div>
</template>

<script>
import Icons from './components/Icons.vue'
import Header from './components/Header.vue'
import MyModal from './components/MyModal.vue'
export default {
  name: 'App',
  data: function () {
    return {}
  },
  components: {
    Icons,
    Header,
    MyModal
  }
}
</script>

<style lang="scss">

@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,900");
@import url('assets/css/animations.scss');
@import url('assets/css/bg.scss');

body {
  margin: 0;
}

#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%; 
  -moz-animation: wrapper 3s forwards;
  -webkit-animation: wrapper 3s forwards;
  -ms-animation: wrapper 3s forwards;
  animation: wrapper 3s forwards;
}

.header-component {
  position: relative;
  top: 14em;
}
.icons-component {
  position: relative;
  top: 14em;
}

</style>
