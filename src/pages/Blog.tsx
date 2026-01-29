import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Shield, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Blog post data structure
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "how-to-install-clawdbot",
    title: "How to Install Moltbot in 5 Minutes (Step-by-Step Guide)",
    excerpt: "Get your personal AI assistant running locally on your machine. Works on Mac, Windows, and Linux. Connect to WhatsApp, Telegram, Discord, and more.",
    publishDate: "January 29, 2026",
    readTime: "5 min read",
    category: "Tutorial"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Security Blog | Practical Guides & Insights | Jalwan</title>
        <meta name="description" content="Security insights, practical guides, and tips for building secure SaaS applications. Learn about AI assistants, automation, and security best practices." />
        <meta name="keywords" content="security blog, SaaS security, AI tutorials, Moltbot, security guides, application security" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Security Blog | Jalwan" />
        <meta property="og:description" content="Practical guides and security insights for SaaS applications" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jalwan.app/blog" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Security Blog | Jalwan" />
        <meta name="twitter:description" content="Security insights and practical guides for building secure applications" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://jalwan.app/blog" />
      </Helmet>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container">
          {/* Hero section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Security Insights & Guides
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1] mb-6 heading-display">
              Blog
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Practical guides, security insights, and tips for building secure SaaS applications.
            </p>
          </div>

          {/* Blog posts grid */}
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-card border border-border rounded-3xl p-8 md:p-10 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        <span>{post.publishDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-semibold text-heading mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    Read article
                    <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
