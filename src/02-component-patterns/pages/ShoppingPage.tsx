
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

const product ={
    id:'1',
    title:'Coffee Mug',
    img:'../coffee-mug.png'    
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping store</h1>
        <hr />
        <div style={{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap'
        }}>
        <ProductCard product={product}>
            <ProductCard.Image/>
            <ProductCard.Title  title='Hello World'/>
            <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product}>
            <ProductImage/>
            <ProductTitle/>
            <ProductButtons />
        </ProductCard>
       
        </div>
    </div>
  )
}
