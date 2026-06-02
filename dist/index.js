/** @license Apache-2.0 */

'use strict';

/**
* Compute the cosine distance between two double-precision floating-point strided arrays.
*
* @module @stdlib/stats-strided-distances-dcosine-distance
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var dcosineDistance = require( '@stdlib/stats-strided-distances-dcosine-distance' );
*
* var x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
* var y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
*
* var z = dcosineDistance( x.length, x, 1, y, 1 );
* // returns ~1.061
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var dcosineDistance = require( '@stdlib/stats-strided-distances-dcosine-distance' );
*
* var x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
* var y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
*
* var z = dcosineDistance.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // returns ~1.061
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils-try-require/dist' );
var isError = require( '@stdlib/assert-is-error/dist' );
var main = require( './main.js' );


// MAIN //

var dcosineDistance;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dcosineDistance = main;
} else {
	dcosineDistance = tmp;
}


// EXPORTS //

module.exports = dcosineDistance;

// exports: { "ndarray": "dcosineDistance.ndarray" }
