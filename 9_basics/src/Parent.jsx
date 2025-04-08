import Child from './Child'

function Parent(){
  return(
    <div>
      <Child name="Aisha" Child age={23}/>
      {/* <Child age={23}/> */}
    </div>
  )
}
export default Parent;