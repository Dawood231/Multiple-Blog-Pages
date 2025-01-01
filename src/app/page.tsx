import Link from 'next/link';
import './globals.css';
import blog1 from './images/blog1.jpg';
import blog2 from './images/blog2.jpg';
import blog3 from  './images/blog3.jpg';
import blog4 from  './images/blog4.jpg';

// images
import Image from 'next/image';

const posts = [
  { id: 1, image: blog1, title: 'Artificial intelligence', content: 'Artificial intelligence (AI) is the science and engineering of creating intelligent machines that can perform tasks that typically require human intelligence.' },
  { id: 2, image: blog2, title: 'Imapct Of Technology', content: 'Technology has many impacts on society, including positive and negative effects.' },
  { id: 3, image: blog3, title: 'Agentic AI Future 2025', content: 'Agentic AI is a type of AI thats all about autonomy.' },
  { id: 4, image: blog4, title: 'Most Valuable Programming Language', content: 'The "most valuable" programming language can vary depending on context, such as industry, job market, or the specific use  .' },
];

export default function Home() {
  return (
    <div className='blog-page'>
      <header>
        <div className="logo">Latest Blog Website</div>
        <nav>
          <Link href={'/'} className='link' >Home</Link>
          <Link href={'/'} className='link' >Latest post</Link>
          <Link href={'/'} className='link' >About</Link>
          <Link href={'/'} className='link' >Contact</Link>
        </nav>
      </header>

      <div className='blog-cont'>
        {posts.map((post) => (
          <div key={post.id} className='blog-card'>
            <Image src={post.image} alt='blog-1' className='blog-img'></Image>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link href={`/posts/${post.id}`}>
              <button>See Post</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
