import React from 'react';
import { StringEditor } from './editors/StringEditor';

interface Props {
	_key: string;
	value: any;
}

const getEditor = (obj: unknown) => {
	console.log(Object.prototype.toString.call(obj));
	switch (Object.prototype.toString.call(obj)) {
	case '[object String]': return <StringEditor value={obj as string} />;
	default: return null;
	}
};

function Section({ _key, value }: Props) {
	return (
		<>
			<p className="text-gray-700">{ _key }</p>
			<p className="">{ value.toString() }</p>
			<p className="" />
			<p className="w-full">{ getEditor(value) }</p>
		</>
	);
}

export default Section;
