import './App.css';
import {
	Toggle,
	Label,
	Button,
	Checkbox,
	Collapsible,
	Textfield,
	Dropdown,
} from 'mds-components-module';
import React, {useState} from 'react';

function App() {
	const [value, setValue] = useState(false);

	return (
		<div className='App'>
			<Toggle color='secondary' isChecked={value}/>
			<Checkbox />
			<Button text="Toggle Change Value" onClick={() => setValue(!value)} />
			<Collapsible isCollapse={value}>
				<Button text='test' onClick={()=>console.log('hi')}/>
				<Label>itzik</Label>
			</Collapsible>
			<Textfield onChange={() => alert('hi')} />
			<Dropdown placeholder={"Hadar"} />
		</div>
    );
}

export default App;
