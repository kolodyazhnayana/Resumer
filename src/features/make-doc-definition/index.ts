import { TDocumentDefinitions } from 'pdfmake/interfaces'
import { ResumeData } from 'entities/template-form'

export const makeDocDefinition = (
  content: ResumeData
): TDocumentDefinitions => {
  const { data } = content
  return {
    content: [
      {
        text: data.name,
        style: 'h1',
      },
      {
        text: data.position,
        style: 'h3',
      },
      {
        text: data.phone,
        style: 'p',
      },
      {
        text: data.email,
        style: 'p',
      },
      {
        text: 'Опыт работы',
        style: 'h2',
      },
      {
        text: data.experience,
        style: 'p',
      },
      {
        text: 'Навыки',
        style: 'h2',
      },
      {
        ul: data.skills,
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
