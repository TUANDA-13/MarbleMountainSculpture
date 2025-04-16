'use client';
import { Category } from '@/models';

import { DataStore } from 'aws-amplify/datastore';
import { useEffect } from 'react';
import { useState } from 'react';
export const ListCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const models = await DataStore.query(Category);
        setCategories(models);
      } catch (err) {}
    };
    fetchCategories();
  }, []);

  return (
    <div className="container flex gap-6 my-20">
      <div className="flex flex-row gap-6 flex-wrap">
        {categories.map((category) => (
          <div className="min-w-[100px] flex gap-1" key={category.id}>
            <img src="svg/globe.svg" className="w-[14px]" />
            {category.name}
          </div>
        ))}
        <div className="min-w-[100px] flex gap-1">
          <img src="svg/mail.svg" className="w-[14px]" />
          {"Add new category"}
        </div>
      </div>
    </div>
  );
};
