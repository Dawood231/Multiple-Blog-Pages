"use client";
import { useState } from "react";
import Link from "next/link";
import "./post.css";
import { title } from "process";

const posts = [
  {
    id: 1,
    title: "Artificial intelligence",
    content:
      "Artificial intelligence (AI) is the science and engineering of creating intelligent machines that can perform tasks that typically require human intelligence. These tasks include visual perception, decision making, and language translation. Artificial intelligence (AI) is the science and engineering of creating intelligent machines that can perform tasks that typically require human intelligence. These tasks include visual perception, decision making, and language translation. Artificial intelligence (AI) is the science and engineering of creating intelligent machines that can perform tasks that typically require human intelligence. These tasks include visual perception, decision making, and language translation. Artificial intelligence (AI) is the science and engineering of creating intelligent machines that can perform tasks that typically require human intelligence. These tasks include visual perception, decision making, and language translation. Artificial intelligence (AI) is the science and engineering of creating intelligent machines that can perform tasks that typically require human intelligence. These tasks include visual perception, decision making, and language translation. Artificial intelligence (AI) is the science and engineering of creating intelligent machines that can perform tasks that typically require human intelligence. These tasks include visual perception, decision making, and language translation. Artificial intelligence (AI) is the science and engineering of creating intelligent machines that can perform tasks that typically require human intelligence. These tasks include visual perception, decision making, and language translation.",
  },
  {
    id: 2,
    title: "Impact Of Technology",
    content: "Technology is essential to modern living and is closely connected to almost every part of our daily lives. From waking up to a digital alarm to managing tasks with AI-powered assistants, technology has significantly transformed how we communicate, work, learn, and entertain ourselves. It is not just a tool; it is a driving force that fosters innovation, connects communities, and shapes the future. As our reliance on technology increases, understanding the importance of technology becomes essential for effectively navigating this dynamic and ever-evolving landscape.But what exactly is technology? At its core, technology refers to the application of scientific knowledge for practical purposes, enabling innovation and problem-solving. It encompasses various domains,including information technology, healthcare, education, and automation.Over the decades, technological advancements have revolutionized the way we live, bridging gaps and opening new boundaries, highlighting the growing importance of technology in shaping our world.As technology has transformed every aspect of our daily lives, making tasks easier, faster, and more efficient, its importance continues to grow. Below are 15 key ways technology plays a vital role in our daily routines, highlighting its deep influence on both our personal and professional lives.Improved Communication: Technology has drastically changed how we stay connected. With tools like instant messaging, video calls, and social media, communicating across the globe is quicker and more convenient. Whether it’s connecting with family, friends, or colleagues, technology has made real-time communication a breeze, breaking down geographical barriers and making the world feel smaller.Easy Access to Information: The internet has become the ultimate knowledge hub, offering an unparalleled resource for learning and research. Whether it’s for academic purposes, work, or simply satisfying curiosity, we now have the ability to access information on almost any topic within seconds. This ease of access has democratized education and information, empowering individuals worldwide.Advancements in Healthcare: From telemedicine services to health tracking devices, technology has greatly enhanced healthcare delivery. Patients can consult doctors remotely, monitor vital signs using wearable tech, and benefit from more accurate diagnostics powered by AI. These innovations make healthcare more accessible, efficient, and personalized, leading to better patient outcomes.Revolutionized Education: E-learning platforms, digital classrooms, and interactive apps have reshaped how we learn. Students of all ages can access educational materials at their convenience, participate in virtual lessons, and collaborate with peers globally. This flexibility and accessibility make learning more personalized, breaking down traditional barriers to education.Enhanced Transportation: Transportation has been streamlined with technology, making travel more efficient. GPS navigation, ride-sharing apps, and electric vehicles have revolutionized how we get from place to place. Real-time traffic updates, eco-friendly options, and seamless booking systems make daily commutes and long-distance travel easier and more sustainable.Financial Management: Online banking, digital wallets, and budgeting apps have simplified financial management. Technology allows for quick, secure transactions, while budgeting tools help individuals track spending, save money, and manage investments. Mobile payment systems have also made it possible to conduct transactions with just a tap, improving both convenience and security.Access to Entertainment: Streaming services, video games, and digital content platforms have redefined entertainment. Movies, music, and TV shows are available on-demand, making it easier than ever to unwind with personalized content. Technology also brings immersive experiences through gaming and interactive media, transforming leisure activities into engaging, dynamic experiences.Smart Homes: The rise of smart home technology has brought greater convenience and efficiency to our living spaces. Smart thermostats, lights, locks, and voice-controlled assistants help automate tasks and improve energy management. With the ability to control devices remotely, homes are becoming more connected, secure, and comfortable.Increased Work Efficiency: Remote work tools, project management software, and communication platforms have transformed workplaces. Teams can collaborate across distances, manage tasks more efficiently, and streamline workflows. Technology makes it possible to work from anywhere, giving rise to flexible job opportunities and increasing overall productivity.E-commerce Revolution: Online shopping has made purchasing goods and services more convenient. From groceries to electronics, we can browse, compare prices, and buy products with a few clicks. E-commerce platforms also personalize recommendations based on browsing history, enhancing the shopping experience and creating a seamless, time-saving process.Improved Security: Security technology, from surveillance systems to biometric authentication, helps keep our homes, workplaces, and personal data safe. Smart locks, motion sensors, and surveillance cameras provide better protection, while encryption and two-factor authentication secure online transactions and communications, giving us peace of mind.Social Connectivity: Social media platforms, messaging apps, and online communities have changed the way we stay connected. Through these platforms, we can keep in touch with loved ones, share experiences, and discover new connections worldwide. This global connectivity has also helped amplify social causes and foster a sense of community on a larger scale.Sustainable Living: Technology is playing a crucial role in sustainability efforts. Solar panels, electric vehicles, and energy-efficient appliances are making it easier to reduce our carbon footprint. Smart grids and waste management solutions are also contributing to more sustainable practices, enabling people to live in ways that are kinder to the planet.Travel Convenience: Technology has made traveling more convenient and accessible. Booking apps, online ticketing, and travel management tools help plan trips efficiently. Additionally, digital maps and translation apps ease navigation and communication in foreign countries, making global travel smoother and more enjoyable.Personal Development: Technology empowers personal growth by providing access to self-improvement resources. From fitness trackers to language learning apps, individuals can monitor progress, set goals, and develop new skills. Technology also offers mental health apps and mindfulness tools that support emotional well-being and resilience.Benefits of Technology in Our LivesTechnology has brought numerous advantages that have improved the quality of life, making tasks easier, faster, and more efficient. Let's discuss all the benefits in detail: Increased Efficiency and Productivity: Technology has significantly enhanced efficiency in both personal and professional settings. Tools such as project management software, cloud computing, and AI-powered automation allow tasks to be completed faster and with greater accuracy. This enables individuals and businesses to concentrate on more strategic activities, minimizing the time spent on repetitive manual tasks.Enhanced Communication: The rise of smartphones, social media, and video conferencing has transformed communication. Whether sending a message, making a video call, or sharing information worldwide, technology enables instant connectivity regardless of location. This has brought people closer together, enhancing both personal and professional relationships.Access to Information and Knowledge: One of the greatest benefits of technology is the ability to access vast amounts of information at our fingertips. The internet, along with platforms like online courses, eBooks, and search engines, has made learning and research easier than ever. Knowledge is now more accessible, making it possible for people from all walks of life to stay informed and up-to-date.Covenience in Daily Tasks: Technology simplifies everyday tasks, enhancing convenience and saving time. Such as online banking, shopping apps, smart home devices, and navigation systems, all of which improve our daily lives. Tasks that once required significant effort, such as managing finances, grocery shopping, or adjusting home temperatures, are now easier and more efficient.Improved Healthcare: Advances in technology have significantly enhanced the healthcare industry. Medical devices, telemedicine, and wearable health trackers allow for better monitoring of personal health. AI-driven diagnostic tools provide doctors with enhanced capabilities for diagnosing and treating conditions more accurately and swiftly. This leads to improved outcomes and faster care.Better Work-Life Balance: Remote work tools and collaboration platforms have created more flexible working arrangements. Technology enables people to work from home, which reduces commute times and promotes a better work-life balance. With access to online communication and project management tools, tasks can be completed more efficiently, allowing for more free time to engage in personal activities.Innovation and Economic Growth: Technology has driven innovation across various industries, significantly contributing to economic growth. Advances in fields like renewable energy and artificial intelligence are generating new business opportunities and even entire new industries. By enabling both startups and established companies to optimize their operations and grow quickly, technology plays a vital role in economic development and job creation.Environmental Sustainability: Technology plays a vital role in environmental sustainability. Innovations like solar panels, wind turbines, and electric vehicles help reduce our carbon footprint and reliance on fossil fuels. Smart grids, energy-efficient appliances, and waste management systems further contribute to energy conservation and environmental protection.Access to Entertainment: Technology has transformed the entertainment industry, offering more accessible and personalized content. Streaming services, gaming platforms, and digital media allow consumers to watch movies, listen to music, or play games at their convenience. With recommendations powered by algorithms, entertainment options are tailored to individual preferences, making leisure time more enjoyable.Global Connectivity: The rise of social media, communication apps, and the internet has made the world a more connected place. People can now interact with others from diverse cultures, countries, and backgrounds. This global connectivity fosters cultural exchange and collaboration, and it even holds the potential for solving global challenges by bringing together individuals from all corners of the world.Types of Technology in Our Daily Life Communication Technology: Communication technology has transformed the way we connect with others. From mobile phones and instant messaging apps to social media platforms, it has become easier to stay in touch with family, friends, and colleagues around the world. Video conferencing tools like Zoom and Skype enable face-to-face meetings without geographical barriers.Information Technology (IT): Information technology involves the use of computers, software, and networks to store, retrieve, and transmit information. It drives the digital world, facilitating access to information through the internet, search engines, and databases. IT is essential in business, education, and healthcare, enabling faster decision-making, data processing, and communication.To stay ahead in the field of Information Technology, upGrad offers programs in Cloud Computing and Data Analytics, which can help you master essential skills for the modern workforce3. Medical Technology: Medical technology has significantly improved healthcare systems and patient outcomes. Devices such as MRI machines, pacemakers, and wearable fitness trackers monitor and enhance our health. Furthermore, telemedicine platforms facilitate remote consultations, ensuring that healthcare services are more accessible and efficient.4. Transportation Technology: Transportation technology has streamlined how we travel. GPS systems and apps like Google Maps assist with navigation, while ride-sharing services like Uber and Lyft have transformed urban mobility. Electric vehicles (EVs) contribute to sustainability efforts, and self-driving car technology is set to revolutionize the future of transportation.5. Energy Technology: Energy technology explores how we produce, store, and consume energy. Solar panels, wind turbines, and smart grids help reduce reliance on traditional energy sources while improving energy efficiency. Home automation systems, such as smart thermostats and LED lighting, further enhance energy conservation.6. Entertainment Technology: Entertainment technology encompasses devices and platforms that deliver content, such as streaming services (Netflix, Spotify), video gaming consoles, and virtual reality (VR) systems. These technologies provide on-demand access to movies, music, games, and immersive experiences to cater to a wide range of preferences.7. Consumer Technology: Consumer technology includes everyday devices that assist us in our personal lives. Smartphones, laptops, tablets, and smartwatches fall under this category. These devices keep us connected, organized, and productive, with applications that serve work, entertainment, fitness, and communication needs.8. Automation and Robotics Technology: Automation and robotics technology is rapidly transforming industries and households. In manufacturing, robots enhance efficiency and accuracy in production lines. In homes, robotic vacuum cleaners, lawnmowers, and smart home devices simplify daily tasks, reducing manual effort and improving convenience.9. Financial Technology (FinTech): Financial technology is reshaping our approach to money management. Online banking, digital wallets (such as PayPal and Apple Pay), and peer-to-peer payment systems (like Venmo and Zelle) have made financial transactions more convenient and secure. Additionally, fintech innovations like blockchain and cryptocurrency are redefining how we invest, transfer, and store money.10. Educational Technology: Educational technology (EdTech) includes tools and platforms designed to improve learning experiences. From online courses and virtual classrooms to educational apps and interactive e-books, technology has made learning more engaging and accessible. It allows students to learn at their own pace and from any location in the world.11. Environmental Technology: Environmental technology focuses on innovations aimed at reducing our impact on the environment. This includes renewable energy solutions (like solar and wind), water purification systems, and waste management technologies. Green technology helps individuals and organizations adopt more sustainable practices and reduce their carbon footprints.",
  },
  {
    id: 3,
    title: "Agentic AI Future 2025",
    content: "Agentic AI typically refers to a form of artificial intelligence that exhibits agency — the capacity to make independent decisions, take actions, and influence its environment based on its goals, objectives, or programming. Unlike basic AI systems that simply respond to inputs with pre-programmed or learned responses, agentic AI would possess a level of autonomy and purposeful action in its behavior.Here are key characteristics and components that define Agentic AI:1. AutonomyAgentic AI can make decisions without direct human intervention. It doesn't just follow instructions; it can assess situations, prioritize tasks, and pursue long-term objectives.Autonomy could range from limited decision-making in constrained environments (like a recommendation system or robot in a factory) to full autonomy in open-ended settings (like advanced general-purpose AI).2. Goal-Oriented BehaviorIt operates based on a set of goals or objectives. These could be explicitly programmed by humans or learned through interaction with its environment. It works to achieve these goals, adapting its actions as needed.For example, an AI designed to optimize energy usage in a smart building would have the goal of minimizing energy waste and could dynamically adjust heating, cooling, and lighting based on real-time conditions.3. Learning and AdaptationMany agentic AI systems incorporate machine learning and reinforcement learning techniques to adapt their strategies and behavior over time.For instance, an AI might adjust its decision-making model based on the feedback it receives from its actions (positive or negative outcomes) to improve performance in future tasks.4. Environment InteractionAn agentic AI is able to perceive and interact with its environment. This could involve sensing the environment (through sensors or data) and then taking actions that influence or change that environment to achieve its goals.In autonomous vehicles, for example, the AI senses the surrounding environment (other cars, pedestrians, road conditions) and makes decisions to drive safely and efficiently.5. PersistenceUnlike reactive systems that might reset or only work in short bursts, agentic AI can maintain a long-term perspective on its objectives. It can plan actions across a series of steps and handle complex situations over time, adjusting its strategy as needed.6. Decision-Making and ReasoningAgentic AI incorporates decision-making algorithms, which might include logic-based reasoning, probabilistic models, or heuristic approaches to choose the best course of action given its current goals and understanding of the environment.It may also incorporate meta-reasoning, where it evaluates its own thinking process and potentially adjusts its approach.7. Ethical and Safety ConcernsGiven its ability to act autonomously, agentic AI systems present unique ethical and safety challenges. Ensuring they align with human values, avoid unintended consequences, and maintain transparency is crucial. Many discussions around AGI (Artificial General Intelligence) and safety are focused on how to control and align agentic AI systems with human interests.Examples of Agentic AI in Practice:Robotics: Robots with agentic capabilities might be used in manufacturing, delivery, or even in healthcare. They don't just perform repetitive tasks but can adapt to changing conditions, solve problems, and optimize their behavior over time.Autonomous Vehicles: Self-driving cars are a type of agentic AI. They make real-time decisions to navigate roads, avoid obstacles, and follow traffic laws while responding to dynamic conditions.Intelligent Personal Assistants: While current assistants like Siri, Alexa, and Google Assistant are reactive (they wait for commands), an agentic version would take more proactive actions based on an understanding of the user's needs and goals.Autonomous Trading Systems: In finance, agentic AI might be used to make independent decisions regarding buying, selling, or trading based on market conditions and financial objectives, without human intervention.Challenges and Concerns:Alignment with Human Values: Ensuring agentic AI acts in ways that align with human interests and societal values is a major research area in AI safety.Autonomy vs. Control: While autonomy is a defining feature of agentic AI, ensuring that such systems remain under appropriate human oversight is critical to avoid negative or harmful outcomes.Accountability: Determining who is responsible when an agentic AI makes a mistake or causes harm is a legal and ethical issue.In summary, agentic AI is a more advanced and autonomous form of AI that can take action based on its own goals, learn from its experiences, and adapt to changing conditions. It’s a powerful concept, but its development requires careful attention to ethical considerations and safety mechanisms to ensure it benefits society.",
  },
  {
    id:4,
    title: "Programing Languages",
    content:"The most valuable programming language can vary depending on context, such as industry, job market, or the specific use case you're focusing on. However, some languages consistently stand out as highly valuable in terms of job opportunities, versatility, demand, and community support. Here's a breakdown of the most valuable programming languages across different areas:1. PythonUse Cases: Data science, machine learning, web development, automation, scientific computing, artificial intelligence (AI), cybersecurity, DevOps, scripting.Why It's Valuable:Versatile and Easy to Learn: Python is beginner-friendly but powerful enough for advanced tasks.Data Science & Machine Learning: Libraries like TensorFlow, PyTorch, and scikit-learn make it the go-to language for AI and machine learning.Web Development: Frameworks like Django and Flask make web development easy.Demand: There's high demand for Python developers in various industries, including tech, finance, and healthcare.Job Market: Extremely high demand, particularly for data scientists, machine learning engineers, and full-stack developers.    2. JavaScriptUse Cases: Web development (front-end, back-end), full-stack development, mobile apps (via frameworks like React Native), game development.Why It's Valuable:Web Development: JavaScript is essential for web development, both on the client-side (using frameworks like React, Angular, or Vue) and server-side (with Node.js).Ecosystem: The JavaScript ecosystem has a huge variety of libraries and tools that simplify development and speed up the process.Popularity: It's the most widely used language for web development, and with the rise of full-stack JavaScript development (e.g., using Node.js on the backend and React on the frontend), JavaScript developers are in high demand.Job Market: Very high demand, especially for full-stack developers.3. JavaUse Cases: Enterprise applications, mobile apps (Android), web applications, big data, backend development.Why It's Valuable:Enterprise Use: Java is widely used in large-scale enterprise environments due to its robustness, scalability, and performance.Android Development: Java remains one of the primary languages for Android development (though Kotlin is gaining popularity).Mature Ecosystem: The Java ecosystem is mature, with strong tools for building large-scale systems.Job Market: Strong demand in corporate and enterprise environments, particularly in financial services, banking, and large systems development.Job Market: Stable demand, especially in legacy systems and Android development.4. C / C++Use Cases: Systems programming, embedded systems, game development, high-performance applications, operating systems, real-time computing.Why It's Valuable:Performance: C and C++ are known for their speed and low-level memory control, which is why they're used in performance-critical applications like operating systems, databases, and games.Industry Use: Widely used in systems programming, high-frequency trading, hardware development, and other domains requiring optimal performance.Legacy: Many older systems and libraries are written in C/C++, so maintaining and updating them requires proficiency in these languages.Job Market: High demand in specialized areas like embedded systems, game engines, and performance-critical applications (e.g., trading systems).5. SQL (Structured Query Language)Use Cases: Database management, querying and manipulating relational databases.Why It's Valuable:Data Manipulation: SQL is the primary language for interacting with relational databases like MySQL, PostgreSQL, and SQL Server.Data Engineering: Understanding SQL is essential for data engineers, analysts, and anyone working with large datasets.Industry Adoption: Almost every application uses a database, and knowledge of SQL is required to query and manipulate data efficiently.Job Market: Essential for roles like data analyst, database administrator, and back-end developer.6. Go (Golang)Use Cases: Cloud services, backend systems, microservices, networking tools, concurrent programming.Why It's Valuable:Performance: Go is known for being fast and efficient with its concurrency model, making it great for building scalable and performant backend systems.Cloud and Microservices: Go is widely used in cloud computing, particularly for microservices architectures, and in tools like Kubernetes.Simplicity: Go's syntax is simple and its compilation is quick, making it a favorite for building high-performance applications with low overhead.Job Market: Growing demand, especially in companies focusing on cloud computing and microservices.7. SwiftUse Cases: iOS app development, macOS app development, server-side programming.Why It's Valuable:iOS Development: Swift is the primary language for building apps for iPhones, iPads, and Macs. As mobile apps continue to dominate,Swift skills are highly sought after.Modern Syntax: Swift offers a modern, safe, and fast programming experience compared to Objective-C.Ecosystem: Strong Apple ecosystem, including development tools like Xcode, ensures high demand for Swift developers.Job Market: Very high demand in the mobile app development sector, particularly for iOS apps.8. KotlinUse Cases: Android development, backend development, web applications.Why It's Valuable:Android Development: Kotlin is the preferred language for Android app development, offering more safety features and a more modern syntax than Java.Interoperability with Java: Kotlin is fully interoperable with Java, making it easy to integrate with existing Java-based systems.Growing Ecosystem: Kotlin is gaining traction outside Android development as well, with tools for web and server-side programming.Job Market: High demand in Android development and increasing demand in other domains like web development.9. RustUse Cases: Systems programming, performance-critical applications, WebAssembly, embedded systems.Why It's Valuable:Memory Safety: Rust offers memory safety guarantees without a garbage collector, making it ideal for high-performance and concurrent systems without risking memory leaks or data races.Performance: Rust is known for its speed, making it a popular choice for performance-critical applications like game engines, blockchain systems, and operating systems.Growing Popularity: Rust has been consistently ranked as one of the most loved languages, with strong community support and increasing industry adoption.Job Market: Demand is growing in industries like embedded systems, blockchain, and performance-critical applications.10. TypeScriptUse Cases: Web development (front-end and back-end), full-stack development, enterprise applications.Why It's Valuable:Superset of JavaScript: TypeScript adds static typing to JavaScript, helping to prevent bugs and improve code maintainability, making it particularly valuable in large codebases.Popularity: TypeScript has become very popular in the web development community, especially with frameworks like Angular, React, and Vue.Adoption: Many companies are transitioning from JavaScript to TypeScript due to the benefits of better tooling and safer code.Job Market: High demand in web development, particularly for larger projects.Final Thoughts:The most valuable programming language depends heavily on what you want to do. Here's a quick guide:For AI and Data Science: Python is the clear leader.For Web Development: JavaScript (and TypeScript) are essential.For Mobile Development: Swift (iOS) and Kotlin (Android) are key.For Performance and Systems: C/C++, Rust, and Go shine.For Enterprise Applications: Java remains dominant.For Databases: SQL is indispensable.For job market trends, Python, JavaScript, and Java tend to dominate across industries, but emerging fields like blockchain, AI, and systems programming also make languages like Rust and Go increasingly valuable.",

  },
]

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
