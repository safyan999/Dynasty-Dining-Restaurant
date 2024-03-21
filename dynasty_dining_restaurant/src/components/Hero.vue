<template>
    <div class="heroStyle container">
        <MyNavbar/> 
        <div class="row heroSection1">
            <div class="col-5 sectionStyle animation">
                <h1> Enjoy Our Delicious Meal</h1>
                <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                    magna dolore erat amet
                </p>
                <button class="btn-primary">
                    Book TABLE
                </button>
            </div>
            <div class="col-6">
                <img src="../assets/hero.png" alt="">
            </div>
        </div>
    </div>
    <ourServices />
</template>

<script>
 import MyNavbar from "./Navbar/index.vue" 
 import ourServices from './OurServices.vue'
export default {
    name: "MyHero",
    components:{
        MyNavbar,
        ourServices,
    }
}
</script>

<style scoped>
body {
   
    margin: 0;
    font-family: "Heebo", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    
    background-color: #F1F8FF;
    -webkit-text-size-adjust: 100%;
    
}

.heroStyle {
    height: max-content;
    position: relative;
    background-image: url("../assets/bg-hero.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden; /* Ensures the overlay covers the entire background */
}

.heroStyle::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    z-index: 1; 
} 

.heroSection1 {
    color: #ffffff;
    font-family: sans-serif;
    align-items: center !important;
}

.heroSection1 h1 {
    
    font-size: 64px;
    font-weight: 600;
    font-family: sans-serif;
    font: 64px;
}

.heroSection1 img {
    width: fit-content;
    position: relative;
   
}
.sectionStyle{
    transition: .5s;

    /* animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: slideInLeft; */
}
</style>
