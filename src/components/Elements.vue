<template>
    <div class="w-full h-full">
         <div class="w-full h-[500px] relative mb-[50px]">
         <div class="bg-fixed bg-cover w-full h-full" :style='{ backgroundImage: `url(${img})` }'></div>
      </div>

      <div class="w-full flex flex-col space-y-4">

          <div class="w-full flex flex-col justify-center mb-[20px]">
              <div class="text-3xl w-full flex justify-center font-bold my-[30px]">Style One</div>
              <div class="flex flex-row justify-around my-4">
                  <div class="relative w-[30%] bg-gray-900 flex flex-col p-[20px]">
                      <div class="bg-yellow-500 absolute flex justify-center items-center left-[40%] top-[-30px] w-[60px] h-[60px]"><i class="fa fa-hourglass-start text-gray-900 text-5xl"></i></div>
                      <div class="flex flex-col justify-center space-y-4">
                          <div class="text-3xl font-bold w-full flex justify-center my-4 text-white">Start</div>
                          <div class="text-yellow-500 flex justify-center w-full my-4 text-3xl font-bold">Free</div>
                          <div class="text-lg w-full leading-8 flex justify-center my-4 text-white">cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
                               cupidatat non proident sunt in culpa qui officia deserulaborum.
                               cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est lab anim id est lab orum.</div>
                          </div>
                          <div class="w-full flex justify-center my-4"><button class="text-gray-900 p-2 rounded-sm bg-yellow-500 text-2xl font-bold">Get Started</button></div>
                  </div>
                                    <div class="relative w-[30%] bg-gray-900 flex flex-col p-[20px]">
                      <div class="bg-yellow-500 absolute flex justify-center items-center left-[40%] top-[-30px] w-[60px] h-[60px]"><i class="fa fa-thumbs-up text-gray-900 text-5xl"></i></div>
                      <div class="flex flex-col justify-center space-y-4">
                          <div class="text-3xl font-bold w-full flex justify-center my-4 text-white">Upgraded</div>
                          <div class="text-yellow-500 flex justify-center w-full my-4 text-3xl font-bold">$160</div>
                          <div class="text-lg w-full leading-8 flex justify-center my-4 text-white">cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
                               cupidatat non proident sunt in culpa qui officia deserulaborum.
                               cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est lab anim id est lab orum.</div>
                          </div>
                          <div class="w-full flex justify-center my-4"><button class="text-gray-900 p-2 rounded-sm bg-yellow-500 text-2xl font-bold">Get Started</button></div>
                  </div>
                                    <div class="relative w-[30%] bg-gray-900 flex flex-col p-[20px]">
                      <div class="bg-yellow-500 absolute flex justify-center items-center left-[40%] top-[-30px] w-[60px] h-[60px]"><i class="fa fa-rocket text-gray-900 text-5xl"></i></div>
                      <div class="flex flex-col justify-center space-y-4">
                          <div class="text-3xl font-bold w-full flex justify-center my-4 text-white">Premuim</div>
                          <div class="text-yellow-500 flex justify-center w-full my-4 text-3xl font-bold">$260</div>
                          <div class="text-lg w-full leading-8 flex justify-center my-4 text-white">cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
                               cupidatat non proident sunt in culpa qui officia deserulaborum.
                               cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est lab anim id est lab orum.</div>
                          </div>
                          <div class="w-full flex justify-center my-4"><button class="text-gray-900 p-2 rounded-sm bg-yellow-500 text-2xl font-bold">Get Started</button></div>
                  </div>
              </div>

              <!--style tow-->
                            <div class="text-3xl w-full flex justify-center font-bold my-[30px]">Style Two</div>
              <div class="flex flex-row justify-around my-4">
                  <div class="relative w-[30%] flex flex-col p-[20px] shadow-lg border border-gray-100">
                      <div class="flex flex-col justify-center space-y-4">
                          <div class="text-3xl font-bold w-full flex justify-center my-4 bg-gray-200">Start</div>
                          <div class="text-yellow-500 flex justify-center w-full my-4 text-3xl font-bold">69$/Mon</div>
                           <div class="w-full flex justify-center my-4"><button class="text-gray-900 p-2 rounded-sm bg-yellow-500 text-2xl font-bold">Get Started</button></div>
                          <div class="text-lg w-full leading-8 flex flex-col justify-center my-4">      
                                <div class=" w-full border-b-4 border-gray-300"><i class="fa fa-check-circle text-gray-400 text-lg p-2"></i>cupidatat non proident sunt in culpa qui officia</div>
                                <div class=" w-full border-b-4 border-gray-300"><i class="fa fa-check-circle text-gray-400 text-lg p-2"></i>cupidatat non proident sunt in culpa qui officia</div>
                                <div class=" w-full border-b-4 border-gray-300"><i class="fa fa-check-circle text-gray-400 text-lg p-2"></i>cupidatat non proident sunt in culpa qui officia</div>
                                                              </div>
                          </div>
                  </div>
                  <div class="relative w-[30%] flex flex-col p-[20px] shadow-lg border border-gray-100">
                      <div class="flex flex-col justify-center space-y-4">
                          <div class="text-3xl font-bold w-full flex justify-center my-4 bg-gray-200">Upgraded</div>
                          <div class="text-yellow-500 flex justify-center w-full my-4 text-3xl font-bold">169$/Mon</div>
                           <div class="w-full flex justify-center my-4"><button class="text-gray-900 p-2 rounded-sm bg-yellow-500 text-2xl font-bold">Get Started</button></div>
                          <div class="text-lg w-full leading-8 flex flex-col justify-center my-4">      
                                <div class=" w-full border-b-4 border-gray-300"><i class="fa fa-check-circle text-gray-400 text-lg p-2"></i>cupidatat non proident sunt in culpa qui officia</div>
                                <div class=" w-full border-b-4 border-gray-300"><i class="fa fa-check-circle text-gray-400 text-lg p-2"></i>cupidatat non proident sunt in culpa qui officia</div>
                                <div class=" w-full border-b-4 border-gray-300"><i class="fa fa-check-circle text-gray-400 text-lg p-2"></i>cupidatat non proident sunt in culpa qui officia</div>
                                                              </div>
                          </div>
                  </div>
                  <div class="relative w-[30%] flex flex-col p-[20px] shadow-lg border border-gray-100">
                      <div class="flex flex-col justify-center space-y-4">
                          <div class="text-3xl font-bold w-full flex justify-center my-4 bg-gray-200">Premuim</div>
                          <div class="text-yellow-500 flex justify-center w-full my-4 text-3xl font-bold">269$/Mon</div>
                           <div class="w-full flex justify-center my-4"><button class="text-gray-900 p-2 rounded-sm bg-yellow-500 text-2xl font-bold">Get Started</button></div>
                          <div class="text-lg w-full leading-8 flex flex-col justify-center my-4">      
                                <div class=" w-full border-b-4 border-gray-300"><i class="fa fa-check-circle text-gray-400 text-lg p-2"></i>cupidatat non proident sunt in culpa qui officia</div>
                                <div class=" w-full border-b-4 border-gray-300"><i class="fa fa-check-circle text-gray-400 text-lg p-2"></i>cupidatat non proident sunt in culpa qui officia</div>
                                <div class=" w-full border-b-4 border-gray-300"><i class="fa fa-check-circle text-gray-400 text-lg p-2"></i>cupidatat non proident sunt in culpa qui officia</div>
                                                              </div>
                          </div>
                  </div>
              </div>
              <!--style three-->
              
                            <div class="text-3xl w-full flex justify-center font-bold my-[30px]">Style Three</div>
              <div class="flex flex-row justify-around my-4 px-[30px]">
                  <div class="relative w-[30%] transform duration-200 bg-gray-200 hover:shadow-xl shadow-gray-900 hover:scale-105 flex flex-col p-[20px]">
                      <div class="flex flex-col justify-center space-y-[20px] mb-[30px]">
                          <div class="flex justify-center w-full mb-2"><span class="flex justify-center items-center w-[60px] h-[60px]"><i class="fa fa-hourglass-start text-yellow-500 text-7xl"></i></span></div>
                          <div class="text-3xl font-bold w-full flex justify-center my-4">Start</div>
                          <div class="text-4xl font-bold w-full leading-8 flex justify-center my-4 text-yellow-500">69$/mon</div>
                          </div>
                          <div class="flex flex-col space-y-[20px]">
                                <div class=" w-full border-b-4 border-white"><i class="fa fa-check-circle text-yellow-500 text-lg p-2"></i>Storage 15gb</div>
                                <div class=" w-full border-b-4 border-white"><i class="fa fa-check-circle text-yellow-500 text-lg p-2"></i>User 20</div>
                                <div class=" w-full border-b-4 border-white"><i class="fa fa-check-circle text-yellow-500 text-lg p-2"></i>Projects 20</div>
                                <div class=" w-full border-b-4 border-white"><i class="fa fa-check-circle text-yellow-500 text-lg p-2"></i>Support</div>
                          </div>
                          <div class="w-full flex justify-center my-4"><button class="text-gray-900 p-2 rounded-full bg-yellow-500 text-xl font-bold">Get Started</button></div>
                  </div>
                  <div class="relative w-[30%] transform duration-200 bg-gray-200 hover:shadow-xl shadow-gray-900 hover:scale-105 flex flex-col p-[20px]">
                      <div class="flex flex-col justify-center space-y-[20px] mb-[30px]">
                          <div class="flex justify-center w-full mb-2"><span class="flex justify-center items-center w-[60px] h-[60px]"><i class="fa fa-thumbs-up text-yellow-500 text-7xl"></i></span></div>
                          <div class="text-3xl font-bold w-full flex justify-center my-4">Upgraded</div>
                          <div class="text-4xl font-bold w-full leading-8 flex justify-center my-4 text-yellow-500">169$/mon</div>
                          </div>
                          <div class="flex flex-col space-y-[20px]">
                                <div class=" w-full border-b-4 border-white"><i class="fa fa-check-circle text-yellow-500 text-lg p-2"></i>Storage 15gb</div>
                                <div class=" w-full border-b-4 border-white"><i class="fa fa-check-circle text-yellow-500 text-lg p-2"></i>User 20</div>
                                <div class=" w-full border-b-4 border-white"><i class="fa fa-check-circle text-yellow-500 text-lg p-2"></i>Projects 20</div>
                                <div class=" w-full border-b-4 border-white"><i class="fa fa-check-circle text-yellow-500 text-lg p-2"></i>Support</div>
                          </div>
                          <div class="w-full flex justify-center my-4"><button class="text-gray-900 p-2 rounded-full bg-yellow-500 text-xl font-bold">Get Started</button></div>
                  </div>
                  <div class="relative w-[30%] transform duration-200 bg-gray-200 hover:shadow-xl shadow-gray-900 hover:scale-105 flex flex-col p-[20px]">
                      <div class="flex flex-col justify-center space-y-[20px] mb-[30px]">
                          <div class="flex justify-center w-full mb-2"><span class="flex justify-center items-center w-[60px] h-[60px]"><i class="fa fa-rocket text-yellow-500 text-7xl"></i></span></div>
                          <div class="text-3xl font-bold w-full flex justify-center my-4">Premuim</div>
                          <div class="text-4xl font-bold w-full leading-8 flex justify-center my-4 text-yellow-500">269$/mon</div>
                          </div>
                          <div class="flex flex-col space-y-[20px]">
                                <div class=" w-full border-b-4 border-white"><i class="fa fa-check-circle text-yellow-500 text-lg p-2"></i>Storage 15gb</div>
                                <div class=" w-full border-b-4 border-white"><i class="fa fa-check-circle text-yellow-500 text-lg p-2"></i>User 20</div>
                                <div class=" w-full border-b-4 border-white"><i class="fa fa-check-circle text-yellow-500 text-lg p-2"></i>Projects 20</div>
                                <div class=" w-full border-b-4 border-white"><i class="fa fa-check-circle text-yellow-500 text-lg p-2"></i>Support</div>
                          </div>
                          <div class="w-full flex justify-center my-4"><button class="text-gray-900 p-2 rounded-full bg-yellow-500 text-xl font-bold">Get Started</button></div>
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

    </div>
</template>
<script>
export default {
    data(){
        return{
          img:require('../assets/bgg.jpg')
        }
    }
}
</script>