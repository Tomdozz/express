<template>
  <div>
    <Navigation></Navigation>
    <div id="container">
      <!-- <div class="backimage"> -->
      <!-- <img src="../assets/netset-57.jpg" alt="backdrop" /> -->

      <div id="scene">
        <div data-depth="0.2">My first Layer!</div>
        <div data-depth="0.6">My second Layer!</div>
      </div>

      <!-- <div class="parallax">
        <div class="water water-layer4"></div>
        <div class="water water-layer3"></div>
        <div class="water water-layer2"></div>
        <div class="water water-layer1"></div>
      </div> -->

      <!-- </div>
      <div class="mainContent">
        <h2 class="title-sm">Tom Andersson</h2>
        <h1 class="title-bg">LifeArray</h1>
      </div> -->
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Parallax from 'parallax-js'
// import Navigation from "./Navigation";
export default {
  name: 'FirstPage',
  data() {
    return {}
  },
  // components: {
  //   Navigation
  // }
  mounted: function() {
    var scene = document.getElementById('scene')
    var parallaxInstance = new Parallax(scene)
    parallaxInstance.friction(0.2, 0.2)

    // var currentX = ''
    // var currentY = ''
    // var movementConstant = 0.015
    // $(document).mousemove(function(e) {
    //   if (currentX == '') currentX = e.pageX
    //   var xdiff = e.pageX - currentX
    //   currentX = e.pageX
    //   if (currentY == '') currentY = e.pageY
    //   var ydiff = e.pageY - currentY
    //   currentY = e.pageY
    //   $('.parallax div').each(function(i, el) {
    //     var movement = (i + 1) * (xdiff * movementConstant)
    //     var movementy = (i + 1) * (ydiff * movementConstant)
    //     var newX = $(el).position().left + movement
    //     var newY = $(el).position().top + movementy
    //     $(el).css('left', newX + 'px')
    //     $(el).css('top', newY + 'px')
    //   })
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.parallax {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  left: 0;
  background-image: url('../assets/netset-57-wide.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.water {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  background-repeat: no-repeat;
  background-position: top center;
}
.water-layer1 {
  /* background-image: url(http://elikirk.com/demos/liquipel/images/water-layer-1.png); */
  position: absolute;
  left: 15%;
  top: 100%;
  background-image: url(https://raw.githubusercontent.com/burlakeugene/assets/master/eugeneburlak/layer-2.png);
}
.water-layer2 {
  /* background-image: url(http://elikirk.com/demos/liquipel/images/water-layer-2.png); */
  background-image: url(https://raw.githubusercontent.com/burlakeugene/assets/master/eugeneburlak/layer-1.png);
}
.water-layer3 {
  /* background-image: url(http://elikirk.com/demos/liquipel/images/water-layer-3.png); */
  background-image: url('../assets/sony2.png');
}
.water-layer4 {
  /* background-image: url(http://elikirk.com/demos/liquipel/images/water-layer-3.png); */
}

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main {
  height: 100vh;
}
.mainContent {
  position: relative;
  top: 50%;
  left: 10%;
}
.backimage {
  position: fixed;
  width: 100vw;
  z-index: -5000;
}
.backimage img {
  width: 100%;
}
.title-sm {
  text-align: left;
}
.title-bg {
  text-align: left;
}
</style>
