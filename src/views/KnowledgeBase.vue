<template>
    <div class="header">
        <header-strip></header-strip>
        <br/>
      <Navbar></Navbar>
      <br />
      <h1>{{ header }}</h1>
      <p style="color: #fff">{{responseData}}</p>
    </div>
  
</template>

<script>
import Navbar from '.././components/Navbar'
import HeaderStrip from '../components/HeaderStrip.vue'
export default {
  name: 'HelloWorld',
  components: {
    Navbar,
    HeaderStrip
  },
  data() {
    return {
      responseData: {},
      header: ""
    }
  },
  methods: {
    async getPage() {
      // const butter = Butter('683e8c895d9201fa3f738a50cb6e545e69ebcce8');
      const url = "http://staging.buttercms.com/v2/pages/*/knowledge-base/?preview=1&auth_token=683e8c895d9201fa3f738a50cb6e545e69ebcce8"
        const response = await fetch(url)
         this.responseData = await response.json();

         this.header = this.responseData.data.fields.hero.headline
        
        console.log(this.responseData)
      }
  },
  created(){
    return this.getPage()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-image: url(https://buttercms.com/static/v2/images/intro-bg-2.4af98db9356f.jpg); 
  min-height: 150px;
}
h1 {
    color: #fff;
    font-size: 2em !important;
    margin-top: 50px;
    margin-bottom: 50px;
}
h3 {
  margin: 40px 0 0;
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
