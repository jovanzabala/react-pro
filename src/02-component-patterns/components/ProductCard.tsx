import { createContext, ReactElement } from 'react';
import  styles  from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { onChangeArgs, Product, ProductContextProps} from '../interfaces/interfaces';


export const ProductContext=createContext({} as ProductContextProps);
const {Provider}=ProductContext

export interface Props {
    product: Product,
    children? : ReactElement | ReactElement[],
    className? : string,
    style?: React.CSSProperties,
    onChange?: (args:onChangeArgs)=> void,
    value?: number,
}

export const ProductCard = ({children, product, className, style, onChange, value}:Props) => {

    const { counter, increaseBy }=useProduct({onChange, product, value})

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>
    <div className={`${styles.productCard} ${className}`}
    style={style}
    >
        {children}
        {/* <img className={styles.productImg} src="../coffee-mug.png" alt="Coffee Mug" /> */}
        {/* <ProductImage img={product.img}/>
        <ProductTitle title={product.title}/>
        <ProductButtons increaseBy={increaseBy}
          counter={counter} />             */}
    </div>
    </Provider>
  )
}
