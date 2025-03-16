import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from '@/components/ui/toaster';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Moonlight Workspace',
  description: 'Productos de decoración, iluminación y organización para espacios de trabajo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster />
            <WhatsAppButton />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}