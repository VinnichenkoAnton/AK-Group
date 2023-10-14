import classes from './Heading1.module.scss';

const Heading1 = ({ className, text }) => {
  const heading1Classes = `${classes.heading1} ${className}`;
  return <h1 className={heading1Classes}>{text}</h1>;
};

export default Heading1;
