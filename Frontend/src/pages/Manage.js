import React from 'react'
import ManageCategories from '../components/ManageCategories';
import ManageProducts from '../components/ManageProducts';

const URL = 'http://localhost/verkkopalveluprojekti2/Backend/';

export default function Manage() {
    return (
        <div className='taustaVari'>
            <ManageCategories url={URL} />
            <ManageProducts url={URL} />
        </div>
    )
}