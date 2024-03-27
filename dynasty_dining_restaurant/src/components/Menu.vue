<template>
<div class="container hero1">
    <!-- Hero section -->
    <MyNavbar />
    <div class="hero2">
        <h1><b> Our Menu</b></h1>
        <a href="#">HOME</a>/ <a href="#">PAGE</a>/
        <a href="#">ABOUT</a>
    </div>
</div>
<!-- menu main content here start -->

<div class="container-xxl py-5">
    <div class="container">

        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 class="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
            <h1 class="mb-5">Most Popular Itemns</h1>

        </div>
        <div class="tab-class ">
            <ul class="nav d-flex align-items-center border-bottom mb-5 justify-content-center">
                <li class="nav-link text-center wow fadeInUp" data-wow-delay="0.1s">
                    <a class="d-flex align-items-center text-start mx-3 pb-3" href="#tab1">
                        <i class="fa fa-coffee fa-2x text-primary"></i>
                        <div class="ps-3">
                            <small class="text-body"> popular </small>
                            <h5 class="mt-n1 mb-0">BeakFast</h5>
                        </div>
                    </a>

                </li>
                <li class="nav-link">
                    <a class="d-flex align-items-center text-start mx-3 pb-3" href="#tab1">
                        <i class="fa fa-coffee fa-2x text-primary"></i>
                        <div class="ps-3">
                            <small class="text-body"> popular </small>
                            <h5 class="mt-n1 mb-0">BeakFast</h5>
                        </div>
                    </a>
                </li>
                <li class="nav-link d-flex align-items-center">
                    <a class="d-flex align-items-center text-start mx-3 pb-3" href="#tab1">
                        <i class="fa fa-coffee fa-2x text-primary"></i>
                        <div class="ps-3">
                            <small class="text-body"> popular </small>
                            <h5 class="mt-n1 mb-0">BeakFast</h5>
                        </div>
                    </a>
                </li>

            </ul>
        </div>
    </div>

</div>
</template>

<script>
import MyNavbar from "./Navbar/index.vue";
export default {
    name: "foodMenu",
    components: {
        MyNavbar
    }
}
</script>

<style scoped>
body {
    min-height: 100vh;
    background: linear-gradient(to bottom, #000428, #004683);
}

.hero1 {
    background-image: url("../assets/bg-hero.jpg");
    background-repeat: no-repeat;
}

.hero2 {
    text-align: center;
    padding: 100px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: larger;
    color: white;
    font-weight: bold;
}
</style>
