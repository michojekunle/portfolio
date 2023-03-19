import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
      initial={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      transition={{duration: 1.5}}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-14 justify-evenly mx-auto items-center'

    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        
        <motion.div 
          initial={{
            x: -200,
            opacity: 0
          }}
          transition={{
            duration: 1.2
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{once: true }}
          className="relative -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] object-cover overflow-hidden"
        >
          <Image 
              src="https://images.unsplash.com/photo-1672923949373-8d078081e8bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" 
              alt="AMD'S IMAGE"
              layout='fill'
          />
        </motion.div>
        <motion.div 
          initial={{
            x: 200,
            opacity: 0
          }}
          transition={{
            delay: 0.2,
            duration: 1.2
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          className='space-y-10 px-0 md:px-10'
        >
          <h4 className='text-4xl font-semibold'>
            Here is a <span className='underline decoration-[#f7A34a]'>Little</span> Background
          </h4>
          <p className='text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis hic, beatae quae autem voluptatibus quisquam perferendis ducimus, itaque id consectetur sed nam ab eius quibusdam maxime tenetur architecto in laboriosam?
            Fugiat neque inventore velit unde eum, ex molestias ducimus doloremque quae accusamus facilis distinctio minus nulla ut rem! Libero nulla atque, iusto corporis consequuntur cumque dolores fuga praesentium eaque necessitatibus.
            Dicta incidunt fugit ipsum quia, asperiores sint, neque magni quam distinctio, ipsam cumque non? Commodi dolore repudiandae dicta. Praesentium, quasi consectetur? Omnis nulla quis nihil reprehenderit id. Velit, officiis dolorum?
            Animi, eveniet. Aut molestiae veritatis inventore aliquam dolorum ex porro expedita officia eveniet voluptatem at velit cumque, maiores corporis nam, rerum perspiciatis enim quod possimus? Amet, eligendi? Obcaecati, repellat illum.
            Neque ratione fugit qui molestiae ad nemo! Error laborum quis suscipit culpa expedita. Ipsam, adipisci blanditiis inventore, ducimus, fugiat reiciendis deleniti velit quod a accusantium pariatur mollitia officiis similique quia.
            Rem, praesentium nemo? Necessitatibus, minima doloremque. Consequuntur quam eaque numquam neque at obcaecati nulla culpa sapiente ex qui perferendis cum asperiores incidunt ducimus, tenetur, quasi porro? Quasi atque modi vitae?
            Reprehenderit totam quia asperiores nesciunt maiores iusto voluptates vel. Nostrum quo libero sapiente itaque eaque velit doloremque. Suscipit quidem excepturi repellat tempore ipsum quis mollitia voluptatibus explicabo dolorum? Rem, ipsum?
            Fugiat et praesentium ullam deserunt molestiae quasi eum maiores obcaecati, nisi delectus iusto ducimus, incidunt asperiores necessitatibus? Culpa recusandae fugiat facere et consectetur. Quae, sunt? Illo exercitationem neque nisi consectetur.
          </p>
        </motion.div>

    </motion.div>
  )
}

export default About