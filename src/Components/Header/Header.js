import React from 'react'

import logosmpng from "../images/icons/logo-sm.png";
import searchpng from "../images/icons/search-icon-sm.png";
import cartpng from "../images/icons/cart-sm.png";
function Header() {
  return (
    <div><div className="nav-wrapper fixed-top">
    <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                ☰
            </button>
            <a className="navbar-brand mx-auto" href="#"><img src={logosmpng}></img></a>

            <div className="navbar-collapse collapse">
                <ul className="navbar-nav nav-justified w-100 nav-fill">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/mac/">Mac</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">iphone</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">ipad</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">watch</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">tv</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Music</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Support</a></li>
                    <li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/"><img src={searchpng}></img></a></li>
                    <li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/"><img src={cartpng}></img></a></li>
                </ul>
            </div>
        </nav>
    </div>
</div></div>
  )
}
export default Header;