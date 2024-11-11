import smile from '../smile.jpg';

let id = 0
let name = "Item1"
let price = 2

const ProductItem = item => <div key = {id} className = "cookie">
        <img src={smile}></img>
        <h3>{name}</h3>
        <p>{price} K.D.</p>
    </div>

export default ProductItem;