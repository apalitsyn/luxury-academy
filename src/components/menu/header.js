import React, { useEffect, useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import { header } from 'react-bootstrap';
import { Link } from '@reach/router';
import useOnclickOutside from "react-cool-onclickoutside";


setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);

const NavLink = props => (
  <Link 
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? 'active' : 'non-active',
      };
    }}
  />
);


export default function() {

    // const [openMenu, setOpenMenu] = React.useState(false);
    const [openMenu1, setOpenMenu1] = React.useState(false);
    // const handleBtnClick = (): void => {
    //   setOpenMenu(!openMenu);
    // };
    const handleBtnClick1 = (): void => {
      setOpenMenu1(!openMenu1);
    };
    // const closeMenu = (): void => {
    //   setOpenMenu(false);
    // };
    const closeMenu1 = (): void => {
      setOpenMenu1(false);
    };
    // const ref = useOnclickOutside(() => {
    //   closeMenu();
    // });
    const ref1 = useOnclickOutside(() => {
      closeMenu1();
    });

    const [showmenu, btn_icon] = useState(false);
    useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
        btn_icon(false);
        if (window.pageYOffset > sticky + 300) {
          header.classList.add("sticky");
          totop.classList.add("show");
          
        } else {
          header.classList.remove("sticky");
          totop.classList.remove("show");
        } if (window.pageYOffset > sticky) {
          // closeMenu();
        }
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    }, []);
    return (
    <header id="myHeader" className='navbar'>
     <div className='container-fluid'>
       <div className='row m-2-hor w-100-nav'>
          <div className='logo'>
              <div className='navbar-title navbar-item'>
                <NavLink to="/">
                {/* <img
                    src="./img/lux.png"
                    className="img-fluid"
                    alt="#"
                  /> */}
                  <svg width="200" height="95.69216921410538" viewBox="0 0 200 95.69216921410538" class="css-1j8o68f"><defs id="SvgjsDefs3629"><linearGradient id="SvgjsLinearGradient3634"><stop id="SvgjsStop3635" stop-color="#945f50" offset="0"></stop><stop id="SvgjsStop3636" stop-color="#fcc5b3" offset="0.5"></stop><stop id="SvgjsStop3637" stop-color="#945f50" offset="1"></stop></linearGradient><linearGradient id="SvgjsLinearGradient3638"><stop id="SvgjsStop3639" stop-color="#945f50" offset="0"></stop><stop id="SvgjsStop3640" stop-color="#fcc5b3" offset="0.5"></stop><stop id="SvgjsStop3641" stop-color="#945f50" offset="1"></stop></linearGradient></defs><g id="SvgjsG3630" featurekey="nameFeature-0" transform="matrix(1.8825105560165094,0,0,1.8825105560165094,-5.4212491150956605,-22.589746068180975)" fill="url(#SvgjsLinearGradient3634)"><path d="M16.88 12 l9.3404 18.681 l-5.2248 -0.00085936 l-4.1156 -8.23 l-4.1024 8.23 l-4.6932 9.32 l-5.2046 0 z M17.662 22.058 l3.8742 7.7468 l3.2702 0.00085936 l-7.926 -15.852 l-12.586 25.172 l3.2518 0 l4.4512 -8.8392 l4.0996 -8.2276 l0.78148 -1.5674 z M28.56 35.3612 l2.3191 4.638 l-5.2046 0 l-2.3191 -4.638 l5.2046 0 z M24.77 36.2355 l1.445 2.8899 l3.2501 0 l-1.445 -2.8899 l-3.2501 0 z M28.1548 12 l11.411 22.769 l-2.6154 5.2308 l-14 -28 l5.2046 0 z M24.363599999999998 12.873999999999999 l12.586 25.171 l1.6381 -3.2754 l-10.973 -21.896 l-3.2509 0 z M57.66 12 l9.3404 18.681 l-5.2248 -0.00085936 l-4.1156 -8.23 l-4.1024 8.23 l-4.6932 9.32 l-5.2046 0 z M58.442 22.058 l3.8742 7.7468 l3.2702 0.00085936 l-7.926 -15.852 l-12.586 25.172 l3.2518 0 l4.4512 -8.8392 l4.0996 -8.2276 l0.78148 -1.5674 z M69.34 35.3612 l2.3191 4.638 l-5.2046 0 l-2.3191 -4.638 l5.2046 0 z M65.55 36.2355 l1.445 2.8899 l3.2501 0 l-1.445 -2.8899 l-3.2501 0 z M86.34299999999999 12 l4.6732 0 l0 28.001 l-23.286 -20.923 l0 -7.0779 l18.613 16.76 l0 -16.76 z M90.142 38.0397 l0 -25.166 l-2.9249 0 l0 17.849 l-1.459 -1.3138 l-17.154 -15.446 l0 4.7247 z M95.12089999999999 12 l14 0 l0 4.681 l-9.3201 0 l0 23.319 l-4.6802 0 l0 -28 z M108.246 15.806999999999999 l0 -2.9328 l-12.252 0 l0 26.252 l2.9319 0 l0 -23.319 l9.3201 0 z"></path></g><g id="SvgjsG3631" featurekey="nameFeature-1" transform="matrix(1.1777875902781485,0,0,1.1777875902781485,-3.3921468951074263,48.86728575277064)" fill="url(#SvgjsLinearGradient3638)"><path d="M20.774 34.4932 c1.1958 -0.5516 2.2396 -1.3252 3.1278 -2.32 l4.68 1.5332 c-0.64596 0.94144 -1.3925 1.8016 -2.2395 2.5822 c-0.84792 0.77972 -1.7684 1.4458 -2.7641 1.9965 c-0.99568 0.55248 -2.0577 0.97556 -3.1871 1.271 c-1.1303 0.29633 -2.2999 0.44408 -3.5106 0.44408 c-3.8733 0 -7.1688 -1.3715 -9.8848 -4.1156 c-2.744 -2.7168 -4.1156 -6.0116 -4.1156 -9.8848 c0 -3.8462 1.3715 -7.1408 4.1156 -9.8848 c2.7168 -2.744 6.0116 -4.1156 9.8848 -4.1156 c1.9362 0 3.7518 0.36363 5.446 1.0909 c1.6941 0.72556 3.1872 1.7343 4.4784 3.0254 l-3.348 3.3086 c-1.8025 -1.8296 -3.994 -2.7439 -6.5764 -2.7439 c-2.5551 0 -4.7608 0.91432 -6.6164 2.7439 c-1.8025 1.8287 -2.7038 4.02 -2.7038 6.5752 s0.90124 4.7608 2.7038 6.6164 c1.8558 1.8025 4.0604 2.7038 6.6164 2.7038 c1.3986 0 2.6959 -0.27535 3.8934 -0.82696 z M27.152 34.1576 l-2.9957 -0.9816 c-0.87592 0.882 -1.8882 1.59 -3.0158 2.1102 c-1.3077 0.60228 -2.7413 0.90736 -4.2596 0.90736 c-2.778 0 -5.2088 -0.99216 -7.2256 -2.9502 c-1.9756 -2.035 -2.9686 -4.466 -2.9686 -7.244 c0 -2.7798 0.99392 -5.1984 2.9546 -7.1888 c2.0254 -1.9965 4.458 -3.0044 7.2396 -3.0044 c2.5149 0 4.7176 0.8086 6.5604 2.4048 l2.1041 -2.0787 c-1.0568 -0.9266 -2.2518 -1.6775 -3.5622 -2.2387 c-1.5787 -0.6766 -3.2946 -1.0192 -5.1024 -1.0192 c-3.6644 0 -6.694 1.2614 -9.2624 3.8567 c-2.6006 2.5997 -3.8628 5.6312 -3.8628 9.2692 c0 3.6644 1.2614 6.694 3.8567 9.2632 c2.5752 2.6014 5.6052 3.8628 9.2696 3.8628 c1.1303 0 2.237 -0.13984 3.2886 -0.4152 c1.0542 -0.27535 2.0586 -0.67572 2.9843 -1.1897 c0.9292 -0.51488 1.8025 -1.1452 2.5962 -1.8759 c0.5026 -0.46416 0.97204 -0.96156 1.4012 -1.4878 z M23.9 28.34 l-7.0202 0 l0 -4.64 l11.7 0 z M17.754 24.573999999999998 l0 2.8917 l5.7859 0 l2.917 -2.8917 l-8.703 0 z M42.67 12 l9.3404 18.681 l-5.2248 -0.00085936 l-4.1156 -8.23 l-4.1024 8.23 l-4.6932 9.32 l-5.2046 0 z M43.452 22.058 l3.8742 7.7468 l3.2702 0.00085936 l-7.926 -15.852 l-12.586 25.172 l3.2518 0 l4.4512 -8.8392 l4.0996 -8.2276 l0.78148 -1.5674 z M54.349999999999994 35.3612 l2.3191 4.638 l-5.2046 0 l-2.3191 -4.638 l5.2046 0 z M50.56 36.2355 l1.445 2.8899 l3.2501 0 l-1.445 -2.8899 l-3.2501 0 z M68.694 26.605 c-1.076 1.5604 -2.4475 2.6765 -4.1136 3.3488 l5.7692 10.046 l-5.3664 0 l-8.1312 -14.018 l4.1776 0.018359 c1.264 0 2.3532 -0.4572 3.2684 -1.3715 c0.91348 -0.91432 1.3715 -2.0175 1.3715 -3.3086 c0 -1.264 -0.4572 -2.3541 -1.3715 -3.2684 c-0.91524 -0.91432 -2.0044 -1.3715 -3.2684 -1.3715 l-9.5736 0 l-2.7151 -4.68 l12.288 0 c2.5551 0 4.7468 0.91524 6.5752 2.744 c1.8296 1.8296 2.7439 4.0212 2.7439 6.576 c0 1.9362 -0.5516 3.6985 -1.6539 5.2852 z M68.838 39.1262 l-5.0176 -8.738 l-0.5 -0.87068 l0.93096 -0.375 c1.4974 -0.60316 2.7501 -1.6242 3.7221 -3.0342 c1.0105 -1.4528 1.5 -3.0184 1.5 -4.7884 c0 -2.3348 -0.81384 -4.284 -2.4878 -5.958 s-3.6233 -2.4878 -5.958 -2.4878 l-10.77 0 l1.702 2.9319 l9.0701 0 c1.4974 0 2.8052 0.54808 3.8856 1.6276 c1.0804 1.0813 1.6276 2.3891 1.6276 3.8865 c0 1.5254 -0.54724 2.8462 -1.6276 3.9266 c-1.0804 1.0796 -2.3882 1.6276 -3.8864 1.6276 l-2.6565 -0.011367 l7.1136 12.263 l3.3523 0 z M94.66 20.594 c0.73952 1.695 1.1092 3.4965 1.1092 5.4048 c0 1.9109 -0.36976 3.7124 -1.1093 5.4064 c-0.73952 1.695 -1.7422 3.1819 -3.0053 4.4588 c-1.2658 1.278 -2.7509 2.2859 -4.4588 3.0254 c-1.7081 0.7404 -3.5167 1.1102 -5.426 1.1102 l-9.3201 0 l4.64 -4.68 l4.6802 0 c1.2902 0 2.5009 -0.24215 3.6303 -0.7264 s2.118 -1.1565 2.966 -2.0175 c0.84704 -0.86016 1.5123 -1.8558 1.9965 -2.9852 c0.48424 -1.1303 0.7264 -2.3261 0.7264 -3.591 c0 -1.2631 -0.24215 -2.4607 -0.7264 -3.5901 s-1.1574 -2.125 -2.0175 -2.9852 c-0.861 -0.861 -1.8558 -1.5332 -2.9852 -2.0175 c-1.1294 -0.48516 -2.327 -0.7264 -3.5901 -0.7264 l-4.6802 0 l-4.64 -4.68 l9.3201 0 c1.9091 0 3.7116 0.37062 5.4056 1.1092 c1.695 0.7404 3.1801 1.7491 4.458 3.0262 c1.2771 1.278 2.2859 2.7641 3.0262 4.458 z M93.85999999999999 31.0564 c0.68708 -1.5752 1.0358 -3.2762 1.0358 -5.056 s-0.34879 -3.4817 -1.0358 -5.0568 c-0.69232 -1.5848 -1.6486 -2.9939 -2.8436 -4.1896 c-1.1958 -1.1941 -2.6049 -2.1504 -4.1896 -2.8427 c-1.5761 -0.68796 -3.278 -1.0368 -5.056 -1.0368 l-7.223 0 l2.9065 2.9319 l4.3165 0 c1.3794 0 2.7028 0.26836 3.9354 0.79724 c1.2247 0.52448 2.3209 1.2658 3.2579 2.202 c0.9362 0.9362 1.6766 2.0332 2.2028 3.2596 c0.52888 1.2343 0.79724 2.5577 0.79724 3.9345 s-0.26836 2.7002 -0.79724 3.9354 c-0.52536 1.2247 -1.2579 2.32 -2.1775 3.2544 c-0.92224 0.93708 -2.014 1.6801 -3.244 2.2072 c-1.2343 0.52888 -2.5717 0.79724 -3.9747 0.79724 l-4.3165 0 l-2.9065 2.9319 l7.223 0 c1.7798 0 3.4887 -0.34879 5.078 -1.0376 c1.5971 -0.69144 3.0053 -1.646 4.1856 -2.8384 c1.181 -1.1941 2.132 -2.6049 2.8261 -4.1932 z M99.83999999999999 12.059999999999999 l4.64 4.6008 l0 18.6 l-4.64 4.68 l0 -27.881 z M103.6048 34.900800000000004 l0 -17.877 l-2.8917 -2.8663 l0 23.66 z M129.45 26.082 c1.6137 1.5866 2.4196 3.5098 2.4205 5.7684 c0 2.2334 -0.80684 4.1556 -2.4205 5.77 c-1.5883 1.5875 -3.5106 2.3803 -5.77 2.3803 l0 -4.6802 c0.4834 0 0.94144 -0.087424 1.3715 -0.26312 c0.43008 -0.17394 0.80684 -0.41608 1.1294 -0.72556 c0.32344 -0.30945 0.57084 -0.68008 0.74652 -1.1102 c0.17394 -0.43008 0.26223 -0.88728 0.26223 -1.3715 c0 -0.9406 -0.34965 -1.7606 -1.049 -2.4608 c-0.67224 -0.69928 -1.4922 -1.049 -2.4608 -1.049 l-6.9792 0 c-2.2596 0 -4.1836 -0.79372 -5.7692 -2.3803 c-1.5883 -1.5866 -2.3812 -3.5228 -2.3812 -5.8096 c0 -2.2326 0.79372 -4.1416 2.3812 -5.7292 c1.5604 -1.6137 3.4835 -2.4214 5.7692 -2.4214 l0 4.681 c-0.4834 0 -0.94144 0.086524 -1.3715 0.26223 s-0.80684 0.42396 -1.1294 0.74652 c-0.32254 0.32254 -0.57168 0.70016 -0.74652 1.1302 s-0.26226 0.87416 -0.26226 1.3304 c0 0.96856 0.33566 1.8025 1.0088 2.5018 c0.67132 0.69928 1.5053 1.0481 2.5009 1.0481 l6.9792 0 c2.2596 0 4.1828 0.7946 5.7704 2.3812 z M128.832 37.0022 c1.4563 -1.4572 2.1634 -3.1426 2.1642 -5.1524 c0 -2.0341 -0.70628 -3.7169 -2.1591 -5.146 c-1.4354 -1.4354 -3.1207 -2.1303 -5.1564 -2.1303 l-6.9792 0 c-1.2378 0 -2.2911 -0.44232 -3.1312 -1.3164 c-0.83132 -0.86368 -1.2526 -1.9091 -1.2526 -3.1076 c0 -0.56908 0.10926 -1.1276 0.32606 -1.66 c0.21856 -0.53672 0.535 -1.0149 0.93888 -1.4188 c0.40296 -0.40388 0.88024 -0.7194 1.4178 -0.93796 c0.2666 -0.1084 0.5428 -0.19058 0.82692 -0.24476 l0 -2.9695 c-1.667 0.1757 -3.0691 0.87068 -4.2668 2.1093 c-1.4406 1.4406 -2.1356 3.112 -2.1356 5.1216 c0 2.0647 0.6958 3.7623 2.125 5.1916 s3.1137 2.1242 5.1512 2.1242 l6.9792 0 c1.2098 0 2.25 0.4432 3.091 1.3174 c0.85492 0.8558 1.2938 1.8916 1.2938 3.0674 c0 0.5944 -0.11016 1.1661 -0.32606 1.7002 c-0.22465 0.54808 -0.54456 1.0227 -0.95368 1.4135 c-0.40212 0.38461 -0.87504 0.68884 -1.4056 0.90388 c-0.26574 0.1084 -0.54196 0.19058 -0.82604 0.24476 l0 2.9686 c1.6522 -0.17394 3.0578 -0.85924 4.278 -2.0787 z M135.9809 12 l14 0 l0 4.681 l-9.3201 0 l0 23.319 l-4.6802 0 l0 -28 z M149.106 15.806999999999999 l0 -2.9328 l-12.252 0 l0 26.252 l2.9319 0 l0 -23.319 l9.3201 0 z M154.04999999999998 39.61492 l4.6392 -4.2956 l14 0 l0 4.6802 l-18.639 0 l0 -0.38461 z M171.81599999999997 36.1944 l-12.783 0 l-3.167 2.9319 l15.95 0 l0 -2.9319 z M154.04999999999998 12 l18.64 0 l0 4.6802 l-14 0 z M171.81599999999997 15.806000000000001 l0 -2.9319 l-15.668 0 l2.9065 2.9319 l12.762 0 z M154.04999999999998 28.34 l0 -4.64 l18.639 0 l0 4.64 l-18.639 0 z M154.92409999999998 24.573999999999998 l0 2.8917 l16.891 0 l0 -2.8917 l-16.891 0 z"></path></g></svg>
                </NavLink>
              </div>
          </div>
                    
              <BreakpointProvider>
                <Breakpoint l down>
                  {showmenu && 
                  <div className='menu'>
                    {/* <div className='navbar-item'>
                      <div ref={ref}>
                        <div className="dropdown-custom dropdown-toggle btn" 
                          onClick={handleBtnClick}
                          >
                          Home
                        </div>
                        {openMenu && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu}>
                              <NavLink to="/" onClick={() => btn_icon(!showmenu)}>Main Home</NavLink>
                              <NavLink to="/home1" onClick={() => btn_icon(!showmenu)}>Home Option 1</NavLink>
                              <NavLink to="/home2" onClick={() => btn_icon(!showmenu)}>Home Option 2</NavLink>
                            </div>
                          </div>
                        )}
                      </div>
                    </div> */}
                    <div className='navbar-item'>
                      <NavLink to="/" onClick={() => btn_icon(!showmenu)}>
                        Home
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/about" onClick={() => btn_icon(!showmenu)}>
                        About Us
                      </NavLink>
                    </div>
                    {/* <div className='navbar-item'>
                      <NavLink to="/team" onClick={() => btn_icon(!showmenu)}>
                        Team
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/works" onClick={() => btn_icon(!showmenu)}>
                        Works
                      </NavLink>
                    </div> */}
                    <div className='navbar-item'>
                      <div ref={ref1}>
                        <div className="dropdown-custom dropdown-toggle btn" 
                          onClick={handleBtnClick1}
                          >
                          What we do
                        </div>
                        {openMenu1 && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu1}>
                              <NavLink to="/concierge" onClick={() => btn_icon(!showmenu)}>Concierge</NavLink>
                              <NavLink to="/events" onClick={() => btn_icon(!showmenu)}>Events</NavLink>
                              <NavLink to="/medical" onClick={() => btn_icon(!showmenu)}>Medical</NavLink>
                              <NavLink to="/education" onClick={() => btn_icon(!showmenu)}>Education</NavLink>
                              <NavLink to="/land-shaft-design" onClick={() => btn_icon(!showmenu)}>Land shaft design</NavLink>
                              <NavLink to="/personal-shopping" onClick={() => btn_icon(!showmenu)}>Personal Shopping</NavLink>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* <div className='navbar-item'>
                      <NavLink to="/blog" onClick={() => btn_icon(!showmenu)}>
                        Blog
                      </NavLink>
                    </div> */}
                    <div className='navbar-item'>
                      <NavLink to="/contact" onClick={() => btn_icon(!showmenu)}>
                        Contact
                      </NavLink>
                    </div>
                  </div>
                  }
                </Breakpoint>

                <Breakpoint xl>
                  <div className='menu'>
                    {/* <div className='navbar-item'>
                        <div ref={ref}>
                          <div className="dropdown-custom dropdown-toggle btn" 
                             onMouseEnter={handleBtnClick} onMouseLeave={closeMenu}>
                            Home
                            {openMenu && (
                            <div className='item-dropdown'>
                              <div className="dropdown" onClick={closeMenu}>
                                <NavLink to="/">Main Home</NavLink>
                                <NavLink to="/home1">Home Option 1</NavLink>
                                <NavLink to="/home2">Home Option 2</NavLink>
                              </div>
                            </div>
                          )}
                          </div>
                          
                        </div>
                    </div> */}
                    <div className='navbar-item'>
                      <NavLink to="/">Home</NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/about">About Us</NavLink>
                    </div>
                    {/* <div className='navbar-item'>
                      <NavLink to="/team">Team</NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/works">Works</NavLink>
                    </div> */}
                    <div className='navbar-item'>
                      <div ref={ref1}>
                          <div className="dropdown-custom dropdown-toggle btn" 
                             onMouseEnter={handleBtnClick1} onMouseLeave={closeMenu1}>
                            What we do
                            {openMenu1 && (
                            <div className='item-dropdown'>
                              <div className="dropdown" onClick={closeMenu1}>
                                <NavLink to="/travel">Travel</NavLink>
                                <NavLink to="/concierge">Concierge</NavLink>
                                <NavLink to="/events">Events</NavLink>
                                <NavLink to="/medical">Medical</NavLink>
                                <NavLink to="/education">Education</NavLink>
                                <NavLink to="/land-shaft-design">Land shaft design</NavLink>
                                <NavLink to="/personal-shopping">Personal Shopping</NavLink>
                              </div>
                            </div>
                          )}
                          </div>
                          
                        </div>
                    </div>
                    {/* <div className='navbar-item'>
                      <NavLink to="/blog">Blog</NavLink>
                    </div> */}
                    <div className='navbar-item'>
                      <NavLink to="/contact">Contact</NavLink>
                    </div>
                  </div>
                </Breakpoint>
              </BreakpointProvider>
                  
      </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>

      </div>     
    </header>
    );
}
