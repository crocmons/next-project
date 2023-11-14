"use server";


type Props ={
  firstName: string
}

export const EmailTemplate = ({
  firstName
}:Props) => (
  <div>
    <h1>Dear {firstName},</h1>
    <p className="font-normal text-md">Thank you for contacting Cognito-AI. We've received your inquiry and are eager to assist you. Our team is working diligently to review and respond promptly.</p> <br />
    <span className="font-semibold">For immediate assistance or more details, please call us at <a href="https://wa.me/918369645695">+91 83696 45695.</a></span><br />
    <p className="text-sm">
    Best regards, <br />
    Aaqib Shaikh  <br />
    Founder  <br />
    Cognito-AI <br />
    </p>

  </div>
);






