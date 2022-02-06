/* eslint-disable @typescript-eslint/no-explicit-any */
import { JsonKV } from './types';

export const isEmail = (str: string): boolean => {
	// eslint-disable-next-line no-useless-escape
	const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
	if (regexExp.test(str)) {
		return true;
	}
	return false;
};

export const toType = (key: string, value: any): JsonKV | null => {
	const type = typeof value;
	if (key === 'id' || key === '_id') {
		return { type: 'id', key, value };
	}
	if (type === 'string') {
		if ((value as string).length > 255) {
			return { type: 'textarea', key, value };
		}
		if (isEmail(value)) {
			return { type: 'email', key, value };
		}
		// eslint-disable-next-line no-useless-escape
		if (!isNaN(Date.parse(value.replace(/ (\+|\-)(\d+):(\d+)$/, '')))) {
			return { type: 'date', key, value };
		}
		return { type: 'text', key, value };
	}
	if (type === 'number') {
		return { type: 'number', key, value };
	}
	if (type === 'boolean') {
		return { type: 'boolean', key, value };
	}
	return null;
};

export const jsonTextToType = async (str: string) => {
	const jsonArr = JSON.parse(str);
	return jsonArr.flatMap((jsonObj: any) =>	Object.keys(jsonObj).map((key: string) => toType(key, jsonObj[key])).filter(e => e !== null));
};
