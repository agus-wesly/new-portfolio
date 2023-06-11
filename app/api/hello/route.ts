import { NextApiResponse } from 'next'
import { revalidatePath, revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

export async function GET(req: Request, res: NextApiResponse) {
  // res.revalidate('/')
  revalidateTag('user')
  // revalidatePath('http://localhost:3000/')
  return new Response(JSON.stringify({ foo: 'bar' }))
}
