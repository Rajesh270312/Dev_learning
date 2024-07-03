
import './button.css';

export const Button1 = ({ onClick, children }) => {
  return (
    <button onClick={onClick} type="button" className="custom-button1">
      {children}
    </button>
  );
};

export const Button2 = ({ onClick, children }) => {
    return (
      <button onClick={onClick} type="button" className="custom-button2">
        {children}
      </button>
    );
  };

  export const Button3 = ({ onClick, children }) => {
    return (
      <button onClick={onClick} type="button" className="custom-button3">
        {children}
      </button>
    );
  };