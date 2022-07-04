import Button from 'shared/ui/button'
import React from 'react'
import { docDefinition } from '../mockData'
import { downloadPdf } from 'features/make-pdf'

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
