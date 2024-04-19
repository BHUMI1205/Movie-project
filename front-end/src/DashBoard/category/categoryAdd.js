import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from "../header";
import { Slider } from "../slider";
import { Footer } from "../footer";

export const CategoryAdd = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
             await axios.post('http://localhost:3001/anime-category/category', {
                name: name,
                status: status,
            });
            setName("");
            setStatus("");
            navigate('/categoryDetail')
        } catch (error) {
            console.error(error);
        }
    };

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
                            <label htmlFor="status" className="col-sm-2 col-form-label" style={{ color: "white" }}>Status</label>
                            <div className="col-sm-2">
                                <select className="form-control" id="status" value={status} defaultValue="Active" onChange={(e) => setStatus(e.target.value)}>
                                    <option value="">Select option</option>
                                    <option value={'Active'}>Active</option>
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