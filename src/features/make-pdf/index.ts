import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { TDocumentDefinitions } from 'pdfmake/interfaces'

pdfMake.vfs = pdfFonts.pdfMake.vfs

export type MakePdfAction = 'open' | 'download'
export interface MakePdfParams {
  docDefinition: TDocumentDefinitions;
  action: MakePdfAction;
}

export const makePdf = ({ docDefinition, action }: MakePdfParams) => {
  pdfMake.createPdf(docDefinition)[action]()
}
