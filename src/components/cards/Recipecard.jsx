import React from 'react'
import styles from './RecipeCard.module.css'

export default function Recipecard() {
  return (
    <div className={styles.cardWrapper}>
        <img src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg" alt="foodie" className={styles.cardImage}/>
        <span>food recipie</span>
    
    </div>
  )
}
