import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function CategoryList({url,selectedCategory,setSelectedCategory}) {
    const [categories,setCategories] = useState([]);

    useEffect(() => {
        axios.get(url + '../Backend/products/getcategories.php')
        .then((response) => {
            const json = response.data;
            if (json) {
                if(selectedCategory === null) {
                    setSelectedCategory(json[1]);
                }
                setCategories(json);

            }
        }).catch (error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }, [selectedCategory])

    function onCategoryChange(value) {
        setSelectedCategory(categories.filter(item => item.id === parseInt(value))[0]);
    }

    return (
        <select value={selectedCategory?.id} onChange={(e) => onCategoryChange(e.target.value)}>
            {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
            ))}
        </select>
    )
}