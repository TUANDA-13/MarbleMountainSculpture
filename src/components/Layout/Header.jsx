'use client';

import { NAV_ITEMS } from '@/app/const';
import { GradientLine } from '@/common/gradient-line/GradientLine';
import { GradientTypo } from '@/common/gradient-text/GradientTipo';
import { cn } from '@/utils/tailwind-merge.until';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-bg z-navbar sticky top-0 shadow-lg">
      <div className="container mx-auto px-4 max-w-[1228px] sticky top-0 z-navbar dark:bg-opacity-50 border-gray-light">
        <div className="flex items-center h-[96px] justify-between">
          <Link className="flex h-[34px] items-center justify-center cursor-pointer" href={"/"}>
            <Image
              className="text-black mr-2"
              src="/svg/logo.svg"
              alt="Next.js logo"
              width={34}
              height={34}
              priority
            />
            <span className="text-xl font-bold">marblemountainsculpture</span>
          </Link>
          <nav className="hidden md:flex flex-row items-center gap-4 mid:gap-4 lg:gap-6">
            {NAV_ITEMS.map((item) => {
              return (
                <Link href={item.path} className="lg:px-5 px-2 no-underline relative" key={item.path}>
                  <GradientTypo text={item.title} className={cn('font-medium whitespace-pre', pathname === item.path && "font-bold text")} />
                  {pathname === item.path && (
                    <GradientLine className={"absolute w-full left-[0px]"}/>
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="md:hidden">
            <button
              className="hamburger-icon"
              onClick={() => {
                const nav = document.querySelector('.mobile-nav');
                nav.classList.toggle('hidden');
              }}
            >
              <Image src="/svg/menu.svg" alt="Menu" width={24} height={24} />
            </button>
          </div>
        </div>
        <nav className="mobile-nav hidden flex-col items-start md:hidden gap-4 mt-4">
          {NAV_ITEMS.map((item) => {
            return (
              <Link href={item.path} className="px-5 py-2 no-underline block" key={item.path}>
                <GradientTypo text={item.title} className={'font-semibold whitespace-pre'} />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
