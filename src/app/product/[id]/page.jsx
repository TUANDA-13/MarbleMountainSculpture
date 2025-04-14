export default () => {
  return (
    <div className="container">
      <div className="flex gap-6 my-10">
        <div className="w-[25%] shrink-0 pr-6 border-r">
          <ProductSidebar />
        </div>
        <div>
          <ProductDetail />
        </div>
      </div>
    </div>
  );
};
