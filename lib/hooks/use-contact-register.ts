/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import useSWRMutation from 'swr/mutation'

export type ContactFormData = {
  firstname: string
  lastname: string
  email: string
  phoneNumber: string
  company: string
  sectoral: string
  message: string
}

async function registerFn(url: string, { arg }: { arg: ContactFormData }) {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (res.ok) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await res.json()
  }
  throw new Error('error')
}
export function useContactRegisterForm() {
  const { trigger, isMutating, error } = useSWRMutation('/api/contact', registerFn)

  return {
    trigger,
    error,
    isMutating,
  }
}
