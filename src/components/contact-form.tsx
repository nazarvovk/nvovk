import { Control, FieldValues, Path, useController, useForm } from 'react-hook-form'
import type { ContactInput } from '@/pages/api/contact'
import { cn } from '@/utils/cn'

const defaultValues = {
  name: '',
  email: '',
  message: '',
}

export const ContactForm = () => {
  const {
    handleSubmit,
    control,
    getValues,
    formState: { isSubmitting, isSubmitSuccessful, isDirty, errors },
    setError,
    reset,
  } = useForm<ContactInput>({
    defaultValues,
  })

  const onSubmit = async (data: ContactInput) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (res.status === 422) {
      const error = await res.json()
      if ('fieldErrors' in error) {
        for (const [key, value] of Object.entries(error.fieldErrors)) {
          setError(key as Path<ContactInput>, { message: (value as string[])[0] })
        }
      }
      return
    }
    if (!res.ok) {
      setError('root', { message: 'Sorry, failed to send your message' })
    }
  }

  if (isSubmitSuccessful) {
    return <SuccessCard values={getValues()} reset={reset} />
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-72 space-y-4'>
      <Input control={control} name='name' label='Name' placeholder='Your name' required />
      <Input control={control} name='email' label='Email' placeholder='Your email' required />
      <TextArea
        control={control}
        name='message'
        label='Message'
        placeholder='Your message'
        required
      />
      <div className='flex gap-4'>
        <button
          disabled={isSubmitting}
          type='submit'
          className={cn('bg-neutral-950 px-8 py-2 font-bold text-neutral-50', {
            'bg-neutral-700': isSubmitting,
          })}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
        {isDirty && (
          <button type='button' className='underline' onClick={() => reset()}>
            Reset
          </button>
        )}
      </div>
      {errors.root && <span className='font-bold text-red-700'>{errors.root.message}</span>}
    </form>
  )
}

type InputProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: string
  placeholder: string
  required?: boolean
}

const Input = <T extends FieldValues>(props: InputProps<T>) => {
  const { control, name, label, placeholder, required } = props
  const { field, fieldState } = useController<T>({ name, control })
  return (
    <div className='space-y-1'>
      <label htmlFor={name} className='font-bold'>
        {label}
      </label>
      <input
        className='block w-full rounded-none border-2 border-neutral-950 bg-transparent px-2 py-1 focus:outline-none focus:ring-2 focus:ring-neutral-950'
        {...field}
        placeholder={placeholder}
        required={required}
      />
      {fieldState.error && <span className='text-red-700'>{fieldState.error.message}</span>}
    </div>
  )
}

const TextArea = <T extends FieldValues>(props: InputProps<T>) => {
  const { control, name, label, placeholder, required } = props
  const { field, fieldState } = useController<T>({ name, control })
  return (
    <div className='space-y-1'>
      <label htmlFor={name} className='font-bold'>
        {label}
      </label>
      <textarea
        className='block w-full rounded-none border-2 border-neutral-950 bg-transparent px-2 py-1 focus:outline-none focus:ring-2 focus:ring-neutral-950'
        {...field}
        rows={3}
        placeholder={placeholder}
        required={required}
      />
      {fieldState.error && <span className='text-red-700'>{fieldState.error.message}</span>}
    </div>
  )
}

const SuccessCard = ({ values, reset }: { values: ContactInput; reset: () => void }) => {
  return (
    <div className='space-y-2'>
      <div className='max-w-72 border-2 border-neutral-950 px-2 py-1'>
        <p className='mb-2 font-bold'>🎉 Message sent!</p>
        <div>
          <p>
            <b>Name:</b> {values.name}
          </p>
          <p>
            <b>Email:</b> {values.email}
          </p>
          <p>
            <b>Message:</b>
          </p>
          <p className='whitespace-pre-wrap'>{values.message}</p>
        </div>
      </div>
      <button type='button' className='underline' onClick={() => reset()}>
        Reset
      </button>
    </div>
  )
}
