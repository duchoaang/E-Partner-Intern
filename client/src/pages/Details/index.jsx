import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Details = () => {
    const { gender } = useParams();
 
    return (
        <>
          <p>{gender}</p>
        </>
    );
};

export default Details;