import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import './styles.scss'
import { makeDocDefinition } from 'features/make-doc-definition'
import { downloadPdf } from 'features/make-pdf'
import { TDocumentDefinitions } from 'pdfmake/interfaces'

const Template = () => {
  const { TextArea } = Input
  const [value, setValue] = useState<TDocumentDefinitions>()

  const onFinish = (values: Record<string, string>) => {
    const dd = makeDocDefinition(values)
    setValue(dd)
  }

  return (
    <div className="template__form">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="Имя и Фамилия" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Должность" name="jobTitle">
          <Input />
        </Form.Item>
        <Form.Item label="Телефон" name="phone">
          <Input />
        </Form.Item>
        <Form.Item label="E-mail" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Опыт работы" name="experience">
          <Input />
        </Form.Item>
        <Form.Item label="Навыки" name="skills">
          <TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
        </Form.Item>
      </Form>
      {value && (
        <Button type="link" onClick={() => downloadPdf(value)}>
          Скачать pdf
        </Button>
      )}
    </div>
  )
}

export default Template
