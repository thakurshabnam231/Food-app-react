import { Fragment } from 'react'
import mealsImage from '../../assets/Meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css';
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['meal-image']}>
                {<img src={mealsImage} alt="a table full of delicious food" />}
            </div>
        </Fragment>
    );
};

export default Header
