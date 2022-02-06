import React, { useState } from 'react';
import { JsonKV, Value } from '../types';
import { IdEditor } from './editors/IdEditor';
import { StringEditor } from './editors/StringEditor';

interface Props {
	kv: JsonKV;
}

const getEditor = (kv: JsonKV, callback: (value: Value) => void) => {
	if (kv.type === 'id') {
		return <IdEditor value={kv.value as string} callback={callback} />;
	} if (kv.type === 'text') {
		return <StringEditor value={kv.value as string} callback={callback} />;
	}
	return null;
};

function Section({ kv }: Props) {
	const [value, setValue] = useState(kv.value);
	return (
		<>
			<p className="text-gray-700">{ kv.key }</p>
			<p className="">{ value.toString() }</p>
			<p className="" />
			<p className="w-full">{ getEditor(kv, setValue) }</p>
		</>
	);
}

export default Section;
