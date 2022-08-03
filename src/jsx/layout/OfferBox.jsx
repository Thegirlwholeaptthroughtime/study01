import React from 'react';

function OfferBox() {
    return ( 
        <>
           <section class="product-thumb-slider section-padding">
                 <div class="container">
                     <div class="text-center pb-3">
                         <h3 class="mb-0 h3 fw-bold">What We Offer!</h3>
                         <p class="mb-0 text-capitalize">The purpose of lorem ipsum</p>
                     </div>
                     <div class="row row-cols-1 row-cols-lg-4 g-4">
                         <div class="col d-flex">
                             <div class="card depth border-0 rounded-0 border-bottom border-primary border-3 w-100">
                                 <div class="card-body text-center">
                                     <div class="h1 fw-bold my-2 text-primary">
                                         <i class="bi bi-truck"></i>
                                     </div>
                                     <h5 class="fw-bold">Free Delivery</h5>
                                     <p class="mb-0">
                                         Nor again is there anyone who loves or pursues or desires to
                                         obtain pain of itself.
                                     </p>
                                 </div>
                             </div>
                         </div>
                         <div class="col d-flex">
                             <div class="card depth border-0 rounded-0 border-bottom border-danger border-3 w-100">
                                 <div class="card-body text-center">
                                     <div class="h1 fw-bold my-2 text-danger">
                                         <i class="bi bi-credit-card"></i>
                                     </div>
                                     <h5 class="fw-bold">Secure Payment</h5>
                                     <p class="mb-0">
                                         Nor again is there anyone who loves or pursues or desires to
                                         obtain pain of itself.
                                     </p>
                                 </div>
                             </div>
                         </div>
                         <div class="col d-flex">
                             <div class="card depth border-0 rounded-0 border-bottom border-success border-3 w-100">
                                 <div class="card-body text-center">
                                     <div class="h1 fw-bold my-2 text-success">
                                         <i class="bi bi-minecart-loaded"></i>
                                     </div>
                                     <h5 class="fw-bold">Free Returns</h5>
                                     <p class="mb-0">
                                         Nor again is there anyone who loves or pursues or desires to
                                         obtain pain of itself.
                                     </p>
                                 </div>
                             </div>
                         </div>
                         <div class="col d-flex">
                             <div class="card depth border-0 rounded-0 border-bottom border-warning border-3 w-100">
                                 <div class="card-body text-center">
                                     <div class="h1 fw-bold my-2 text-warning">
                                         <i class="bi bi-headset"></i>
                                     </div>
                                     <h5 class="fw-bold">24/7 Support</h5>
                                     <p class="mb-0">
                                         Nor again is there anyone who loves or pursues or desires to
                                         obtain pain of itself.
                                     </p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 
                 </div>
             </section>
        </>
     );
}

export default OfferBox;