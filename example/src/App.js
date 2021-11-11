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
import Vol from './assets/volume-icon.svg';

function App() {
	const [value, setValue] = useState("hadar");
	const [textFieldValue, setTextFieldValue] = useState("Shaked");
	const [booleanvalue, setBooleanValue] = useState(true);
	const [placeholder, setPlaceholder] = useState(12);

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
														// setTextFieldValue(textFieldValue + '!');
														setPlaceholder(3)
													}}
			/>
			<Collapsible isCollapse={booleanvalue} onChange={(e)=>console.log("collapsible is: " + e.target.value)}>
				<Button text='test' onClick={()=>console.log('hi')}/>
				<Dropdown value={value} placeholder={"Hadar"} options={['hadar', 'hadar!', 'hadar!!', 'lior']}/>
			</Collapsible>
			<Textfield value={textFieldValue} placeholder={""} onChange={(e) => {console.log(e.target.value)}} error helperText="hi there"/>
			{/* <div className="sticky">hi</div> */}
			<Dropdown value={value} placeholder={"Hadar"} options={['hadar', 'hadar!', 'hadar!!', 'lior']}/>
			<Counter id="hlp-1333" onChange={onChangeFunc} value={placeholder} addition={1} error helperText="good"/>
			<Button label="Add Address" type='add'/>
			<Button text='hi' type='mds'/>
			<Button text='hi' type='text'/>
			<Button label='Exit' type='exit'/>
			<Button label='Exit' type='volume'/>
			<Button icon={Vol} type='icon' />
		</div>
    );
}

export default App;
