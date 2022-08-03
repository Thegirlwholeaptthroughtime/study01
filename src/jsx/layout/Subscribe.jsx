import React from 'react';

function Subscribe() {
    return ( 
        <>
         <section class="product-thumb-slider subscribe-banner p-5">
                 <div class="row">
                     <div class="col-12 col-lg-6 mx-auto">
                         <div class="text-center">
                             <h3 class="mb-0 fw-bold text-white">
                                 Get Latest Update by <br />
                                 Subscribe Our Newslater
                             </h3>
                             <div class="mt-3">
                                 <input type="text"
                                     class="form-control form-control-lg bubscribe-control rounded-0 px-5 py-3"
                                     placeholder="Enter your email" />
                             </div>
                             <div class="mt-3 d-grid">
                                 <button type="button" class="btn btn-lg btn-ecomm bubscribe-button px-5 py-3">
                                     Subscribe
                                 </button>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>
        </>
     );
}

export default Subscribe;