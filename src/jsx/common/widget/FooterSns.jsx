import React from 'react';
import ApBtn from '../ui/ApBtn';
import GpBtn from '../ui/GpBtn';

function FooterSns() {
    return ( 
        <>
         <div class="row">
             <div class="col-12">
                 <div class="text-center">
                     <h5 class="fw-bold mb-3">Download Mobile App</h5>
                 </div>
                 <div class="app-icon d-flex flex-column flex-sm-row align-items-center justify-content-center gap-2">
                     <GpBtn />
                     <ApBtn />

                 </div>
             </div>
         </div>
        </>
     );
}

export default FooterSns;