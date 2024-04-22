import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from "../header";
import { Slider } from "../slider";
import { Footer } from "../footer";

export const MovieUpdate = () => {

    const location = useLocation();
    const navigate = useNavigate();

    var id = location.state;

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [status, setStatus] = useState("");
    const [category, setCategory] = useState("");
    const [totalEpisode, setTotalEpisode] = useState("");
    const [releasedEpisode, setReleasedEpisode] = useState("");
    const [releasedDate, setReleasedDate] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState([]);

    const movieData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/anime-main/movie/getOne', {
                params: {
                    id: id
                }
            })
            let data = response.data.data;
            setName(data.name)
            setImage(data.image)
            setStatus(data.status)
            setCategory(data.categoryId)
            setTotalEpisode(data.totalEpisode)
            setReleasedEpisode(data.releasedEpisode)
            setReleasedDate(data.release_Date)
            setDescription(data.description)
        }
        catch (err) {
            console.log(err);
        }
    }

    const categoryData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/anime-category/category');
            setCategories(response.data.data);
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
            e.preventDefault();
            let response = await axios.patch('http://localhost:3001/anime-main/movie',
                {
                    id: id,
                    name: name,
                    image: image,
                    status: status,
                    categoryId: category,
                    totalEpisode: totalEpisode,
                    releasedEpisode: releasedEpisode,
                    releasedDate: releasedDate,
                    description: description
                }, {
                headers: { 'Content-Type': 'multipart/form-data' }
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
        movieData();
    }, [])


    return (
        <>
            <Slider />
            <div className="all-content-wrapper">
                <Header />
                <div className="container">
                    <form onSubmit={handleSubmit} key={id}>
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
                                <select className="form-control" id="status" value={status} defaultValue={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value={'Ongoing'}>Ongoing</option>
                                    <option value={'UpComing'}>UpComing</option>
                                    <option value={'Finished'}>Finished</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="category" className="col-sm-2 col-form-label" style={{ color: "white" }}>Category</label>
                            <div className="col-sm-2">
                                <select className="form-control" id="category" value={category} defaultValue={category} onChange={(e) => setCategory(e.target.value)}>
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