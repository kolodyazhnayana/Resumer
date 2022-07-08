import { TDocumentDefinitions } from 'pdfmake/interfaces'
import { ResumeData } from 'entities/template-form'

export const makeDocDefinition = (
  /* eslint-disable */
  content: ResumeData
): TDocumentDefinitions => {
  return {
    content: [
      {
        text: content.name,
        style: 'h1',
      },
      {
        text: content.position,
        style: 'h3',
      },
      {
        text: content.phone,
        style: 'p',
      },
      {
        text: content.email,
        style: 'p',
      },
      {
        text: 'Опыт работы',
        style: 'h2',
      },
      {
        text: content.experience,
        style: 'p',
      },
      {
        text: 'Навыки',
        style: 'h2',
      },
      {
        ul: content.skills,
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
}
