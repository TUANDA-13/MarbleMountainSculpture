'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/data'
import AmplifyConfig from '@/components/config/AmplifyConfig';

const client = generateClient()
import { slugify } from '@/utils/slugify';

export const categories = [
  {
    id: 'cat-1',
    name: 'Cham Statues',
    subcategories: [
      {
        id: 'sub-1',
        name: 'All images',
        items: [
          {
            id: 'item-1',
            name: 'Image 1',
            imageUrl: 'img/default.png',
          },
          {
            id: 'item-2',
            name: 'Image 2',
            imageUrl: 'img/default.png',
          },
          {
            id: 'item-3',
            name: 'Image 3',
            imageUrl: 'img/default.png',
          },
        ],
      },
      {
        id: 'sub-2',
        name: 'Sub category 1',
        items: [
          {
            id: 'item-4',
            name: 'Item A',
            imageUrl: 'img/default.png',
          },
        ],
      },
    ],
  },
  {
    id: 'cat-2',
    name: 'Ancient Tools',
    subcategories: [
      {
        id: 'sub-3',
        name: 'All items',
        items: [
          {
            id: 'item-5',
            name: 'Tool 1',
            imageUrl: 'img/default.png',
          },
          {
            id: 'item-6',
            name: 'Tool 2',
            imageUrl: 'img/default.png',
          },
        ],
      },
    ],
  },
];

// Import as component
const Category = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("123");
  async function getCategories() {
    const { data: items, errors } = await client.models.Category.list({ authMode: 'userPool' });
    setCategories(items);
    console.log("🚀 ~ getCategories ~ items:", items)
  }

  async function createCategory() {
    if (name.trim() === "") {
      alert("Please enter a name");
      return;
    }
    const { data: items, errors } = await client.models.Category.create({
      name: name,
    }, { authMode: 'userPool' });
    setName("");
    await getCategories();
    console.log("🚀 ~ createCategory ~ items:", items)
  }

  useEffect(() => {
    getCategories();
  }, []);

  const router = useRouter();
  return (
    <div className="container mx-auto p-4 mt-10 mb-[165px]">
      <h1 className="text-[60px] font-bold text-center">List products</h1>
      <div className="p-2 rounded-[8px] border border-primary flex items-center w-fit text-primary text-lg shadow-[0px_4px_4px_0px_#00000040]" onClick={createCategory}>
        <Image src="/svg/add-icon.svg" className="mr-4" alt="plus" width={24} height={24} />
        <span>Add new category</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-[50px]">
        {categories.map((category) => (
          <div
            key={category.id}
            className="p-[30px] rounded-[8px] border hover:bg-gray-200 hover:font-bold cursor-pointer transition duration-200 border-black bg-gray-100 flex items-center whitespace-nowrap w-full text-lg shadow-[0px_2px_4px_0px_#00000040]"
            onClick={() => router.push(`/admin/category/${slugify(category.name)}`)}
          >
            <Image src="/svg/folder-icon.svg" className="mr-4" alt="edit" width={24} height={24} />
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
