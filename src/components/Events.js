import React from 'react'

export default function Events() {
  const events = [
    {
      evntdet: "Beginners guide to AYUSH : a meeting by our co-founder"
    },
    {
      evntdet:"Startup success prediction"
    },
    {
      evntdet:"How to get more reach for your products"
    },
    {
      evntdet:"Some tips for investors"
    },
    {
      evntdet:"How to invest in correct startup"
    }
  ]
  return (
    <>
      <div className='p-5'>
        <ul className='list-disc'>
          {events.map((event,index) => {
            return(
              <li className='hover:underline mt-2' key={index}>{event.evntdet}</li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
