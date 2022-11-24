import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({url}) {
  const [categories, setCategories] = useState([]);

     useEffect(() => {
        axios.get(url + 'products/getcategories.php')
        .then((response) => {
          const json = response.data;
          setCategories(json);
        }).catch (error => {
          alert(error.response === undefined ? error : error.response.data.error);
        })
      }, [])

      return (
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <div className='listaNappi pos-f-t'>

          <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-light p-4">
      <h4 class="text-white">Collapsed content</h4>
      <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
  </div>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <li className="nav-item">
       <Link className='navbar-link eiViiva' to="Home">Etusivu</Link>
      </li>
      <ul className="navbar-nav mr-auto">
      <li className='nav-item dropdown'>
        <a className='nav-link dropdown-toggle' href='#' id="dropdown1"
        data-bs-toggle="dropdown" aria-expanded="false">Tuotteet</a>
        <ul className='dropdown-menu' aria-labelledby='downdown01'>
          {categories.map(category => (
            <li key={category.id}>
              {<Link
              className='dropdown-item'
            to={'/products/' + category.id}>{category.name}
            </Link>}
            </li>
          ))}
        </ul>
      </li>
      <li className="nav-item">
        <Link className="navbar-link eiViiva paddingLisäys center" to="/About">Tietoa meistä</Link>
      </li>
      <li className="nav-item">
        <Link className="navbar-link eiViiva paddingLisäys center" to="/Manage">Lisää tuote/kategoria</Link>
      </li>
    </ul>

  </div>
</nav>
    )
}