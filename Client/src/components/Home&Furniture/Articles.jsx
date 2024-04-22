import React from 'react'
import article1 from '../../assets/Article1.jpeg'
import article2 from '../../assets/article2.jpeg'
import article3 from '../../assets/article3.jpeg'
import article4 from '../../assets/article4.jpeg'

const articles = [
  {
    image : article1,
    heading : "I’m drawn to furniture as complete architecture",
    writtenBy : "By Alexie Rechards"
  },
  {
    image : article2,
    heading : "Know your lines and don't bump into the furniture",
    writtenBy : "By Alexie Rechards"
  },
  {
    image : article3,
    heading : "Just say the lines and don't trip over the furniture",
    writtenBy : "By Alexie Rechards"
  },
  {
    image : article4,
    heading : "I’m fascinated by furniture design and interiors",
    writtenBy : "By Alexie Rechards"
  },
]

function Articles() {
  return (
    <div className='mb-20'>
        <h2 className='text-5xl text-center font-general mt-10'>Latest <span className='text-5xl text-center font-general font-bold tracking-wide underlineblue'>articles</span> </h2>

        <div className='grid grid-cols-4 gap-8 mt-16 px-40 relative'>
          {articles?.map((el) => (
            <div className='h-96'>
              <img src={el.image} alt="" />

              <div className='h-10 w-24 uppercase text-sm bg-white absolute top-[15.5rem] flex justify-center items-center'>Furniture</div>

              <div className='mt-4 font-general tracking-wide font-semibold text-lg'>
                <h2>{el.heading}</h2>
              </div>

              <div className='mt-4'>
                <h2 className='text-[#828282]'>{el.writtenBy}</h2>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Articles