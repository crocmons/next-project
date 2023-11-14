"use client"

import React, { FormEvent, useState } from "react";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StarCanvas from "@/components/StarCanvas";
import { toast } from "react-hot-toast";

const ContactUS = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;

    setData({
      ...data,
      [name]: value
    });
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
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
  };

  return (
    <div className="mt-3 mx-auto mb-6 items-center justify-center">
      <FadeIn>
        <div className="z-20 flex w-full flex-col lg:w-[90%] justify-center items-center mx-auto">
          <h2 className="bold-40 lg:bold-64">Contact Us</h2>
          <p className="regular-16 font-semibold mt-6 py-2 text-gray-500 tracking-wide">
            Now that you know us and our work, it is possible that you might be looking forward to discuss your business and services or digital requirements with us to get the appropriate solutions for your brand. Kindly feel free to take an appointment with us, our executives would be happy to guide you and build a latest digital platform for your brand.
          </p>
        </div>
        <div className="lg:mb-32 mb-12 flex flex-col items-center justify-center p-2 mx-3 mt-2 ">
          <div className="flex flex-col lg:flex-row justify-center items-center mx-auto w-full h-auto ">
            <form className="w-full h-auto lg:w-[700px] space-y-6 bg-slate-100 border border-gray-10 p-5 rounded-md justify-center items-center"
            onSubmit={sendEmail}>
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
                <input
                  className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                  type="number"
                  name="number"
                  onChange={handleChange}
                  value={data.number}
                  id="number"
                  placeholder="+919783328"
                />
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
}

export default ContactUS;
