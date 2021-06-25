import Hero from './Components/Hero.js'
import Portfolio from './Components/Portfolio.js'
import Blog from './Components/Blog.js'

const App = () => {
  return (
    <div className="container">
      <Hero />
      <Portfolio />
      {/* <Blog /> */}
    </div>
  );
}

export default App;