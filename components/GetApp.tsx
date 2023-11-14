import React from 'react'
import Button from './Button'
import Image from 'next/image'
import FadeIn from './FadeIn'
import Link from 'next/link'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app mt-12 mb-2">
      <FadeIn>
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">#Ask your queries</h2>
          <p className="text-md text-white py-2">Reach out to us for a conversation about how we can bring your digital vision to life.</p>
          <div className="flex flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="Setup a meeting"
              icon="/gmeet.svg"
              variant="btn_white"
              full
            />
            <Link href="/contact-us">
            <Button 
              type="button"
              title="Contact US"
              icon="/contact.svg"
              variant="btn_black"
              full
            />
            </Link>
          </div>
        </div>
        </FadeIn>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={350} height={380} />
        </div>
      </div>
    </section>
  )
}

export default GetApp