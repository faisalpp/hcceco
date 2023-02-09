import React,{useState} from 'react'
import SuggestedLinksCard from './SuggestedLinksCard';
import { RiArrowLeftSLine,RiArrowRightSLine } from 'react-icons/ri';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const SuggestedLinks = () => {
  const [links,setLinks] = useState([
    {'id':0,'name':'Bharat','userType':'Student','clgName':'Lyalpur college of Technology'},
    {'id':1,'name':'Argha Paul','userType':'Ambassador','clgName':'Lyalpur college of Technology'},
    {'id':2,'name':'Monika','userType':'Principle','clgName':'Lyalpur college of Technology'},
    {'id':3,'name':'Faisal','userType':'Student','clgName':'Lyalpur college of Technology'},
  ]);

  return (
    <div id="wrapper" className='flex flex-col w-full justify-center mt-10 space-y-5 py-5 mb-5'>
     <h3 id="heading" className='text-t1 text-center text-md'>Suggested Links</h3>
     {/* Desktop Crousel */}
     <div className='hidden lg:flex w-full'>
     <CarouselProvider naturalSlideWidth={390} naturalSlideHeight={230} totalSlides={links.length} visibleSlides={2} className="relative w-full">
        <ButtonBack className='absolute bottom-20 left-0 z-20'><RiArrowLeftSLine className='hidden lg:flex text-2xl text-black'/></ButtonBack>
        <Slider className="lg:px-10 ">
         {links.map((link)=><Slide key={link.id} index={link.id}><SuggestedLinksCard id={link.id} name={link.name} userType={link.userType} clgName={link.clgName} setLinks={setLinks} links={links}/><h3></h3></Slide>)}
        </Slider>
        <ButtonNext className='absolute right-0 bottom-20'><RiArrowRightSLine className='hidden lg:flex text-2xl text-black'/></ButtonNext>
      </CarouselProvider>
     </div>

     {/* Mobile Crousel */}
     <div className='flex lg:hidden w-full'>
     <CarouselProvider naturalSlideWidth={350} naturalSlideHeight={200} totalSlides={links.length} visibleSlides={1} className="relative w-full">
        <ButtonBack className='absolute bottom-20 left-0 z-20'><RiArrowLeftSLine className='hidden lg:flex text-2xl text-black'/></ButtonBack>
        <Slider className="px-5 ml-5 mr-5">
        {links.map((link)=><Slide key={link.id} index={link.id}><SuggestedLinksCard id={link.id} name={link.name} userType={link.userType} clgName={link.clgName} setLinks={setLinks} links={links}/></Slide>)}
        </Slider>
        <ButtonNext className='absolute right-0 bottom-20'><RiArrowRightSLine className='hidden lg:flex text-2xl text-black'/></ButtonNext>
      </CarouselProvider>
     </div>

    </div>
  )
}

export default SuggestedLinks