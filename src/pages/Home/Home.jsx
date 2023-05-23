import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import Recipecard from '../../components/cards/Recipecard'
import { getAllRecipiesCategories } from '../../apis/recipe'
import { Link } from 'react-router-dom'


function Home() {

  const [categories,setCategories] = useState([])

  useEffect(()=>{
    getRecipesCategory()
  },[])

  const getRecipesCategory =()=>{
    getAllRecipiesCategories().then((res)=>{
      setCategories(res)
    })
  }

  return (
    <>
    {categories?.length > 0 && categories?.map((category)=> (
      <div key={category.idCategory}>{category?.strCategory}</div>
    ))}

    <div className={styles.homeWrapper}>
        <div className={styles.recipeCardWrapper}>
            {
                [0,1,2,3,4,5].map(()=>
                <Recipecard />
                )}
            
        </div>
        
   
    <Link to={"/recipe"}>
      <button>Recipe</button>
    </Link>
    </div>
    </>
  );
}

export default Home