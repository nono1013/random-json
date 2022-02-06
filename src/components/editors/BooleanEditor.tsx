import React from 'react';
import { Value } from '../../types';

interface Props {
  _key: string;
	value: boolean;
  index: number;
	callback: (value: Value) => void;
}

export const BooleanEditor = ({
	_key, value, index, callback,
}: Props) => {
	return (
		<span className="flex w-full gap-2">
			<label htmlFor={`${_key}-${index}-true`}>
				<input type="radio" name={`${_key}-${index}-bool`} id={`${_key}-${index}-true`} value="_true" defaultChecked={value === true} onChange={_ => callback(true)} />
				true
			</label>
			<label htmlFor={`${_key}-${index}-false`}>
				<input type="radio" name={`${_key}-${index}-bool`} id={`${_key}-${index}-false`} value="_false" defaultChecked={value === false} onChange={_ => callback(false)} />
				false
			</label>
		</span>
	);
};
