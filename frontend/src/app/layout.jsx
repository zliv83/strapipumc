import { Alegreya } from "next/font/google";

const alegreya = Alegreya({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "PUMC Preschool",
  description: "Powell United Methodist Church Preschool in Powell, Ohio",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={alegreya.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
