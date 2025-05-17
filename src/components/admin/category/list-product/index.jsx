'use client';

import Image from 'next/image';
import ListProductItem from './list-product-item';
import { useState } from 'react';
import Modal from '@/common/modal/Modal';
import { Button } from '@/common/button/Button';

const ListProduct = ({ items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-[15px] grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[30px] gap-y-[40px]">
      <div
        className="cursor-pointer border-gradient flex items-center font-bold justify-center h-[calc(100%-43px)]"
        onClick={() => setOpen(true)}
      >
        <Image src="/svg/add-icon.svg" className="mr-[10px]" alt="plus" width={24} height={24} />
        Add new item
      </div>
      {items.map((item) => (
        <ListProductItem key={item.id} item={item} />
      ))}
      {open && (
        <Modal open={open} onClose={() => setOpen(false)} title="Add new item">
          <div className="space-y-4">
            <div>
              <label className="block font-semibold">Item name</label>
              <input className="border w-full px-3 py-2 rounded mt-1" placeholder="Place holder" />
            </div>

            <div>
              <label className="block font-semibold">Images</label>
              <div className="border rounded h-[150px] flex items-center justify-center mt-1">
                <span className="text-sm text-gray-500">📁 Click or drag files into this box</span>
              </div>
            </div>

            <Button className="w-full">Submit</Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ListProduct;
