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

## Contributing

We welcome contributions from the community! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with clear and concise messages.
4. Push your changes to your fork.
5. Open a pull request to the main repository.

## License

This project is licensed under the MIT License.
