function ProductList(){
  const products=[
    {id:1, name:"Book", price:"$12"},
    {id:2, name:"Pen", price:"$4"},
    {id:3, name:"NoteBook", price:"&9"}
  ]
  return(
    <ul className="bg-green-700 px-14 py-8 text-white hover:bg-green-400 cursor-pointer border-2 border-gray-500 text-center text-black text-xl">
      {products.map(product =>(
        <li key={product.id}>{product.name}-{product.price}</li>
      ))}
    </ul>
  )
}
export default ProductList