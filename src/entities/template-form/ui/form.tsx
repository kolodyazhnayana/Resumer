import React from 'react'
import { Button, Form as AntForm, Input } from 'antd'
import './styles.scss'
import { ResumeData } from '../model'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

export interface FormProps {
  onSubmit: (val: ResumeData) => void;
}

export const Form = ({ onSubmit }: FormProps) => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 8 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 8 },
      sm: { span: 8 },
    },
  }
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 8, offset: 8 },
      sm: { span: 8, offset: 8 },
    },
  }

  return (
    <div className="resume__form">
      <AntForm
        name="basic"
        {...formItemLayout}
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
        <AntForm.List name="skills">
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <AntForm.Item
                  className="resume__form__skills"
                  {...(index === 0
                    ? formItemLayout
                    : formItemLayoutWithOutLabel)}
                  label={index === 0 ? 'Навыки' : ''}
                  required={false}
                  key={field.key}
                >
                  <AntForm.Item
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                    noStyle
                  >
                    <Input />
                  </AntForm.Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </AntForm.Item>
              ))}
              <AntForm.Item wrapperCol={{ offset: 8, span: 8 }}>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: '60%' }}
                  icon={<PlusOutlined />}
                >
                  Добавить навыки
                </Button>
              </AntForm.Item>
            </>
          )}
        </AntForm.List>
        <AntForm.Item wrapperCol={{ offset: 8, span: 8 }}>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
        </AntForm.Item>
      </AntForm>
    </div>
  )
}
