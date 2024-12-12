import "./index.css";

export function Tooltip(props) {
  const { text = "I am a tooltip", position = "top", children } = props;
  const tooltipClass = `tooltip tooltip--${position}`;

  return (
    <div className="tooltip-container">
      <span className={tooltipClass}>{text}</span>
      {children}
    </div>
  );
}

export default Tooltip;
