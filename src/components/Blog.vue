<template>
      <div class="w-full h-full">
         <div class="w-full h-[500px] relative mb-[50px]">
          <div class="bg-fixed bg-cover w-full h-full" :style='{ backgroundImage: `url(${img})` }'></div>
      </div>

      <div class="flex flex-row justify-between px-[50px] py-4">
          <!--left-->
          <div class="w-[75%] flex flex-col space-y-4 p-2">
              <div class="w-full flex flex-row justify-between h-[300px]">
                  <div class=" w-[48%] h-full"><img :src="img1" class="w-full h-full"></div>
                  <div class="w-[48%] flex flex-col space-y-4">
                      <div class="text-gray-400 text-xl">16 Dec 2022</div>
                      <div class="text-gray-900 text-2xl font-bold">Tips And Trick For Control Your Business</div>
                      <div>reprehenderit in voluptate velit esse cillum dolore eu 
                          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                          sunt in culpa qui officia deserunt mollit anim id est la</div>
                          <div class="w-[150px] p-2 rounded-lg bg-yellow-500">Read More <span><i class="fa fa-long-arrow-right"></i></span></div>
                  </div>
              </div>
              <div class="w-full flex flex-row justify-between h-[300px]">
                  <div class=" w-[48%] h-full"><img :src="img3" class="w-full h-full"></div>
                  <div class="w-[48%] flex flex-col space-y-4">
                      <div class="text-gray-400 text-xl">16 Dec 2022</div>
                      <div class="text-gray-900 text-2xl font-bold">Tips And Trick For Control Your Business</div>
                      <div>reprehenderit in voluptate velit esse cillum dolore eu 
                          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                          sunt in culpa qui officia deserunt mollit anim id est la</div>
                          <div class="w-[150px] p-2 rounded-lg bg-yellow-500">Read More <span><i class="fa fa-long-arrow-right"></i></span></div>
                  </div>
              </div>
                            <div class="w-full flex flex-row justify-between h-[300px]">
                  <div class=" w-[48%] h-full"><img :src="img1" class="w-full h-full"></div>
                  <div class="w-[48%] flex flex-col space-y-4">
                      <div class="text-gray-400 text-xl">16 Dec 2022</div>
                      <div class="text-gray-900 text-2xl font-bold">Tips And Trick For Control Your Business</div>
                      <div>reprehenderit in voluptate velit esse cillum dolore eu 
                          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                          sunt in culpa qui officia deserunt mollit anim id est la</div>
                          <div class="w-[150px] p-2 rounded-lg bg-yellow-500">Read More <span><i class="fa fa-long-arrow-right"></i></span></div>
                  </div>
              </div>
                            <div class="w-full flex flex-row justify-between h-[300px]">
                  <div class=" w-[48%] h-full"><img :src="img2" class="w-full h-full"></div>
                  <div class="w-[48%] flex flex-col space-y-4">
                      <div class="text-gray-400 text-xl">16 Dec 2022</div>
                      <div class="text-gray-900 text-2xl font-bold">Tips And Trick For Control Your Business</div>
                      <div>reprehenderit in voluptate velit esse cillum dolore eu 
                          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                          sunt in culpa qui officia deserunt mollit anim id est la</div>
                          <div class="w-[150px] p-2 rounded-lg bg-yellow-500">Read More <span><i class="fa fa-long-arrow-right"></i></span></div>
                  </div>
              </div>
                            <div class="w-full flex flex-row justify-between h-[300px]">
                  <div class=" w-[48%] h-full"><img :src="img1" class="w-full h-full"></div>
                  <div class="w-[48%] flex flex-col space-y-4">
                      <div class="text-gray-400 text-xl">16 Dec 2022</div>
                      <div class="text-gray-900 text-2xl font-bold">Tips And Trick For Control Your Business</div>
                      <div>reprehenderit in voluptate velit esse cillum dolore eu 
                          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                          sunt in culpa qui officia deserunt mollit anim id est la</div>
                          <div class="w-[150px] p-2 rounded-lg bg-yellow-500">Read More <span><i class="fa fa-long-arrow-right"></i></span></div>
                  </div>
              </div>
          </div>
           <!--right-->
          <div class="w-[22%] flex flex-col space-y-2 p-3">
              <div class="w-full p-2 bg-gray-200 border-l-4 border-yellow-500 text-xl font-bold">Search</div>
                                 <div class="relative w-full h-[48px]">
                       <button class="absolute right-0 text-xl w-[40px] h-full rounded-sm text-gray-700 bg-yellow-500 flex justify-center items-center"><i class="fa fa-search"></i></button>
                       <input type="text" class="bg-gray-50 h-full outline-none rounded-sm w-full pl-10 p-2" placeholder="Search">
                   </div>
                   <div class="w-full p-2 bg-gray-200 border-l-4 border-yellow-500 text-xl font-bold">Category</div>
                   <div class="border-b-4 border-yellow-500 flex flex-col space-y-2">
                   <div class="text-lg font-bold cursor-pointer hover:text-yellow-500">Business</div>
                   <div class="text-lg font-bold cursor-pointer hover:text-yellow-500">Health</div>
                   <div class="text-lg font-bold cursor-pointer hover:text-yellow-500">Music</div>
                   <div class="text-lg font-bold cursor-pointer hover:text-yellow-500">Sport</div>
                   <div class="text-lg font-bold cursor-pointer hover:text-yellow-500">Games</div>
                   </div>
                             <div class="w-full p-2 bg-gray-200 border-l-4 border-yellow-500 text-xl font-bold">Recent post</div>
          <div class="w-full border-b-4 border-yellow-500 mb-1">
              <div class="p-2 w-full hover:bg-gray-100 cursor-pointer">Tips And Trick For Control Your Business</div>
               <div class="p-2 w-full hover:bg-gray-100 cursor-pointer">Tips And Trick For Control Your Business</div>
                <div class="p-2 w-full hover:bg-gray-100 cursor-pointer">Tips And Trick For  Your Business</div>
                 <div class="p-2 w-full hover:bg-gray-100 cursor-pointer">Tips And Trick For  Your Business</div>
          </div>
                   <div class="w-full border-b-4 border-yellow-500 h-[400px] relative mb-[50px]">
          <div class="bg-cover w-full h-full" :style='{ backgroundImage: `url(${img})` }'></div>
          <div class="w-[120px] absolute top-[50%] left-[30%] p-2 bg-yellow-500">Purches Now</div>
      </div>
      <div class="w-full p-2 bg-gray-200 border-l-4 border-yellow-500 text-xl font-bold">Tags</div>
      <div class="flex flex-row flex-wrap border-b-4 border-yellow-500">
          <div class="bg-gray-200 text-lg m-2 font-bold b-1">Business</div>
          <div class="bg-gray-200 text-lg m-2 font-bold b-1">Health</div>
          <div class="bg-gray-200 text-lg m-2 font-bold b-1">Music</div>
          <div class="bg-gray-200 text-lg m-2 font-bold b-1">Sport</div>
          <div class="bg-gray-200 text-lg m-2 font-bold b-1">best</div>
          <div class="bg-gray-200 text-lg m-2 font-bold b-1">blog</div>
          
      </div>
          </div>

      </div>

                <div class="w-full h-[300px] bg-yellow-500">
  <div class="flex flex-row justify-around items-center h-full w-full">
    <div class="text-gray-900 text-3xl font-bold">Choose Beautiful Them And Start Your Busniss</div>
    <div class=""><button class="w-[180px] h-[50px] bg-gray-900 p-2 font-bold text-yellow-600">Purchase Now</button></div>
  </div>
</div>
      </div>
</template>
<script>
export default {
    data(){
        return{
            img:require('../assets/karan.jpg'),
            img1:require('../assets/moah.jpg'),
            img2:require('../assets/folca.jpg'),
            img3:require('../assets/saran.jpg'),
        }
    }

}
</script>