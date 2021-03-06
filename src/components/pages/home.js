import React from 'react';
import { Link } from '@reach/router';
import Carouselteam from '../components/carouselteam';
import Bannercontact from '../components/bannercontact';
// import Pricing from '../components/pricing';
import Testimony from '../components/carouseltestimony';
import Footer from '../components/footer';


export default () => (
  <div>
      <section className='jumbotron breadcumb h-vh' style={{backgroundImage: `url(${'./img/restaurant-meal.jpg'})`}}>
        <div className='homebread'>
          <div className='container-fluid'>
            <div className='row m-10-hor'>
              <div className='col-md-8 mx-auto text-center '>
                <div className='heading'>
                  Choice of Lifestyle
                </div>
                <div className='content mx-auto'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, 
                  nisl non rutrum commodo, sem magna.
                </div>
                <div className="btn" onClick={()=> window.open("/", "_self")}>
                  <span className="shine"></span>
                  <span>Read More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container-fluid black'>
        <div className='row m-10-hor'>

          <div className='col-md-5'>
            <div className='heading'>
              Choice <span className='br'></span> of Lifestyle
            </div>
            <div className='subheading'>
              According lifestyle
            </div>
          </div>

          <div className='col-md-7'>
            <div className='content'>
              Curabitur mollis bibendum luctus. 
              Duis suscipit vitae dui sed suscipit. 
              Vestibulum auctor nunc vitae diam eleifend, 
              in maximus metus sollicitudin. Quisque vitae sodales lectus. 
              Nam porttitor justo sed mi finibus, vel tristique risus faucibus.
            </div>
            <div className='content'>
              Curabitur mollis bibendum luctus. 
              Duis suscipit vitae dui sed suscipit. 
              Quisque vitae sodales lectus, 
              vel tristique risus faucibus.
            </div>
          </div>

        </div>
    </section>

    <section className='container-fluid p-0 black_more'>
        <div className='row'>

          <div className="col-md-6 pl-md-0">
            <img src="./img/travel.jpg" className="imgslickz" alt="#"/>
          </div>

          <div className="col-md-6 centered p-5">
            <div className='p-md-5'>
              {/* <div className="subheading">January 14, 2020</div> */}
              <div className="heading">
                Travel
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmodt temp to the incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis a 
                nostr a exercitation ullamco laboris nisi ut aliquip.
              </p>
              <Link className='btn' to="">
                <span className="shine"></span>
                <span>More Detail</span>
              </Link>
            </div>
          </div>

          <div className="col-md-6 centered p-5 pb-5">
            <div className='p-md-5'>
              {/* <div className="subheading">January 22, 2020</div> */}
              <div className="heading">
                Concierge
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmodt temp to the incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis a 
                nostr a exercitation ullamco laboris nisi ut aliquip.
              </p>
              <Link className='btn' to="">
                <span className="shine"></span>
                <span>More Detail</span>
              </Link>
            </div>
          </div>

          <div className="col-md-6 pr-md-0">
            <img src="./img/conceirge.jpg" className="imgslickz" alt="#"/>
          </div>

          <div className="col-md-6 pl-md-0">
            <img src="./img/events.jpg" className="imgslickz" alt="#"/>
          </div>

          <div className="col-md-6 centered p-5">
            <div className='p-md-5'>
              {/* <div className="subheading">January 14, 2020</div> */}
              <div className="heading">
                Events
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmodt temp to the incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis a 
                nostr a exercitation ullamco laboris nisi ut aliquip.
              </p>
              <Link className='btn' to="">
                <span className="shine"></span>
                <span>More Detail</span>
              </Link>
            </div>
          </div>

          <div className="col-md-6 centered p-5 pb-5">
            <div className='p-md-5'>
              {/* <div className="subheading">January 22, 2020</div> */}
              <div className="heading">
                Medical
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmodt temp to the incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis a 
                nostr a exercitation ullamco laboris nisi ut aliquip.
              </p>
              <Link className='btn' to="">
                <span className="shine"></span>
                <span>More Detail</span>
              </Link>
            </div>
          </div>

          <div className="col-md-6 pr-md-0">
            <img src="./img/medical.jpg" className="imgslickz" alt="#"/>
          </div>

          <div className="col-md-6 pl-md-0">
            <img src="./img/education.jpg" className="imgslickz" alt="#"/>
          </div>

          <div className="col-md-6 centered p-5">
            <div className='p-md-5'>
              {/* <div className="subheading">January 14, 2020</div> */}
              <div className="heading">
                Education
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmodt temp to the incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis a 
                nostr a exercitation ullamco laboris nisi ut aliquip.
              </p>
              <Link className='btn' to="">
                <span className="shine"></span>
                <span>More Detail</span>
              </Link>
            </div>
          </div>

          <div className="col-md-6 centered p-5 pb-5">
            <div className='p-md-5'>
              {/* <div className="subheading">January 22, 2020</div> */}
              <div className="heading">
                Landshaft design
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmodt temp to the incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis a 
                nostr a exercitation ullamco laboris nisi ut aliquip.
              </p>
              <Link className='btn' to="">
                <span className="shine"></span>
                <span>More Detail</span>
              </Link>
            </div>
          </div>

          <div className="col-md-6 pr-md-0">
            <img src="./img/landshaft.jpg" className="imgslickz" alt="#"/>
          </div>

          <div className="col-md-6 pl-md-0">
            <img src="./img/shopping.jpg" className="imgslickz" alt="#"/>
          </div>

          <div className="col-md-6 centered p-5 pb-5">
            <div className='p-md-5'>
              {/* <div className="subheading">January 22, 2020</div> */}
              <div className="heading">
                Personal shopping
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmodt temp to the incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis a 
                nostr a exercitation ullamco laboris nisi ut aliquip.
              </p>
              <Link className='btn' to="">
                <span className="shine"></span>
                <span>More Detail</span>
              </Link>
            </div>
          </div>

          <div className="col-md-6 centered p-5 pb-5">
            <div className='p-md-5'>
              {/* <div className="subheading">January 22, 2020</div> */}
              <div className="heading">
                Your new hobby
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmodt temp to the incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis a 
                nostr a exercitation ullamco laboris nisi ut aliquip.
              </p>
              <Link className='btn' to="">
                <span className="shine"></span>
                <span>More Detail</span>
              </Link>
            </div>
          </div>

          <div className="col-md-6 pr-md-0">
            <img src="./img/hobby.jpg" className="imgslickz" alt="#"/>
          </div>

        </div>
    </section>

    <section className='container-fluid black_more'>
        <div className='row m-10-hor'>
          <div className='col-12 text-center'>
            <div className='subheading'>Our team</div>
            <div className='heading'>About Our Team</div>
            <div className='row'>
              <div className='col-md-8 mx-auto'>
                <p className='content'>
                  Curabitur mollis bibendum luctus. 
                  Duis suscipit vitae dui sed suscipit. Vestibulum auctor 
                  nunc vitae diam eleifend, in maximus metus sollicitudin. 
                  Quisque vitae sodales lectus. Nam p
                  orttitor justo sed mi finibus, 
                  vel tristique risus faucibus. 
                </p>
              </div>
            </div>
          </div>
          <Carouselteam />
        </div>
    </section>

    <Bannercontact/>
    {/* <Pricing /> */}
    <Testimony />
    <Footer />

  </div>
);
