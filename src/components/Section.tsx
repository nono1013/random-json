import React from 'react';
import { JsonKV } from '../types';
import { IdEditor } from './editors/IdEditor';
import { StringEditor } from './editors/StringEditor';

interface Props {
	kv: JsonKV;
}

const getEditor = (kv: JsonKV) => {
	if (kv.type === 'id') {
		return <IdEditor value={kv.value as string} />;
	} if (kv.type === 'text') {
		return <StringEditor value={kv.value as string} />;
	}
	return null;
};

function Section({ kv }: Props) {
	return (
		<>
			<p className="text-gray-700">{ kv.key }</p>
			<p className="">{ kv.value.toString() }</p>
			<p className="" />
			<p className="w-full">{ getEditor(kv) }</p>
		</>
	);
}

export default Section;
