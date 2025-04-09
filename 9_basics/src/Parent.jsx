import Child from './Child'

function Parent(){
  return(
    <div style={{border: "1px solid #ccc", margin: "8px", padding:"6px"}}>
      <Child name="Aisha" Child age={23}/>
      {/* <Child age={23}/> */}
    </div>
  )
}
export default Parent;