import MainFooter from "@/components/footer/main-footer";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

export const metadata = {
  title: "Madxa Medical Care",
  description: "More Close More safe, Not just a srevice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
