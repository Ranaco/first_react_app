import PropTypes from "prop-types";

const Header = ({ title, tasks }) => {
  return (
        <header className="header">
          <h1 >{title}</h1>
        </header>
  );
};


Header.defaultProps = {
  title: "Task Tracker",
};

//Css styling in JS
// const reactStyles = {
//     color: "white",
//     backgroundColor: "black",
// }

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
