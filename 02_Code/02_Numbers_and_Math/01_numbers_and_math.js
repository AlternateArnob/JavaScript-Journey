// Visit: https://supersimple.dev/projects/amazon/

// Basic math operations.
2 + 2 // 4
10 - 3 // 7
10 * 3 // 30
10 / 2 // 5

2 + 2 + 2 // 6
2.2 + 2.2 // 4.4

// --------------------

// Practical Examples:

// 2 socks (free shipping) + 1 basketball ($4.99 shipping).
10.90 * 2 + 20.95 // 42.75
10.90 * 2 + 20.95 + 4.99 // 47.74

// -------------------- -------------------- -------------------- -------------------- --------------------

// Order of Operations: Hierarchy (BODMAS), associativity (left to right for operators with the same precedence).

1 + 1 * 3 // 4 // Why not 6? -> Because of order of operations.

// Hierarchy (BODMAS):
// 1. Brackets
// 2. Orders (powers)
// 3. * /
// 4. + -

// --------------------

// Associativity: Operators with the same precedence are evaluated from left to right.

// * / have the same priority.
2 * 3 / 5 // 1.2 // (left to right)

// + - have the same priority.
2 + 3 - 5 // 0 // (left to right)

// --------------------

// Use parentheses to control the order of operations.
1 + 1 * 3 // 4
(1 + 1) * 3 // 6

// --------------------

// Practical Examples:

// 1 basketball (free shipping) + 2 t-shirts (free shipping).
20.95 + 7.99 * 2 // 36.93
36.93 * 0.1 // 3.693 // 10% tax

// 20.95 + 7.99 * 2 * 0.1 // 22.548 // -> wrong answer(because of order of operators)
(20.95 + 7.99 * 2) * 0.1 // 3.697

// -------------------- -------------------- -------------------- -------------------- --------------------

// Floating-point precision issues.
0.1 + 0.2 // 0.30000000000000004

// Calculations with floating-point numbers are sometimes inaccurate.
// Not every decimal calculation is inaccurate, but some cannot be represented exactly.

// --------------------

// When calculating money, we want to avoid any inaccuracies.
// When working with money, do the calculation in cents, then convert back to dollars.

// 1 basketball (free shipping) + 1 t-shirt (free shipping).
20.95 + 7.99 // 28.939999999999998 // inaccurate
(2095 + 799) / 100 // 28.94

// -------------------- -------------------- -------------------- -------------------- --------------------

// How to round numbers (to the nearest integer)
Math.round(2.2) // 2
Math.round(2.8) // 3
Math.round(2.5) // 3

// Note:
// 2.1 to 2.4 -> 2
// 2.5 to 2.9 -> 3

// --------------------

// 1 basketball (free shipping) + 1 t-shirt (free shipping) + 10% tax
((2095 + 799) * 0.1) / 100 // 2.894
Math.round((2095 + 799) * 0.1) / 100 // 2.89
