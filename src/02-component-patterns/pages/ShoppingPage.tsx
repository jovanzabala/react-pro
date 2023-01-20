
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import "../styles/custom-styles.css"


export const ShoppingPage = () => {

    const {onProductCountChange, shoppingCart} = useShoppingCart()
        
  
  return (
    <div>
        <h1>Shopping store</h1>
        <hr />
        <div style={{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap'
        }}>
        {/* <ProductCard 
        product={product}
        className='bg-dark text-white'
        >
            <ProductCard.Image className='custom-image'/>
            <ProductCard.Title  title='Hello World' className='text-white'/>
            <ProductCard.Buttons className='custom-buttons'/>
        </ProductCard> */}
        {
            products.map(product =>(
        <ProductCard 
        key={product.id}
        product={product}
        className='bg-dark text-white'
        onChange={ (event)=> onProductCountChange(event) }
        value={shoppingCart[product.id]?.count||0}
        >
            <ProductImage className='custom-image'/>
            <ProductTitle className='text-white'/>
            <ProductButtons className='custom-buttons'/>
        </ProductCard>
            ))
        }

        {/* <ProductCard 
        product={product}
        style={{
            backgroundColor:"#70D1F8"
        }}
        >
            <ProductImage style={{boxShadow:"10px 10px 10px rgba(0,0,0,0.2)"}}/>
            <ProductTitle style={{fontWeight:"bold"}}/>
            <ProductButtons 
            style={{
                display:"flex",
                justifyContent:"end"
            }}/>
        </ProductCard> */}
       
        </div>
        <div className='shopping-cart'>
            {
                Object.entries(shoppingCart).map(([key,product])=>(
            <ProductCard
            key={key} 
        product={product}
        className='bg-dark text-white'
        style={{width:"100px"}}
        onChange={onProductCountChange}
        value={product.count}
        >
            <ProductImage className='custom-image'/>
            {/* <ProductTitle className='text-white'/> */}
            <ProductButtons 
            className='custom-buttons'
            style={{
                display: "flex",
                justifyContent:"center"
                }}/>
        </ProductCard>
                ))
            }
    
        </div>
    </div>
  )
}
