import { useContext } from 'react'
import CartContext from '../../Store/CartContext'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import classes from './Cart.module.css'

const Cart = (props) => {
    const cartcontext = useContext(CartContext);
    const totalAmount = `$${cartcontext.amount}`;
    const hasItems = cartcontext.items.length > 0;

    const cartItemAddHandler=id=>{}
    const cartItemRemoveHandler=item=>{}

    const cartitems = <ul>
        {
            cartcontext.items.map((item) => <CartItem 
            key={item.id}
             name={item.name}
            price={item.price}
             amount={item.amount}
             onAdd={ cartItemAddHandler.bind(null,item.id)}
             onRemove={cartItemRemoveHandler.bind(null,item)}
             />)}</ul>


    return (
        <Modal onClose={props.onClose}>
            {cartitems}
            <div className={classes.total}>

                <span>total amount</span></div>
            <span>{totalAmount}</span>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}</div>

        </Modal>

    )
}

export default Cart
