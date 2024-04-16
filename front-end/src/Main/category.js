import axios from 'axios';
import React, { useState, useEffect } from 'react';
import $ from "jquery"

export const Category = () => {

    $("#scrollToTopButton").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })

    const [movieData, setmovieData] = useState([]);
    const [category, setcategory] = useState([]);
    const [categoryname, setcategoryName] = useState([]);
    const [view, setview] = useState([]);
    const [searchData, setsearchData] = useState([]);

    const Data = async () => {
        try {
            const response = await axios.get('http://localhost:3001/anime-main/movie/all', {
                params: {
                    name: searchData
                }
            });
            setmovieData(response.data.data);
            setview(response.data.data);
            setsearchData([]);
        }
        catch (err) {
            console.log("Error:", err);
        }
    }

    const Category = async () => {
        try {
            const response = await axios.get('http://localhost:3001/anime-category/category')
            setcategory(response.data.data);
        } catch (err) {
            console.log("Error:", err);
        }
    }

    const Categorydata = async () => {
        try {
            let id = document.getElementById("category").value;
            const response = await axios.get(`http://localhost:3001/anime-main/movie/${id}`)
            if (response.data.length != 0) {
                setmovieData(response.data)
                setcategoryName(response.data[0].categoryId.name)
            }
        } catch (err) {
            console.log("Error:", err);
        }
    }

    const dateFilter = async (date) => {
        try {
            const response = await axios.get('http://localhost:3001/anime-main/filterByDate', {
                params: {
                    day: date
                }
            });
            setview(response.data);
        } catch (err) {
            console.log("Error:", err);
        }
    }


    useEffect(() => {
        Data();
        Category();
    }, [])
    return (

        <html lang="zxx" >

            <head>
                <meta charSet="UTF-8"></meta>
                <meta name="description" content="Anime Template"></meta>
                <meta name="keywords" content="Anime, unica, creative, html"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
                <title>Anime | Template</title>

                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
                <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" />
                <link rel="stylesheet" href="css/elegant-icons.css" type="text/css" />
                <link rel="stylesheet" href="css/style.css" type="text/css" />

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
                            <div className="col-lg-7">
                                <div className="header__nav">
                                    <nav className="header__menu mobile-menu">
                                        <ul>
                                            <li className="active"><a href="/index">Homepage</a></li>
                                            <li><a href="/category">Categories <span className="arrow_carrot-down"></span></a>
                                                <ul className="dropdown">
                                                    <li><a href="/category">Categories</a></li>
                                                    <li><a href="./anime-details.html">Anime Details</a></li>
                                                    <li><a href="./anime-watching.html">Anime Watching</a></li>
                                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                                    <li><a href="/register">Sign Up</a></li>
                                                    <li><a href="/">Login</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="./blog.html">Our Blog</a></li>
                                            <li><a href="#">Contacts</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="header__right d-flex">
                                    <input type='text' placeholder='Search here' value={searchData} onChange={(e) => setsearchData(e.target.value)} />
                                    <button className="icon_search" style={{ backgroundColor: '#070720', border: 0, color: 'white' }} onClick={Data}></button>
                                    <a href="/"><span className="icon_profile"></span></a>
                                </div>
                            </div>
                        </div>
                        <div id="mobile-menu-wrap"></div>
                    </div>
                </header>
                <div className="breadcrumb-option">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb__links">
                                    <a href="/index"><i className="fa fa-home"></i> Home</a>
                                    <a href="/category">Categories</a>
                                    <span>{categoryname}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="product-page spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="product__page__content">
                                    <div className="product__page__title">
                                        <div className="row">
                                            <div className="col-lg-8 col-md-8 col-sm-6">
                                                <div className="section-title">
                                                    <h4>{categoryname}</h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6">
                                                <div className="product__page__filter">
                                                    <p>Order by:</p>
                                                    <select onChange={() => Categorydata()} id='category'>
                                                        {
                                                            category.map((val) => {
                                                                return (
                                                                    <option key={val._id} value={val._id}>{val.name}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {
                                            movieData.map((v) => {
                                                return (
                                                    <div className="col-lg-4 col-md-6 col-sm-6" key={v._id}>
                                                        <div className="product__item">
                                                            <div className="product__item__pic set-bg">
                                                                <img src={v.image}></img>
                                                                <div className="ep">{v.releasedEpisode}/{v.totalEpisode}</div>
                                                                <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                                                <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                                            </div>
                                                            <div className="product__item__text">
                                                                <ul>
                                                                    <li>{v.status}</li>
                                                                    <li>{v.categoryId.name}</li>
                                                                </ul>
                                                                <h5><a href="#">{v.name}</a></h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="product__pagination">
                                    <a href="#" className="current-page">1</a>
                                    <a href="#">2</a>
                                    <a href="#">3</a>
                                    <a href="#">4</a>
                                    <a href="#">5</a>
                                    <a href="#"><i className="fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="product__sidebar">
                                    <div className="product__sidebar__view">
                                        <div className="section-title">
                                            <h5>Top Views</h5>
                                        </div>
                                        <ul className="filter__controls">
                                            <li data-filter="*" onClick={() => dateFilter(new Date().setHours(0, 0, 0, 0) / 1000)}>Day</li>
                                            <li data-filter=".week" onClick={() => dateFilter(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).setHours(0, 0, 0, 0) / 1000)}>Week</li>
                                            <li data-filter=".month" onClick={() => dateFilter(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).setHours(0, 0, 0, 0) / 1000)} >Month</li>
                                            <li data-filter=".years" onClick={() => dateFilter(new Date(Date.now() - 1095 * 24 * 60 * 60 * 1000).setHours(0, 0, 0, 0) / 1000)}>Years</li>
                                        </ul>
                                        <div className="filter__gallery">
                                            {
                                                view.map((v) => {
                                                    return (
                                                        <div className="product__sidebar__view__item " key={v._id}>
                                                            <img key={v._id} src={v.image}></img>
                                                            <div className="ep">{v.releasedEpisode}/{v.totalEpisode}</div>
                                                            <div className="view">{v.status}</div>
                                                            <h5><a href="#">{v.name}</a></h5>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <div className="page-up">
                        <a href="#" id="scrollToTopButton"><span className="arrow_carrot-up"></span></a>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="footer__logo">
                                    <a href="/index"><img src="img/logo.png" alt=""></img></a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer__nav">
                                    <ul>
                                        <li className="active"><a href="/index">Homepage</a></li>
                                        <li><a href="/category">Categories</a></li>
                                        <li><a href="./blog.html">Our Blog</a></li>
                                        <li><a href="#">Contacts</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>

        </html>
    )
}