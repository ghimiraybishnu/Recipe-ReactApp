import React, { useEffect, useState } from 'react'
import { getMealDetails } from '../../apis/recipe';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './RecipeDetail.module.css'
import ReactPlayer from 'react-player';
import { leftArrow } from '../../utils/iconsUtil';

export default function RecipeDetail() {
    
    const{id}=useParams() 
    const[recipeDetail,setRecipeDetail]=useState(`${id}`)
const navigate = useNavigate()

    useEffect(()=>{
        getDetail()
    },[]);


    const getDetail=()=>{
      getMealDetails(id).then((res) => {
            setRecipeDetail(res)
        })
    }
    const goBack=()=>{
      navigate(-1)
    }



  return (
    <div className={styles.container}>
      

        <div className='icon-wrapper' onClick={goBack}>
          {leftArrow() }
        </div>




        <div className={styles.heading}>
          <h1 className={styles.title}>{recipeDetail?.strMeal}</h1>
          
          
        </div>

        <div className={styles.image}>
          {recipeDetail?.strYoutube ?(
<ReactPlayer url={recipeDetail?.strYoutube } width="100%" />

          ): (
          <img src={recipeDetail?.strMealThumb} alt="food in plate" /> 
          )}
        </div>

        <div className={styles.description}>
            <div className={styles.area}>
              <ul>
                <li><span>Category</span>{recipeDetail?.strCategory}</li>
                <li><span>Country</span>{recipeDetail?.strArea}</li>
              </ul>
            </div>
            {recipeDetail?.strInstructions}  
        </div>
           

<h1> Ingredient </h1>
<div className="display-grid gap-2">
          <h4>Ingredient</h4>
          {Array.from({ length: 20 }).map((item, index) => (
            <>
              {recipeDetail?.[`strIngredient${index + 1}`] ? (
                <span>{recipeDetail?.[`strIngredient${index + 1}`]}</span>
              ) : (
                ''
              )}
            </>
          ))}
        </div>

    </div>
  )
}

