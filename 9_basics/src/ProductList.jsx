function ProductList(){
  const products=[
    {id:1, name:"Book", price:"$12"},
    {id:2, name:"Pen", price:"$4"},
    {id:3, name:"NoteBook", price:"&9"}
  ]
  return(
    <ul style={{border: "1px solid #ccc", margin: "8px", padding:"16px"}}>
      {products.map(product =>(
        <li key={product.id}>{product.name}-{product.price}</li>
      ))}
    </ul>
  )
}
export default ProductList