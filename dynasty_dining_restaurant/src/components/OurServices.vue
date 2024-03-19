<template>
    <div class="container">
        <h3> our services </h3>
        <h1>Explore Our Services </h1>
        <div class="row" >
            <div class="col-3 card" v-for="items in MyList" :key="items.title">
                <i class="fa fa-utensils "></i>
             
                <h3 class="card-title">{{ items.title }}</h3>
            
              
                <p class="card-body">{{ items.content }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:"ourServices",
    data(){
        return{
            MyList:[
                {title: "Master Chefs" ,content:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"},
                {title: "Master Chefs" ,content:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"},
                {title: "Master Chefs" ,content:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"},
                {title: "Master Chefs" ,content:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"},
                {title: "Master Chefs" ,content:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"},
                {title: "Master Chefs" ,content:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"}
            ]

        }
    }
}

</script>