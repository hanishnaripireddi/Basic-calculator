import{ useState } from 'react';


function App() {

  const [calc,setCalc] = useState("");
  const [result,setResult]= useState("");

  const ops=['/','*','+','-','.'];

  const updateCalc = value=>{
    if (
      ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }

    setCalc(calc+value);

    if (!ops.includes(value)) {
      setResult(eval(calc+value).toString());
    }
  }
  

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if (calc == '') {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  }

  return (
    <div className="App">
      <div className="header">
        Basic Calculator
      </div>

      
        <div className="calc">
          <div className="display">
            {result ? <span>({result})</span>: ''}{calc || "0"}
          </div>

          <div className="operators">
            <button onClick={()=> updateCalc('/')}>/</button>
            <button onClick={()=> updateCalc('*')}>*</button>
            <button onClick={()=> updateCalc('+')}>+</button>
            <button onClick={()=> updateCalc('-')}>-</button>

            <button onClick={deleteLast}>Del</button>
          </div>

          <div className="digits">
            <button onClick={()=> updateCalc('9')}>9</button>
            <button onClick={()=> updateCalc('8')}>8</button>
            <button onClick={()=> updateCalc('7')}>7</button>
            <button onClick={()=> updateCalc('6')}>6</button>
            <button onClick={()=> updateCalc('5')}>5</button>
            <button onClick={()=> updateCalc('4')}>4</button>
            <button onClick={()=> updateCalc('3')}>3</button>
            <button onClick={()=> updateCalc('2')}>2</button>
            <button onClick={()=> updateCalc('1')}>1</button>
            <button onClick={()=> updateCalc('0')}>0</button>
            <button onClick={()=> updateCalc('.')}>.</button>
            <button className="isequal" onClick={calculate}>=</button>
          </div>
        </div>
      

      <div className="footer">
        by Hanish koushik
      </div>
      
    </div>
  );
}

export default App;
