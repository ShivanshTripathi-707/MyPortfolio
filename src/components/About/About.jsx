import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/about_profile.jpg"

const skills = [
  {
    name: "MERN + Tailwind",
    known: 85
  },

  {
    name: "React Native + NextJs",
    known: 55
  },

  {
    name: "Python + Flask",
    known: 75
  },

  {
    name: "Numpy & Pandas",
    known: 60
  },

  {
    name: "Java",
    known: 70
  },
]


const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Decoration Underline" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="My Image" />
        </div>
        <div className="about-right">
          <div className='about-para'>
            <p>I'm Shivansh Tripathi, a second-year B.Tech CSE student at Vivekananda Global University, Jaipur. With a CGPA of 8.87, I'm passionate about software development, problem-solving, and continuously learning new technologies.</p>
            <p>Originally from Gorakhpur, Uttar Pradesh, I can communicate in Hindi, English, and Bhojpuri. I'm always eager to build impactful projects, enhance my skills, and grow as a developer.</p>
          </div>
          <div className="about-skills">
            {
              skills.map((skill, item) => {
                return <>
                  <div className="about-skill">
                    <p>{skill.name}</p>
                    <div className="skill-bar-track">
                      <hr style={{ width: `${skill.known}%` }} />
                    </div>
                  </div>
                </>
              })
            }
          </div>
        </div>

      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>6+</h1>
          <p>Months Of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1</h1>
          <p>Internship Completed</p>
        </div>
      </div>
    </div>
  )
}

export default About