const Button = (props) => {
    return (<button type="button" className="btn btn-primary m-4" onClick={props.onClick}>{props.name}</button>);
}

export default Button;