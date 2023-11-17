import './home.css';
import RecipeList from '../recipeList/RecipeList.jsx';
const Home = () => {


    return (
      <div className="home">
        <h1>Welcome to the Recipe Sharing Platform</h1>
        <p>Find and share the best recipes from around the world!</p>

        <RecipeList />
      </div>
    );
  };

export default Home
