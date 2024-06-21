import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MatrixDisplay from '@/src/components/MatrixDisplay';

const Matrices = () => {
    const [matrices, setMatrices] = useState({ matrix1: [], matrix2: [] });
    const [result, setResult] = useState(null) as any;

    useEffect(() => {
        const fetchMatrices = async () => {
            const response = await axios.get('http://localhost:5207/api/matrix/random');
            setMatrices(response.data);
        };

        fetchMatrices();
    }, []);

    const fetchRandomMatrices = async () => {
        try {
            const response = await fetch('http://localhost:5207/api/matrix/random');
            if (!response.ok) {
                throw new Error('Failed to fetch matrices');
            }
            const data = await response.json();
            setMatrices(data);
        } catch (error) {
            console.log("file: matrices.tsx:27 - fetchRandomMatrices - error:", error);
        }
    };

    const multiplyMatrices = async () => {
        const response = await axios.post('http://localhost:5207/api/matrix/multiply', { matrix1: matrices.matrix1, matrix2: matrices.matrix2 });
        setResult(response.data);
    };

    return (
        <div>
            <button onClick={fetchRandomMatrices}>Generate Random Matrices</button>
            <button onClick={multiplyMatrices}>Перемножить матрицы</button>
            {matrices ? (
                <>
                    <div>
                        <h2>Matrix 1</h2>
                        <MatrixDisplay matrix={matrices.matrix1} />
                    </div>
                    <div>
                        <h2>Matrix 2</h2>
                        <MatrixDisplay matrix={matrices.matrix2} />
                    </div>
                    <MatrixDisplay matrix={result} />
                </>
            ) : null}
        </div>
    );
};
export default Matrices;
