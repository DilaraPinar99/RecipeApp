import { ApiContext } from '../../context/ApiContext.jsx'
import './recipeCard.css'
import { useContext, useState } from 'react'

const RecipeCard = ({ title, image, description, id }) => {
  const { deleteRecipe } = useContext(ApiContext)
  const [isDeletedLoading, setIsDeletedLoading] = useState(false)

  return (
    <div className='recipe-card'>
      <div className='flex-card'>
        <img
          className='img-container'
          src={image}
          alt=''
        />
        <h3 className='card-title'>{title}</h3>
        <p className='card-desc'>{description}</p>
        <button
          onClick={async () => {
            setIsDeletedLoading(true)
            await deleteRecipe(id)
            setIsDeletedLoading(false)
          }}
          className='btn-delete'>
          {isDeletedLoading ? 'Loading' : 'Sil'}{' '}
        </button>
      </div>
    </div>
  )
}

export default RecipeCard
