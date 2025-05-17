import { Button } from '@/common/button/Button';
import Image from 'next/image';

const ListProductItem = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col gap-[15px] items-center font-bold text-lg w-[285px]"
    >
      <div className="group relative">
        <Image
          className="border-[2px] cursor-pointer border-primary w-full h-[190px] object-cover group-hover:opacity-50 transition duration-200"
          src={item.imageUrl}
          width={285}
          height={190}
          alt={item.name}
        />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity w-[185px] flex flex-col items-center justify-center gap-5 z-10">
          <Button className="w-[185px]">Detail</Button>
          <Button className="w-[185px]" variant="white">
            Delete
          </Button>
        </div>
      </div>

      {item.name}
    </div>
  );
};

export default ListProductItem;
