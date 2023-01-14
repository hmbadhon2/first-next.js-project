import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Banner from '../Components/Post/Banner/Banner'
import Footer from '../Components/Footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title> Home Page</title>
        </Head>

        
      <Image src="/nature.webp" width={300} height={200}> 

      </Image>

      <Link href="/blog"> Blog</Link>
     <Banner></Banner>
     <Footer></Footer>
     
      </div>
        
    </>
  )
}
