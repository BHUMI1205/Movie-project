import React from 'react';
import { Helmet } from 'react-helmet'

export const Slider = () => {
	return (
		<html>
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<title>Dashboard V.3 | Nalika - Material Admin Template</title>
				<meta name="description" content="" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico" />
				<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700,900" rel="stylesheet" />
				<link rel="stylesheet" href="css/bootstrap.min.css" />
				<link rel="stylesheet" href="css/font-awesome.min.css" />
				<link rel="stylesheet" href="css/animate.css" />
				<link rel="stylesheet" href="css/main.css" />
				<link rel="stylesheet" href="css/metisMenu/metisMenu.min.css" />
				<link rel="stylesheet" href="css/metisMenu/metisMenu-vertical.css" />
				<link rel="stylesheet" href="css/style1.css" />
				<link rel="stylesheet" href="css/responsive.css" />

			</head>
			<body>
				<div className="left-sidebar-pro">
					<nav id="sidebar" className="">
						<div className="sidebar-header">
							<a href="index.html"><img className="main-logo" src="img/logo/logo.png" alt="" /></a>
							<strong><img src="img/logo/logosn.png" alt="" /></strong>
						</div>
						<div className="left-custom-menu-adp-wrap comment-scrollbar">
							<nav className="sidebar-nav left-sidebar-menu-pro">
								<ul className="metismenu" id="menu1">
									<li className="active">
										<a className="has-arrow">
											<i className="fa fa-home icon-wrap"></i>
											<span className="mini-click-non">Category</span>
										</a>
										<ul className="submenu-angle" aria-expanded="false">
											<li><a title="Category Add" href="/categoryAdd"><span className="mini-sub-pro">
												Category Add</span></a></li>
											<li><a title="Category Detail" href="/categoryDetail"><span className="mini-sub-pro">Category
												Detail</span></a></li>
										</ul>
									</li>
									<li>
										<a className="has-arrow" >
											<i className="fa fa-home icon-wrap"></i>
											<span className="mini-click-non">Movie</span>
										</a>
										<ul className="submenu-angle" aria-expanded="false">
											<li><a title="Movie Add" href="/movieAdd"><span className="mini-sub-pro">Movie
												Add</span></a></li>
											<li><a title="Movie Cart" href="/movie"><span className="mini-sub-pro">Movie
												Detail</span></a></li>
										</ul>
									</li>
									<li>
										<a href="mailbox.html" ><i
											className="fa fa-table icon-wrap"></i> <span className="mini-click-non" >
												User Data</span></a>
									</li>
									<li id="removable">
										<a className="has-arrow" aria-expanded="false"><i className="fa fa-envelope-o icon-wrap"></i>
											<span className="mini-click-non">Pages</span></a>
										<ul className="submenu-angle" aria-expanded="false">
											<li><a title="Login" href="/"><span className="mini-sub-pro">Login</span></a></li>
											<li><a title="Register" href="/register"><span
												className="mini-sub-pro">Register</span></a></li>
										</ul>
									</li>
								</ul>
							</nav>
						</div>
					</nav>
				</div>

				<Helmet>
				<script src="js/vendor/jquery-1.12.4.min.js"></script>
				<script src="js/bootstrap.min.js"></script>
				<script src="js/metisMenu/metisMenu.min.js"></script>
				<script src="js/metisMenu/metisMenu-active.js"></script>
				<script src="js/main.js"></script>
			</Helmet>
			</body>
		</html>
	)
}