<template>
  <div class="w-full h-full">
    <div class="w-full h-[700px] relative">
      <div id="sorr" class="absolute top-[50%] left-[36%] flex w-0 items-center flex-col justify-center">
        <div class="font-bold text-5xl text-yellow-600">Beautiful & Responsive Website </div>
            <div class=" flex flex-row">
            <a href="#" class="mr-8"><i class="fa fa-facebook-square text-yellow-600 hover:text-red-600 text-3xl"></i></a>
            <a href="#" class="mr-8"><i class="fa fa-github-square text-yellow-600 hover:text-red-600 text-3xl"></i></a>
            <a href="#" class="mr-8"><i class="fa fa-instagram text-yellow-600 hover:text-red-600 text-3xl"></i></a>
            <a href="#" class="mr-8"><i class="fa fa-twitter-square text-yellow-600 hover:text-red-600 text-3xl"></i></a>
            <a href="#" class="mr-8"><i class="fa fa-paypal text-yellow-600 hover:text-red-600 text-3xl"></i></a>
            </div>
      </div>
      <div class="bg-fixed bg-cover w-full h-full" :style='{ backgroundImage: `url(${img})` }'>
      </div>
    </div>
<div class="flex flex-col space-y-[25px] w-full">


            <div class="relative h-[350px] w-full overflow-hidden my-[100px] scroll-smooth">
                <div class="slide-track absolute flex-row h-full">
                <img :src="im.img" v-for="im in image" :key="im.id" class="h-full hover:scale-[1.1] my-4 ml-[30px] w-[500px]">
            </div>
        </div>

<div class="w-full flex flex-row justify-between h-[500px] mt-[100px] p-4 mb-[100px]">
  <!--left-->
  <div class="w-[48%] p-4">
<div>
  <p class="text-yellow-500 text-2xl">About Us</p>
  <p class="text-3xl font-bold text-gray-700">A Few Words Our Company</p>
  <p class="text-xl">
   Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip
  ex ea commodo consequat. Duis aute irure dolor in reprehenderit
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
  officia deserunt mollit anim id est laborum</p>
  <div class=" flex flex-row">
            <a href="#" class="mr-8"><i class="fa fa-facebook-square text-yellow-600 hover:text-gray-900 text-2xl"></i></a>
            <a href="#" class="mr-8"><i class="fa fa-github-square text-yellow-600 hover:text-gray-900 text-2xl"></i></a>
            <a href="#" class="mr-8"><i class="fa fa-instagram text-yellow-600 hover:text-gray-900 text-2xl"></i></a>
            <a href="#" class="mr-8"><i class="fa fa-twitter-square text-yellow-600 hover:text-gray-900 text-2xl"></i></a>
            <a href="#" class="mr-8"><i class="fa fa-paypal text-yellow-600 hover:text-gray-900 text-2xl"></i></a>
            </div>
</div>
  </div>
<!--right-->
  <div class="w-[48%] group ml-[50px] p-4">   
     <div class="w-[300px] h-[300px] absolute transition duration-500 translate-y-[40px] group-hover:translate-y-[1px]"><img :src="img" class="w-full h-full"></div>
     <div class="w-[300px] h-[300px] absolute translate-y-[100px] translate-x-[100px]"><img :src="img2" class="w-full h-full"></div>
  </div>
</div>

<div class="w-full h-[300px] mt-4 flex flex-row justify-between">

  <div class="p-4 w-[48%]">
  <p class="text-xl text-yellow-500 font-bold">Service</p>
  <p class="text-3xl text-gray-700 font-bold">We Provide You With The Best Services And Great Quality In A Short Period Of Time</p>
</div>

<div class="p-4 w-[48%] ml-[50px]">
  <p class="text-xl">A Few Words Our Company
   Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip
  ex ea commodo consequat. Duis aute irure dolor in reprehenderit
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
  officia deserunt mollit anim id est laborum</p>
</div>

</div>

<div class="w-full">
<div class="w-full mt-4 px-[25px] flex flex-row justify-between">
  <div class="w-[30%] ml-1 relative transition group">
    <div class="flex items-center justify-center absolute top-[-17px] left-[-17px] group-hover:left-[415px] duration-500 z-10 overflow-visible bg-yellow-600 w-[40px] h-[40px] rounded-full">
      <div class=" flex items-center justify-center bg-white rounded-full w-[80%] h-[80%]">
        <div class="bg-yellow-600 rounded-full w-[80%] h-[80%]"></div>
      </div>
    </div>
    <img :src="img2" class="w-full h-full">
    <div class="bg-gray-600 bg-opacity-75 p-2  overflow-hidden absolute duration-500 bottom-0 group-hover:h-[160px] w-full h-[100px]">
      <p class="text-yellow-600 font-bold text-xl mb-2">Front End</p>
      <p class="text-white text-lg mb-2">consequat. Duis aute irure dolor in reprehenderit
  in voluptate velit esse cillum dolore eu fugiat nulla</p>
  <button class="bg-yellow-600 text-white w-[120px] text-lg">Read More +</button>
    </div>
  </div>
  <div class="w-[30%] ml-1 relative transition group">
    <div class="flex items-center justify-center absolute top-[-17px] left-[-17px] group-hover:left-[415px] duration-500 z-10 overflow-visible bg-yellow-600 w-[40px] h-[40px] rounded-full">
      <div class=" flex items-center justify-center bg-white rounded-full w-[80%] h-[80%]">
        <div class="bg-yellow-600 rounded-full w-[80%] h-[80%]"></div>
      </div>
    </div>
    <img :src="img2" class="w-full h-full">
    <div class="bg-gray-600 bg-opacity-75 p-2  overflow-hidden absolute duration-500 bottom-0 group-hover:h-[160px] w-full h-[100px]">
      <p class="text-yellow-600 font-bold text-xl mb-2">Front End</p>
      <p class="text-white text-lg mb-2">consequat. Duis aute irure dolor in reprehenderit
  in voluptate velit esse cillum dolore eu fugiat nulla</p>
  <button class="bg-yellow-600 text-white w-[120px] text-lg">Read More +</button>
    </div>
  </div>
  <div class="w-[30%] ml-1 relative transition group">
    <div class="flex items-center justify-center absolute top-[-17px] left-[-17px] group-hover:left-[415px] duration-500 z-10 overflow-visible bg-yellow-600 w-[40px] h-[40px] rounded-full">
      <div class=" flex items-center justify-center bg-white rounded-full w-[80%] h-[80%]">
        <div class="bg-yellow-600 rounded-full w-[80%] h-[80%]"></div>
      </div>
    </div>
    <img :src="img2" class="w-full h-full">
    <div class="bg-gray-600 bg-opacity-75 p-2  overflow-hidden absolute duration-500 bottom-0 group-hover:h-[160px] w-full h-[100px]">
      <p class="text-yellow-600 font-bold text-xl mb-2">Front End</p>
      <p class="text-white text-lg mb-2">consequat. Duis aute irure dolor in reprehenderit
  in voluptate velit esse cillum dolore eu fugiat nulla</p>
  <button class="bg-yellow-600 text-white w-[120px] text-lg">Read More +</button>
    </div>
  </div>
</div>
<div class="text-right my-4 px-[25px]"><button class="bg-yellow-500 w-[200px] text-white p-2 font-bold text-lg group">More Service <i class="fa fa-long-arrow-right transition duration-200 group-hover:translate-x-[10px] text-white"></i></button></div>
</div>

<div class="w-full h-[750px] p-2 bg-gray-900">
  <div class="w-full flex flex-col space-y-3 justify-center items-center">
    <div class="text-white text-3xl mt-4 font-bold">Why Choose Us</div>
    <div class="text-white text-xl mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</div>
  </div>
  <div class="flex flex-row justify-between flex-wrap">
    <div class="flex flex-col justify-center w-[31%] h-[200px] mx-2">
      <div class="flex justify-center"><i class="fa fa-facebook-square text-yellow-600 hover:text-gray-900 text-3xl"></i></div>
      <div class="flex justify-center text-white text-2xl font-bold">Quick Result</div>
      <div class="flex justify-center text-sm text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
    </div>
        <div class="flex flex-col justify-center w-[31%] h-[200px] mx-2">
      <div class="flex justify-center"><i class="fa fa-usd text-yellow-600 hover:text-gray-900 text-3xl"></i></div>
      <div class="flex justify-center text-white text-2xl font-bold">Quick Result</div>
      <div class="flex justify-center text-sm text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
    </div>
        <div class="flex flex-col justify-center w-[31%] h-[200px] mx-2">
      <div class="flex justify-center"><i class="fa fa-headphones text-yellow-600 hover:text-gray-900 text-3xl"></i></div>
      <div class="flex justify-center text-white text-2xl font-bold">Quick Result</div>
      <div class="flex justify-center text-sm text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
    </div>
        <div class="flex flex-col justify-center w-[31%] h-[200px] mx-2">
      <div class="flex justify-center"><i class="fa fa-laptop text-yellow-600 hover:text-gray-900 text-3xl"></i></div>
      <div class="flex justify-center text-white text-2xl font-bold">Quick Result</div>
      <div class="flex justify-center text-sm text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
    </div>
        <div class="flex flex-col justify-center w-[31%] h-[200px] mx-2">
      <div class="flex justify-center"><i class="fa fa-clock-o text-yellow-600 hover:text-gray-900 text-3xl"></i></div>
      <div class="flex justify-center text-white text-2xl font-bold">Quick Result</div>
      <div class="flex justify-center text-sm text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
    </div>
        <div class="flex flex-col justify-center w-[31%] h-[200px] mx-2">
      <div class="flex justify-center"><i class="fa fa-hand-pointer-o text-yellow-600 hover:text-gray-900 text-3xl"></i></div>
      <div class="flex justify-center text-white text-2xl font-bold">Quick Result</div>
      <div class="flex justify-center text-sm text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
    </div>
  </div>
</div>

<div class="flex flex-row w-full h-[780px]">

  <div class="bg-yellow-500 px-[140px] py-4 w-[50%]">
    <div class="text-3xl font-bold mt-[40px]">We Are Specialized In Website Design And Development</div>
<div class="text-2xl font-bold mt-[35px]">And In Other Areas, Such As Designing Logos And Banners And Illustrations</div>
<div class="text-xl leading-loose mt-[35px]">quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
   deserunt mollit anim id est laborum.</div>
   <div class="mt-4"><button class="bg-gray-900 text-white w-[150px] p-2">Read more +</button></div>
  </div>

  <div class="flex flex-col space-y-2 justify-center p-[25px] w-[50%]">
    <div class="flex flex-row items-center h-[30%] border-b-4 border-gray-300">
    <div><i class="fa fa-facebook-square text-yellow-600 hover:text-gray-900 text-6xl"></i></div>
    <div>
      <div class="text-gray-700 text-3xl ml-2 font-bold">Winning Awards</div>
      <div class="text-lg ml-2">quis nostrud exercitation ullamco laboris nisi ut aliquip ex</div>
    </div>
     <div class="text-3xl font-bold ml-2">53+</div>
    </div>
    <div class="flex flex-row items-center h-[30%] ml-2 border-b-4 border-gray-300">
    <div><i class="fa fa-check-circle text-yellow-600 hover:text-gray-900 text-6xl"></i></div>
    <div>
      <div class="text-gray-700 text-3xl ml-2 font-bold">Successful</div>
      <div class="text-lg ml-2">quis nostrud exercitation ullamco laboris nisi ut aliquip ex</div>
    </div>
     <div class="text-3xl font-bold ml-2">53+</div>
    </div>
    <div class="flex flex-row items-center h-[30%] ml-2 border-b-4 border-gray-300">
    <div><i class="fa fa-smile-o text-yellow-600 hover:text-gray-900 text-6xl"></i></div>
    <div>
      <div class="text-gray-700 text-3xl ml-2 font-bold">Happy Clients</div>
      <div class="text-lg ml-2">quis nostrud exercitation ullamco laboris nisi ut aliquip ex</div>
    </div>
     <div class="text-3xl font-bold ml-2">53+</div>
    </div>
  </div>

</div>

<div class="flex flex-row w-full h-[700px]">
  <div class="bg-white px-[140px] py-4 w-[50%]">
    <div class="text-3xl font-bold mt-[40px]">We Are Specialized In Website Design And Development</div>
<div class="text-2xl font-bold mt-[35px]">And In Other Areas, Such As Designing Logos And Banners And Illustrations</div>
<div class="text-xl leading-loose mt-[35px]">quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
   deserunt mollit anim id est laborum.</div>
   <div class="mt-4"><button class="bg-gray-900 text-yellow-700 text-xl font-bold w-[150px] p-2">Read more +</button></div>
  </div>
  <!--sm-->
  <div class="bg-gray-900 px-[40px] w-[50%] flex justify-center h-full relative">
            <div class="absolute w-[100px] h-full left-0 flex items-center"><span id="prev" @click="prev" class="w-full flex items-center justify-center h-[50px] group"><i class="fa fa-angle-left text-5xl group-hover:text-yellow-500 duration-500 group-hover:translate-x-[-10px] font-bold text-white "></i></span></div>
        <div class="absolute w-[100px] h-full right-0 flex items-center"><span id="next" @click="next" class="w-full flex items-center justify-center h-[50px] group"><i class="fa fa-angle-right group-hover:text-yellow-500 duration-500 text-5xl group-hover:translate-x-[10px] font-bold text-white "></i></span></div>
   <div class="flex flex-row justify-center absolute items-center text-white h-full w-[60%] overflow-hidden">
     <div v-for="img in image" :key="img.id" class="mySlides flex flex-col animate__animated animate__flipInY animate__slow transition duration-500 justify-center w-full">

        <div class="w-full flex justify-center rounded-full"><img :src="img.img" class="w-[200px] h-[200px] rounded-full"></div>
        <div class="flex justify-center text-3xl font-bold">{{img.name}}</div>
        <div class="flex justify-center"><i class="fa fa-star text-yellow-600 text-3xl mx-2"></i><i class="fa fa-star text-yellow-600 text-3xl mx-2"></i>
        <i class="fa fa-star text-yellow-600 text-3xl mx-2"></i><i class="fa fa-star text-yellow-600 text-3xl mx-2"></i></div>
        <div class="flex justify-center text-lg"><div class="w-[50%] text-center">{{img.disc}}</div></div>
     </div>
   </div>
  </div>
</div>
<!--big-->

<div class="w-full h-[300px] bg-yellow-500">
  <div class="flex flex-row justify-around items-center h-full w-full">
    <div class="text-gray-900 text-3xl font-bold">Choose Beautiful Them And Start Your Busniss</div>
    <div class=""><button class="w-[180px] h-[50px] bg-gray-900 p-2 font-bold text-yellow-600">Purchase Now</button></div>
  </div>
</div>
</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: require("../assets/karan.jpg"),
      img2: require("../assets/pc.jpg"),
      activeimg: 0,
      image: [
        {
          id: "1",
          img: require("../assets/folca.jpg"),
          name:"wd dkwkdk",
          disc:"ojwe oijoe iwfjoie wfjoiwe fjiowejf jhgjhnw wewefnnefw ffwunf wefiweef eefnunwf weeufnnwef uf wfuweef wefu"
        },
        {
          id: "2",
          img: require("../assets/moah.jpg"),
          name:"hsolw fola",
          disc:"ojwe oijoe iwfjoie wfjoiwe fjiowejf iweef eefnunwf weeufnnwef uf wfuweef wefu"
        },
        {
          id: "3",
          img: require("../assets/jakop.jpg"),
          name:"John doe",
          disc:"ojwe oijoe iwfjoie wfjoiwe fjiowejf jhgjhgj hgiweef eefnunwf weeufnnwef uf wfuweef wefu"
        },
        {
          id: "4",
          img: require("../assets/dola.jpg"),
          name:"wd dkwkdk",
          disc:"ojwe oijoe iwfjoie wfjoiwe fjiowejf jhgjhgj male wf weeufnnwef uf wfuweef wefu"
        },
        {
          id: "5",
          img: require("../assets/jaco.jpg"),
          name:"wd dkwkdk",
          disc:"ojwe oijoe iwfjoie wfjoiwe fjiowejf jhgjhgj hgjh wejfenjf wweefnwefnw wewefnnefw ffwunf wefiweef eefnunwf weeufnnwef uf wfuweef wefu"
        },
        {
          id: "6",
          img: require("../assets/sos.jpg"),
          name:"lom solo",
          disc:"ojwe oijoe iwfjoie solsoslo dlmf f eefnunwf weeufnnwef uf wfuweef wefu"
        },
        {
          id: "7",
          img: require("../assets/new.jpg"),
          name:"saly doll",
          disc:"hussam wunf wefiweef eefnunwf weeufnnwef uf wfuweef wefu"
        },
        {
          id: "8",
          img: require("../assets/sign.jpg"),
          name:"bikham dowe",
          disc:"ojwe oijoe iwfjoie wfjoiwe fjiowejf jhgjhgj hgjh wejfenjf wweefnwefnw wewefnnefw ffwunf wefiweef eefnunwf weeufnnwef uf wfuweef wefu"
        },
        {
          id: "9",
          img: require("../assets/pc.jpg"),
          name:"Sajan dral",
          disc:"ojwe locmaynnc ciw co cw ffwunf wefiweef eefnunwf weeufnnwef uf wfuweef wefu"
        },
      ],
    };
  },
  mounted: function () {
    setTimeout(() => {
    let s1=document.querySelector('#sorr');
     s1.classList.remove("w-0")
     s1.classList.add("animate__animated", "animate__fadeInLeft", "animate__slow","w-[560px]")
    this.onWindowLoad();
      }, 1500);


  },
  computed: {
    currentimg() {
      return this.image[this.activeimg];
    },
  },
  methods: {
    next(){
            var active = this.activeimg;
      if(active >= this.image.length-1){
        active =0;
      }
      else{
      active += 1;
      }
      this.activeimg=active;
        var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
    console.log("nex");
  x[this.activeimg].style.display = "block"; 

    },
    prev(){
        var active = this.activeimg;
         console.log(active)
      if(active == 0){
        active=this.image.length
        active= --active
        console.log(active)
      }
    else{
      active -= 1;
    }
      this.activeimg=active;
      var i;
      var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
      console.log("prev")

     x[this.activeimg].style.display = "block"; 
    },
    onWindowLoad() {
     var i;
     var y=0;
     var x = document.getElementsByClassName("mySlides");
     for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
  }
     x[y].style.display = "block"; 
    },
  },
};
</script>
<style scoped>
.slide-track {
  width: calc(500px * 9);
  display: flex;
  animation: scroll 30s linear infinite;
  justify-content: space-between;
}
.slide-track:hover{
  animation-play-state: paused;
}
.slide {
  width: 150px;
  height: 60px;

  display: grid;
  place-items: center;
  transition:0.5s;
  cursor:pointer;
}
.slide:hover{
  transform:scale(0.8)
}

@keyframes scroll {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(calc(-470px * 6));
  }
}
</style>