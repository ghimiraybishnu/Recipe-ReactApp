import axios from "axios"

export function getAllRecipies() {
    return new Promise((resolve,reject)=>{
        axios ({
            method:'get',
            url:''
        })
    
    })
}



export function getAllRecipiesCategories() {
    return new Promise((resolve,reject)=>{
        axios({
            method:'get',
            url:'https://www.themealdb.com/api/json/v1/1/categories.php'
        }).then((resp)=>{
           console.log(resp);
            resolve(resp.data.categories)
        })
    
    })
}