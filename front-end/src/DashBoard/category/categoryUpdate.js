import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from "../header";
import { Slider } from "../slider";
import { Footer } from "../footer";

export const CategoryUpdate = () => {

    const location = useLocation();
    const navigate = useNavigate();

    var id = location.state;

    const [name, setName] = useState("");
    const [status, setStatus] = useState("");

    const categoryData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/anime-category/category/getOne', {
                params: {
                    id: id
                }
            })
            let data = response.data.data;
            setName(data.name)
            setStatus(data.status)
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            let response = await axios.patch('http://localhost:3001/anime-category/category', {
                id: id,
                name: name,
                status: status,
            });
            setName("");
            setStatus("");
            navigate('/categoryDetail');
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
                    <form onSubmit={handleSubmit} key={id}>
                        <div className="form-group row">
                            <label htmlFor="name" className="col-sm-2 col-form-label" style={{ color: "white" }}>Name</label>
                            <div className="col-sm-2">
                                <input type="text" className="form-control" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="status" className="col-sm-2 col-form-label" style={{ color: "white" }}>Status</label>
                            <div className="col-sm-2">
                                <select className="form-control" id="status" value={status} defaultValue={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value={'Active'}>Active </option>
                                    <option value={'Inactive'}>Inactive</option>
                                </select>
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