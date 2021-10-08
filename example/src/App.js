import './App.css';
import {
	Toggle,
	Label,
	Button,
	Checkbox,
	Collapsible,
} from 'mds-components-module';

function App() {
	return (
		<div className='App'>
			<Toggle color='secondary' />
			<Checkbox />
			<Collapsible>
				<Button text='test' />
				<Label>itzik</Label>
			</Collapsible>
		</div>
	);
}

export default App;
