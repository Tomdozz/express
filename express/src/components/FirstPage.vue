<template>
  <div>
    <Navigation></Navigation>
    <div id="container">
      <!-- <div class="backimage"> -->
      <!-- <img src="../assets/netset-57.jpg" alt="backdrop" /> -->

      <!-- <div id="scene">
        <div data-depth="0.2" class="parallax1">My first Layer!</div>
        <div data-depth="0.6" class="parallax2">My second Layer!</div>
      </div> -->
      <ul id="scene">
        <li class="layer">
          <div class="birds">yo</div>
        </li>
        <li class="layer">
          <div class="birds1">yo</div>
        </li>
      </ul>

      <!-- </div>
      <div class="mainContent">
        <h2 class="title-sm">Tom Andersson</h2>
        <h1 class="title-bg">LifeArray</h1>
      </div> -->
    </div>
  </div>
</template>

<script>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.layer {
  position: absolute;
  display: block;
  left: 100px;
  top: 100px;
}
.birds {
  background-image: url(https://raw.githubusercontent.com/burlakeugene/assets/master/eugeneburlak/layer-2.png);
}
.birds1 {
  background-image: url(https://raw.githubusercontent.com/burlakeugene/assets/master/eugeneburlak/layer-1.png);
}

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
.parallax1 {
  background-image: url(https://raw.githubusercontent.com/burlakeugene/assets/master/eugeneburlak/layer-2.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.parallax2 {
  /* background-image: url(http://elikirk.com/demos/liquipel/images/water-layer-2.png); */
  background-image: url(https://raw.githubusercontent.com/burlakeugene/assets/master/eugeneburlak/layer-1.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
