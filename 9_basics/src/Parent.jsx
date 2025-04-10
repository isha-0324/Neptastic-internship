import Child from './Child'

function Parent(){
  return(
    <div className="bg-green-700 px-14 py-8 text-white hover:bg-green-400 cursor-pointer border-2 border-gray-500 text-center text-black text-xl">
      <Child name="Aisha" Child age={23}/>
      
    </div>
  )
}
export default Parent;