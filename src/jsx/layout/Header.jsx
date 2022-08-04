import React from 'react';
import HeaderLogo from '../common/ui/HeaderLogo';
import Gnb from '../common/widget/Gnb';
import HeaderIcon from '../common/widget/HeaderIcon';

function Header() {
    return ( 
        <>
         <header class="top-header">
             <nav class="navbar navbar-expand-xl w-100 navbar-dark container gap-3">
                <HeaderLogo />
                 <a class="mobile-menu-btn d-inline d-xl-none" href="javascript:;" data-bs-toggle="offcanvas"
                     data-bs-target="#offcanvasNavbar">
                     <i class="bi bi-list"></i>
                 </a>
                
                <Gnb />
                <HeaderIcon />
             </nav>
         </header>
        </>
     );
}

export default Header;