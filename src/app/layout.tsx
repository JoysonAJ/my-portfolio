import Header from "@/layout/header";
import '@/app/globals.css'


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
      </body>
    </html>
  );
}
