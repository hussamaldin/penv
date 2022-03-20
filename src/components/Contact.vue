<template>
<div class="w-full h-full">
             <div class="w-full h-[500px] relative mb-[50px]">
          <div class="bg-fixed bg-cover w-full h-full" :style='{ backgroundImage: `url(${img})` }'></div>
      </div>

    <div class="flex flex-row justify-between px-[50px] py-[20px]">
                <div class="w-[70%]">
              <form class="w-full h-full bg-yellow-500  p-4">
                  <div class="text-2xl font-bold">GET IN ONE TOUCH</div>
                <div class="flex flex-col space-y-4">
                <div class="mb-6 text-left">
                  <label class="block  mb-2 text-xl font-bold text-gray-700">First Name</label>
                  <input type="text" placeholder="First" class="w-full px-3 py-3 text-lg leading-tight text-gray-700 border rounded shadow appearance bg-gray-100 focus:outline-none focus:border-indigo-500">
                </div>
                
                 <div class="mb-6 text-left py-4">
									<label class="block mb-2 text-xl font-bold text-gray-700" for="password">Last Name</label>
									<input	class="w-full px-3 py-3 text-lg leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none bg-gray-100 focus:border-indigo-500" type="text" placeholder="Last"/>
								</div>
                <div class="mb-6 text-left py-4">
									<label class="block mb-2 text-xl font-bold text-gray-700" for="password conf">Email</label>
									<input
										class="w-full px-3 py-3 text-lg leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none bg-gray-100 focus:border-indigo-500" type="text" placeholder="Email"/>
								</div>
                <div class="mb-6 text-left py-4">
								<button	class="w-[180px] px-4 py-3 font-bold text-yellow-500 bg-gray-900 rounded-lg hover:bg-gray-800 focus:outline-none focus:border-indigo-500" type="button">Submit Message</button>
							</div>
                                            <div class="mb-6 text-left py-4">
                    <label class="block text-lg font-bold">Message</label>
                    <textarea placeholder="Message" class="border-2 p-2 h-[200px] outline-none  w-full bg-gray-100"></textarea>
                </div>
              </div>
              </form>
            </div>
            <div class="w-[28%] flex flex-col">
                <div class="flex flex-row items-center bg-gray-200 p-4">
                    <div><i class="fa fa-location text-3xl text-yellow-500"></i></div>
                    <div>
                        <div class="text-xl font-bold">Location</div>
                        <div>Country State 292013</div>
                    </div>
                </div>
            </div>

            </div>

            </div>
</template>
<script>
export default {
    data(){
        return{
            img:require('../assets/karan.jpg'),
        }
    }
}
</script>