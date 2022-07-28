import { Form } from 'entities/template-form'
import { useEvent, useStore } from 'effector-react'
import { $docDefinition, makeResumePdf, saveResumeData } from '../model'
import { Button } from 'antd'
import './style.scss'

const ResumeEditor = () => {
  const saveResumeDataFn = useEvent(saveResumeData)
  const makeResumePdfFn = useEvent(makeResumePdf)
  const docDefinition = useStore($docDefinition)

  return (
    <div className="editor__container">
      <Form onSubmit={saveResumeDataFn} />
      <Button
        type="link"
        disabled={Boolean(!docDefinition.content)}
        onClick={() => {
          makeResumePdfFn('download')
        }}
      >
        Скачать pdf
      </Button>
      <Button
        type="link"
        disabled={Boolean(!docDefinition.content)}
        onClick={() => {
          makeResumePdfFn('open')
        }}
      >
        Открыть pdf
      </Button>
    </div>
  )
}

export default ResumeEditor
