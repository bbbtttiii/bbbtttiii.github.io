import Hero from './Components/Hero.js'
import Project from './Components/Project.js'
import Blog from './Components/Blog.js'

const App = () => {
  return (
    <div className="container">
      <Hero />
      <Project />
      {/* <Blog /> */}
    </div>
  );
}

export default App;