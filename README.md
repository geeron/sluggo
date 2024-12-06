# sluggo

A simple utility to convert strings into slugs. Note: WORK IN PROGRESS - used mainly now to test to upload a package to `jsr.io` --> [https://jsr.io/@geeron/sluggo](https://jsr.io/@geeron/sluggo)

## Usage

The `sluggo` function converts a string into a slug. You can customize the separator and whether the output should be uppercase.

### Example

```ts
import { sluggo } from './mod.ts'

console.log(sluggo('Hello World')) // hello-world
console.log(sluggo('Hello World', { separator: '_' })) // hello_world
console.log(sluggo('Hello World', { uppercase: true })) // HELLO-WORLD
```

## API

### `sluggo(string: string, options?: SlugOptions): string`

Converts a string into a slug.

#### Parameters

- `string` (string): The input string to convert.
- `options` (SlugOptions, optional): An optional object to customize the output.
  - `separator` (string, optional): The separator to use between words. Defaults to `'-'`.
  - `uppercase` (boolean, optional): Whether to convert the output to uppercase. Defaults to `false`.

#### Returns

- `string`: The converted slug.

## Testing

To run the tests, use the following command:

```sh
deno test
```

## License

This project is licensed under the MIT License.
