import { Fragment } from 'react';
import classes from './Header.module.css'
import mealsImg from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Swift Meals</h1>
                <HeaderCartButton onClick={props.show} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="header meal image" />
            </div>
        </Fragment>
    );
};

export default Header;