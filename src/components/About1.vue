<template>
    <div class="w-full h-full mb-[20px]">
      <div class="w-full h-[500px] relative">
        <div class="bg-fixed bg-cover w-full h-full" :style='{ backgroundImage: `url(${img})` }'></div>
      </div>
<div class="flex flex-col space-y-[20px]">

    <div class="w-full flex flex-row h-[700px]">
        <div class="w-[50%] flex flex-col space-y-[30px] text-gray-600 pl-[100px] pt-[40px]">
           <div class="text-yellow-500 font-bold text-xl"> About Our Company</div>
<div class="text-2xl font-bold">We Can Pave The Way For Your Business To Be Successful</div>
<div class="leading-4 text-lg font-semibold">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

<div class="text-2xl font-bold">Our Mession & Vission</div>
<div class="leading-4 text-lg font-semibold">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. elit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

<div class="text-2xl font-bold">Our Strong Team</div>
<div class="leading-4 text-lg font-semibold">Duis aute irure dolor in reprehenderit in voluptpidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
<div><button class="bg-yellow-500 text-xl font-bold w-[150px] hover:bg-yellow-600 hover:text-white h-[50px] p-2 text-gray-600">Contact Us</button></div>
        </div>
        <div class="w-[50%] flex justify-center items-center p-4">
            <div class="flex flex-row justify-center items-center flex-wrap transition duration-500 group">
                <div>
                <div class="w-[180px] h-[180px] m-1 duration-500 group-hover:translate-x-[-20px] group-hover:translate-y-[-20px]"><img :src="img1" class="w-full h-full"></div>
                <div class="w-[180px] h-[180px] m-1 duration-500 group-hover:translate-x-[-20px] group-hover:translate-y-[20px]"><img :src="img2" class="w-full h-full"></div>
                </div>
                <div>
                <div class="w-[180px] h-[180px] m-1 duration-500 group-hover:translate-x-[20px] group-hover:translate-y-[-20px]"><img :src="img3" class="w-full h-full"></div>
                <div class="w-[180px] h-[180px] m-1 duration-500 group-hover:translate-x-[20px] group-hover:translate-y-[20px]"><img :src="img4" class="w-full h-full"></div>
                </div>
            </div>
        </div>
    </div>

<div class="flex flex-row w-full h-[300px]">
    <div class="w-[50%] text-left p-[70px]">
        <div class="text-yellow-500 text-xl">Our Awesome Team</div>
        <div class="text-3xl font-bold w-full">With This Team Eveything Will Be As You Want</div>
    </div>
<div class="w-[50%] flex justify-center p-[70px]">
    <div class="text-lg flex w-[50%] justify-center">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupta</div>
</div>
</div>

<div class="flex flex-row w-full p-4 h-[400px]">
    <div class="w-[22%] ml-[30px] h-[330px] relative transition group">
        <img :src="imgb" class="w-full h-full">
        <div class="w-full h-[50px] bg-gray-900 flex flex-row duration-500 justify-around opacity-0 group-hover:opacity-100 items-center absolute top-0 left-0 bg-opacity-75">
        <i class="fa fa-facebook-square text-yellow-600 ml-[48px] hover:text-white text-2xl"></i>
        <i class="fa fa-twitter-square text-yellow-600 ml-[48px] hover:text-white text-2xl"></i>
        <i class="fa fa-instagram text-yellow-600 ml-[48px] hover:text-white text-2xl"></i>
        <i class="fa fa-github-square text-yellow-600 ml-[48px] hover:text-white text-2xl"></i>
        </div>
        <div class="w-full h-[80px] bg-gray-900 text-center absolute top-[250px] left-0 bg-opacity-75">
            <div class="text-2xl text-white">John Doe</div>
            <div class="text-lg text-gray-100">Front End</div>
        </div>
        </div>
    <div class="w-[22%] ml-[30px] h-[330px] relative transition group">
        <img :src="imgg" class="w-full h-full">
                <div class="w-full h-[50px] bg-gray-900 flex flex-row duration-500 justify-around opacity-0 group-hover:opacity-100 items-center absolute top-0 left-0 bg-opacity-75">
        <i class="fa fa-facebook-square text-yellow-600 ml-[48px] hover:text-white text-2xl"></i>
        <i class="fa fa-twitter-square text-yellow-600 ml-[48px] hover:text-white text-2xl"></i>
        <i class="fa fa-instagram text-yellow-600 ml-[48px] hover:text-white text-2xl"></i>
        <i class="fa fa-github-square text-yellow-600 ml-[48px] hover:text-white text-2xl"></i>
        </div>
        <div class="w-full h-[80px] bg-gray-900 text-center absolute top-[250px] left-0 bg-opacity-75">
            <div class="text-2xl text-white">Kellan smith</div>
            <div class="text-lg text-gray-100">Back End</div>
        </div>
        </div>
    <div class="w-[22%] ml-[30px] h-[330px] relative transition group">
        <img :src="imge" class="w-full h-full">
                <div class="w-full h-[50px] bg-gray-900 flex flex-row duration-500 justify-around opacity-0 group-hover:opacity-100 items-center absolute top-0 left-0 bg-opacity-75">
        <i class="fa fa-facebook-square text-yellow-600 ml-[48px] hover:text-white text-2xl"></i>
        <i class="fa fa-twitter-square text-yellow-600 ml-[48px] hover:text-white text-2xl"></i>
        <i class="fa fa-instagram text-yellow-600 ml-[48px] hover:text-white text-2xl"></i>
        <i class="fa fa-github-square text-yellow-600 ml-[48px] hover:text-white text-2xl"></i>
        </div>
        <div class="w-full h-[80px] bg-gray-900 text-center absolute top-[250px] left-0 bg-opacity-75">
            <div class="text-2xl text-white">Sally</div>
            <div class="text-lg text-gray-100">Front End</div>
        </div>
        </div>
    <div class="w-[22%] ml-[30px] h-[330px] relative transition group">
        <img :src="imgd" class="w-full h-full">
                <div class="w-full h-[50px] bg-gray-900 flex flex-row duration-500 justify-around opacity-0 group-hover:opacity-100 items-center absolute top-0 left-0 bg-opacity-75">
        <i class="fa fa-facebook-square text-yellow-600 ml-[48px] hover:text-white text-2xl"></i>
        <i class="fa fa-twitter-square text-yellow-600 ml-[48px] hover:text-white text-2xl"></i>
        <i class="fa fa-instagram text-yellow-600 ml-[48px] hover:text-white text-2xl"></i>
        <i class="fa fa-github-square text-yellow-600 ml-[48px] hover:text-white text-2xl"></i>
        </div>
        <div class="w-full h-[80px] bg-gray-900 text-center absolute top-[250px] left-0 bg-opacity-75">
            <div class="text-2xl text-white">Donald jord</div>
            <div class="text-lg text-gray-100">Front End</div>
        </div>
        </div>
</div>

<div class="w-full h-[300px] bg-gray-900 flex flex-row items-center justify-center">
    <div class="w-[33%] text-center">
        <div class="text-yellow-600 font-bold my-2 text-4xl">45+</div>
        <div class="text-3xl text-white my-2 font-bold">Winning Awards</div>
        <div class="font-semibold text-white my-2">quis nostrud exercitation ullamco laboris nisi ut aliquip ex</div>
    </div>
        <div class="w-[33%] text-center">
        <div class="text-yellow-600 my-2 font-bold text-4xl">44.4k</div>
        <div class="text-3xl my-2 text-white font-bold">Successfull Projects</div>
        <div class="font-semibold my-2 text-white">quis nostrud exercitation ullamco laboris nisi ut aliquip ex</div>
    </div>
        <div class="w-[33%] text-center">
        <div class="text-yellow-600 my-2 font-bold text-4xl">99%</div>
        <div class="text-3xl text-white my-2 font-bold">happy clients</div>
        <div class="font-semibold my-2 text-white">quis nostrud exercitation ullamco laboris nisi ut aliquip ex</div>
    </div>
</div>
<div class="flex flex-row h-[600px] items-center w-full ">
    <div class="w-[50%] h-full text-left p-[30px]">
        <div>Question Answore</div>
        <div>General FAG'</div>
        <div class="flex flex-col space-y-4">
            <div class="w-full">
                <div @click="toggle($event)" class="bg-gray-200 text-gray-600 flex flex-row justify-between p-4"><div>Question 1: What Is Lorem Ipsum?</div><div><i class="fa fa-plus"></i></div></div>
                <div class="mySlides hidden">jejbefkejbfkjefbkjebfkjebfkjebfkjebfkjbekjfbekjfbekjfbekjbfkjebfkejbfkejbfkjefbke</div>
            </div>
                        <div id="s1" >
                <div @click="toggle($event)" class="bg-gray-200 text-gray-600 flex flex-row justify-between p-4"><div>Question 1: What Is Lorem Ipsum?</div><div><i class="fa fa-plus"></i></div></div>
                <div  class="mySlides hidden"  >jejbefkejbfkjefbkjebfkjebfkjebfkjebfkjbekjfbekjfbekjfbekjbfkjebfkejbfkejbfkjefbke</div>
            </div>
                        <div id="s1">
                <div @click="toggle($event)" class="bg-gray-200 text-gray-600 flex flex-row justify-between p-4"><div>Question 1: What Is Lorem Ipsum?</div><div><i class="fa fa-plus"></i></div></div>
                <div class="mySlides hidden" >jejbefkejbfkjefbkjebfkjebfkjebfkjebfkjbekjfbekjfbekjfbekjbfkjebfkejbfkejbfkjefbke</div>
            </div>
                        <div id="s1">
                <div @click="toggle($event)" class="bg-gray-200 text-gray-600 flex flex-row justify-between p-4"><div>Question 1: What Is Lorem Ipsum?</div><div><i class="fa fa-plus"></i></div></div>
                <div  class="mySlides hidden">jejbefkejbfkjefbkjebfkjebfkjebfkjebfkjbekjfbekjfbekjfbekjbfkjebfkejbfkejbfkjefbke</div>
            </div>
        </div>
    </div>
<div class="w-[50%] h-full flex justify-center items-center p-[20px]">
    <div class="h-[80%] w-[70%]"><img :src="img" class="w-full h-full"></div>
</div>
</div>
</div>


<!--Big-->
    </div>
</template>
<script>
export default {
    data(){
        return{
            img:require('../assets/karan.jpg'),
            img1:require('../assets/dola.jpg'),
            img2:require('../assets/jakop.jpg'),
            img3:require('../assets/folca.jpg'),
            img4:require('../assets/moah.jpg'),
            imgb:require('../assets/bgbg.jpg'),
            imgg:require('../assets/bgg.jpg'),
            imge:require('../assets/eca.jpg'),
            imgd:require('../assets/dan.jpg'),
        }
    },
    methods :{
        toggle(event){
            var y = document.getElementsByClassName("mySlides");
                    var i;
  for (i = 0; i < y.length; i++) {
      if(y[i] == event.target.nextSibling){
     console.log('')
      }
      else{
         y[i].classList.replace('block','hidden') 
      }
  }
      if(event.target.nextSibling.classList.contains('hidden') ){
         event.target.nextSibling.classList.replace('hidden','block') 
      }
      else{
           event.target.nextSibling.classList.replace('block','hidden') 
      }

    

   
           
    
        }

    }
}
</script>