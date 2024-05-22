'use client'
 
export default function Itemcard({image, title, price, stock}) {
 
  return (
    <div className='shadow-md bg-red-200 flex flex-col w-44 h-64    '>
        test
      <div className="w-full h-2/3">
        <img src="{image}"></img>
      </div>

      <div className="w-full h-1/3 flex flex-col justify-start">
        <div>
            <h1>{title}</h1>
        </div>
        
        <div>
            <p>{price}</p>
            <p>{stock}</p>
        </div>
      </div>
    </div>
  )
}