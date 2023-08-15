import './App.css'
import Logo from './Logo'
import Section from './Section'
import movies from './assets/movies.json'

/* for (let i = 0; i < movies.length; i++) {
    for (let j = 0; j < movies[i].images.length; j++) {
      console.log(movies[i].images[j]);
    }
} */
const App = () => {

  return (
    <>
      <Logo />
      
      {movies.map((films) => {
        return (
          <Section
            key={films.category}
            category={films.category}
            images = {films.images}
          />
        )
      })}
    </>
  )
}

export default App
