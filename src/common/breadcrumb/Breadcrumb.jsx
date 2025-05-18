import Link from 'next/link';

export default function Breadcrumb({ crumbs = [], separator = '/' }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center text-sm text-gray-500">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;

          return (
            <li key={index} className="flex items-center">
              {!isLast && crumb.href ? (
                <>
                  <Link href={crumb.href} className="hover:text-black text-lg font-medium">
                    {crumb.label}
                  </Link>
                  <span className="mx-2">{separator}</span>
                </>
              ) : (
                <span className="text-black text-lg font-semibold">{crumb.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
