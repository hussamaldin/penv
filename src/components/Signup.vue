<template>
    <div class="w-full h-full">
        <div class="w-full flex flex-col my-[100px] justify-center">
            <div v-if="check" ref="mainb" class=" w-full flex justify-center">
                    <span class="w-[150px] h-[150px] animate__animated animate__zoomIn animate__slow rounded-full bg-green-500 flex items-center justify-center"> <i class="fa fa-check animate__animated animate__zoomIn animate__animate__slower animate__delay-1s text-white text-6xl"></i></span>
              
                </div>
 <div class="flex flex-row bg-gray-100 border-2 border-gray-200 h-full mx-auto my-auto w-[85%]">
            <div class="w-[50%] h-auto w-full rounded-l-lg">
             <img :src="img2" class="w-full h-full bg-cover"></div>
            <div class="w-[50%] rounded-r-lg mx-4">
              <h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
              <form class="w-full h-full text-left">
                <div class="flex flex-row justify-between mb-3 py-4">
                  <div class="mb-3">
									<label class="block mb-2 text-lg font-bold text-gray-700" for="firstName">First Name</label>
									<input  v-model="fristName" class="w-full px-3 py-2  focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance-none focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name"	/>
								</div>
                <div class="mb-3">
									<label class="block mb-2 text-lg font-bold text-gray-700" for="firstName">last Name</label>
									<input v-model="lastName" class="w-full px-3 py-2  focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance-none focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name"/>
								</div>
                </div>
                                <div class="flex flex-row justify-between mb-3 py-4">
                <div class="mb-3 py-4">
                  <label class="block text-left mb-2 text-lg font-bold text-gray-700">User Name</label>
                  <input type="text" v-model="username" placeholder="username" class="w-full px-3 py-2 focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance focus:outline-none focus:shadow-outline">
                  <div v-if="usererror" class="text-red-500">{{usererror}}</div>
                </div>
                                <div class="mb-3 py-4">
                  <label class="block text-left mb-2 text-lg font-bold text-gray-700">Email</label>
                  <input type="text" v-model="email" placeholder="Email" class="w-full px-3 py-2 focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance focus:outline-none focus:shadow-outline">
                  <div v-if="emailerror" class="text-red-500">{{emailerror}}</div>
                </div>
                                </div>
                                <div class="flex flex-row justify-between mb-3 py-4">
                                <div class="mb-3 py-4">
                  <label class="block text-left mb-2 text-lg font-bold text-gray-700">Password</label>
                  <input type="password" v-model="password" placeholder="Password" class="w-full px-3 py-2 focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance focus:outline-none focus:shadow-outline">
                  <div v-if="passerror" class="text-red-500">{{passerror}}</div>
                </div>
                                <div class="mb-3 py-4">
                  <label class="block text-left mb-2 text-lg font-bold text-gray-700">Education</label>
                  <input type="text" v-model="education" placeholder="Education" class="w-full px-3 py-2 focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance focus:outline-none focus:shadow-outline">
                </div>
                                </div>
                <div class="flex flex-row justify-between my-4 mb-4 py-4">
                                                  <div class="mb-3 py-4">
                  <label class="block text-left mb-2 text-lg font-bold text-gray-700">Image</label>
                  <input type="text" v-model="image" placeholder="Image" class="w-full px-3 py-2 focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance focus:outline-none focus:shadow-outline">
                </div>
                 <div class="mb-3 py-4">
									<label class="block mb-2 text-lg font-bold text-gray-700" for="password">Description</label>
									<input  v-model="description"	class="w-full px-3 py-2 focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance-none focus:outline-none focus:shadow-outline" type="text" placeholder="Description"/>
								</div>
                </div>
                <div class="mb-4 text-center">
								<button @click.prevent="send"	class="w-full px-4 py-2 font-bold text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"	type="button">
									Create an Account
								</button>
							</div>

              </form>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            img2:require('../assets/sign.jpg'),
            username:"",
            email:"",
            password:"",
            passerror:"",
            emailerror:"",
            usererror:"",
            check:false,
            fristName:"",
            lastName:"",
            education:"",
            image:"",
            description:"",
            
        }
    },
methods:{
  send(){
let data = {
      username:this.username,
        fristName:this.fristName,
        lastName:this.lastName,
        password:this.password,
        education:this.education,
        email:this.email,
        image:this.image,
        description:this.description,
};
        if(this.username == ""){
            this.usererror="name required *"
        }
        else{
            this.usererror=""
        }
                if(this.email == ""){
            this.emailerror="email required *"
        }
        else{
            this.emailerror=""
        }
                if(this.password == ""){
            this.passerror="password required *"
        }
        else{
            this.passerror=""
        }

      if(this.username != "" && this.email != "" && this.password != ""){
        this.check=true
        window.scrollTo(0, 0);
                axios.post('https://hmmod2022.pythonanywhere.com/signUp/',data).then((res)=>{
            console.log(res)
        setTimeout(() => this.$router.push({path: '/'}), 3000);
        }).catch((err)=>{
    console.log(err)
        });
        }
    }
}
}
</script>