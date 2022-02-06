import React from 'react';
import { Value } from '../../types';

interface Props {
	value: string;
	callback: (value: Value) => void;
}

export const DateEditor = ({ value, callback }: Props) => {
	return (
		<input type="date" defaultValue={value} onChange={e => callback(e.target.value)} />
	);
};
