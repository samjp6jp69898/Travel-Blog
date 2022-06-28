import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      
       <div className='cards__container'>
           <div className='cards__wrapper'>
               <ul className='cards__items'>
               <CardItem
              src='images/img-15.jpg'
              text='Traveling – it leaves you speechless, then turns you into a storyteller'
              label='Osaka, &nbsp;Japan'
              path='/japan'
            />
            <CardItem
              src='mylove/img-2.jpg'
              text='Traveling allows you to become so many different versions of yourself'
              label='Lulin Mountain, &nbsp;Taiwan'
              path='/taiwan'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='mylove/img-3.jpg'
              text='Man cannot discover new oceans unless he has the courage to lose sight of the shore'
              label='Yuguang Island,&nbsp; Tainan'
              path='/adventure'
            />
            <CardItem
              src='images/img-22.jpg'
              text='To travel is to discover that everyone is wrong about other countries. You only live once'
              label='San Francisco,&nbsp; CA'
              path='/usa'
            />
            <CardItem
              src='images/img-24.jpg'
              text='Traveling is like flirting with life. It’s like saying, ‘I would stay and love you, but I have to go; this is my station'
              label='Los Angeles,&nbsp; CA'
              path='/usa'
            />
              </ul>
             
           </div>
       </div>
    </div>
  )
}

export default Cards;
