import React from 'react'
import ItemCard from '../../Components/ItemCard'
import portraitImg from "../../img/gallery/portrait-img.jpg"
import printImg from "../../img/gallery/print-img.jpg"
import autoImg from "../../img/gallery/auto-img.jpg"
import editingImg from "../../img/gallery/editing-img.jpg"
import eventImg from "../../img/gallery/event-img.jpg"
import commercialImg from "../../img/gallery/Commercia-Img.jpg"
import nightDiaryImg from "../../img/gallery/nightDiaries.jpg";

function Services() {
  return (
    <section id='services' className='section px-20 pt-28 bg-zinc-400'>
      <h1 className='text-3xl lg:text-6xl leading-tight mb-4 lg:mb-8 items-center'>
        Arktik Services
      </h1>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ItemCard
          imgSrc={eventImg}
          firstP="Events"
          secondP="Preserve your special moments from weddings, parties, conferences, and other occasions with professional event photography services. From candid shots to capturing the ambiance, I ensure every important detail is beautifully documented."
        />
        <ItemCard
          imgSrc={portraitImg}
          firstP="Portraits"
          secondP="Capture the essence and personality of individuals, families, and couples through stunning portrait sessions that create cherished memories."
        />
        <ItemCard
          imgSrc={commercialImg}
          firstP="Products"
          secondP="Elevate your product's visual appeal with our professional photo and video services"
        />
        <ItemCard
          imgSrc={autoImg}
          firstP="Arktik Garage"
          secondP="Specialize in capturing the elegance, power, and detail of performance cars. From sleek sports cars to vintage classics, I create dynamic images that showcase the unique personality of each vehicle."
        />
        {/* <ItemCard
          imgSrc={editingImg}
          firstP="Photo Editing and Retouching"
          secondP="Provide professional photo editing and retouching services to enhance the visual appeal and quality of images. From color correction to removing imperfections, I ensure the final images meet the highest standards."
        /> */}
        <ItemCard
          imgSrc={nightDiaryImg}
          firstP="Night Diaries"
          secondP="Capture the vibrant essence of your night club and restaurant with our professional video and photography services. Elevate your memories by transforming favorite moments into stunning, high-quality videos and photos, turning them into captivating pieces of art."
        />
        <ItemCard
          imgSrc={printImg}
          firstP="Prints"
          secondP="I offer high-quality prints of photographs along with custom framing options. Providing clients with a complete service, allowing them to display their favorite images as stunning pieces of art."
        />
      </div>
    </section>
  )
}

export default Services