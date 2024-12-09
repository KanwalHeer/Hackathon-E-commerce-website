
import ProductDetail from '@/components/pageComponents/products/productDetail';
import { dummyProducts } from '@/app/data/dumyData';
import ProductDetail2 from '@/components/pageComponents/products/detailInnfo';
import RelatedProducts from '@/components/pageComponents/products/recentProducts';

const ProductPage = ({ params }: { params: { productDetail: string } }) => {
  const { productDetail } = params;
  const product = dummyProducts.find((p) => p.id === productDetail);
  if (!product) {
    return <p>Product not found</p>;
  }
  return (
    <div>
        <ProductDetail product={product} />;
        <ProductDetail2 product={product} />;
        <RelatedProducts/>
    </div>
  ) 
};

export default ProductPage;
