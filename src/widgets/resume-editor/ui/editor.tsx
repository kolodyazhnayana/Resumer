import { Form } from 'entities/template-form'
import { useEvent } from 'effector-react'
import { saveResumeData } from '../model'

const ResumeEditor = () => {
  const saveResumeDataFn = useEvent(saveResumeData)

  return (
    <div>
      <Form onSubmit={saveResumeDataFn} />
    </div>
  )
}

export default ResumeEditor
