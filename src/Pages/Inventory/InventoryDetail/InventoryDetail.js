import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const {perfumeId}= useParams();
  

    const [perfume,setPerfume]=useState({});
    useEffect( ()=>{
        const url=`http://localhost:5000/perfume/${perfumeId}`;
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPerfume(data))

    },[perfumeId]);

    return (
        <div>
            {perfume.name}
            {perfume.price}
        </div>
    );
};

export default InventoryDetail;
