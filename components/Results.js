import React from 'react';
import Thumbil from './Thumbil';

const Results = ({ results }) => {
    return (
        <div  className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3">
            {
                results.map((result, index) => (
                    <Thumbil key={index} result={result} />
                ))
            }
        </div>
    );
};

export default Results;