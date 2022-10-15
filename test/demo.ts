/**
 * Created by user on 2018/3/16/016.
 */

import classPrototype from '../src';

class A
{
	split()
	{
		return true;
	}
}

console.log(A.prototype);
// => A {}
console.log(classPrototype(A));
// => A { constructor: [Function: A], split: [Function: split] }
