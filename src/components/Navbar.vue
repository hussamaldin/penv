<template>
    <div class="bg-white border-b border-gray-200 z-30 shadow absolute top-0 left-0 w-full">
        <div class="px-4 py-4">
        <div class="flex items-center justify-between">
           <div class="flex items-center justify-start">
               <div><span><a href="#" class="text-lg font-bold ml-1 p-4"><span class="text-xl font-bold text-red-500">B</span><span class="text-lg">eatiful</span></a></span></div>
               <div class="relative group">
                   <span><a href="/" class="text-sm font-bold hover:underline ml-4 py-4 px-1">Home</a><i class="fa fa-angle-down"></i></span>
                   <div class="border hidden group-hover:block border-red-500 w-[160px] absolute top-[40px] left-[20px] bg-white text-sm  px-3">
                       <ul class="">
                           <li class="py-2"><a class="cursor-pointer hover:underline font-bold">Middle East</a></li>
                           <li class="py-2"><a class=" cursor-pointer hover:underline font-bold">Africa</a></li>
                           <li class="py-2"><a class="cursor-pointer hover:underline font-bold">Asia</a></li>
                           <li class="py-2"><a class="cursor-pointer hover:underline font-bold">Europe</a></li>
                           <li class="py-2"><a class="cursor-pointer hover:underline font-bold">Us & Canda</a></li>
                           <li class="py-2"><a class="cursor-pointer hover:underline font-bold">Latin Amirca</a></li>
                       </ul>
                   </div>
               </div>
               <div><span><a href="/portfilio1" class="text-sm font-bold hover:underline ml-1 p-4">Portfolio</a></span></div>
               <div><span><a href="/about1" class="text-sm font-bold hover:underline ml-1 p-4">About1</a></span></div>
               <div><span><a href="/about2" class="text-sm font-bold hover:underline ml-1 p-4">About2</a></span></div>
               <div><span><a href="/elements" class="text-sm font-bold hover:underline ml-1 p-4">Elments</a></span></div>
               <div><span><a href="/blog" class="text-sm font-bold hover:underline ml-1 p-4">Blog</a></span></div>
               <div><span><a href="/service1" class="text-sm font-bold hover:underline ml-1 p-4">service</a></span></div>
               <div><span><a href="/contact" class="text-sm font-bold hover:underline ml-1 p-4">Contact</a></span></div>
               
           </div>
           <div class="flex items-center justify-end flex-row">
               <div><span class="mx-4"><i class="fa fa-search text-xl hover:text-red-500 font-bold"></i></span></div>
           </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           img:require('../assets/new.jpg'),
        }
    }
}
</script>