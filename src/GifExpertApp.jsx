import {React, useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['¡Hola!']);

    const onAddCategory = (newCategory)=>{
        
        // console.log(newCategory)
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

  return (
    <>
        
        <h1>Gif Finder App</h1>

        
        <AddCategory 
            // onAddCategory={setCategories}
            onNewCategory={event => onAddCategory(event)}
        />

        
        {
            categories.map(cat => {
                return (
                <GifGrid 
                    key={cat}
                    category={cat}
                />)
                })
        }
            


    </>
  )
}
