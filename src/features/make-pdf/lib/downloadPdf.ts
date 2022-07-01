import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

pdfMake.vfs = pdfFonts.pdfMake.vfs

export const downloadPdf = (docDefinition: { content: any }) => {
  pdfMake.createPdf(docDefinition).download()
}
