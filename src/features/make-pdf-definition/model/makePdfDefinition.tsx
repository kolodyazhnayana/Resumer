export const makePdfDefinition = (content: {
  name: string,
  jobTitle: string,
}) => {
  return {
    content: [
      {
        text: content.name,
        style: 'header',
      },
      {
        text: content.jobTitle,
        style: 'subheader',
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
      subheader: {
        margin: [0, 5],
        fontSize: 15,
        bold: true,
      },
    },
  }
}
