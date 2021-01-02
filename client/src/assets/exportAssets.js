import studyImg1 from './js-samurai.png'
import studyImg2 from './minin.png'
import studyImg3 from './freecodecamp.png'
import skillsImg1 from './htmlcssjs.png'
import skillsImg2 from './react.png'
import skillsImg3 from './node.png'
import experienceImg1 from './blog.png'
import experienceImg2 from './shorter.png'
import experienceImg3 from './js-interview.png'

export const getStudyImg = () => {
  return {
    img1: studyImg1,
    img2: studyImg2,
    img3: studyImg3
  }
}

export const getSkillsImg = () => {
  return {
    img1: skillsImg1,
    img2: skillsImg2,
    img3: skillsImg3
  }
}
export const getExperienceImg = () => {
  return {
    img1: experienceImg1,
    img2: experienceImg2,
    img3: experienceImg3
  }
}