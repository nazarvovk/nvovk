import { NextApiHandler } from 'next'
import type { MiddlewareObject } from 'shrext'
import { Schema, TypeOf, ZodError } from 'zod'

export const formRequestMiddleware = (
  requestBodySchema: Schema,
): MiddlewareObject<NextApiHandler> => ({
  before: async (context) => {
    const {
      args: [req],
    } = context
    const validatedBody = await requestBodySchema.parseAsync(req.body)
    Object.assign(context, { validatedBody })
  },
  onError: (error, { args: [, res] }) => {
    if (error instanceof ZodError) {
      const { fieldErrors, formErrors } = error.flatten()
      res.status(400).json({
        fieldErrors,
        formErrors,
      })
      return error
    }
  },
})

export type ContextWithValidatedRequestBody<TBody extends Schema> = {
  validatedBody: TypeOf<TBody>
}
