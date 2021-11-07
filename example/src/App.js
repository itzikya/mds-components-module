import './App.css';
import {
	Toggle,
	// Label,
	Counter,
	Button,
	Checkbox,
	Collapsible,
	Textfield,
	Dropdown,
} from 'mds-components-module';
import React, {useState} from 'react';

function App() {
	const [value, setValue] = useState("hadar");
	const [textFieldValue, setTextFieldValue] = useState("Shaked");
	const [booleanvalue, setBooleanValue] = useState(true);

	const onChangeFunc = (e) => {
		console.log(e.target.value);
	}

	return (
		<div className='App'>
			<Toggle color='secondary' isChecked={booleanvalue}/>
			<Checkbox />
			<Button text="Toggle Change Value" onClick={() => {
														// setValue(value + '!'); 
														// setBooleanValue(!booleanvalue); 
														setTextFieldValue(textFieldValue + '!');
													}}
			/>
			<Collapsible isCollapse={booleanvalue} onChange={(e)=>console.log("collapsible is: " + e.target.value)}>
				<Button text='test' onClick={()=>console.log('hi')}/>
				<Dropdown value={value} placeholder={"Hadar"} options={['hadar', 'hadar!', 'hadar!!', 'lior']}/>
			</Collapsible>
			<Textfield value={textFieldValue} placeholder={""} onChange={(e) => {console.log(e.target.value)}} error helperText="hi there"/>
			<Dropdown value={value} placeholder={"Hadar"} options={['hadar', 'hadar!', 'hadar!!', 'lior']}/>
			<Counter id="hlp-1333" onChange={onChangeFunc} addition={0.00001} error helperText="good"/>
		</div>
    );
}

export default App;
