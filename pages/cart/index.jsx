import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';

const index = () => {

  const {asPath  , pathname} = useRouter();

//   console.log(pathname)
  return (
    <div className=''>
      <div>
      <Image src="https://ik.imagekit.io/JMnext08/narrow-gate-canve.png?updatedAt=1709909134816"
        loading='lazy'  width={1000.6} height={600.5}

      />
      {/* <image src="https://ik.imagekit.io/JMnext08/tr:w-1000/narrow-gate-canve.png?updatedAt=1709909134816">

      </image> */}
      </div>
      {/* <div>
      <Image src="https://ik.imagekit.io/JMnext08/narrow-gate-canve.png?updatedAt=1709909134816"
        loading='lazy'  width={30.6} height={20.5}


      />
      </div>
      <div>
      <Image src="https://ik.imagekit.io/JMnext08/narrow-gate-canve.png?updatedAt=1709909134816"
        loading='lazy'  width={30.6} height={20.5}


      />
      </div> */}
    </div>
  )
}

export default index
