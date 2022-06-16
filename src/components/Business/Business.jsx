import React, { useState } from 'react';
import { getBiz } from '../../utilities/services/yelp-api';
import './Business.css';

export const Business = () => {
    const [formData, setFormData] = useState({query: ''});
    const [results, setResults] = useState([]);
    const [status, setStatus] = useState(false);

    async function handleSubmit( evt => {
        evt.preventDefault();
        try {
            setStatus(false);
            const results = await getBiz(formData.query);
            results.businesses ? setResults(results.businesses) : setStatus(true);
        } catch (err) {
            setStatus(true)
        }
    });
}