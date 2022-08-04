import React from 'react';

function HeaderIcon() {
    return ( 
        <>
                <ul class="navbar-nav secondary-menu flex-row">
                     <li class="nav-item">
                         <a class="nav-link dark-mode-icon" href="javascript:;">
                             <div class="mode-icon">
                                 <i class="bi bi-moon"></i>
                             </div>
                         </a>
                     </li>
                     <li class="nav-item">
                         <a class="nav-link" href="search.html"><i class="bi bi-search"></i></a>
                     </li>
                     <li class="nav-item">
                         <a class="nav-link" href="wishlist.html"><i class="bi bi-suit-heart"></i></a>
                     </li>
                     <li class="nav-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                         <a class="nav-link position-relative" href="javascript:;">
                             <div class="cart-badge">8</div>
                             <i class="bi bi-basket2"></i>
                         </a>
                     </li>
                     <li class="nav-item">
                         <a class="nav-link" href="account-dashboard.html"><i class="bi bi-person-circle"></i></a>
                     </li>
                 </ul>
        </>
     );
}

export default HeaderIcon;