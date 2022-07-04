import { TDocumentDefinitions } from 'pdfmake/interfaces'

export const docDefinition: TDocumentDefinitions = {
  content: [
    {
      text: 'Колодяжная Яна',
      style: 'header',
    },
    {
      text: 'Frontend-разработчик',
      style: 'medium',
    },
    {
      text: 'Навыки',
      style: 'subheader',
    },
    'JavaScript',
    'HTML5',
    'CSS3',
    'React',
    'Effector',
    'Redux',
    'Git',
    'NextJs',
    'TypeScript',
    'React Native \n\n',
    {
      text: 'Опыт работы',
      style: 'subheader',
    },
    '1 год 8 месяцев',
  ],
  styles: {
    header: {
      fontSize: 18,
      bold: true,
    },
    subheader: {
      fontSize: 15,
      bold: true,
    },
    small: {
      fontSize: 9,
    },
    medium: {
      fontSize: 12,
      margin: [5, 0],
    },
  },
}
