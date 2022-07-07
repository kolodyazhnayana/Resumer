import React from 'react'
import { Button, Form as AntForm, Input } from 'antd'
import './styles.scss'
import { ResumeData } from '../model'

export interface FormProps {
  onSubmit: (val: ResumeData) => void;
}

export const Form = ({ onSubmit }: FormProps) => {
  const { TextArea } = Input

  return (
    <div className="template__form">
      <AntForm
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <AntForm.Item label="Имя и Фамилия" name="name">
          <Input />
        </AntForm.Item>
        <AntForm.Item label="Должность" name="position">
          <Input />
        </AntForm.Item>
        <AntForm.Item label="Телефон" name="phone">
          <Input />
        </AntForm.Item>
        <AntForm.Item label="E-mail" name="email">
          <Input />
        </AntForm.Item>
        <AntForm.Item label="Опыт работы" name="experience">
          <Input />
        </AntForm.Item>
        <AntForm.Item label="Навыки" name="skills">
          <TextArea />
        </AntForm.Item>
        <AntForm.Item wrapperCol={{ offset: 8, span: 8 }}>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
        </AntForm.Item>
      </AntForm>
    </div>
  )
}
