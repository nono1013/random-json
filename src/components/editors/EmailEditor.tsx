import React from 'react';
import { Value } from '../../types';

interface Props {
	value: string;
	callback: (value: Value) => void;
}

export const EmailEditor = ({ value, callback }: Props) => {
	return (
		<input type="email" defaultValue={value} className="w-full" onChange={e => callback(e.target.value)} />
	);
};
