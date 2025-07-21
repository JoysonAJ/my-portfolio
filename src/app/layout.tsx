import Header from "@/layout/header";
import '@/app/globals.css'
import Footer from "@/layout/footer";


export const metadata = {
  title: 'Antony Joyson D Souza', // Default title for all pages
  description: 'A description for my Next.js application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    data-lt-installed="true"
    >
      <body className="bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
