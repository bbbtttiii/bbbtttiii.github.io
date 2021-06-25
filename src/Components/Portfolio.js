import React from 'react';
import projects from '../projects.js'

const Portfolio = () => {
  
  return (
    <>
      <h2>Projects:</h2>
      {projects.slice(0,4).map(p => {
        return (
          <div className="project-container">
            <div className="left">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <ul className="techlist">
                {Object.values(p.stack).map((s, k) => (
                  <li key={k} className="tech">{s}</li>
                ))}
              </ul>
              <ul className="linkslist">
                {Object.entries(p.links).map(([linkName, url], k) => (
                  <li key={k} className="links">
                    <a href={url}>{linkName}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="right">
              <img alt="project" src={p.img} />
            </div>
          </div>
        )
      })}
      <h2>Design Concepts:</h2>
      {projects.slice(4,6).map(p => {
        return (
          <div className="project-container">
            <div className="left">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
            </div>
            <div className="right">
              <img alt="project" src={p.img} />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Portfolio;