<template>
<div class="w-full h-[500px]">hellow</div>
<div>
  <h1>Coordinates</h1>
  <p>{{coordinates.lat}} latitude {{coordinates.lng}} langitude</p>
    <GoogleMap
    api-key="AIzaSyCa9zTgqFKD6k6xcUey13_SCoxNe_DSFRQ"
      :center="{lat:10, lng:10}"
      :zoom="15"
      style="width: 600px; height: 350px"
  >
      <Marker :options="{ position: center }" />
      </GoogleMap>
</div>
</template>

<script>
import { GoogleMap , Marker} from 'vue3-google-map'
export default({
   components: { GoogleMap , Marker},
   data(){
     return{
       coordinates:{
         lat:0,
         lng:0
       }
     }
   },
   created(){
     this.$getLocation({}).then(coordinates=>{
       this.coordinates=coordinates
     })
   }
})
</script>