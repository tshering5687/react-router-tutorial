import {featuredProducts} from '../../data'

 const FeaturedProducts = () => {
  return (
    <>
    <h2>Featured Products</h2>
    <div className='product-grid'>
        {featuredProducts.map((product)=>(
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
export default FeaturedProducts
