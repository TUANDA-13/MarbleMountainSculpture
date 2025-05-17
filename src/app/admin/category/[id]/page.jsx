import BreadCrumb from '@/common/breadcrumb/Breadcrumb';
import ListProduct from '@/components/admin/category/list-product';
import ListProductItem from '@/components/admin/category/list-product/list-product-item';
import { unslugify } from '@/utils/slugify';
import Image from 'next/image';

const items = [
  {
    id: 'item-1',
    name: 'Image 1',
    imageUrl: '/img/default.png',
  },
  {
    id: 'item-2',
    name: 'Image 2',
    imageUrl: '/img/default.png',
  },
  {
    id: 'item-3',
    name: 'Image 3',
    imageUrl: '/img/default.png',
  },
  {
    id: 'item-4',
    name: 'Item A',
    imageUrl: '/img/default.png',
  },
  {
    id: 'item-5',
    name: 'Tool 1',
    imageUrl: '/img/default.png',
  },
  {
    id: 'item-6',
    name: 'Tool 2',
    imageUrl: '/img/default.png',
  },
];

const SubCategoryPage = async ({ params }) => {
  const { id } = await params;

  const crumbs = [{ label: 'List products', href: '/admin/category' }, { label: unslugify(id) }];

  return (
    <div className="container mx-auto p-4 mt-10 mb-[165px]">
      <h1 className="text-[60px] font-bold text-center">List products</h1>
      <BreadCrumb crumbs={crumbs} />
      {/* List filter */}
      <div className="flex items-center w-full border-b border-black mt-6">
        <div className="w-[215px] bg-gradient-to-r from-black to-primary text-white text-lg leading-[100%] text-center font-bold border-l border-r border-b border-black p-[26px]">
          All images
        </div>
        <div className="text-lg leading-[100%] w-[215px] text-center font-bold cursor-pointer">
          + Add new
        </div>
      </div>
      {/* List item */}
      <ListProduct items={items} />
    </div>
  );
};

export default SubCategoryPage;
