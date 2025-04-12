'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useParamSync = (paramName, defaultValue) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [paramValue, setParamValue] = useState(defaultValue);

  // ✅ On mount or when URL changes
  useEffect(() => {
    const paramFromUrl = searchParams.get(paramName);

    if (paramFromUrl !== null && paramFromUrl !== '') {
      setParamValue(paramFromUrl);
    } else if (defaultValue !== undefined) {
      setParamValue(defaultValue);
    }
  }, [searchParams, pathname, paramName, defaultValue]);

  // ✅ Update URL manually if value changes (optional)
  const updateParam = (value) => {
    const url = new URL(window.location.href);
    url.searchParams.set(paramName, value);
    window.history.replaceState({}, '', url);
    setParamValue(value);
  };

  return [paramValue, updateParam];
};
