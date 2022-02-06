import React from 'react';
import { Value } from '../../types';

interface Props {
	value: string;
	callback: (value: Value) => void;
}

export const LongStringEditor = ({ value, callback }: Props) => {
	return (
		<textarea rows={4} cols={50} defaultValue={value} className="w-full" onChange={e => callback(e.target.value)} />
	);
};
