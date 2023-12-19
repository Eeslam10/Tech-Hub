const Button = (props) => {
    return ( 
        <button onClick={() => props.action()} className={`${props?.filled &&'bg-backgroundColor text-white'}`}>{props.label}
        </button>
     );
}
 
export default Button;