import { useContext, useState } from 'react'
import './NewRecipeForm.css'
import { ApiContext } from '../../context/ApiContext.jsx'

const NewRecipeForm = () => {
  const { addRecipeToList, isLoading } = useContext(ApiContext)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const [titleErr, setTitleErr] = useState(false)
  const [descriptionErr, setDescriptionErr] = useState(false)
  const [imageErr, setImageErr] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setTitleErr(false)
    setDescriptionErr(false)
    setImageErr(false)

    if (title.trim() && description.trim() && image.trim()) {
      addRecipeToList({ title, description, image })
      setTitle('')
      setDescription('')
      setImage('')
    } else {
      !title.trim() && setTitleErr(true)
      !description.trim() && setDescriptionErr(true)
      !image.trim() && setImageErr(true)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='new-recipe-form'>
      <div className='form-control'>
        <input
          type='text'
          placeholder='Recipe Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {titleErr && <p className='input-err'>Recipe Title cannot be empty!</p>}
      </div>
      <div className='form-control'>
        <textarea
          placeholder='Recipe Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {descriptionErr && (
          <p className='input-err'>Recipe Description cannot be empty!</p>
        )}
      </div>
      <div className='form-control'>
        <input
          type='text'
          placeholder='Image URL'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        {imageErr && <p className='input-err'>Image URL cannot be empty!</p>}
      </div>
      <button
        className='button'
        type='submit'>
        {isLoading.add ? '...Loading' : 'Add Recipe'}{' '}
      </button>
    </form>
  )
}

export default NewRecipeForm
