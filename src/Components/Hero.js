import React from 'react';

const Hero = () => {
  return(
    <div className="hero">
      <img id="portrait" src="/images/portrait.jpg" />
      <h1>Hi, I'm Ben- A software engineer.</h1>
      <h2>Things I use:</h2>
      <p>JavaScript, React, Redux, Ruby, Rails, SQL, HTML5, CSS3, SASS</p>
      <h2>You can find me at:</h2>
      <span className="contact">
        <a href="https://www.github.com/bbbtttiii" rel="noreferrer" target="_blank"><img src="/images/github.svg" /></a>
        <a href="mailto:ben.iburg@gmail.com" rel="noreferrer" target="_blank"><img src="/images/gmail.svg" /></a>
      </span>
    </div>
  )
}

export default Hero;