// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/84tdvEScwwG
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// "use client"

// import * as React, { useState, useMemo } from "react"
// import Link from "next/link"
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu"
// import { Button } from "@/components/ui/button"
// import { Separator } from "@/components/ui/separator"

// export default function Component() {
//   const [cart, setCart] = useState([
//     {
//       id: 1,
//       name: "Acme T-Shirt",
//       price: 19.99,
//       quantity: 2,
//     },
//     {
//       id: 2,
//       name: "Acme Hoodie",
//       price: 49.99,
//       quantity: 1,
//     },
//     {
//       id: 3,
//       name: "Acme Socks",
//       price: 9.99,
//       quantity: 3,
//     },
//   ])
//   const total = useMemo(() => {
//     return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
//   }, [cart])
//   const [isCartOpen, setIsCartOpen] = useState(false)
//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen)
//   }
//   const clearCart = () => {
//     setCart([])
//   }
//   return (
//     <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
//       <Link href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base" prefetch={false}>
//         <MountainIcon className="w-6 h-6" />
//         <span className="sr-only">Acme Inc</span>
//       </Link>
//       <div className="ml-auto flex items-center gap-4">
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" size="icon" className="relative" onClick={toggleCart}>
//               <div className="w-5 h-5" />
//               {cart.length > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full px-1.5 py-0.5 text-xs font-medium">
//                   {cart.length}
//                 </span>
//               )}
//               <span className="sr-only">Shopping Cart</span>
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end" className="w-[320px] p-4">
//             {cart.length > 0 ? (
//               <>
//                 <div className="grid gap-4">
//                   {cart.map((item) => (
//                     <div key={item.id} className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
//                       <img
//                         src="/placeholder.svg"
//                         alt={item.name}
//                         width={64}
//                         height={64}
//                         className="rounded-md"
//                         style={{ aspectRatio: "64/64", objectFit: "cover" }}
//                       />
//                       <div className="grid gap-1">
//                         <h4 className="font-medium">{item.name}</h4>
//                         <p className="text-sm text-muted-foreground">
//                           {item.quantity} x ${item.price.toFixed(2)}
//                         </p>
//                       </div>
//                       <div className="text-right font-medium">${(item.price * item.quantity).toFixed(2)}</div>
//                     </div>
//                   ))}
//                 </div>
//                 <Separator className="my-4" />
//                 <div className="grid gap-2">
//                   <div className="flex items-center justify-between">
//                     <span className="font-medium">Total</span>
//                     <span className="font-medium">${total.toFixed(2)}</span>
//                   </div>
//                   <div className="grid sm:grid-cols-2 gap-2">
//                     <Button variant="outline">Checkout</Button>
//                     <Button variant="ghost" onClick={clearCart}>
//                       Clear Cart
//                     </Button>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <div className="flex flex-col items-center justify-center gap-2 py-8">
//                 <div className="w-8 h-8 text-muted-foreground" />
//                 <p className="text-muted-foreground">Your cart is empty</p>
//               </div>
//             )}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//     </header>
//   )
// }

// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   )
// }