import React from 'react';

function NewFeatures() {
    return ( 
        <>
         <section class="section-padding bg-section-2">
             <div class="container">
                 <div class="card border-0 rounded-0 p-3 depth">
                     <div class="row align-items-center justify-content-center">
                         <div class="col-lg-6 text-center">
                             <img src="assets/images/extra-images/promo-large.webp" class="img-fluid rounded-0"
                                 alt="..." />
                         </div>
                         <div class="col-lg-6">
                             <div class="card-body">
                                 <h3 class="fw-bold">New Features of Trending Products</h3>
                                 <ul class="list-group list-group-flush">
                                     <li class="list-group-item bg-transparent px-0">
                                         Contrary to popular belief, Lorem Ipsum is not simply
                                         random text.
                                     </li>
                                     <li class="list-group-item bg-transparent px-0">
                                         All the Lorem Ipsum generators on the Internet tend.
                                     </li>
                                     <li class="list-group-item bg-transparent px-0">
                                         There are many variations of passages of Lorem Ipsum
                                         available.
                                     </li>
                                     <li class="list-group-item bg-transparent px-0">
                                         There are many variations of passages available.
                                     </li>
                                 </ul>
                                 <div class="buttons mt-4 d-flex flex-column flex-lg-row gap-3">
                                     <a href="javascript:;" class="btn btn-lg btn-dark btn-ecomm px-5 py-3">Buy
                                         Now</a>
                                     <a href="javascript:;" class="btn btn-lg btn-outline-dark btn-ecomm px-5 py-3">View
                                         Details</a>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
        </>
     );
}

export default NewFeatures;