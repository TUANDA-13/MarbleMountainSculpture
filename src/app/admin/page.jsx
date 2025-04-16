import { ListCategory } from '@/components/admin/ListCategory';

export default function AdminPage() {
  return (
    <div className="container flex gap-6 my-20">
      <div className="flex-1">
        <div className="text-center text-4xl font-bold mb-10">Admin</div>
        <ListCategory />
      </div>
    </div>
  );
}
