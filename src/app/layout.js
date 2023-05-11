import "./styles/globals.scss";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "To Do List App",
  description: "A To Do List App created with NextJS and MongoDB",
  author: "Salvador Puche Ibáñez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <header className="header">
          <h1 className="titleH1">Hey Salva!</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
