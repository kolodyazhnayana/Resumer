import { Form } from 'entities/template-form'
import { useEvent, useStore } from 'effector-react'
import { $resumeData, saveResumeData } from '../model'
import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { makeDocDefinition } from 'features/make-doc-definition'
import { downloadPdf } from 'features/make-pdf'
import { TDocumentDefinitions } from 'pdfmake/interfaces'
import './style.scss'

const ResumeEditor = () => {
  const saveResumeDataFn = useEvent(saveResumeData)
  const resumeData = useStore($resumeData)
  const [docDefinition, setDocDefinition] =
    useState<TDocumentDefinitions | null>(null)

  useEffect(() => {
    let dd: TDocumentDefinitions | null = null
    if (resumeData) {
      dd = makeDocDefinition(resumeData)
      setDocDefinition(dd)
    }
  }, [resumeData])

  return (
    <div className="editor__container">
      <Form onSubmit={saveResumeDataFn} />
      <Button
        type="link"
        onClick={() => {
          docDefinition && downloadPdf(docDefinition)
        }}
      >
        Скачать pdf
      </Button>
    </div>
  )
}

export default ResumeEditor
