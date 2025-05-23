import { GradientTypo } from '@/common/gradient-text/GradientTipo';
import { Josefin_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_ITEMS } from './const';
import './globals.css';
import { cn } from '@/utils/tailwind-merge.until';
import { Header } from '@/components/Layout/Header';
import AmplifyConfig from '@/components/config/AmplifyConfig';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '400', '500', '700'],
  display: 'swap',
});

// export const metadata = {
//   title: 'Marble Mountain Sculpture',
//   description: 'Generated by create next app',
// };
//:TODO: add border for header
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(josefin.className)}>
        <AmplifyConfig />
        <Header />
        {children}
        <footer className="bg-bg py-16 pb-6 text-black">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 grid-cols-1">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  className="text-black mr-2"
                  src="/svg/logo.svg"
                  alt="Next.js logo"
                  width={34}
                  height={34}
                  priority
                />
                <span className="text-xl font-bold">marblemountainsculpture</span>
              </div>
              <ul className="space-y-2 mt-8">
                <li className="flex items-center gap-2">
                  <img src="/svg/location.svg" alt="Location" width={16} height={16} />
                  117 Huyền Trân Công Chúa, Đà Nẵng, Việt Nam
                </li>
                <li className="flex items-center gap-2">
                  <img src="/svg/location.svg" alt="Location" width={16} height={16} />
                  59 Phạm Hùng, Đà Nẵng, Việt Nam
                </li>
              </ul>
              <div className="flex gap-4 mt-4">
                <Link href="https://facebook.com">
                  <img src="/svg/facebook.svg" alt="Facebook" width={24} height={24} />
                </Link>
                <Link href="https://twitter.com">
                  <img src="/svg/twitter.svg" alt="Twitter" width={24} height={24} />
                </Link>
                <Link href="https://tiktok.com">
                  <img src="/svg/tiktok.svg" alt="TikTok" width={24} height={24} />
                </Link>
              </div>
            </div>
            <div className="lg:ml-28 ml-0 lg:mt-0 mt-8">
              <h4 className="font-bold mb-4">Let’s connect</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 truncate" title='marblemountainsculpture@gmail.com'>
                  <img src="/svg/mail.svg" alt="Email" width={16} height={16} />
                  marblemountainsculpture@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <img src="/svg/mail.svg" alt="Email" width={16} height={16} />
                  katievietnam@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <img src="/svg/phone.svg" alt="Phone" width={16} height={16} />
                  +84 903545929
                </li>
                <li className="flex items-center gap-2">
                  <img src="/svg/phone.svg" alt="Phone" width={16} height={16} />
                  +84 903575477
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-500">
            © 2025 - All rights reserved by MARBLEMOUNTAINSCULPTURE
          </div>
        </footer>
      </body>
    </html>
  );
}
