import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'abu.sammie@gmail.com',
      subject: `From: ${name} with mail ${email}`,
      text: message,
      replyTo: email,
    })

    if (error) {
      console.error('Resend Error:', error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ status: 'Ok', id: data.id })
  } catch (err) {
    console.error('Server Error:', err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}