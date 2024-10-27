import styles from './Button.module.css'

function Button (){

    const handleClick = (e) => e.target.textContent = "Ouch!"

    return(
        <button className={styles.btn} onClick={handleClick}>Click me!</button>
    )
}

export default Button

//Click events