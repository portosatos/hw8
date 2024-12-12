import "./index.css";

export function Typography(props) {
  const { textSize = "md", className, children } = props;
  const classNames = `typography typography--${textSize} ${className}`;

  return <p className={classNames}>{children}</p>;
}

export default Typography;
