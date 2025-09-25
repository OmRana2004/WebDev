import Link from "next/link";
export default function Pae() {
  return(
    <div className="flex items-center justify-center gap-3 h-screen">
      <Link href="/Pages/signup" className="border-4 mouse-pointer">SignUp</Link>
      <Link href="/Pages/signin" className="border-4">SignIn</Link>
    </div>
  )
}