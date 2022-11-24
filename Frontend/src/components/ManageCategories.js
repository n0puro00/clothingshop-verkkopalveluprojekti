import axios from 'axios';
import { useState } from 'react';
import CategoryList from '../components/CategoryList';

export default function ManageCategories({url}) {
    const [newCategory, setNewCategory] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [addingCategory, setAddingCategory] = useState(false);

    function saveCategory(e) {
        e.preventDefault();
        const json = JSON.stringify({name : newCategory});
        axios.post(url + 'products/addcategory.php', json, {
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((response) => {
            setNewCategory('');
            setAddingCategory(false);
            setSelectedCategory(response.data);
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }

    if (!addingCategory){
        return (
          <>
          <h3>Lisää kategoria</h3>
          <div>
            <label>Kategoriat</label>
            <CategoryList
              url={url}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              />
              <button className="btn btn-dark manageNapit" type="button" onClick={() => setAddingCategory(true)}>Lisää</button>
          </div>
          </>
        )
      } else {
        return (
          <>
          <h3>Lisää uusi kategoria</h3>
          <form onSubmit={saveCategory}>
          <div>
            <label>Kategorian nimi</label>
            <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}/>
          </div>
          <button type="button" className='manageNapit' onClick={() => setAddingCategory(false)}>Peru</button>
          <button type="submit" className='manageNapit'>Tallenna</button>
          </form>
          </>
        )
      }
}