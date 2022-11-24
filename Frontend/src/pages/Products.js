import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


export default function Products({ url,addToCart }) {
  const [categoryName, setCategoryName] = useState('');
  const [products, setProducts] = useState([]);

  let params = useParams();

  useEffect(() => {

    let address = '';

    if (params.searchPhrase === undefined) {
      address = url + 'products/getproducts.php/' + params.categoryId;
    } else {
      address = url + 'products/searchproducts.php/' + params.searchPhrase;
    }

    axios.get(address)
      .then((response) => {
        const json = response.data;
        if (params.searchPhrase === undefined) {
        setCategoryName(json.category);
        setProducts(json.products);
        } else {
          setCategoryName(params.searchPhrase);
          setProducts(json);
        }
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
    })
  }, [params])
  return (
    <div className='container'>
    <div className='row korttitaustaVäri'>
      <div></div>
      <h3>{categoryName}</h3>
      {products.map(product => (
        <div key={product.id} style={{ width: '14rem' }} className="Kortti paddingLisäys korttiMarginLisäys card korttiNAPPI">
          {product.name}
          <div>
          <div><img src={url + 'img/' +product.image} alt="Kuva tuotteelle" className='korttiIMG'></img></div>
          <button className='btn btn-primary korttiHintaPadding ' type='button' onClick={e => addToCart(product)}> 
          <FontAwesomeIcon icon={faCartShopping} /> 
          </button>  
          {product.price} €
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}