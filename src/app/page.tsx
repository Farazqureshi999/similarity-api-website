import Heading from '@/components/ui/Heading';
import Paragraph from '@/components/ui/Paragraph';
import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata:Metadata = {
  title:'Similarity API | Home',
  description: 'This is the home page of the similarity API'
}

export default function Home() {
  
  return (
    <div className='relative flex items-center justify-center h-screen overflow-x-hidden'>
      <div className='container w-full h-full pt-32 mx-auto max-w-7xl'>
        <div className='flex flex-col items-center justify-start h-full gap-6 lg:justify-center lg:items-start'>
          <Heading
            size='lg'
            className='text-black three-d dark:text-light-gold'>
            Easily determine <br /> text similarity.
          </Heading>

         
          <Paragraph className='max-w-xl lg:text-left'>
            With the Text Similarity API, you can easily determine the
            similarity between two pieces of text with a free{' '}
            <Link
              href='/login'
              className='text-black underline underline-offset-2 dark:text-light-gold'>
              API key
            </Link>
            .
          </Paragraph>

         <div className="relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
          <Image
          priority
          className='img-shadow'
          quality={100}
          style={{ objectFit: 'contain' }}
          fill
          src='/typewriter.png'
          alt='typewriter'
/>
         </div>
        </div>
      </div>
    </div>
  )
}
