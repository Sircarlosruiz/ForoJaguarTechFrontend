import React from 'react'

import CategoryCard from './category.card';

import './category.styles.scss'

const Category = ({categories}) => {

    //aqui vamos agregar logica para meter las imagenes junto a cada categoria
    
    return (
        <div className='category-container'>
            {categories.map((item, idx) => (
                <CategoryCard key={idx} categories={item}/>
            ))}
        </div>
    );
}

export default Category;