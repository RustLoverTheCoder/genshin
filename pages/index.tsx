import Head from 'next/head'
import Image from 'next/image'
import bg from '/public/images/bg.webp'

export default function Home() {
  return (
    <div className="bg-[#050506] dark:bg-[#050506] w-full m-h-full">
      <Image src={bg} alt='bg' className='brightness-50'></Image>
    </div>
  )
}
