<template>
<div class="container hero1">
    <!-- Hero section -->
    <MyNavbar />
    <div class="hero2">
        <h1><b>About Us</b></h1>
        <a href="#">HOME</a>/
        <a href="#">PAGE</a>/
        <a href="#">ABOUT</a>
    </div>
</div>

<div class="maincontent container p-5">
    <div class="row g-5 align-items-center justify-content-center">
        <div class="col-lg-6">
            <div class="row g-3">
                <div class="col-6 text-start">
                    <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="../assets/about-1.jpg">
                </div>
                <div class="col-6 text-start">
                    <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="../assets/about-2.jpg" style="margin-top: 25%;">
                </div>
                <div class="col-6 text-end">
                    <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="../assets/about-3.jpg">
                </div>
                <div class="col-6 text-end">
                    <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="../assets/about-4.jpg">
                </div>
            </div>
        </div>
        <div class="col-lg-6 row2">
            <h5 class="section-title ff-secondary text-start text-primary fw-normal"> About US</h5>
            <h1 class="mb-4">welcome to <i class="fa fa-utensils  text-primary me-2"></i>Restoran </h1>

            <p class="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.

            </p>
            <p class="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet

            </p>
        </div>
    </div>
</div>

<h1 class="mt-5">Hello About</h1>
</template>

<script>
import MyNavbar from "./Navbar/index.vue";

export default {
    name: "MyAbout",
    components: {
        MyNavbar,
    },
};
</script>

<style scoped>
.hero1 {
    background-image: url("../assets/bg-hero.jpg");
    background-repeat: no-repeat;
}

.hero2 {
    text-align: center;
    padding: 100px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: larger;
    color: white;
    font-weight: bold;
}

.maincontent {
    margin-top: 20px;
}

/* .img-fluid {
    max-width: 100%;
    height: auto;
} */

/* .row2 {
    text-align: center;
} */

.maincontent img:nth-child(2) {
    -ms-transform: scale(0.5);
    /* IE 9 */
    -webkit-transform: scale(0.5);
    /* Safari 3-8 */
    transform: scale(0.5);
}
</style>
