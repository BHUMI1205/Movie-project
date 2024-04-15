import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {

    let users = await axios.post('http://localhost:3001/user/login', {
      email: email,
      password: password,
    })
    if (users) {
      setEmail("");
      setPassword("");
      navigate('/index');
    } else {
      console.log("User not Register");
      return false;
    }
  }
  return (
    <html lang="zxx">
      <head>
        <meta charSet="UTF-8"></meta>
        <meta name="description" content="Anime Template"></meta>
        <meta name="keywords" content="Anime, unica, creative, html"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
        <title>Anime | Template</title>

        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&display=swap/" rel="stylesheet" />
        <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" />
        <link rel="stylesheet" href="css/elegant-icons.css" type="text/css" />
        <link rel="stylesheet" href="css/plyr.css" type="text/css" />
        <link rel="stylesheet" href="css/nice-select.css" type="text/css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css" />
        <link rel="stylesheet" href="css/slicknav.min.css" type="text/css" />
        <link rel="stylesheet" href="css/style.css" type="text/css" />
        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/player.js"></script>
        <script src="js/jquery.nice-select.min.js"></script>
        <script src="js/mixitup.min.js"></script>
        <script src="js/jquery.slicknav.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/main.js"></script>
      </head>

      <body>
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="header__logo">
                  <a href="/index">
                    <img src="img/logo.png" alt=""></img>
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="header__nav">
                  <nav className="header__menu mobile-menu">
                    <ul>
                      <li><a href="/index">Homepage</a></li>
                      <li><a href="#">Categories <span className="arrow_carrot-down"></span></a>
                        <ul className="dropdown">
                          <li><a href="#">Categories</a></li>
                          <li><a href="#">Anime Details</a></li>
                          <li><a href="#">Anime Watching</a></li>
                          <li><a href="#">Blog Details</a></li>
                          <li><a href="/register">Sign Up</a></li>
                          <li><a href="/">Login</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Our Blog</a></li>
                      <li><a href="#">Contacts</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="header__right">
                  <a href="/"><span className="icon_profile"></span></a>
                </div>
              </div>
            </div>
            <div id="mobile-menu-wrap"></div>
          </div>
        </header>
        <section className="spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="login__form">
                  <h3>Login</h3>
                  <form action="#">
                    <div className="input__item">
                      <input type="text" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                      <span className="icon_mail"></span>
                    </div>
                    <div className="input__item">
                      <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                      <span className="icon_lock"></span>
                    </div>
                    <button type="submit" className="site-btn" onClick={() => handleSubmit()}>Login Now</button>
                  </form>
                  <a href="#" className="forget_pass">Forgot Your Password?</a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="login__register">
                  <h3>Dont’t Have An Account?</h3>
                  <a href="/register" className="primary-btn">Register Now</a>
                </div>
              </div>
            </div>
            <div className="login__social">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6">
                  <div className="login__social__links">
                    <span>or</span>
                    <ul>
                      <li><a href="#" className="google"><i className="fa fa-google"></i> Sign in With Google</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>

    </html>
  )
}