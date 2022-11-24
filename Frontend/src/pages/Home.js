import React, { useState, useEffect } from 'react';
import NavbarSuositus from '../components/Navbar3';
import BootstrapCarousel from '../components/BootstrapCarousel';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Home({ url,addToCart }) {
  const [products, setProducts] = useState([]);

  let params = useParams();

  useEffect(() => {

    let address = '/Home';

    if (params.searchPhrase === undefined) {
      address = url + 'products/getproductsEtusivu.php/' + params.Home;
    } else {
      address = url + 'products/searchproductsEtusivu.php/' + params.Home;
    }

    axios.get(address)
    .then((response) => {
      const json = response.data;
      if (params.searchPhrase === undefined) {
      setProducts(json.products);
      } else {
        setProducts(json);
      }
    }).catch(error => {
      alert(error.response === undefined ? error : error.response.data.error);
  })
}, [params])



  return (
    <div>

      <BootstrapCarousel />

      <NavbarSuositus />
          <div className='container '>
          <div className='row korttitaustaVäri center korttiYläPadding'>
            {products.map(product => (
              <div key={product.id} style={{ width: '18rem' }} className="Kortti padding1 korttiMargin1 card korttiNAPPI">
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

          </div>

      )        
    }
