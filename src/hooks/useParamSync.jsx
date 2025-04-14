'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

export const useParamSync = (paramName, defaultValue) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const valueFromUrl = searchParams.get(paramName);
  const value = valueFromUrl !== null ? valueFromUrl : defaultValue;

  const setValue = (newValue) => {
    const params = new URLSearchParams(searchParams.toString());

    if (newValue) {
      params.set(paramName, newValue);
    } else {
      params.delete(paramName);
    }

    startTransition(() => {
      router.replace(`?${params.toString()}`);
    });
  };

  return [value, setValue, isPending];
};
