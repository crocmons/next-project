import { EmailTemplate } from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request:any) {
  try {
     const body = await request.json();
     console.log(body)
     const { name, email, message, number } = body;

    const data = await resend.emails.send({
      from: 'Cognito-AI <admin@cognito-ai.com>',
      to: email,
      bcc:"admin@cognito-ai.com",
      subject: 'Thank You for Your Inquiry - Cognito-AI',
      react: EmailTemplate({ firstName: name }),
    });
   
    
  // if(data.status === 'success'){
  //     return NextResponse.json({
  //         message:'Email sent successfully'
  //     })
  // }  
    return NextResponse.json(data);
  } catch (error:any) {
    return NextResponse.json({ error: error.message});
  }
}
