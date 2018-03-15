/**
 * Created by user on 2018/3/16/016.
 */

import { ClassProxyStatic } from 'class-proxy';

function classPrototype<T>(target: ClassProxyStatic<T>): T
{
	// @ts-ignore
	let desc = Object.getOwnPropertyDescriptors(target.prototype);

	let prototype = Object.keys(desc).reduce(function (a, b)
	{
		// @ts-ignore
		a[b] = target.prototype[b];

		return a;
	}, {});

	// @ts-ignore
	return Object.assign({}, target.prototype, prototype);
}

const _classPrototype = classPrototype as typeof classPrototype & {
	default: typeof classPrototype,
	classPrototype: typeof classPrototype,
};

_classPrototype.default = _classPrototype.classPrototype = _classPrototype;

export = _classPrototype;
