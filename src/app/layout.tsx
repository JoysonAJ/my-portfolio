import Header from "@/layout/header";
import '@/app/globals.css'
import Footer from "@/layout/footer";


export const metadata = {
  title: 'Antony Joyson D Souza', // Default title for all pages
  // description: 'A description for my Next.js application',
  description: 'My name is Antony Joyson D Souza,I have 2 years of experience in development which includes 2 years in web app development using ReactJS and Next.js. Also, I have 1 year experience in mobile application development, React Native.',
  openGraph: {
    title: 'Antony Joyson D Souza',
    description: 'My name is Antony Joyson D Souza,I have 2 years of experience in development which includes 2 years in web app development using ReactJS and Next.js. Also, I have 1 year experience in mobile application development, React Native.',
    images: [
      {
        url: '/assets/my.jpg', // or full URL like https://your-domain.com/og-image.png
        width: 1200,
        height: 630,
        alt: 'Antony Joyson D Souza Portfolio',
      },
    ],
  }
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
