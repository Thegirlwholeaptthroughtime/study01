import React from 'react';

function Gnb() {
    return ( 
        <>
         <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">
             <div class="offcanvas-header">
                 <div class="offcanvas-logo">
                     <img src="assets/images/logo.webp" class="logo-img" alt="" />
                 </div>
                 <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                     aria-label="Close"></button>
             </div>
             <div class="offcanvas-body primary-menu">
                 <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                     <li class="nav-item">
                         <a class="nav-link" href="index.html">Home</a>
                     </li>
                     <li class="nav-item dropdown">
                         <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="tv-shows.html"
                             data-bs-toggle="dropdown">
                             Categories
                         </a>
                         <div class="dropdown-menu dropdown-large-menu">
                             <div class="row">
                                 <div class="col-12 col-xl-4">
                                     <h6 class="large-menu-title">Fashion</h6>
                                     <ul class="list-unstyled">
                                         <li><a href="javascript:;">Casual T-Shirts</a></li>
                                         <li><a href="javascript:;">Formal Shirts</a></li>
                                         <li><a href="javascript:;">Jackets</a></li>
                                         <li><a href="javascript:;">Jeans</a></li>
                                         <li><a href="javascript:;">Dresses</a></li>
                                         <li><a href="javascript:;">Sneakers</a></li>
                                         <li><a href="javascript:;">Belts</a></li>
                                         <li><a href="javascript:;">Sports Shoes</a></li>
                                     </ul>
                                 </div>

                                 <div class="col-12 col-xl-4">
                                     <h6 class="large-menu-title">Electronics</h6>
                                     <ul class="list-unstyled">
                                         <li><a href="javascript:;">Mobiles</a></li>
                                         <li><a href="javascript:;">Laptops</a></li>
                                         <li><a href="javascript:;">Macbook</a></li>
                                         <li><a href="javascript:;">Televisions</a></li>
                                         <li><a href="javascript:;">Lighting</a></li>
                                         <li><a href="javascript:;">Smart Watch</a></li>
                                         <li><a href="javascript:;">Galaxy Phones</a></li>
                                         <li><a href="javascript:;">PC Monitors</a></li>
                                     </ul>
                                 </div>

                                 <div class="col-12 col-xl-4 d-none d-xl-block">
                                     <div class="pramotion-banner1">
                                         <img src="assets/images/menu-img.jpg" class="img-fluid" alt="" />
                                     </div>
                                 </div>

                             </div>

                         </div>
                     </li>
                     <li class="nav-item dropdown">
                         <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;"
                             data-bs-toggle="dropdown">
                             Shop
                         </a>
                         <ul class="dropdown-menu">
                             <li>
                                 <a class="dropdown-item" href="cart.html">Shop Cart</a>
                             </li>
                             <li>
                                 <a class="dropdown-item" href="wishlist.html">Wishlist</a>
                             </li>
                             <li>
                                 <a class="dropdown-item" href="product-details.html">Product Details</a>
                             </li>
                             <li>
                                 <a class="dropdown-item" href="payment-method.html">Payment Method</a>
                             </li>
                             <li>
                                 <a class="dropdown-item" href="billing-details.html">Billing Details</a>
                             </li>
                             <li>
                                 <a class="dropdown-item" href="address.html">Addresses</a>
                             </li>
                             <li>
                                 <a class="dropdown-item" href="shop-grid.html">Shop Grid</a>
                             </li>
                             <li>
                                 <a class="dropdown-item" href="shop-grid-type-4.html">Shop Grid 4</a>
                             </li>
                             <li>
                                 <a class="dropdown-item" href="shop-grid-type-5.html">Shop Grid 5</a>
                             </li>
                             <li>
                                 <a class="dropdown-item" href="search.html">Search</a>
                             </li>
                         </ul>
                     </li>
                     <li class="nav-item">
                         <a class="nav-link" href="about-us.html">About</a>
                     </li>
                     <li class="nav-item">
                         <a class="nav-link" href="contact-us.html">Contact</a>
                     </li>
                     <li class="nav-item dropdown">
                         <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;"
                             data-bs-toggle="dropdown">
                             Account
                         </a>
                         <ul class="dropdown-menu">
                             <li>
                                 <a class="dropdown-item" href="account-dashboard.html">Dashboard</a>
                             </li>
                             <li>
                                 <a class="dropdown-item" href="account-orders.html">My Orders</a>
                             </li>
                             <li>
                                 <a class="dropdown-item" href="account-profile.html">My Profile</a>
                             </li>
                             <li>
                                 <a class="dropdown-item" href="account-edit-profile.html">Edit Profile</a>
                             </li>
                             <li>
                                 <a class="dropdown-item" href="account-saved-address.html">Addresses</a>
                             </li>
                             <li>
                                 <hr class="dropdown-divider" />
                             </li>
                             <li>
                                 <a class="dropdown-item" href="authentication-login.html">Login</a>
                             </li>
                             <li>
                                 <a class="dropdown-item" href="authentication-register.html">Register</a>
                             </li>
                             <li>
                                 <a class="dropdown-item" href="authentication-reset-password.html">Password</a>
                             </li>
                         </ul>
                     </li>
                     <li class="nav-item dropdown">
                         <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;"
                             data-bs-toggle="dropdown">
                             Blog
                         </a>
                         <ul class="dropdown-menu">
                             <li>
                                 <a class="dropdown-item" href="blog-post.html">Blog Post</a>
                             </li>
                             <li>
                                 <a class="dropdown-item" href="blog-read.html">Blog Read</a>
                             </li>
                         </ul>
                     </li>
                 </ul>
             </div>
         </div>
        </>
     );
}

export default Gnb;