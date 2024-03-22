<template>
    <!-- <nav class="navbar navbar-expand-sm navbar-light bg-light" id="neubar">
      <div class="container">
        <a class="navbar-brand" href="#">
          <h1 class="text-primary m-0"><i class="fa fa-utensils me-3"></i>Restoran</h1>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link mx-2" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link mx-2" to="/OurServices">About</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="#">Service</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link mx-2" to="/Contact">Contact</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle mx-2" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Pages
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Booking</a>
                <a class="dropdown-item" href="#">Our Team</a>
                <a class="dropdown-item" href="#">Testimonials</a>
              </div>
            </li>
            <li class="nav-item">
              <button class="btn btn-primary mx-2">Book Table</button>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->
    <div class="container-xxl mycontainer p-0 ">
            <nav class="navbar navbar-expand-lg navbar-dark bg-darkpx-4 px-lg-5 py-3 py-lg-0">
                <a href="" class="navbar-brand p-0 ">
                    <h1 class="text-primary m-0"><i class="fa fa-utensils me-3"></i>Restoran</h1>
                    <!-- <img src="img/logo.png" alt="Logo"> -->
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0 pe-4">

                        <a href="index.html" class="nav-item nav-link active">Home</a>
                        <a href="about.html" class="nav-item nav-link">About</a>
                        <a href="service.html" class="nav-item nav-link">Service</a>
                        <router-link class="nav-item nav-link" to="/OurServices">OurServices</router-link>
                        <a href="menu.html" class="nav-item nav-link">Menu</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-0">
                                <a href="booking.html" class="dropdown-item">Booking</a>
                                <a href="team.html" class="dropdown-item">Our Team</a>
                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                            </div>
                        </div>
                        <a href="contact.html" class="nav-item nav-link">Contact</a>
                    </div>
                    <a href="" class="btn btn-primary py-2 px-4">Book A Table</a>
                </div>
            </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "MyNavbar"
  }
  </script>
  
  <style scoped>
  .mycontainer {
    color: orange;
    
    
  }
 
  </style>
  