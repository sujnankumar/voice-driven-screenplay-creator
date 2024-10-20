import {Link} from "react-router-dom"

const Button = (props) => {
  return (
    <div className="flex justify-center pt-6">
      <Link
        type="button"
        onClick={props.onSubmit}
        className="relative px-8 py-2 ml-4 text-xl overflow-hidden font-semibold rounded text-white hover:bg-darkPurple transition-all bg-purple"
      >
        {props.text}
      </Link>
    </div>
  );
};

export default Button;
