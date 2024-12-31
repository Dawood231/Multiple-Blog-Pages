"use client";
import { useState } from "react";
import Link from "next/link";
import "./post.css";

const posts = [
  {
    id: 1,
    title: "Artificial intelligence",
    content:
      "Artificial intelligence (AI) is the science and engineering of creating intelligent machines that can perform tasks that typically require human intelligence. These tasks include visual perception, decision making, and language translation. Artificial intelligence (AI) is the science and engineering of creating intelligent machines that can perform tasks that typically require human intelligence. These tasks include visual perception, decision making, and language translation. Artificial intelligence (AI) is the science and engineering of creating intelligent machines that can perform tasks that typically require human intelligence. These tasks include visual perception, decision making, and language translation. Artificial intelligence (AI) is the science and engineering of creating intelligent machines that can perform tasks that typically require human intelligence. These tasks include visual perception, decision making, and language translation. Artificial intelligence (AI) is the science and engineering of creating intelligent machines that can perform tasks that typically require human intelligence. These tasks include visual perception, decision making, and language translation. Artificial intelligence (AI) is the science and engineering of creating intelligent machines that can perform tasks that typically require human intelligence. These tasks include visual perception, decision making, and language translation. Artificial intelligence (AI) is the science and engineering of creating intelligent machines that can perform tasks that typically require human intelligence. These tasks include visual perception, decision making, and language translation.",
  },
  {
    id: 2,
    title: "Second Blog Post",
    content: "This is the content of the second post.",
  },
  {
    id: 3,
    title: "Third Blog Post",
    content: "This is the content of the third post.",
  },
];

interface Comment {
  user: string;
  text: string;
  date: string;
}

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find((post) => post.id === parseInt(params.id));

  const [comments, setComments] = useState<Comment[]>([]);
  const [comment, setComment] = useState("");

  if (!post) {
    return <p>Post not found.</p>;
  }

  const handleAddComment = () => {
    if (comment.trim()) {
      const newComment: Comment = {
        user: `User${comments.length + 1}`, // Corrected string interpolation
        text: comment,
        date: new Date().toLocaleString(),
      };
      setComments([...comments, newComment]);
      setComment("");
    }
  };

  return (
    <div className="post-page">
      <Link href="/" className="link-back">
        <button style={{ marginBottom: "20px" }}>Back to Home</button>
      </Link>

      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <div className="comment-box">
        <h2>Comments:</h2>
        {comments.map((comment, index) => (
          <div className="user-comment" key={index}>
            <span>
              <strong className="user">{comment.user}</strong> ({comment.date}):
            </span>
            <p>{comment.text}</p>
          </div>
        ))}

        <div className="comment-inner"> {/* Fixed the typo */}
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
          ></textarea>
          <button onClick={handleAddComment}>Add Comment</button>
        </div>
      </div>
    </div>
  );
}
