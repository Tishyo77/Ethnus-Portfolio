import React, { useEffect, useState } from 'react';
import './Work.css'; 

const projects = 
[
  {
    title: 'The Escape',
    description: 'The Escape is 2D Pixel Art Point & Click Adventure game where you must save the protagonist from a serial killer by escaping his mansion. The player has to solve puzzles and make choices to reach one of the three different ending in the game.',
    link: 'https://github.com/Tishyo77/TheEscape-2DPointAndClick-Adventure-Game',
    imageSrc: 'TheEscape.png', 
  },
  {
    title: 'Demons',
    description: 'Demons is a 2-Player 2D Fighting game where you can play as a warrior or a demon (Smoking/Drinking) and fight against the other in a mystical world. The game has various attack types and defenses for dynamic gameplay.',
    link: 'https://tishyo77.github.io/Demons-2D-2Player-Game/',
    imageSrc: 'Demons.png', 
  },
  {
    title: 'Empowerment Poster',
    description: 'A poster for Women Empowerment which was used by Mukti NGO, Sundarbans, in their campaign. Using the poster, we successfully raised Rs. 27,000 in a week which was well above our targeted value.',
    link: 'https://tishyo77.github.io/MuktiNGO-WomenEmpowerment/',
    imageSrc: 'Mukti.png',
  },
  {
    title: 'Animated Portfolio',
    description: 'An animated room portfolio using 3D modelling with Blender and Three.js. (Ongoing Project)',
    link: 'https://example.com/project4',
    imageSrc: 'Room.png', 
  },
];

const Work = () => 
{
    const [bgColor, setBgColor] = useState('lightblue');
  
    useEffect(() => 
    {
      const handleScroll = () => 
      {
        const scrollY = window.scrollY;
  
        const colorPoints = 
        [
          {color: 'rgb(202,252,255)', position: 1550},
          {color: 'rgb(247,219,255)', position: 2250},
          {color: 'rgb(219,255,255)', position: 2850}, 
        ];
  
        let newColor = 'rgb(255,225,202)'; 
        for (let i = 0; i < colorPoints.length; i++) {
          if (scrollY >= colorPoints[i].position) {
            newColor = colorPoints[i].color;
          }
        }
  
        setBgColor(newColor);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => 
      {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className="work-container" style={{ backgroundColor: bgColor }}>
        <p className="work-heading">Selected Projects...</p>
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img className="image" src={project.imageSrc} alt={project.title} />
            <div className="project-description">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Work;