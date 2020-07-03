<template>
  <div id="app">
    <div id="bg"></div>
    <header id="header">
      <h1>Michael Wallace</h1>
      <p>Developer  •  Techie  •  Mastermind</p>
    </header>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,900");

body {
  margin: 0;
}

#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  text-align: center;
  color: #2c3e50;
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
}
  #header h1{
    font-size: 4.35em;
    font-weight: 900;
    letter-spacing: -0.035em;
    line-height: 1em;
  }
  #header p {
    font-size: 1.25em;
    margin: 0.75em 0 0.25em 0;
    opacity: 0.75; 
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

/* BACKGROUND IMAGE */
@-moz-keyframes bg {
  0% {
    -moz-transform: translate3d(0,0,0);
    -webkit-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0); }
  100% {
    -moz-transform: translate3d(-2250px,0,0);
    -webkit-transform: translate3d(-2250px,0,0);
    -ms-transform: translate3d(-2250px,0,0);
    transform: translate3d(-2250px,0,0); } }

@-webkit-keyframes bg {
  0% {
    -moz-transform: translate3d(0,0,0);
    -webkit-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0); }
  100% {
    -moz-transform: translate3d(-2250px,0,0);
    -webkit-transform: translate3d(-2250px,0,0);
    -ms-transform: translate3d(-2250px,0,0);
    transform: translate3d(-2250px,0,0); } }

@-ms-keyframes bg {
  0% {
    -moz-transform: translate3d(0,0,0);
    -webkit-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0); }
  100% {
    -moz-transform: translate3d(-2250px,0,0);
    -webkit-transform: translate3d(-2250px,0,0);
    -ms-transform: translate3d(-2250px,0,0);
    transform: translate3d(-2250px,0,0); } }

@keyframes bg {
  0% {
    -moz-transform: translate3d(0,0,0);
    -webkit-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0); }
  100% {
    -moz-transform: translate3d(-2250px,0,0);
    -webkit-transform: translate3d(-2250px,0,0);
    -ms-transform: translate3d(-2250px,0,0);
    transform: translate3d(-2250px,0,0); } }

@-moz-keyframes header {
  0% {
    -moz-transform: translate3d(0,1em,0);
    -webkit-transform: translate3d(0,1em,0);
    -ms-transform: translate3d(0,1em,0);
    transform: translate3d(0,1em,0);
    opacity: 0; }
  100% {
    -moz-transform: translate3d(0,0,0);
    -webkit-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    opacity: 1; } }

@-webkit-keyframes header {
  0% {
    -moz-transform: translate3d(0,1em,0);
    -webkit-transform: translate3d(0,1em,0);
    -ms-transform: translate3d(0,1em,0);
    transform: translate3d(0,1em,0);
    opacity: 0; }
  100% {
    -moz-transform: translate3d(0,0,0);
    -webkit-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    opacity: 1; } }

/* HEADER */
@-ms-keyframes header {
  0% {
    -moz-transform: translate3d(0,1em,0);
    -webkit-transform: translate3d(0,1em,0);
    -ms-transform: translate3d(0,1em,0);
    transform: translate3d(0,1em,0);
    opacity: 0; }
  100% {
    -moz-transform: translate3d(0,0,0);
    -webkit-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    opacity: 1; } }

@keyframes header {
  0% {
    -moz-transform: translate3d(0,1em,0);
    -webkit-transform: translate3d(0,1em,0);
    -ms-transform: translate3d(0,1em,0);
    transform: translate3d(0,1em,0);
    opacity: 0; }
  100% {
    -moz-transform: translate3d(0,0,0);
    -webkit-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    opacity: 1; } }

</style>
