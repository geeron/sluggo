import { assertEquals } from '@std/assert/equals'
import { sluggo } from './mod.ts'

Deno.test('that it works with a simple string', () => {
  assertEquals(sluggo('Hello World'), 'hello-world')
})

Deno.test('that it works with a simple string and a custom separator', () => {
  assertEquals(sluggo('Hello World', { separator: '_' }), 'hello_world')
})

Deno.test('that it works with a simple string and uppercase', () => {
  assertEquals(sluggo('Hello World', { uppercase: true }), 'HELLO-WORLD')
})
