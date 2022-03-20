<template>
      <div class="w-full h-full">
         <div class="w-full h-[500px] relative mb-[50px]">
          <div class="bg-fixed bg-cover w-full h-full" :style='{ backgroundImage: `url(${img})` }'></div>
      </div>
       <div class="flex flex-col justify-center w-full bg-gray-800 p-[50px] mb-[100px]">
         <div class="w-full flex flex-row justify-around mb-[50px]">
           <div class="flex flex-col justify-center relative p-4 group transtion w-[30%]">
             <div class="bg-blue-500 w-full absolute h-[10px] top-0 group-hover:h-full duration-500 z-10"></div>
            <div class=" flex justify-center flex justify-center mb-4 z-20"><i class="fa fa-map-marker text-7xl font-bold text-yellow-500"></i></div>
            <div class="text-2xl mb-4 text-white z-20 flex justify-center">Location</div>
            <div class="text-2xl mb-2 w-full text-white z-20 flex justify-center">country 3033jn9 ideid </div>
             </div>
                        <div class="flex flex-col justify-center relative p-4 group transtion w-[30%]">
             <div class="bg-red-300 w-full absolute h-[10px] top-0 group-hover:h-full duration-500 z-10"></div>
            <div class=" flex justify-center flex justify-center mb-4 z-20"><i class="fa fa-phone text-7xl font-bold text-yellow-500"></i></div>
            <div class="text-2xl mb-4 text-white z-20 flex justify-center">Location</div>
            <div class="text-2xl mb-2 text-white z-20 flex justify-center">country 3033jn9 ideid </div>
             </div>
                        <div class="flex flex-col justify-center relative p-4 group transtion w-[30%]">
             <div class="bg-yellow-300 w-full absolute h-[10px] top-0 group-hover:h-full duration-500 z-10"></div>
            <div class=" flex justify-center flex justify-center mb-4 z-20"><i class="fa fa-envelope-o text-7xl font-bold text-yellow-500"></i></div>
            <div class="text-2xl mb-4 text-white z-20 flex justify-center">Location</div>
            <div class="text-2xl mb-2 text-white z-20 flex justify-center">country 3033jn9 ideid </div>
             </div>
         </div>

         <div class="text-5xl flex justify-center text-white my-4">GET IN ONE TOUCH</div>

         <div class="flex justify-center">
                          <form class="w-[50%] text-white flex justify-start">
                <div class="flex flex-col w-full mb-4 my-4 py-4">
                <div class="mb-6 my-4 w-full text-left py-4">
                  <label class="block  mb-2 text-xl font-bold text-white">First Name</label>
                  <input v-model="First" type="text" placeholder="First Name" class="w-full px-3 py-3 text-lg leading-tight text-gray-700 border rounded shadow appearance bg-gray-800 focus:outline-none focus:border-yellow-500">
                </div>
                
                 <div class="mb-6 text-left py-4">
									<label class="block mb-2 text-xl font-bold text-white" for="password">Last Name</label>
									<input v-model="password"	class="w-full px-3 py-3 text-lg leading-tight text-gray-700 border rounded shadow appearance-none bg-gray-800 focus:outline-none focus:border-yellow-500" type="password" placeholder="last name"/>
								</div>
                                 <div class="mb-6 text-left py-4">
									<label class="block mb-2 text-xl font-bold text-white" for="password">Email</label>
									<input v-model="password"	class="w-full px-3 py-3 text-lg leading-tight text-gray-700 border rounded shadow appearance-none bg-gray-800 focus:outline-none focus:border-yellow-500" type="password" placeholder="Email"/>
								</div>

                               <div class="mb-6 text-left py-4">
                    <label class="block text-lg font-bold">Message</label>
                    <textarea placeholder="Say Somthing" class="border-2 p-2 h-[250px] outline-none focus:border-yellow-500 rounded-xl w-full border-gray-400 bg-gray-800"></textarea>
                </div>
                <div class="mb-6 text-left py-4">
								<button @click.prevent="send"	class="w-[230px] px-4 py-3 font-bold text-lg text-white bg-yellow-500 rounded-lg hover:bg-yellow-700 focus:outline-none focus:shadow-outline" type="button">Login To your account</button>
							</div>
                            </div>
                </form>
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
import axios from 'axios'
export default {
    data(){
        return{
            username:null,
            password:null,
            img:require('../assets/eca.jpg')
        }
    },
methods:{
  send(){
let data = {
username: this.username,
password: this.password
};
        axios.post('http://hmmod2020.pythonanywhere.com/api-token-auth/',data).then((res)=>{
            console.log(res)
                          localStorage.setItem('token',res.data.token);
        setTimeout(() => this.$router.push({path: '/'}), 500);
        }).catch((err)=>{
    console.log(err)
        });

    }
}
}
</script>