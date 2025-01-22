import { type SchemaTypeDefinition } from 'sanity'
import { product } from './products/products'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
