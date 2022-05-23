import './Button.css';

const Button = (props) => {
  function test(value) {
    props.handleBtnState();
  }
  return (
    <button className="btn" onClick={test} form="my-form" type="submit">
      {props.name}
    </button>
  );
};

export default Button;
