import {useContext} from 'react'
import MealItemForm from './MealItemForm'
import classes from './MealsItem.module.css'
import CartContext from '../../../Store/CartContext'

const MealItem = (props) => {

   const cartcontext= useContext(CartContext)
    const onAddToCartHandler=(amount)=>{

 cartcontext.addItem({
    name:props.name,
    amount:amount,
    id:props.id,
    price:props.price
});
    }
    const price= `$${props.price.toFixed(2)}`
    return (
        <li className={classes.meal}>
        <div>{props.name}
        <div className={classes.description} >{props.description}
        <div className={classes.price}>{price}</div>
        </div>
        </div>
        <MealItemForm onAddToCart={onAddToCartHandler}/>
       </li>
        
            
        
    )
}

export default MealItem
