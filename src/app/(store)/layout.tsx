import { Header } from "@/components/header"
import { CartProvider } from "@/contexts/cart-context"

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1440px] grid-rows-app gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
