import React from 'react';
import Container from './Container';
import Button from '../Button/Button';

export default {
	title: 'Container',
};

export const Primary = () => (
	<Container header='MDS Example!'>
		<Button text='Button Example' onClick={() => alert('MDS Example!')} />
	</Container>
);

export const End = () => (
	<Container position='end' header='MDS Example!'>
		<Button text='Button Example' onClick={() => alert('MDS Example!')} />
	</Container>
);
