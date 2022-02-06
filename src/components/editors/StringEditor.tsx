import React from 'react';
import { Value } from '../../types';

interface Props {
	value: string;
	callback: (value: Value) => void;
}

export const StringEditor = ({ value, callback }: Props) => {
	return (
		<input type="string" defaultValue={value} className="w-full" onChange={e => callback(e.target.value)} />
	);
};
