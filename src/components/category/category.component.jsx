import React from 'react'

import CategoryCard from './category.card';
import { categoryImages } from '../../data/category-images';

import './category.styles.scss'

const Category = ({categories}) => {

    //aqui vamos agregar logica para meter las imagenes junto a cada categoria
    categories.forEach((el) => {
        const match = categoryImages.filter((val) => val.Name === el.name);
        if (match.length > 0) {
            el.URL = match[0].URL
        }
    });
    
    return (
        <div className='category-container'>
            {categories.map((item, idx) => (
                <CategoryCard key={idx} categories={item}/>
            ))}
        </div>
    );
}

export default Category;