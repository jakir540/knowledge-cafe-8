import React, { useState } from 'react';

const SpentTime = ({spentTime}) => {
   
    return (
        <>
            <h3 className='spentTime fw-bold text-primary text-center p-1 mb-5 mt-3'>Spent time on read : {spentTime} min</h3>
        </>
    );
};

export default SpentTime;