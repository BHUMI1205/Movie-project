import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from "../header";
import { Slider } from "../slider";
import { Footer } from "../footer";

export const MovieAdd = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [status, setStatus] = useState("");
    const [category, setCategory] = useState("");
    const [totalEpisode, setTotalEpisode] = useState("");
    const [releasedEpisode, setReleasedEpisode] = useState("");
    const [releasedDate, setReleasedDate] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setcategories] = useState([]);

    const categoryData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/anime-category/category');
            setcategories(response.data.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        try {
            console.log(image);
            e.preventDefault();
            let response =await axios.post('http://localhost:3001/anime-main/movie', {
                name: name,
                image: image,
                status: status,
                categoryId: category,
                totalEpisode: totalEpisode,
                releasedEpisode: releasedEpisode,
                releasedDate: releasedDate,
                description: description
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setName("");
            setImage("");
            setStatus("");
            setCategory("");
            setTotalEpisode("");
            setReleasedEpisode("");
            setReleasedDate("");
            setDescription("");
            navigate('/movie');
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    useEffect(() => {
        categoryData();
    }, [])

    return (
        <>
            <Slider />
            <div className="all-content-wrapper">
                <Header />
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="name" className="col-sm-2 col-form-label" style={{ color: "white" }}>Name</label>
                            <div className="col-sm-2">
                                <input type="text" className="form-control" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="image" className="col-sm-2 col-form-label" style={{ color: "white" }}>Image</label>
                            <div className="col-sm-2">
                                <input type="file" className="form-control" name="image" onChange={handleImageChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="status" className="col-sm-2 col-form-label" style={{ color: "white" }}>Status</label>
                            <div className="col-sm-2">
                                <select className="form-control" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="">Select option</option>
                                    <option value={'Ongoing'}>Ongoing</option>
                                    <option value={'Upcoming'}>Upcoming</option>
                                    <option value={'Finished'}>Finished</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="category" className="col-sm-2 col-form-label" style={{ color: "white" }}>Category</label>
                            <div className="col-sm-2">
                                <select className="form-control" id="category" value={category} defaultValue="Action" onChange={(e) => setCategory(e.target.value)}>
                                    <option value="">Select option</option>
                                    {categories.map((v) => {
                                        return (
                                            <option value={v._id}>{v.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="totalEpisode" className="col-sm-2 col-form-label" style={{ color: "white" }}>Total Episode</label>
                            <div className="col-sm-2">
                                <input type="text" className="form-control" id="totalEpisode" placeholder="Total Episode" value={totalEpisode} onChange={(e) => setTotalEpisode(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="releasedEpisode" className="col-sm-2 col-form-label" style={{ color: "white" }}>Released Episode</label>
                            <div className="col-sm-2">
                                <input type="text" className="form-control" id="releasedEpisode" placeholder="Released Episode" value={releasedEpisode} onChange={(e) => setReleasedEpisode(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="releasedDate" className="col-sm-2 col-form-label" style={{ color: "white" }}>Released Date</label>
                            <div className="col-sm-2">
                                <input type="text" className="form-control" id="releasedDate" placeholder="Released Date" value={releasedDate} onChange={(e) => setReleasedDate(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="description" className="col-sm-2 col-form-label" style={{ color: "white" }}>Description</label>
                            <div className="col-sm-2">
                                <textarea className="form-control" id="description" rows="3" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-2 offset-sm-2">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    )
}