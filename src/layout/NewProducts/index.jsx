import {newProducts} from '../../data'

 const NewProducts = () => {
  return (
    <>
    <h2>New Arrivals</h2>
    <div className='product-grid'>
        {newProducts.map((product)=>(
          <section className='product-card' Key={product.id}>
            <div
            className='product-image'
            style={{ backgroundColor: product.color }}
            >
             {product.name.charAt(0)}
            </div>
            <h3>{product.name}</h3>
            <p className='product-price'>${product.price}</p>
            <p className='product-desc'>{product.description}</p>
            <button className='btn-add-cart'>Add to cart</button>
          </section>
        ))}
    </div>
    </>
  )
}
export default NewProducts
