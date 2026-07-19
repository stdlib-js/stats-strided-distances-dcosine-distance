<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dcosineDistance

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the cosine distance between two double-precision floating-point strided arrays.

<section class="intro">

The [cosine distance][wikipedia-cosine-distance] is defined as

<!-- <equation class="equation" label="eq:cosine_similarity" align="center" raw="D_C(A, B) = 1 - S_C(A, B) = 1 - \cos(\theta) = 1 - \frac{A \cdot B}{\lVert A \rVert \, \lVert B \rVert} = 1 - \frac{\sum_{i=0}^{N-1} A_i B_i}{\sqrt{\sum_{i=0}^{N-1} A_i^2} \cdot \sqrt{\sum_{i=0}^{N-1} B_i^2}}" alt="Equation for cosine distance."> -->

```math
D_C(A, B) = 1 - S_C(A, B) = 1 - \cos(\theta) = 1 - \frac{A \cdot B}{\lVert A \rVert \, \lVert B \rVert} = 1 - \frac{\sum_{i=0}^{N-1} A_i B_i}{\sqrt{\sum_{i=0}^{N-1} A_i^2} \cdot \sqrt{\sum_{i=0}^{N-1} B_i^2}}
```

<!-- </equation> -->

where `S_C` is the [cosine similarity][wikipedia-cosine-similarity] and `A_i` and `B_i` are the _ith_ components of vectors **A** and **B**, respectively.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import dcosineDistance from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided-distances-dcosine-distance@esm/index.mjs';
```

#### dcosineDistance( N, x, strideX, y, strideY )

Computes the cosine distance between two double-precision floating-point strided arrays.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
var y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );

var z = dcosineDistance( x.length, x, 1, y, 1 );
// returns ~1.061
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length of `x`.
-   **y**: input [`Float64Array`][@stdlib/array/float64].
-   **strideY**: stride length of `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to calculate the cosine distance between every other value in `x` and the first `N` elements of `y` in reverse order,

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );

var z = dcosineDistance( 3, x, 2, y, -1 );
// returns ~0.122
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

var z = dcosineDistance( 3, x1, 1, y1, 1 );
// returns ~0.018
```

#### dcosineDistance.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Computes the cosine distance between two double-precision floating-point strided arrays using alternative indexing semantics.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
var y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );

var z = dcosineDistance.ndarray( x.length, x, 1, 0, y, 1, 0 );
// returns ~1.061
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to calculate the cosine distance between every other element in `x` starting from the second element with the last 3 elements in `y` in reverse order

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

var z = dcosineDistance.ndarray( 3, x, 2, 1, y, -1, y.length-1 );
// returns ~0.105
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@esm/index.mjs';
import dcosineDistance from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided-distances-dcosine-distance@esm/index.mjs';

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, 0, 100, opts );
console.log( x );

var y = discreteUniform( x.length, 0, 10, opts );
console.log( y );

var out = dcosineDistance.ndarray( x.length, x, 1, 0, y, -1, y.length-1 );
console.log( out );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-strided-distances-dcosine-distance.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-strided-distances-dcosine-distance

[test-image]: https://github.com/stdlib-js/stats-strided-distances-dcosine-distance/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-strided-distances-dcosine-distance/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-strided-distances-dcosine-distance/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-strided-distances-dcosine-distance?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-strided-distances-dcosine-distance.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-strided-distances-dcosine-distance/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-strided-distances-dcosine-distance/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-strided-distances-dcosine-distance/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-strided-distances-dcosine-distance/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-strided-distances-dcosine-distance/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-strided-distances-dcosine-distance/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-strided-distances-dcosine-distance/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-strided-distances-dcosine-distance/blob/main/branches.md

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64/tree/esm

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[wikipedia-cosine-distance]: https://en.wikipedia.org/wiki/Cosine_similarity#Cosine_distance

[wikipedia-cosine-similarity]: https://en.wikipedia.org/wiki/Cosine_similarity

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
