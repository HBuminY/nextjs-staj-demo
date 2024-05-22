'use client'

 
export default function ItemsGrid({children}) {

 
  return (
    <div className="w-full h-full grid grid-flow-col auto-cols-min gap-4 p-4">
      {children}
    </div>
  )
}