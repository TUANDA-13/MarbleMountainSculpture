'use client';
import { GradientTypo } from '@/common/gradient-text/GradientTipo';
import { Josefin_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_ITEMS } from './const';
import './globals.css';
import { cn } from '@/utils/tailwind-merge.until';
import ParticlesBg from 'particles-bg';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '400', '500', '700'],
  display: 'swap',
});

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };
//:TODO: add border for header
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(josefin.className)}>
        <header className="bg-bg z-navbar sticky top-0">
          <div className="container mx-auto px-4 max-w-[1228px] sticky top-0 z-navbar dark:bg-opacity-50 border-gray-light">
            <div className="flex items-center h-[96px] justify-between">
              <div className="flex h-[34px] items-center justify-center">
                <Image
                  className="dark:invert mr-2"
                  src="/logo.svg"
                  alt="Next.js logo"
                  width={34}
                  height={34}
                  priority
                />
                <span className="text-xl">marblemountainsculpture</span>
              </div>
              <nav className="flex flex-row items-center gap-10">
                {NAV_ITEMS.map((item) => {
                  return (
                    <Link href={item.path} className="px-5 no-underline " key={item.path}>
                      <GradientTypo text={item.title} className={'font-semibold whitespace-pre'} />
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
