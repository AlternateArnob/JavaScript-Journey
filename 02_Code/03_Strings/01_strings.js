// Visit: https://supersimple.dev/projects/amazon/

// string = text.
'hello'
alert('hello'); // string in popup

// -------------------- -------------------- -------------------- -------------------- --------------------

// Concatenation (combine strings together)
'some' + 'text' // sometext
'some' + 'more' + 'text' // somemoretext

// -------------------- -------------------- -------------------- -------------------- --------------------

// Use typeof to determine the data type.
typeof 2 // number
typeof 'hello' // string

// -------------------- -------------------- -------------------- -------------------- --------------------

// Type coercion (automatic type conversion)
'hello' + 3 // hello3 // JavaScript treats both as string
'hello' + '3' // hello3 // same as: 'hello' + 3

// Rule: string + number = string

// --------------------

// Practical Examples:

// Example - 01:
// 1 basketball (free shipping) + 1 t-shirt (free shipping)
'$28.94'
'$' + 20.95 + 7.99 // $20.957.99 // Wrong way

// Note: Strings also follow the order of operations

'$' + (20.95 + 7.99) // $28.939999999999998
'$' + (2095 + 799) / 100 // $28.94

// Example - 02:
'Items (' + (1 + 1) + '): $' + (2095 + 799) / 100
alert('Items (' + (1 + 1) + '): $' + (2095 + 799) / 100);

// -------------------- -------------------- -------------------- -------------------- --------------------

// Three ways to create strings.

'hello' // Way - 01
"hello" // Way - 02

// In JavaScript, use single quotes ('...') by default.
// If the string contains a single quote, use double quotes instead.

// 'I'm learning JavaScript' // SyntaxError
"I'm learning JavaScript" // Works correctly

// ---------- Escape characters (\') (\") (\n) ----------

// Another solution (using the escape character \').
'I\'m learning JavaScript'

// Use (\") to include double quotes inside a double-quoted string.
'He said, "Hello!"'
"He said, \"Hello!\""

// (\n) = newline character
alert('some\ntext');

// ---------- Escape characters (\') (\") (\n) ----------

// `...` (Using Backticks): Template strings
`hello` // Way - 03

// Template strings have 2 useful features.

// 1. Interpolation = insert value directly into a string
`Items (${1 + 1}): $${(2095 + 799) / 100}`

// 2. Multi-line strings
`some
text`

// -------------------- -------------------- -------------------- -------------------- --------------------

// What should we use to create a string?
// '...' or `...`?
// 1. Use '...' by default.
// 2. If we need interpolation or multi-line strings, use `...`.
