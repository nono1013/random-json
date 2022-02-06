import React, { useState } from 'react';
import { JsonKV, Value } from '../types';
import { IdEditor } from './editors/IdEditor';
import { StringEditor } from './editors/StringEditor';
import { NumberEditor } from './editors/NumberEditor';
import { LongStringEditor } from './editors/LongStringEditor';
import { BooleanEditor } from './editors/BooleanEditor';

interface Props {
	kv: JsonKV;
	index: number;
}

const getEditor = (kv: JsonKV, index: number, callback: (value: Value) => void) => {
	switch (kv.type) {
	case 'id': return <IdEditor value={kv.value as string} callback={callback} />;
	case 'text': return <StringEditor value={kv.value as string} callback={callback} />;
	case 'number': return <NumberEditor value={kv.value as number} callback={callback} />;
	case 'textarea': return <LongStringEditor value={kv.value as string} callback={callback} />;
	case 'boolean': return <BooleanEditor _key={kv.key} value={kv.value as boolean} index={index} callback={callback} />;
	default: return null;
	}
};

function Section({ kv, index }: Props) {
	const [value, setValue] = useState(kv.value);
	return (
		<>
			<p className="text-gray-700">{ kv.key }</p>
			<p className="">{ value.toString() }</p>
			<p className="" />
			<p className="w-full">{ getEditor(kv, index, setValue) }</p>
		</>
	);
}

export default Section;
