'use client'; // Mark this as a client component

import { usePathname } from 'next/navigation';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  const pathname = usePathname();  // Get the current path

  const hiddenRoutes = [,'/SellerDashboard' , '/userDashboard', '/signin', '/signup' , '/AdminDashboard'];  // Routes where Navbar & Footer should be hidden
  const shouldHide = hiddenRoutes.some(route => pathname.startsWith(route));  // Check if we should hide Navbar/Footer

  return (
    <html lang="en">
      <body>
        {!shouldHide && <Navbar />}  {/* Conditionally render Navbar */}
        {children}  {/* Render child components */}
        {!shouldHide && <Footer />}  {/* Conditionally render Footer */}
      </body>
    </html>
  );
}
