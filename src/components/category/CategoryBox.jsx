import React from 'react';
import CategoryPost from './CategoryPost';
import './CategoryBox.css'
const CategoryBox = ({ categories, catArray, setCatArray }) => {

    return (
        <div className='category-box'>
            {categories.map((category) => {
                return (
                    <CategoryPost catArray={catArray} setCatArray={setCatArray} key={category.name} category={category} />
                )
            })}
        </div>


    );
}

export default CategoryBox;