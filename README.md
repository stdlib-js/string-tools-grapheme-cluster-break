<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# grapheme

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Grapheme cluster break tooling.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
grapheme = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/string-tools-grapheme-cluster-break@umd/browser.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/string-tools-grapheme-cluster-break@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.grapheme;
})();
</script>
```

#### grapheme

A collection of functions for performing grapheme cluster break operations.

* * *

### Methods

#### grapheme.breakProperty( code )

Returns the grapheme break property from the [Unicode Standard][unicode-grapheme-break-property].

```javascript
var out = grapheme.breakProperty( 0x008f );
// returns 2

out = grapheme.breakProperty( 0x111C2 );
// returns 12

out = grapheme.breakProperty( 0x1F3FC );
// returns 3
```

#### grapheme.emojiProperty( code )

Returns the emoji property from the [Unicode Standard][unicode-emoji-property].

```javascript
var out = grapheme.emojiProperty( 0x23EC );
// returns 101

out = grapheme.emojiProperty( 0x1FFFE );
// returns 11
```

#### grapheme.breakType( breaks, emoji )

Returns the break type between grapheme breaking classes according to _UAX #29 3.1.1 Grapheme Cluster Boundary Rules_ on extended grapheme clusters.

```javascript
var out = grapheme.breakType( [ 11, 3, 11 ], [ 11, 11, 11 ] );
// returns 1
```

* * *

### Properties

#### grapheme.constants

An object mapping break type names to integer values.

```javascript
var out = grapheme.constants;
// returns {...}
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/string-tools-grapheme-cluster-break@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var out = grapheme.breakProperty( 0x008f );
// returns 2

out = grapheme.emojiProperty( 0x23EC );
// returns 101

out = grapheme.breakType( [ 11, 3, 11 ], [ 11, 11, 11 ] );
// returns 1

out = grapheme.constants;
// returns {...}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-tools-grapheme-cluster-break.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-tools-grapheme-cluster-break

[test-image]: https://github.com/stdlib-js/string-tools-grapheme-cluster-break/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/string-tools-grapheme-cluster-break/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-tools-grapheme-cluster-break/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-tools-grapheme-cluster-break?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-tools-grapheme-cluster-break.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-tools-grapheme-cluster-break/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-tools-grapheme-cluster-break/tree/deno
[umd-url]: https://github.com/stdlib-js/string-tools-grapheme-cluster-break/tree/umd
[esm-url]: https://github.com/stdlib-js/string-tools-grapheme-cluster-break/tree/esm
[branches-url]: https://github.com/stdlib-js/string-tools-grapheme-cluster-break/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-tools-grapheme-cluster-break/main/LICENSE

[unicode-grapheme-break-property]: https://www.unicode.org/Public/13.0.0/ucd/auxiliary/GraphemeBreakProperty.txt

[unicode-emoji-property]: https://www.unicode.org/Public/13.0.0/ucd/emoji/emoji-data.txt

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
