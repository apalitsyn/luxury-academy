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
                <img
                    src="./img/lux.png"
                    className="img-fluid"
                    alt="#"
                  />
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
                              <NavLink to="/concierge" onClick={() => btn_icon(!showmenu)}>Concierges</NavLink>
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
