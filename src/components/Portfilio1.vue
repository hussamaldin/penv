<template>
      <div class="w-full h-full">
         <div class="w-full h-[500px] relative mb-[50px]">
          <div class="bg-fixed bg-cover w-full h-full" :style='{ backgroundImage: `url(${img})` }'></div>
      </div>

      <div>
          <div class="w-full text-gray-700 font-bold text-xl flex justify-center">
              <div v-for="el in elem" :key="el.id" @click="activate(el.status)" :class="[active === el.status?'p-2 flex justify-center bg-yellow-600 items-center':'p-2 flex justify-center items-center  hover:bg-gray-100']">{{el.status}}</div>
          </div>

          <div class="flex flex-row flex-wrap justify-center">
              <div class="w-[48%] h-[400px]  animate__animated animate__fadeIn animate__slow flex justify-center relative transition-all overflow-hidden m-2 group" v-for="blog in filterd" :key="blog.id"  :style='{ backgroundImage: `url(${blog.img})` }'>
                  <div class="w-[90%] absolute duration-500 group-hover:bottom-[5px] bottom-[-200px] h-[150px] p-2 flex flex-col space-y-2 justify-center bg-yellow-600 items-center">
                      <div class="text-2xl font-bold">{{blog.name}}</div>
                      <div class="font-bold text-lg">{{blog.status}}</div>
                      <div class="duration-500"><div class="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-yellow-600 border-2 border-gray-900 "><div class="text-3xl text-gray-900">+</div></div></div>
                  </div>
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
           active:'All',
           afblog:null,
           elem: [
          { id :'1', status: 'All' },
          { id :'2', status: 'Web Design' },
          { id :'3', status: 'Graphic Design' },
          { id :'4', status: 'Logo Design' },
        ],
          blogs:[
              {id:'1', name:'Back End', status:'Web Design', img:require('../assets/dola.jpg')},
              {id:'2', name:'Back End', status:'Logo Design', img:require('../assets/dola.jpg')},
              {id:'3', name:'Front End', status:'Web Design', img:require('../assets/dola.jpg')},
              {id:'4', name:'Back End', status:'Logo Design', img:require('../assets/dola.jpg')},
              {id:'5', name:'Back End', status:'Graphic Design', img:require('../assets/dola.jpg')},
              {id:'6', name:'Front End', status:'Web Design', img:require('../assets/dola.jpg')},
              {id:'7', name:'Front End', status:'Graphic Design', img:require('../assets/dola.jpg')},
              {id:'8', name:'Back End', status:'Web Design', img:require('../assets/dola.jpg')},
              {id:'9', name:'Front End', status:'Logo Design', img:require('../assets/dola.jpg')},
              {id:'10', name:'Front End', status:'Web Design', img:require('../assets/dola.jpg')},
              {id:'11', name:'Back End', status:'Graphic Design', img:require('../assets/dola.jpg')},
              {id:'12', name:'Back End', status:'Logo Design', img:require('../assets/dola.jpg')},
              {id:'13', name:'Front End', status:'Graphic Design', img:require('../assets/dola.jpg')},
              {id:'14', name:'Back End', status:'Web Design', img:require('../assets/dola.jpg')},
          ]
        }
    },
    methods:{
        activate(v){
            this.active=v
            console.log(this.active)
        }
    },
    computed:{
        
    filterd:function(){
        if(this.active === 'All'){
        return this.blogs
        
        }

                else{
        return this.blogs.filter((blog) =>{
            return blog.status.toLowerCase().includes(this.active.toLowerCase())
        
        })
        }
    }
}
}
</script>