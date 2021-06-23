import React from 'react';

const Project = () => {

  const projects = [
    {
      id: 1,
      name: "Parallelogram",
      description: "digital magazine",
      stack: [
        "React",
        "Redux",
        "Rails",
        "Postgres"
      ],
      links: {
        Code: "https://www.github.com/bbbtttiii/parallelogram-frontend",
        Demo: "https://parallelogram-mag.netlify.app/"
      },
      img: "https://raw.githubusercontent.com/bbbtttiii/parallelogram-frontend/main/public/parallelogram.jpg"
    },
    {
      id: 2,
      name: "Visualifter",
      description: "weightlifing visualizer",
      stack: [
        "JavaScript",
        "Rails",
        "Postgres"
      ],
      links: {
        Code: "https://www.github.com/bbbtttiii/visualifter",
        Demo: "https://visualifter.netlify.app/"
      },
      img: "https://raw.githubusercontent.com/bbbtttiii/visualifter/main/frontend/images/visualifter.jpg"
    },
    {
      id: 3,
      name: "Hyperlocal",
      description: "remote weather observation tracking",
      stack: [
        "Sinatra",
        "Ruby",
        "Postgres"
      ],
      links: {
        Code: "https://www.github.com/bbbtttiii/hyperlocal",
        Demo: "https://hyperlocal-wx.herokuapp.com/"
      },
      img: "https://raw.githubusercontent.com/bbbtttiii/hyperlocal/master/public/images/preview.jpg"
    },
    {
      id: 4,
      name: "4tnr",
      description: "Colorado mountain guidebook",
      stack: [
        "Ruby"
      ],
      links: {
        Code: "https://www.github.com/bbbtttiii/4tnr"
      },
      img: "https://raw.githubusercontent.com/bbbtttiii/4tnr/master/img/4tnr.jpg"
    },
    {
      id: 5,
      name: "Geometric Type",
      description: "Sans-serif & serif font construciton",
      stack: "",
      links: "",
      img: "https://raw.githubusercontent.com/bbbtttiii/bbbtttiii.github.io/main/images/type1.jpg"
    },
    {
      id: 6,
      name: "Geometric Layout",
      description: "Deriving page layouts from sacred geometry",
      stack: "",
      links: "",
      img: "https://raw.githubusercontent.com/bbbtttiii/bbbtttiii.github.io/main/images/layouts1.jpg"
    }
  ]

  return (
    <>
      <h2>Projects:</h2>
      {projects.map(p => {
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
                {Object.entries(p.links).map(([linkName, url]) => (
                  <li className="links">
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
    </>
  )
}

export default Project;