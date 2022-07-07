import { TDocumentDefinitions } from 'pdfmake/interfaces'

export const docDefinition: TDocumentDefinitions = {
  content: [
    {
      text: 'Имя Фамилия',
      style: 'h1',
    },
    {
      text: 'Frontend-разработчик',
      style: 'h3',
    },
    {
      text: 'Номер телефона',
      style: 'p',
    },
    {
      text: 'E-mail',
      style: 'p',
    },
    {
      text: 'Опыт работы',
      style: 'h2',
    },
    {
      text: 'Company, Location – (Dates)',
      style: 'p',
    },
    {
      text: 'Навыки',
      style: 'h2',
    },
    {
      ul: [
        'JavaScript',
        'CSS3',
        'HTML5',
        'React',
        'NextJs',
        'React Native',
        'Typescript',
        'Effector',
        'Redux',
        'FSD',
      ],
      style: 'ul',
    },
  ],
  styles: {
    h1: {
      fontSize: 24,
      bold: true,
    },
    h2: {
      fontSize: 20,
      bold: true,
      margin: [0, 15, 0, 0],
    },
    h3: {
      fontSize: 16,
      bold: true,
      margin: [0, 10, 0, 0],
    },
    p: {
      fontSize: 12,
      margin: [0, 5, 0, 0],
    },
    ul: {
      margin: [0, 10, 0, 0],
    },
  },
}
