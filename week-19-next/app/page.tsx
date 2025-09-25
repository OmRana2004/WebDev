import Link from "next/link";
export default function Pae() {
  return(
    <div className="flex items-center justify-center gap-3 h-screen">
      <Link href="/" className="border-4">SignUp</Link>
      <Link href="/" className="border-4">SignIn</Link>
    </div>
  )
}