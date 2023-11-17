import { useContext } from 'react'
import RecipeCard from '../recipeCard/RecipeCard'
import './recipeList.css'
import { ApiContext } from '../../context/ApiContext.jsx'


const RecipeList = () => {

  const {recipes, isLoading} = useContext(ApiContext)

  return (
    <div className='recipe-list-container'>
      {isLoading.read && <p>Loading...</p> }
      <div className="recipe-list">{recipes.map((recipe) => <RecipeCard {...recipe} key={recipe.id} />  )}</div>
    </div>
  )
}

export default RecipeList
