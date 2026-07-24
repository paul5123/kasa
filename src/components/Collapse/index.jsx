import { useState } from "react";
import "./Collapse.scss";
import arrow from "../../assets/arrow.png";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collapse">
      <div className="collapse__title" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <img
          src={arrow}
          alt=""
          className={isOpen ? "collapse__arrow open" : "collapse__arrow"}
        />
      </div>
      {isOpen && (
        <div className="collapse__content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
