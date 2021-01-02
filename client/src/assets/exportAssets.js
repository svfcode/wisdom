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

export const getStudyTxt = () => {
  return [
    {
      name: 'It-samurai',
      description: 'Youtube канал Белорусского автора Дмитрия',
      link: 'https://www.youtube.com/channel/UCTW0FUhT0m-Bqg2trTbSs0g'
    },
    {
      name: 'Владилен Минин',
      description: 'Youtube канал Владилена Минина',
      link: 'https://www.youtube.com/channel/UCg8ss4xW9jASrqWGP30jXiw'
    },
    {
      name: 'FreeCodeCamp',
      description: 'Курсы по программированию от американских авторов',
      link: 'https://www.freecodecamp.org/'
    }
  ]
}

export const getSkillsTxt = () => {
  return [
    {
      name: 'HTML CSS Javascript',
      description: 'Основа для современного веба',
      link: 'https://developer.mozilla.org/ru/docs/Web'
    },
    {
      name: 'React JS',
      description: 'Библиотека для создания пользовательских интерфейсов',
      link: 'https://ru.reactjs.org/'
    },
    {
      name: 'Node JS',
      description: 'Среда выполнения для JavaScript, которая работает на серверах',
      link: 'https://nodejs.org/dist/latest-v14.x/docs/api/'
    }
  ]
}
export const getExperienceTxt = () => {
  return [
    {
      name: 'Блог эндокринолога',
      description: 'Блог с возможностью записи на прием, информации о враче и возможностью размещать посты',
      link: 'http://194.67.108.218:5000/'
    },
    {
      name: 'URL Shorter',
      description: 'Сервис для сокращения ссылок, использует jwt для авторизации',
      link: 'http://194.67.108.218:5001/'
    },
    {
      name: 'JS-Interview',
      description: 'Авторский сайт для сбора информации по технологии JS в концентрированном виде',
      link: 'http://194.67.108.218:5002/'
    }
  ]
}