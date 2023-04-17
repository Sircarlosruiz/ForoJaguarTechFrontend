import React from 'react'

const CategoryCard = ({categories}) => {

    const {name} = categories;

    return (
        <section className='categorie-card'>
            <div className='name-categorie'>{name}</div>
            <div className='img-categorie'></div>
        </section>
    );
}

export default CategoryCard;