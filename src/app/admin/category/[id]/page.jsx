import BreadCrumb from '@/common/breadcrumb/Breadcrumb';

const SubCategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const crumbs = [
    { label: 'List products', href: '/' },
    { label: 'Cham Statues', href: '/cham-statues' },
    { label: 'All images' }, // current page
  ];

  return (
    <div className="container mx-auto p-4 mt-10 mb-[165px]">
      <h1 className="text-[60px] font-bold text-center">List products</h1>
      <BreadCrumb />
    </div>
  );
};

export default SubCategoryPage;
