'use client';

import { useEffect, useState } from 'react';
import { ProductSidebar } from './const';
import { useParamSync } from '@/hooks/useParamSync';

export const ProductHeader = () => {
  const [paramCategoryValue] = useParamSync('category');
  const [paramDetailValue] = useParamSync('detail');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const category = ProductSidebar.find((item) => item.slug === paramCategoryValue);
    const detail = category?.children.find((item) => item.slug === paramDetailValue);
    setTitle(detail?.category || category?.category);
  }, [paramCategoryValue, paramDetailValue]);
  return <h1 className="text-4xl font-bold mt-[124px]">{title || "All products"}</h1>;
};
