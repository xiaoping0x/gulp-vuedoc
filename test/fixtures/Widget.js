import { oneOf } from './utils';

/**
 * Base widget class
 *
 * @class Widget
 */
class Widget {
	/**
	 * Widget class constructor
	 * 
	 * @param  {String} foo foo argument
	 */
	constructor(foo) {
	  this.foo = foo;
	}

	/**
	 * bar method
	 * @return {String} bar name
	 */
	bar() {
		// bar
		return 'bar';
	}

	/**
	 * Is valid
	 * 
	 * @return {Boolean}
	 */
	valid() {
		return oneOf([])();
	}
}