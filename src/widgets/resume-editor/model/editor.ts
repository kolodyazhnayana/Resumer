import { createEvent, createStore, sample } from 'effector'
import { ResumeData } from 'entities/template-form'

export const saveResumeData = createEvent<ResumeData>()

export const $resumeData = createStore<ResumeData | null>(null)

sample({
  clock: saveResumeData,
  target: $resumeData,
})

$resumeData.watch((data) => console.log(data))
