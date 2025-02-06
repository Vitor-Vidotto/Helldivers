import { Inter } from 'next/font/google';
import { ReactNode } from 'react'; // Importando ReactNode

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "HELLDIVERS",
  description: "WELCOME TO HELL",
};

// Definindo a interface para as props do componente
interface RootLayoutProps {
  children: ReactNode; // Tipando children como ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
