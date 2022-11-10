import Head from 'next/head'
import Image from 'next/image'
import bg from '/public/images/bg.webp'

export default function Home() {
  return (
    <div className="h-auto w-full bg-[#050506] dark:bg-[#050506]" style={{ minHeight: '100%' }}>
      <Image src={bg} alt="bg" className="brightness-50"></Image>
    </div>
  )
}
