import { GradientLine } from '@/common/gradient-line/GradientLine';
import { GradientTypo } from '@/common/gradient-text/GradientTipo';

export const Gallery = () => {
  const galleryItems = [
    { id: 1, title: 'Animals', image: 'img/default.png' },
    { id: 2, title: 'Nature', image: 'img/default.png' },
    { id: 3, title: 'Mountains', image: 'img/default.png' },
    { id: 4, title: 'Lakes', image: 'img/default.png' },
    { id: 5, title: 'Forests', image: 'img/default.png' },
    { id: 6, title: 'Rivers', image: 'img/default.png' },
    { id: 7, title: 'Beaches', image: 'img/default.png' },
    { id: 8, title: 'Deserts', image: 'img/default.png' },
    { id: 9, title: 'Cities', image: 'img/default.png' },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full bg-bg py-24">
      <div className="text-center text-black text-6xl font-bold">Gallery</div>
      <GradientLine className={'mb-[88px] mt-4'} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center text-black text-lg max-w-6xl px-4">
        {galleryItems.map((item) => (
          <div className="gradient flex items-center justify-center" key={item.id}>
            <div className="relative group overflow-hidden shadow-lg w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 gradient bg-opacity-50 opacity-0 group-hover:opacity-50 transition duration-300 flex flex-col justify-center items-center text-white"></div>
              <h3 className="absolute text-xl font-bold bottom-[60px] left-4 text-white opacity-0 group-hover:opacity-100 duration-300 ">
                {item.title}
              </h3>
              <div className={'absolute bottom-4 ml-4 bg-bg px-[10px] py-1.5 cursor-pointer font-semibold opacity-0 group-hover:opacity-100 duration-300 '}>
                <GradientTypo text={'View more'} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
