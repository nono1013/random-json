import React from 'react';
import { Value } from '../../types';

interface Props {
	value: number;
	callback: (value: Value) => void;
}

export const NumberEditor = ({ value, callback }: Props) => {
	return (
		<input type="number" defaultValue={value} className="w-full" onChange={e => callback(e.target.value)} />
	);
};
