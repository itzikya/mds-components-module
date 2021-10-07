import React from 'react';
import Label from './Label';

export default {
	title: 'Label',
};

export const Primary = () => <Label>Label Example</Label>;
export const Secondary = () => <Label color='secondary'>Label Example</Label>;
export const Valid = () => <Label color='valid'>Label Valid Example</Label>;
export const Invalid = () => (
	<Label color='invalid'>Label Invalid Example</Label>
);
export const Huge = () => <Label size='huge'>Label Example</Label>;
export const Small = () => <Label size='small'>Label Example</Label>;
export const End = () => <Label position='end'>Label Example</Label>;
