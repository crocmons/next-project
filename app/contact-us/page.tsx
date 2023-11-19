"use client"
import React, { FormEvent, useState } from "react";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StarCanvas from "@/components/StarCanvas";
import { toast } from "react-hot-toast";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  number: string;
}

const ContactUS: React.FC = () => {
  const [data, setData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const [valid, setValid] = useState(true);

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e && e.target) {
      const { name, value } = e.target;
  
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  
      if (name === 'number') {
        setValid(validatePhoneNumber(value));
      }
    }
  };
  
  

  const validatePhoneNumber = (phnum: string): boolean => {
    const phonenumberPattern = /^\d{10}$/;
    return phonenumberPattern.test(phnum);
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        setData({
          name: "",
          email: "",
          message: "",
          number: "",
        });
        toast.success(`Hi ${data.name}, your message has been sent successfully!`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred while sending the email.");
    }
  };

  return (
    <div className="mt-3 mx-auto mb-6 items-center justify-center">
      <FadeIn>
        <div className="max-container padding-container z-20 flex w-full flex-col lg:w-[90%] justify-center items-center mx-auto">
          <h2 className="bold-40 lg:bold-64">Contact Us</h2>
          <p className="regular-18 mt-6 text-gray-500 mb-5 ">
            Now that you know us and our work, it is possible that you might be looking forward to discuss your business and services or digital requirements with us to get the appropriate solutions for your brand. Kindly feel free to take an appointment with us, our executives would be happy to guide you and build a latest digital platform for your brand.
          </p>
        </div>
        <div className="lg:mb-32 mb-12 flex flex-col items-center justify-center p-2 mx-3 mt-2 ">
          <div className="flex flex-col lg:flex-row justify-center items-center mx-auto w-full h-auto ">
            <form
              className="w-full h-auto lg:w-[700px] space-y-6 bg-slate-100 border border-gray-10 p-5 rounded-md justify-center items-center"
              onSubmit={sendEmail}
            >
              <div className="flex flex-col">
                <label htmlFor="name">Full Name</label>
                <input
                  className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  id="name"
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  id="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="number">Mobile Number</label>
                <PhoneInput
                  className="py-3 px-2 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg transition-all"
                  defaultCountry="IN"
                  name="number"
                  onChange={handleChange}
                  value={data.number}
                  id="number"
                  inputProps={{ required: true }}
                />
                {!valid && <p className="font-semibold text-red-600">Please enter a valid phone number!</p>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="message">Message</label>
                <textarea
                  className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                  name="message"
                  id="message"
                  value={data.message}
                  onChange={handleChange}
                  cols={30}
                  rows={3}
                  placeholder="Enter Your Message"
                />
              </div>
              <div className="flex flex-row justify-center">
                <Button type="submit" variant="w-40 h-14 bg-[#0077B6] text-white text-lg font-semibold rounded hover:bg-[#7209B7]" title="Submit" />
              </div>
            </form>
          </div>
        </div>
      </FadeIn>
      <StarCanvas />
    </div>
  );
};

export default ContactUS;
