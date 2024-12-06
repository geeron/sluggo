import { assertEquals } from '@std/assert/equals'
import { sluggo } from './mod.ts'

Deno.test('that it works with a simple string', () => {
  assertEquals(sluggo('Hello World'), 'hello-world')
})
