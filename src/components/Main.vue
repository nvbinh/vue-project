<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Test Page Links</h2>
    <ul>
      <li>
        <router-link to="/test1">Test - 1</router-link>
      </li>
      <li>
        <router-link to="/test2">Test - 2</router-link>
      </li>
      <li>
        <router-link to="/test3">Test - 3</router-link>
      </li>
      <li>
        <router-link to="/test4">Test - 4</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'I-ON Communications Code Test '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
