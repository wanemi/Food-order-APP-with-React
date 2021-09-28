import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/Cart-context";


const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    return (
        <button  onClick={props.onClick} className={classes.button}>
            <span>
                <CartIcon />
            </span>
            <span className={classes.icon}>
                Cart
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton;