import React, { useEffect, useState } from 'react'
import { getAllRecipiesCategories } from '../../apis/recipe'
import { Link } from 'react-router-dom'

function Recipe() {
    const [categories,setCategories] = useState([])

  useEffect(()=>{
    getAllRecipesCategory()
  },[])

  const getAllRecipesCategory =()=>{
    getAllRecipiesCategories().then((res)=>{
      setCategories(res)
    })
  }

  return (
    <>
    <div>
            {categories?.length > 0 && categories?.map((category)=> (
      <div key={category.idCategory}>{category?.strCategory}</div>
    ))}
    </div>
    <div>
        <Link to={'/'}><button>Home page</button></Link>
    </div>
    </>

  )
}

export default Recipe