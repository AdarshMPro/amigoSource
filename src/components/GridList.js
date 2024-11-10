import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function GridList() {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const Navigate = useNavigate();
  const Product = (idh) => {
    Navigate('/ViewDetails/' + idh);
  }

  useEffect(() => {
    fetch('https://dev-cretx.pantheonsite.io/api/mee.php')
      .then(response => response.json())
      .then(data => {
        // Check if data.catalogs exists and is an array
        if (data && Array.isArray(data.catalogs)) {
          setListData(data.catalogs); // Set the catalogs array directly
        } else {
          setListData([]); // In case catalogs is not available or not an array
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="grid">
      {listData.length > 0 ? (
        listData.map((item, index) => (
        <div className="item" key={index} onClick={() => Product(item.id)} >
            <img className="item-pic" src={item.images} alt={item.name} />
            <span className="item-name">{item.name}</span>
            <span className="item-price">₹{item.min_catalog_price}</span>
          </div>
        ))
      ) : (
        <p>No items to display</p>
      )}
    </div>
  );
}

export default GridList;
