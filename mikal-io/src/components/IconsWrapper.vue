<template>
  <div class="icons-wrapper">
    <ul class="icons">
      <li @click="navigate('https://github.com/mtwallac')">
        <Icon class="github" :fav-icon="['fab', 'github']"></Icon>
      </li>
      <li @click="navigate('https://www.linkedin.com/in/michael-wallace-81004212b/')">
        <Icon class="linkedin" :fav-icon="['fab', 'linkedin-in']"></Icon>
      </li>
      <li @click="navigate('mailto:mtwallace11@gmail.com?subject=Hello')">
        <Icon class="email" :fav-icon="['far', 'envelope']"></Icon>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from './Icon.vue'
export default {
  name: 'IconsWrapper',
  components: {
    Icon
  },
  methods: {
    navigate(URL) {
      window.open(URL, '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    list-style-type: none;
    color: white;
    transform: scale(0.8);
    margin-bottom: 10em;

    li {
      position: relative;
      cursor: pointer;
      margin-left: .5em;
      margin-right: .5em;
      border: solid 1px #fff;
      border-radius: 100%;
      padding: 1.6em;
      transition: all 0.3s ease-in-out;
      opacity: 0;
      -moz-animation: nav-icons 0.5s ease-in-out forwards;
        -webkit-animation: nav-icons 0.5s ease-in-out forwards;
        -ms-animation: nav-icons 0.5s ease-in-out forwards;
        animation: nav-icons 0.5s ease-in-out forwards;

      a {
        color: white;
      }
    }

    li:hover{
      background-color: rgba(255, 255, 255, 0.175);
      transform: scale(1.1);
    }
    li:nth-child(1) {
          -moz-animation-delay: 2.5s;
          -webkit-animation-delay: 2.5s;
          -ms-animation-delay: 2.5s;
          animation-delay: 2.5s; }
    li:nth-child(2) {
          -moz-animation-delay: 2.75s;
          -webkit-animation-delay: 2.75s;
          -ms-animation-delay: 2.75s;
          animation-delay: 2.75s; }
    li:nth-child(3) {
          -moz-animation-delay: 3s;
          -webkit-animation-delay: 3s;
          -ms-animation-delay: 3s;
          animation-delay: 3s; }
    li:nth-child(4) {
          -moz-animation-delay: 3.25s;
          -webkit-animation-delay: 3.25s;
          -ms-animation-delay: 3.25s;
          animation-delay: 3.25s; }
  }
</style>
