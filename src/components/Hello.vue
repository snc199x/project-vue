<template>
  <div class="hello">
    <div class="box">
      <img src="../assets/open_logo.png" class="logo">
    </div>
    <router-link to='/index'>
      <div class="title">仕馨月子会所 ></div>
    </router-link>
        
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  }
}
</script>
<style>
  .hello{
    width: 100%;
    height: 1500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
  }
  a{
    text-decoration: none;
  }
  a:visited{
    color: black;
  }
  .hello .logo{
    border: 5px solid #eeeeee;
    border-radius: 100%;
    width: 200px;
    height: 200px;
    
  }
  .box{
    animation: jump 4s infinite ! important;
  }
  .title{
    font-size: 50px;
    margin-top: 100px;
    
  }
  @keyframes jump
  {
    0% {transform: translateY(0px);}
    25% {transform: translateY(-300px);}    
    50% {transform: translateY(0px);}
    75% {transform: translateY(-150px);}
    100% {transform: translateY(0px);}
  }

</style>

