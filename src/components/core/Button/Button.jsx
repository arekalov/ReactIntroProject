import classes from './Button.module.css'

export default function Button({children, onClick, isSelected, ...props}) {
    function handleClick(name) {
        // console.log(`button ${name} clicked`)
    }

    return <button className={isSelected ? `${classes.button} ${classes.active}` : classes.button} {...props}
                   onClick={() => {
                       handleClick(children);
                       onClick();
                   }}>
        {children}
    </button>
}