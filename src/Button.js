const Button = (props) => {
    return (<button type="button" class="btn btn-primary m-4" onClick={props.onClick}>{props.name}</button>);
}

export default Button;