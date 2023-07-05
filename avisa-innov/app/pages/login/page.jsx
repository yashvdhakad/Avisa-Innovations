'use client'
import Image from "next/image";
import Link from 'next/link'
import Button from "@/app/components/Button"
import bg from '@/app/assets/img/bg.png'

const page = () => {
  const clickHandler = (e) => {
    e.prevent.default;
  }

  return (
    <section className='h-screen flex justify-between items-center'>
      <div className="w-1/2 h-full invert grid place-items-center">
        <Image
          src={bg}
          width={800}
          alt="Picture of the author"
        />
      </div>
      <div className="w-1/2 h-full flex justify-center items-center text-center">
        <form action="">
          <div className="flex flex-col space-y-6">
            <h1 className="text-xl font-medium">Login to Avisa Innovations</h1>
            <div className="flex flex-col space-y-6">
              <input className="bg-slate-900 px-6 py-2 border rounded" type="email" name="email" placeholder="Enter your email" required />
              <input className="bg-slate-900 px-6 py-2 border rounded" type="password" name="password" placeholder="Enter your password" required />
            </div>
            <div className="">
              <Button clickHandler={clickHandler} cta="Login" />
            </div>
            <p className="opacity-60">Or new user?</p>
            <div className="w-full underline opacity-60 hover:opacity-100">
              <Link href="/pages/signup">Sign Up</Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default page;