import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Header } from "../header";
import { Slider } from "../slider";
import { Footer } from "../footer";

export const Movie = () => {

    const navigate = useNavigate();

    const [movieData, setmovieData] = useState([]);

    const Data = async () => {
        try {
            const response = await axios.get('http://localhost:3001/anime-main/movie/all');
            setmovieData(response.data.data);
        }
        catch (err) {
            console.log("Error:", err);
        }
    }

    const movieDelete = async (id) => {
        try {
            await axios.delete('http://localhost:3001/anime-main/movie', {
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

    const movieUpdate = (id) => {
        navigate('/movieUpdate', { state: id });
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
                    <table className="table m-5" style={{ color: "white", width: "60%" }}>
                        <thead>
                            <tr>
                                <th scope="col ">No.</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Status</th>
                                <th scope="col">Episode</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                movieData.map((v, i) => {
                                    i++;
                                    return (
                                        <tr key={v._id}>
                                            <th scope="row">{i}</th>
                                            <td><img src={v.image} style={{ width: "25%", height: "25px" }} alt="Movie Poster" /></td>
                                            <td>{v.name}</td>
                                            <td>{v.categoryId.name}</td>
                                            <td>{v.status}</td>
                                            <td>{v.releasedEpisode}/{v.totalEpisode}</td>
                                            <td><button className="btn-primary" style={{ marginRight: "5px" }} onClick={(() => movieUpdate(v._id))}>Edit</button>
                                                <button className="btn-primary" onClick={(() => movieDelete(v._id))}>Delete</button></td>
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