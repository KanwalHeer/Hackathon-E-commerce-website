import { type SchemaTypeDefinition } from 'sanity'
import { product } from './products/products'
import{ orders} from './placeOrder/order'
import { blog } from './Blogs/blog'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,orders,blog],
}
