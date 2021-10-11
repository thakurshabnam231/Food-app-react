
import { useRef, useState } from 'react';
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();

        const enteredAmount = amountRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length=== 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false)

            return;
        }
        props.onAddToCart(enteredAmount)
    }
    return (
        <form className={classes.form} onClick={submitHandler}>

            <Input ref={amountRef}
                label="amount"
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    default: '1'
                }}
            />
            <button>+ Add</button>
           {!amountIsValid && <p>please enter amount(1-5)</p>}
        </form>


    )
}

export default MealItemForm
