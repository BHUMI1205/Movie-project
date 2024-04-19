import React from 'react';

export const Header = () => {
   return (
      <>
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="logo-pro">
                     <a href="index.html"><img className="main-logo" src="img/logo/logo.png" alt="" /></a>
                  </div>
               </div>
            </div>
         </div>

         <div className="header-advance-area">
            <div className="header-top-area">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="header-top-wraper">
                           <div className="row">
                              <div className="col-lg-1 col-md-0 col-sm-1 col-xs-12">
                                 <div className="menu-switcher-pro">
                                    <button type="button" id="sidebarCollapse"
                                       className="btn bar-button-pro header-drl-controller-btn btn-info navbar-btn">
                                       <i className="fa fa-bars"></i>
                                    </button>
                                 </div>
                              </div>
                              <div className="col-lg-6 col-md-7 col-sm-6 col-xs-12">
                                 <div className="header-top-menu tabl-d-n">
                                    <div className="breadcome-heading">
                                       <form role="search" className="">
                                          <input type="text" placeholder="Search..." className="form-control" style={{color:"white"}}/>
                                          <a href=""><i className="fa fa-search"></i></a>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                 <div className="header-right-info">
                                    <ul className="nav navbar-nav mai-top-nav header-right-menu">
                                       <li className="nav-item">
                                          <a href="#" data-toggle="dropdown" role="button"
                                             aria-expanded="false" className="nav-link dropdown-toggle">
                                             <i className="fa fa-user header-riht-inf"
                                                aria-hidden="true"></i>
                                             <span className="admin-name">Advanda Cro</span>
                                             <i
                                                className="fa fa-angle-down"></i>
                                          </a>
                                          <ul role="menu"
                                             className="dropdown-header-top author-log dropdown-menu animated zoomIn">
                                             <li><a href="/register"><span
                                                className="fa fa-home author-log-ic"></span>
                                                Register</a>
                                             </li>
                                             <li><a href="#"><span
                                                className="fa fa-user author-log-ic"></span> My
                                                Profile</a>
                                             </li>
                                             <li><a href="login.html"><span
                                                className="fa fa-unlock-alt author-log-ic"></span>
                                                Log Out</a>
                                             </li>
                                          </ul>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="breadcome-area">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="breadcome-list">
                           <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                 <div className="breadcomb-wp">
                                    <div className="breadcomb-icon">
                                       <i className="fa fa-home"></i>
                                    </div>
                                    <div className="breadcomb-ctn">
                                       <h2>Dashboard Three</h2>
                                       <p>Welcome to Nalika <span className="bread-ntd">Admin Template</span></p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}