import Sidebar  from "@/components/Sidebar"
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from "@/components/MobileNav";

export default function RootLayout({
  children,
  loggedIn,
  
}: Readonly<{
  children: React.ReactNode;
  loggedIn:any;
}>) {
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}
        />
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image 
            src='/icons/logo.svg'
            width={30}
            height={30}
            alt="logo"
            />
            <div>
              <MobileNav
                user={loggedIn}
               />
            </div>
          </div>
          {children}
        </div>
    </main>
  );
}
