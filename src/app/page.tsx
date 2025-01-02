import Link from 'next/link';
import './globals.css';
import blog1 from './images/blog1.jpg';
import blog2 from './images/blog2.jpg';
import blog3 from './images/blog3.jpg';
import blog4 from './images/blog4.jpg';
// images
import Image from 'next/image';
import Header from './components/header';
import Footer from './components/footer';

const posts = [
  { id: 1, image: blog1, title: 'Artificial intelligence', content: 'Artificial intelligence (AI) is the science and engineering of creating intelligent machines that can perform tasks that typically require human intelligence.' },
  { id: 2, image: blog2, title: 'Impact Of Technology', content: 'The impact of technology on society is profound and multifaceted, touching nearly every aspect of our lives..' },
  { id: 3, image: blog3, title: 'Future 2025 Agentic AI', content: 'Agentic AI refers to artificial intelligence systems that are capable of performing tasks autonomously, acting as agents that make decisions and take actions in the real world without constant human intervention or supervision. .' },
  { id: 4, image: blog4, title: 'Programming Languages', content: 'When discussing valuable programming languages (often abbreviated as "valuable programming languages" or "top programming languages"), the answer can vary depending on factors like industry trends, job opportunities etc .' },
];

export default function Home() {
  return (
    <div className='blog-page'>
      <Header/>

      <div className='blog-cont'>
        {posts.map((post) => (
          <div key={post.id} className='blog-card'>
            <Image src={post.image} alt={post.title} className='blog-img'></Image>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link href={`/posts/${post.id}`}>
              <button>See Post</button>
            </Link>
          </div>
        ))}
      </div>

      <Footer/>
    </div>
  );
}
