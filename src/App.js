import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const btn = [];
  [7, 8, 9, 4, 5, 6, 1, 2, 3, "00", 0, "."].forEach((item) => {
    btn.push(
      <button
        onClick={(e) => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {""}
        {item}
      </button>
    );
  });
  return (
    <div className="app">
      <div className="input">{input}</div>

      <div className="digs">{btn}</div>

      <div className="mods grid">
        <button onClick={() => setInput(input.substr(0, input.length - 1))}>
          DEL
        </button>
        <button onClick={() => setInput("")} value="">
          AC
        </button>
      </div>

      <div className="ops grid">
        <button onClick={(e) => setInput(input + e.target.value)} value="/">
          /
        </button>
        <button onClick={(e) => setInput(input + e.target.value)} value="*">
          *
        </button>
        <button onClick={(e) => setInput(input + e.target.value)} value="-">
          -
        </button>
        <button onClick={(e) => setInput(input + e.target.value)} value="+">
          +
        </button>
        <button
          onClick={(e) => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
