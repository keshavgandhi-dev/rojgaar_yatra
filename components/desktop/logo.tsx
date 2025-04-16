import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  showAdmin?: boolean
}

export function Logo({ showAdmin = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative w-8 h-8 rounded-full overflow-hidden">
        <Image
          src="/logo.png"
          alt="RojgaarYatra.com Logo"
          fill
          className="object-cover"
          priority
        />
      </div>
      <span className="text-xl font-bold text-red-600 ml-2">Rojgaar</span>
      <span className="text-xl font-bold">Yatra</span>
      <span className="text-xl font-bold text-red-600">.com</span>
      {showAdmin && <span className="ml-2 text-xs bg-red-600 text-white px-2 py-0.5 rounded">Admin</span>}
    </Link>
  )
}

