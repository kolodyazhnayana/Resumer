import { createEffect, createEvent, createStore, sample } from 'effector'
import { ResumeData } from 'entities/template-form'
import { TDocumentDefinitions } from 'pdfmake/interfaces'
import { makeDocDefinition } from 'features/make-doc-definition'
import { makePdf, MakePdfAction } from 'features/make-pdf'

export const saveResumeData = createEvent<ResumeData>()
export const makeResumePdf = createEvent<MakePdfAction>()

export const $resumeData = createStore<ResumeData | null>(null)
export const $docDefinition = createStore<TDocumentDefinitions>({ content: '' })

sample({
  clock: saveResumeData,
  target: $resumeData,
})

sample({
  source: $resumeData,
  filter: Boolean,
  fn: makeDocDefinition,
  target: $docDefinition,
})

sample({
  clock: makeResumePdf,
  source: $docDefinition,
  fn: (source: TDocumentDefinitions, clock: MakePdfAction) => ({
    action: clock,
    docDefinition: source,
  }),
  target: createEffect(makePdf),
})
