import React from 'react';
import { useLoaderData } from 'react-router';
import BangladeshMap from './BangladeshMap';

const Coverage = () => {
    const serviceCenters = useLoaderData();
    
    return (
        <div>
            <BangladeshMap serviceCenters={serviceCenters}></BangladeshMap>
        </div>
    );
};

export default Coverage;