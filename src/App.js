import React from 'react';
import './App.css';

function App() {
  let data = [
    {
    name: "Rorie and Rosie",
    jobTitle: "Developer",
    paragraph: "Being trained by future proof in software engineering."
    },
    {
      language:[
        {
          name: "html",
          level: 7
        },
        {
          name: "JavaScript",
          level: 8
        },
        {
          name: "CSS",
          level: 8
        },
        {
          name: "Python",
          level: 4
        }
      ]
    },
    {
      link: "https://github.com/rorieArmstrong"
    },
    {
      prodjects:[
        {
          name: "community-journaling-website",
          link: "https://github.com/rorieArmstrong/community-journaling-website"
        },
        {
          name: "Consolidation-Exercise",
          link: "https://github.com/rorieArmstrong/Consolidation-Exercise"
        }
      ]
    }];
  return (
    <div className="App">
      <header className="App-header">
        <h1>{data[0].name}</h1>
        <h3>{data[0].jobTitle}</h3>
      </header>
      <main className="App-main">
        <div className="App-lang">
          <p>{data[0].paragraph}</p>
          <ul>
            {data[1].language.map(function(item) { return <li key={item.name}>{item.name} : {item.level}</li> })}
          </ul>
          </div>
        <div className="App-Github">
          <a href={data[2].link}><h3>Github</h3></a>
          <ul>
          {data[3].prodjects.map(function(item) { return <a href={item.link}><li key={item.name}>{item.name}</li></a> })}
          </ul>
          </div>
        </main>
    </div>
  );
}

export default App;
