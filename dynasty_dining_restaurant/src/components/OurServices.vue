<template>

<div class=" container hero1 "> <!--hero secion -->
    <div class="hero2">
        <h1> <b>About Us</b></h1>
        <a href="#">HOME</a>/
        <a href="#">PAGE</a>/
        <a href="#">ABOUT</a>
    </div>
         <div class="overlay"></div>
    </div>
    <!-- main content  -->
<div class="container mainContent">
    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h5 class="section-title ff-secondary text-center text-primary fw-normal">Our Services</h5>
        <h1 class="mb-5">Explore Our Services</h1>
    </div>
    <div class="row">
        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" v-for="items in MyList" :key="items.title">
            <div class="service-item rounded pt-3">
                <div class="p-4">
                    <div v-html="items.tag"></div>
                    <!-- <i class="fa fa-3x fa-user-tie text-primary mb-4"></i> -->
                    <h5>{{items.title}}</h5>
                    <p class="card-body">{{ items.content }}</p>
                </div>
            </div>
           
           
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "ourServices",
    data() {
        return {
            MyList: [{
                    tag: '<i class="fa fa-3x fa-user-tie  text-primary mb-4"></i>',
                    title: "Master Chefs",
                    content: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
                },
                {
                    tag: '<i class="fa fa-3x fa-utensils text-primary mb-4 "></i>',
                    title: "Quality Food",
                    content: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
                },
                {
                    tag: '<i class="fa fa-3x fa-cart-plus text-primary mb-4 "></i>',
                    title: "Online Order",
                    content: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
                },
                {
                    tag: '<i class="fa fa-3x fa-headset text-primary mb-4 "></i>',
                    title: "24/7 Service",
                    content: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
                },
                {
                    tag: '<i class="fa fa-3x fa-user-tie  text-primary mb-4"></i>',
                    title: "Master Chefs",
                    content: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
                },
                {
                    tag: '<i class="fa fa-3x fa-utensils text-primary mb-4 "></i>',
                    title: "Quality Food",
                    content: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
                },
                {
                    tag: '<i class="fa fa-3x fa-cart-plus text-primary mb-4 "></i>',
                    title: "Online Order",
                    content: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
                },
                {
                    tag: '<i class="fa fa-3x fa-headset text-primary mb-4 "></i>',
                    title: "24/7 Service",
                    content: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
                },

            ]

        }
    }
}
</script>

<style scoped>
.hero1{
    background-image: url("../assets/bg-hero.jpg");
    border: 1px solid green;
    text-align: center;
    vertical-align: middle;
    padding: 100px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* opacity: 30%; */

}

.hero{
    font-size: larger;
    color: white;
    font-weight: bold;
    /* opacity: 30%; */
    
}
hero2{
content: "";
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
} 


.myservice {

    margin: 10px;

}

.row :hover {
    background-color: orange;

}
</style>
