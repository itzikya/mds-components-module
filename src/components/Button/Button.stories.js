import React from 'react';
import Button from './Button';

export default {
	title: 'Button',
};

export const Primary = () => (
	<Button text='Button Example' onClick={() => alert('MDS Example!')} />
);
export const Secondary = () => (
	<Button
		color='secondary'
		text='Button Example'
		onClick={() => alert('MDS Example!')}
	/>
);
export const Selected = () => (
	<Button
		color='selected'
		text='Button Example'
		onClick={() => alert('MDS Example!')}
	/>
);
export const Disabled = () => <Button disabled='true' text='Button Example' />;
