import React, { useState } from 'react';
import Display from './Display.jsx';
import Pad from './Pad.jsx';

const Calculator = () => {
	const [display, setDisplay] = useState("0");
	const [lastValue, setLastValue] = useState("0");
	const [operator, setOperator] = useState("");

  	return (
    	<div>
			<Display display={display} lastValue={lastValue} />
	    	<Pad display={display} lastValue={lastValue} operator={operator} setDisplay={setDisplay} setLastValue={setLastValue} setOperator={setOperator} />
    	</div>
    );
}

export default Calculator;
