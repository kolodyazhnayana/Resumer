import React, { useState } from 'react'
import Button from 'shared/ui/button'
import { downloadPdf } from 'features/make-pdf'
import { makePdfDefinition } from 'features/make-pdf-definition'
import { docDefinition } from '../mockData'

const FormTemplate = () => {
  const [value, setValue] = useState({})

  return (
    <div>
      <input
        placeholder="Имя и фамилия"
        onChange={(e) =>
          setValue((prevState) => ({
            ...prevState,
            name: e.target.value,
          }))
        }
      />
      <input
        placeholder="Должность"
        onChange={(e) =>
          setValue((prevState) => ({
            ...prevState,
            jobTitle: e.target.value,
          }))
        }
      />
      <Button
        handleClick={() => {
          downloadPdf(docDefinition)
        }}
        value="Скачать pdf"
      />
    </div>
  )
}

export default FormTemplate
