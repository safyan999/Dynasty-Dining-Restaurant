<template>
<div class="main-container">
    <div class="heroStyle container py-3">
        <MyNavbar />
        <div class="row align-items-center heroRow">
            <div class="col-md-6 text-center text-md-start">
                <h1 class="mb-4">Enjoy Our Delicious Meal</h1>
                <p class="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                    lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <button class="btn btn-primary">Book Table</button>
            </div>
            <div class="col-md-6">
                <img src="../assets/hero.png" alt="Hero Image" class="img-fluid">
            </div>
        </div>
    </div>
    <ourServices />
</div>
</template>

  
<script>
import MyNavbar from "./Navbar/index.vue";
import ourServices from "./OurServices.vue";

export default {
    name: "MyHero",
    components: {
        MyNavbar,
        ourServices,
    },
};
</script>

  
<style scoped>
body {
    margin: 0;
    font-family: "Heebo", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-color: #f1f8ff;
    -webkit-text-size-adjust: 100%;
}

.heroStyle {
    height: 100vh;
    position: relative;
    
    background-image: url("../assets/bg-hero.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    color: #f1f8ff;
    font-size: larger;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}


.heroStyle::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.sectionStyle {
    transition: 0.5s;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: slideInLeft;
}
.heroRow{
    /* margin: 50px; */
    padding: 50px
}
</style>
