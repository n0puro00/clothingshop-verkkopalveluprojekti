import React, { useState } from 'react';
import uuid from 'react-uuid';
import { useEffect } from 'react';
import axios from 'axios';

    const URL = 'http://localhost/verkkopalveluprojekti2/Backend/';

    export default function Order({cart,removeFromCart,updateAmount}) {
        const [inputs,_] = useState([]);
        const [inputIndex, setInputIndex] = useState(-1);
        const [firstname,setFirstname] = useState('');
        const [lastname,setLastname] = useState('');
        const [address,setAddress] = useState('');
        const [zip,setZip] = useState('');
        const [city,setCity] = useState('');
        const [product,setProduct] = useState ('');
        const [finished,setFinished] = useState (false);
      
        useEffect(() => {
          for (let i = 0;i < cart.length;i++) {
            inputs[i] = React.createRef();
          }
        }, [cart.length])
        
        useEffect(()=> {
          if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
            inputs[inputIndex].current.focus();
          }
        },[cart])
      
        function changeAmount(e,product,index) {
          updateAmount(e.target.value,product);
          setInputIndex(index);
        }
      
        let sum = 0;

        function order(e) {
            e.preventDefault();
            const json = JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                address: address,
                zip: zip,
                city: city,
                product: product.amount,
                cart: cart,
                
                });
            axios.post(URL + 'order/order.php/',json,{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type' : 'application/json'
                }
            })
            .then(() => {
                //empty();
                setFinished(true);
            }).catch(error => {
                alert(error.response === undefined ? error: error.response.data.error);
            });
        }
        if (finished === false ) {
      
        return (
          <div>
            <h3 className="header">Items in cart</h3>
            <table className="table">
              <tbody>
                {cart.map((product,index) => {
                  sum+=parseFloat(product.price);
                  return (
                    <tr key={uuid()}>
                      <td>{product.name}</td>
                      <td>{product.price} €</td>
                      <td>
                        <input ref={inputs[index]} style={{width: '60px'}} value={product.amount} onChange={e => changeAmount(e,product,index)} />
                      </td>
                      <td><a href="#" onClick={() => removeFromCart(product)}>Delete</a></td>
                    </tr>
                  )
                  })}
                <tr key={uuid()}>
                  <td></td>
                  <td>Yhteensä {sum.toFixed(2)} €</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            {cart.length > 0 &&
            <>
            <h3>Asiakastiedot</h3>
            <form onSubmit={order} className="container">
                <div className='form-group '>
                    <label>Etunimi</label>
                    <input className="form-control" onChange={e => setFirstname(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label>Sukunimi</label>
                    <input className="form-control" onChange={e => setLastname(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label>Osoite</label>
                    <input className="form-control" onChange={e => setAddress(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label>Postinumero</label>
                    <input className="form-control" onChange={e => setZip(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label>Postitoimipaikka</label>
                    <input className="form-control" onChange={e => setCity(e.target.value)}></input>
                </div>
                <button type="submit" class="btn btn-primary manageNapit">Vahvista tilaus</button>
            </form>
            </>
            }
        </div>
    )
        } else {
            return (
            <div className=''>
            <h3>Kiitos tilauksesta!</h3>
            </div>
            )
        }
}
          