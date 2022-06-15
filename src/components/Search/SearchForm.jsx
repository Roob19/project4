import React, { useState } from 'react';

export default function SearchForm() {
    const [bizSearch, setBizSearch] = useState({
        location: ''
    });
    
    function handleChange() {

    }
    function handleSubmit() {

    }
    return (
        <div>
            <div className="form-container" onSubmit={handleSubmit}>
                <form autocomplete="off">
                    <label>Location: </label>
                    <imput type="number" name="location" value={bizSearch.location} onChange={handleChange} required />
                    <button type="submit">BEER</button>
                </form>

            </div>
        </div>
    )
}