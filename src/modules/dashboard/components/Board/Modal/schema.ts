import { object, string } from 'zod'

export const schema = () => {
  return object({
    title: string({ required_error: 'Title is required' }).min(
      1,
      'Title is required',
    ),
    labelPriority: string({ required_error: 'Label priority is required' }).min(
      1,
      'Label priority is required',
    ),
  })
}
