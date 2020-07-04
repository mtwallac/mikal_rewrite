<template>
  <div id="app">
    <div id="bg"></div>
    <header class="noselect" id="header">
      <h1>Michael Wallace</h1>
      <p>Developer  •  Techie  •  Mastermind</p>
    </header>
    <ul class="icons">
      <li><a target="_blank" href="https://github.com/mtwallac"><font-awesome-icon :icon="['fab', 'github']" size="3x" /></a></li>
      <li><a target="_blank" href="https://www.linkedin.com/in/michael-wallace-81004212b/"><font-awesome-icon :icon="['fab', 'linkedin-in']" size="3x" /></a></li>
      <li><a href="#"><font-awesome-icon :icon="['far', 'folder-open']" size="3x" /></a></li>
    </ul>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">

@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,900");
@import url('assets/css/animations.scss');

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
  
}

#header {
  display: block;
  -moz-animation: header 1s 2.25s forwards;
  -webkit-animation: header 1s 2.25s forwards;
  -ms-animation: header 1s 2.25s forwards;
  animation: header 1s 2.25s forwards;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-transform: translate3d(0,0,0);
  -webkit-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  cursor: default;
  display: inline-block;
  opacity: 0;
  position: relative;
  text-align: center;
  top: 9em;
  color: white;
  margin: auto;
  
  h1 {
    font-size: 4.35em;
    font-weight: 900;
    letter-spacing: -0.035em;
    line-height: 1em;
  }
  p {
    font-size: 1.25em;
    margin: 0.75em 0 0.25em 0;
    opacity: 0.75; 
  }
}

.icons {
  position: relative;
  top: 10em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
  list-style-type: none;
  color: white;

  li {
    cursor: pointer;
    padding-left: 10px;
    padding-right: 10px;

    a {
      color: white;
    }
  }
}

#bg {
  -moz-animation: bg 60s linear infinite;
  -webkit-animation: bg 60s linear infinite;
  -ms-animation: bg 60s linear infinite;
  animation: bg 60s linear infinite;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-transform: translate3d(0,0,0);
  -webkit-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  background: #348cb2 url('assets/img/bg.jpg') bottom left;
  background-repeat: repeat-x;
  height: 100%;
  width: 6750px;
  left: 0;
  opacity: 1;
  position: fixed;
  top: 0;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

</style>
