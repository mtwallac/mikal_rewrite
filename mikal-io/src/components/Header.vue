<template>
  <div class="header-wrapper">
    <header class="noselect" id="header">
      <h1>Michael Wallace</h1>
      <p>Developer  •  Techie  •  Mastermind</p>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
    text-align: center;
    color: white;
    margin: auto;
    
    :nth-child(1) {
      -moz-animation-delay: 2.5s;
      -webkit-animation-delay: 2.5s;
      -ms-animation-delay: 2.5s;
      animation-delay: 2.5s; 
    }
    h1 {
      font-size: 4.35em;
      font-weight: 900;
      letter-spacing: -0.035em;
      line-height: 1em;
      margin-bottom: 0;
    }
    p {
      font-size: 1.25em;
      margin: 0.75em 0 0.25em 0;
      opacity: 0.75; 
    }
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
