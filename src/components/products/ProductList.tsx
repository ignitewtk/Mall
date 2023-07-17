import * as React from 'react'
import placeholderImage from './placeholder-image.png';
type Props = {

}

type States = {

}


class ProductListItem extends React.Component<Props, States> {
    render() {
        return (
            <div className='product-list-item'>
                <img src={placeholderImage} width="100%" height="80%"/>
                <div> Item 1 </div>
                <div> Price</div>
            </div>
        )
    }
}

class ProductList extends React.Component<Props, States> {

    render() {
        let productIds: number[] = new Array(15)
        for (var i=0; i<15; i++) {
            productIds.push(i)
        }
        
        return (
            <div id='product-list'> 
            
            {
                productIds.map((n) => <ProductListItem key={n}/>)
            }
            
            </div>
            
        )
    }
}
export default ProductList