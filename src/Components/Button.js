import PropTypes from 'prop-types';




export const Button = ({
    color, text, onAdd, showAdd
}) => {
return <button onClick={onAdd} style={{backgroundColor:color}} className="btn">{showAdd? "Close": "Add"}</button>;
};

Button.defaultProps = {
    color: "black",
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;
