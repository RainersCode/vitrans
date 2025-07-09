import "@/public/assets/css/bootstrap.min.css"
import "@/public/assets/css/animate.css"
import "@/public/assets/css/all.min.css"
import "@/public/assets/css/swiper-bundle.min.css"
import "@/public/assets/css/meanmenu.css"
import "@/public/assets/css/magnific-popup.css"
import "@/public/assets/css/nice-select.css"
import "@/public/assets/css/color.css"
import "@/public/assets/css/main.css"
import "@/public/assets/css/whatsapp-button.css"

import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--nunito-font-family",
  display: "swap",
});
export const metadata = {
  title: "ViTrans - Kravu pārvadājumi Vidzemē",
  description: "Kravu pārvadājumi Vidzemē",
}

export default function RootLayout({ children }) {
  return (
    <html lang="lv">
      <body>{children}</body>
    </html>
  )
}
