import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MatrixDisplay from '@/src/components/MatrixDisplay';

const Vectors = () => {

    const [vector, setVector] = useState([]);

    useEffect(() => {
        const fetchVector = async () => {
            const response = await axios.get('http://localhost:5207/api/vector/random');
            setVector(response.data);
        };
        fetchVector();
    }, []);

    const multiplyVector = async () => {
        try {
            const response = await fetch('http://localhost:5207/api/vector/multiply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(vector)
            });
            if (!response.ok) {
                throw new Error('Failed to multiply vector');
            }
            const result = await response.json();
            setVector(result);
        } catch (error) {
            console.log("file: vectors.tsx:32 - multiplyVector - error:", error);
        }
    };

    return (
        <div>
            <button onClick={multiplyVector}>Умножить вектор на 2</button>
            {vector && <div>
                <MatrixDisplay matrix={vector} />
            </div>}
        </div>
    );
};

export default Vectors;
