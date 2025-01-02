import Link from 'next/link';
import '@/app/globals.css'

export default function Header() {
  return (
    <header>
        <div className="logo">Latest Blog Website</div>
        <nav>
          <Link href={'/'} className='link' >Home</Link>
          <Link href={'/'} className='link' >Latest post</Link>
          <Link href={'/'} className='link' >About</Link>
          <Link href={'/'} className='link' >Contact</Link>
        </nav>
      </header>
  )
}
