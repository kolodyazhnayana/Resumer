import { downloadPdf } from 'features/make-pdf/lib/downloadPdf'
import { docDefinition } from 'features/make-pdf/lib/templateForResume'
import Button from 'shared/ui/button'
import React from 'react'

const FormTemplate = () => {
  return (
    <>
      <form></form>
      <Button
        handleClick={() => downloadPdf(docDefinition)}
        value="Скачать pdf"
      />
    </>
  )
}

export default FormTemplate
