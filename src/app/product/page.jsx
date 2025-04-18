'use client';

import { Suspense } from 'react';
import { ProductHeader } from '@/components/product/ProductHeader';
import { ProductList } from '@/components/product/ProductList';
import { ProductSidebar } from '@/components/product/ProductSidebar';

const ProductPage = () => {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductHeader />
        <div className="flex gap-6 my-10">
          <div className="w-[25%] shrink-0 pr-6 border-r">
            <ProductSidebar />
          </div>
          <div>
            <ProductList />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default ProductPage;
