# Incorrect router.push usage in Next.js
This repository demonstrates a common error in Next.js applications related to the incorrect usage of `router.push` when passing query parameters. The issue stems from improper handling of the query object within the `router.push` function. The provided solution showcases the correct way to handle query parameters in Next.js routing.

## Problem
The original code attempts to pass query parameters using an object within the second argument of `router.push`. This approach will result in unexpected behavior where the query parameter might not be correctly parsed or appended to the URL, leading to errors or pages not loading as expected.

## Solution
The solution demonstrates the correct method of passing query parameters in `router.push`. Instead of passing an object as the second argument, we directly append the query parameters to the URL string.