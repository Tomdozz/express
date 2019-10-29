<template>
  <!-- <div class="bg">
  </div> -->
<div :style="{ backgroundImage: `url('${image}')` }"></div>

</template>

<script>

export default {
  name: "FirstPage",
  data() {
    return {
      // image: 'static/assets/ig-1.jpg'
      image: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  /* The image used */
  background-image: url("/static/assets/ig-1.jpg");

  /* Full height */
  height: 100%;
  width: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
</style>
