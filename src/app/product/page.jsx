import { ProductHeader } from '@/components/product/ProductHeader';
import { ProductList } from '@/components/product/ProductList';
import { ProductSidebar } from '@/components/product/ProductSidebar';
import { Suspense } from 'react';

const ProductPage = () => {
  return (
    <Suspense fallback={<div></div>}>
      <div className="container">
        <ProductHeader />
        <div className="flex gap-6 my-10">
          <div className="w-[25%] shrink-0 pr-6 border-r">
            <ProductSidebar />
          </div>
          <div>
            <ProductList />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default ProductPage;
