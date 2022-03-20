<template>
    <div>
        <div>
                          <form class="w-full h-full">
                <div class="flex flex-col mb-4 my-4 py-4">
                <div class="mb-6 my-4 text-left py-4">
                  <label class="block  mb-2 text-xl font-bold text-gray-700">name</label>
                  <input v-model="username" type="text" placeholder="username" class="w-full px-3 py-3 text-lg leading-tight text-gray-700 border rounded shadow appearance bg-gray-100 focus:outline-none focus:border-indigo-500">
                </div>
                
                 <div class="mb-6 text-left py-4">
					<label class="block mb-2 text-xl font-bold text-gray-700" for="password">email</label>
					<input v-model="email"	class="w-full px-3 py-3 text-lg leading-tight text-gray-700 border rounded shadow appearance-none bg-gray-100 focus:outline-none focus:border-indigo-500" type="text" placeholder="email"/>
				 </div>
                                  <div class="mb-6 text-left py-4">
					<label class="block mb-2 text-xl font-bold text-gray-700" for="password">passw</label>
					<input v-model="password"	class="w-full px-3 py-3 text-lg leading-tight text-gray-700 border rounded shadow appearance-none bg-gray-100 focus:outline-none focus:border-indigo-500" type="password" placeholder="Password"/>
				 </div>
                                  <div class="mb-6 text-left py-4">
					<label class="block mb-2 text-xl font-bold text-gray-700" for="password">last</label>
					<input v-model="lastName"	class="w-full px-3 py-3 text-lg leading-tight text-gray-700 border rounded shadow appearance-none bg-gray-100 focus:outline-none focus:border-indigo-500" type="text" placeholder="last"/>
				 </div>
                                  <div class="mb-6 text-left py-4">
					<label class="block mb-2 text-xl font-bold text-gray-700" for="password">educ</label>
					<input v-model="education"	class="w-full px-3 py-3 text-lg leading-tight text-gray-700 border rounded shadow appearance-none bg-gray-100 focus:outline-none focus:border-indigo-500" type="text" placeholder="edu"/>
				 </div>
                                  <div class="mb-6 text-left py-4">
					<label class="block mb-2 text-xl font-bold text-gray-700" for="password">imag</label>
					<input v-model="image"	class="w-full px-3 py-3 text-lg leading-tight text-gray-700 border rounded shadow appearance-none bg-gray-100 focus:outline-none focus:border-indigo-500" type="text" placeholder="Password"/>
				 </div>
                                  <div class="mb-6 text-left py-4">
					<label class="block mb-2 text-xl font-bold text-gray-700" for="password">descr</label>
					<input v-model="description"	class="w-full px-3 py-3 text-lg leading-tight text-gray-700 border rounded shadow appearance-none bg-gray-100 focus:outline-none focus:border-indigo-500" type="text" placeholder="Password"/>
				 </div>
                                  <div class="mb-6 text-left py-4">
					<label class="block mb-2 text-xl font-bold text-gray-700" for="password">first</label>
					<input v-model="fristName"	class="w-full px-3 py-3 text-lg leading-tight text-gray-700 border rounded shadow appearance-none bg-gray-100 focus:outline-none focus:border-indigo-500" type="text" placeholder="Password"/>
				 </div>



                <div class=" mb-6 py-4 flex flex-row justify-between">
                  <div class="justify-start text-lg font-bold"><input type="checkbox" class="w-[20px]">Rememper Me</div><div class="justify-end font-bold text-lg"><a href="#" class="text-blue-500 hover:underline">Lost password ?</a></div>
                </div>
                <div class="mb-6 text-left py-4">
								<button @click.prevent="send()"	class="w-[230px] px-4 py-3 font-bold text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">Login To your account</button>
							</div>
                            </div>
                </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            username:null,
            email:null,
            password:null,
            education:null,
            fristName:null,
            lastName:null,
             image:null,
             description:null
            
        }
    },
methods:{
  send(){

        let data={
            username:this.username,
            email:this.email,
            password:this.password,
                        education:this.education,
            fristName:this.fristName,
            lastName:this.lastName,
                        image:this.image,
            description:this.description,

        }
        console.log(data)
        axios.post('https://hmmod2022.pythonanywhere.com/signUp',data).then((res)=>{
            console.log(res.data)
            this.$store.commit('login',res.data)
        setTimeout(() => this.$router.push({path: '/'}), 500);
        }).catch((err)=>{
    console.log(err)
        });

    }
}
}
</script>