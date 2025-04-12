import { GradientTypo } from "@/common/gradient-text/GradientTipo";
import { productList } from "./const";

export const ProductList = () => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4">
      {productList.map((item, index) => (
        <div className="gradient flex items-center justify-center mb-4" key={index}>
          <div className="relative group overflow-hidden shadow-lg w-full">
            <img
              src={item.image}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 gradient bg-opacity-50 opacity-0 group-hover:opacity-50 transition duration-300 flex flex-col justify-center items-center text-white"></div>
            <h3 className="absolute text-xl font-bold bottom-[60px] left-4 text-white opacity-0 group-hover:opacity-100 duration-300 ">
              {item?.title}
            </h3>
            <div
              className={
                'absolute bottom-4 ml-4 bg-bg px-[10px] py-1.5 cursor-pointer font-semibold opacity-0 group-hover:opacity-100 duration-300 '
              }
            >
              <GradientTypo text={'View more'} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
