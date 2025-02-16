import Head from 'next/head'
import { createClient } from 'contentful' 
import Footer from '../components/Footer';
import Bg from '../components/Bg';
import ContactForm from '../components/ContactForm'
// import ReactPlayer from 'react-player';
import Fade from 'react-reveal/Fade';
import ProductBikes from '../components/ProductBikes';
import Nav from '../components/Nav';
import About from '../components/About';
import Services from '../components/Services';
import Offers from '../components/Offers';
import icon from '../components/assets/Logo.png'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

const res = await client.getEntries({
  content_type: 'hero'
})

const resProduct = await client.getEntries({
  content_type: 'product'
})

const resOffers = await client.getEntries({
  content_type: 'offers'
})

const resAbout = await client.getEntries({
  content_type: 'about'

})

const resLogo = await client.getEntries({
  content_type: 'logo'

})

const resServices = await client.getEntries({
  content_type: 'services'
})


return {
  props:{
    hero: res.items,
    product: resProduct.items,
    offers: resOffers.items,
    services: resServices.items,
    about: resAbout.items
    
  },
  revalidate: 10,
}

}





export default function Home({hero, product, offers, services, about, logo}) {
  
  
  // const [isPlaying, setIsPlaying] = useState(true);


  

  const url =     
"https://ak.picdn.net/shutterstock/videos/1080806132/preview/stock-footage-a-biker-riding-on-a-harley-davidson-motorcycle-in-malibu-california.webm";


  return (
    <div>
    <Head>
      <title>PoznanMotorCykli</title>
      <meta name="description" content="Get the best value on used motorcycles and enjoy the 
      thrill of riding the motorcycle of your choice without the high cost of ownership." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav
    
    
    />
    
    <div className="relative z-0 w-full h-xxl3 lg:h-screen backdrop-opacity-50	">
    
      
    
    
   
   {hero.map((h, idx) => (
    <Bg
    h={h}
    key={idx}
    />
   ))} 
   <Fade left duration={2000}>
        <div className="absolute z-50 
        left-5 top-52 md:top-28 lg:top-52 ">
          
           <h1 className='font-serif font-bold text-white text-6xl md:text-6xl lg:text-9xl'> 
           Najlepsze motocykle w Poznaniu.</h1>
           <section className='flex justify-center mt-10'>
            
            <a href='#contact'>
            <button
             
              type="submit"
              className="text-3xl rounded-sm bg-red-500 font-bold text-white p-4"
            >
              Contact me
            </button>
            </a>
            </section>          
        </div>
        </Fade>
    </div>


    {/* product section */}

    <h1 className='text-6xl text-center mt-32 pt-5 font-bold'>Current Bikes</h1>
<Fade right duration={2000}>
      <div className='mt-10 p-4 grid grid-cols-1 lg:grid-cols-4 gap-10   
      '>
        
        <div id='about' className='border-2 border-black h-80 lg:h-32 w-full col-span-4'>
        {about.map((abo, a)=> (
          <About
          abo={abo}
          key={a}
          />
        ))} 
          </div>

          
      <div id='services' className='border-2 border-black text-xl h-xxl3 lg:h-96 w-full col-span-4 lg:col-span-2 list-disc  p-5'>
        

          {services.map((service, s)=> (
            <Services
            service={service}
            key={s}
            />
          ))}

    
      </div>
      <div className='border-2 border-black h-96 w-full col-span-4 lg:col-span-2 '>
       
      {offers.map((offer, off)=> (
        <Offers
        offer={offer}
        key={off}
        />
      ))}
          
          </div>
          
      </div>
      </Fade>
      
<Fade left duration={2000}>
    <div id='Bikes' className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20'>
    {product.map((pro, p)=> (
        <ProductBikes
        pro={pro}
        key={p}
        />
      ))}
    </div>
    </Fade>
    <h1 className='text-4xl text-center'>Have a question?</h1>
    <div id='contact' className='flex justify-center'>
      
        
      
    <ContactForm/>
    </div>
    <Footer/>
  </div>
  )
}


  