<template>
    <div class="w-full h-auto">
        <div class="w-8 h-16 bg-blue-500 p-4">Hussam</div>
        <div class="w-8 h-16 bg-blue-500">Hussam</div>
        <div class="w-8 h-16 bg-blue-500">Hussam</div>
        <div class="w-8 h-16 bg-blue-500">Hussam</div>
        <div class="w-8 h-16 bg-blue-500">Hussam</div>
        <div class="w-8 h-16 bg-blue-500">Hussam</div>
        <div class="w-8 h-16 bg-blue-500">Hussam</div>
        <div class="w-8 h-16 bg-blue-500">Hussam</div>
        <div class="w-8 h-16 bg-blue-500">Hussam</div>
        <div class="w-8 h-16 bg-blue-500">Hussam</div>
        <div class="w-8 h-16 bg-blue-500">Hussam</div>
        <div class="w-8 h-16 bg-blue-500">Hussam</div>
        <div class="w-8 h-16 bg-blue-500">Hussam</div>
        <div class="w-8 h-16 bg-blue-500">Hussam</div>
        <div class="w-8 h-16 bg-blue-500">Hussam</div>
        <img id="s1" class="w-0 h-[200px] m-auto" :src="img">
        <img id="s2" class="w-0 h-[200px] m-auto" :src="img">
        <img id="s3" class="w-0 h-[200px] m-auto" :src="img">
        <img id="s4" class="w-0 h-[200px] m-auto" :src="img">
        <img id="s5" class="w-0 h-[200px] m-auto" :src="img">
        </div>
</template>
<script>
export default {
    data(){
        return{
              img:require('../assets/japan.jpg'),
              loaded:false
        }
    },
    mounted () {
    window.addEventListener('scroll', this.onLoaded);
  },
    methods :{
      onLoaded(){
          let page=window.pageYOffset
          console.log(page)
          let s1=document.getElementById("s1").getBoundingClientRect().top
          let s2=document.getElementById("s2").getBoundingClientRect().top
          let s3=document.getElementById("s3").getBoundingClientRect().top
          let s4=document.getElementById("s4").getBoundingClientRect().top
          let s5=document.getElementById("s5").getBoundingClientRect().top
          console.log(s1)
          if(page-450 >=s1){
              document.getElementById("s1").classList.remove("w-0")
              document.getElementById("s1").classList.add("animate__animated", "animate__fadeInLeft", "animate__slow","w-[200px]")
          }
          if(page-450 >=s2){
              document.getElementById("s2").classList.remove("w-0")
              document.getElementById("s2").classList.add("animate__animated" ,"animate__fadeInLeft" ,"animate__slow","w-[200px]")
          }
          if(page-450 >=s3){
              document.getElementById("s3").classList.remove("w-0")
              document.getElementById("s3").classList.add("animate__animated" ,"animate__fadeInLeft" ,"animate__slow","w-[200px]")
          }
          if(page-450 >=s4){
              document.getElementById("s4").classList.remove("w-0")
              document.getElementById("s4").classList.add("animate__animated" ,"animate__fadeInLeft" ,"animate__slow","w-[200px]")
          }
          if(page-450 >=s5){
              document.getElementById("s5").classList.remove("w-0")
              document.getElementById("s5").classList.add("animate__animated" ,"animate__fadeInLeft" ,"animate__slow","w-[200px]")
              window.removeEventListener('scroll', this.onLoaded);
          }


      },
    
    }
}
</script>










