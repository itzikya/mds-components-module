import React from 'react';
import Card from './Card';
import Button from '../Button/Button';

export default {
	title: 'Card',
};

export const Primary = () => (
	<Card>
		<Button text='MDS' />
	</Card>
);

export const Secondary = () => (
	<Card color='secondary'>
		<Button text='MDS' />
	</Card>
);

export const Square = () => (
	<Card type='square'>
		<Button text='MDS' />
	</Card>
);
