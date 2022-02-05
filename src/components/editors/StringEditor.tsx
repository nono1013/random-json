import React from 'react';

interface Props {
	value: string;
}

export const StringEditor = ({ value }: Props) => {
	return (
		<input type="string" defaultValue={value} className="w-full" />
	);
};
