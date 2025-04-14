'use client';

import { useParamSync } from '@/hooks/useParamSync';
import { ProductSidebar as PSConst } from './const';
import { cn } from '@/utils/tailwind-merge.until';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Collapse } from 'react-collapse';

export const ProductSidebar = () => {
  const [paramCategoryValue, updateCategoryParam] = useParamSync(
    'category',
    PSConst.filter((item) => item.id === 1)[0].slug
  );
  const [paramDetailValue, updateDetailParam] = useParamSync(
    'detail',
    PSConst.filter((item) => item.id === 1)[0].slug
  );

  const [sbState, setSbState] = useState(PSConst);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return; // ✅ guard for SSR
    const hasCategory = searchParams.has('category');

    if (!hasCategory) {
      const defaultCategory = PSConst.find((item) => item.id === 1)?.slug || 'default';
      const newParams = new URLSearchParams(searchParams.toString());

      newParams.set('category', defaultCategory);
      newParams.set('detail', '');

      router.replace(`?${newParams.toString()}`);
    }
  }, [searchParams, router]);

  return (
    <>
      <form className="max-w-md mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
        </div>
      </form>
      {sbState.map((item) => {
        return (
          <div key={item.id} className="flex flex-col gap-2 mt-6">
            <h3
              className={cn(
                'text-lg font-medium cursor-pointer',
                paramCategoryValue === item.slug && 'gradient-text font-bold'
              )}
              onClick={() => {
                if (item.children.length > 0) {
                  if (item.slug !== paramCategoryValue) {
                    setSbState((prev) =>
                      prev.map((i) => {
                        if (i.id === item.id) {
                          return { ...i, isOpen: true };
                        }
                        return i;
                      })
                    );
                    updateDetailParam(item.children[0].slug);
                  } else {
                    setSbState((prev) =>
                      prev.map((i) => {
                        if (i.id === item.id) {
                          return { ...i, isOpen: !i.isOpen };
                        }
                        return i;
                      })
                    );
                  }
                } else {
                  updateDetailParam('');
                }
                updateCategoryParam(item.slug);
              }}
            >
              {item.category}
            </h3>
            <Collapse isOpened={item.isOpen}>
              <div className="flex flex-col gap-2 ml-4">
                {item.children.map((child) => {
                  return (
                    <div key={child.id} className="flex items-center mt-4 relative">
                      <label
                        className={cn(
                          paramDetailValue === child.slug && 'gradient-text font-bold',
                          'cursor-pointer'
                        )}
                        htmlFor={child.category}
                        onClick={() => {
                          updateDetailParam(child.slug);
                        }}
                      >
                        {child.category}
                      </label>
                      <div className="absolute" />
                    </div>
                  );
                })}
              </div>
            </Collapse>
          </div>
        );
      })}
    </>
  );
};
