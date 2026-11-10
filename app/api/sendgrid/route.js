import sgMail from '@sendgrid/mail'
import { NextResponse } from 'next/server'

sgMail.setApiKey(process.env.SENDGRID_API_KEY) // no NEXT_PUBLIC_ prefix!

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    await sgMail.send({
      to: 'abu.sammie@gmail.com',
      from: '3310572@myuwc.ac.za',
      subject: `From: ${name} with mail ${email}`,
      text: message,
    })

    return NextResponse.json({ status: 'Ok' })
  } catch (err) {
    console.error(err?.response?.body || err.message)
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}