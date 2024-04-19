import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Header } from "../header";
import { Slider } from "../slider";
import { Footer } from "../footer";

export const CategoryDetail = () => {

    const navigate = useNavigate();

    const [categoryData, setcategoryData] = useState([]);

    const Data = async () => {
        try {
            const response = await axios.get('http://localhost:3001/anime-category/category');
            setcategoryData(response.data.data);
        }
        catch (err) {
            console.log("Error:", err);
        }
    }

    const movieData = async (id) => {
        navigate('/movieDetail', { state: id });
    }

    const categoryDelete = async (id) => {
        try {
            await axios.delete('http://localhost:3001/anime-category/category', {
                params: {
                    id: id
                }
            })
            Data()
        }
        catch (err) {
            console.log("Error:", err);
        }
    }

    const categoryUpdate = (id) => {
        navigate('/categoryUpdate', { state: id });
    }

    useEffect(() => {
        Data()
    }, [])

    return (
        <>
            <Slider />
            <div className="all-content-wrapper">
                <Header />
                <div className="container-fluid">
                    <table className="table m-5" style={{ color: "white", width: "40%" }}>
                        <thead>
                            <tr>
                                <th scope="col ">No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Movies</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categoryData.map((v, i) => {
                                    i++;
                                    return (
                                        <tr key={v._id} onClick={(() => movieData(v._id))}>
                                            <td>{i}</td>
                                            <td>{v.name}</td>
                                            <td>{v.movieCount}</td>
                                            <td>{v.status}</td>
                                            <td><button className="btn-primary" style={{ marginRight: "5px" }} onClick={(() => categoryUpdate(v._id))}>Edit</button>
                                                <button className="btn-primary" onClick={(() => categoryDelete(v._id))}>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <Footer />
            </div>
        </>
    )
}