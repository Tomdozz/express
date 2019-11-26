<template>
  <div>
    <Navigation></Navigation>
    <div class="main">
      <div class="backimage">
        <img src="../assets/netset-57.jpg" alt="backdrop" />
      </div>
      <div class="mainContent">
        <h2 class="title-sm">Tom Andersson</h2>
        <h1 class="title-bg">LifeArray</h1>
      </div>
    </div>
  </div>
</template>

<script>
// import Navigation from "./Navigation";
export default {
  name: "FirstPage",
    data() {
return {};
  }
  // components: {
  //   Navigation
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
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
.main{
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
