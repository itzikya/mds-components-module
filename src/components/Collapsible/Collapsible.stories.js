import React from 'react';
import Collapsible from './Collapsible';
import Button from '../Button/Button';
import Toggle from '../Toggle/Toggle';

export default {
	title: 'Collapsible',
};

export const Primary = () => (
	<Collapsible>
		<Button text='MDS' />
		<Toggle />
	</Collapsible>
);
