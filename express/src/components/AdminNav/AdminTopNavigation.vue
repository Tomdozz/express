<template>
  <div id="navbar">
    <div class="search-wrapper">
      <label class="search" for="inpt_search">
        <input
          id="inpt_search"
          type="text"
          v-model="search"
          placeholder="Search"
        />
      </label>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
@import '../../assets/global.css';

#navbar {
  position: fixed;
  background-color: rgba(128, 128, 128, 0.171);
  width: 100%;
  height: var(--topnav-height);
}

p {
  margin-top: 30px;
}

/* maybe add rounded corners and move in from other nav */
.search-wrapper {
  position: relative;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
}
.search {
  display: inline-block;
  position: relative;
  height: 35px;
  width: 35px;
  box-sizing: border-box;
  margin: 0px 8px 7px 0px;
  padding: 7px 9px 0px 9px;
  border: 3px solid var(--icn-color);
  border-radius: 25px;
  transition: all 200ms ease;
  cursor: text;
}
.search:after {
  content: '';
  position: absolute;
  width: 3px;
  height: 20px;
  right: -5px;
  top: 21px;
  background: var(--icn-color);
  border-radius: 3px;
  transform: rotate(-45deg);
  transition: all 200ms ease;
}

.search.active,
.search:hover {
  width: 200px;
  margin-right: 0px;
}
.search:after {
  height: 0px;
}

input {
  width: 100%;
  border: none;
  box-sizing: border-box;
  font-family: Helvetica;
  font-size: 15px;
  color: inherit;
  background: transparent;
  outline-width: 0px;
}
</style>
