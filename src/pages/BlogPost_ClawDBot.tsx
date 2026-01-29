import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Copy, Check, Terminal, AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ClawDBotInstallation = () => {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates({ ...copiedStates, [id]: true });
      setTimeout(() => {
        setCopiedStates({ ...copiedStates, [id]: false });
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const CodeBlock = ({ code, id, language = "bash" }: { code: string; id: string; language?: string }) => (
    <div className="relative group my-6">
      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={() => copyToClipboard(code, id)}
          className="p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:bg-accent transition-colors"
          aria-label="Copy to clipboard"
        >
          {copiedStates[id] ? (
            <Check className="h-4 w-4 text-primary" />
          ) : (
            <Copy className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
      </div>
      <pre className="bg-surface-elevated border border-border rounded-xl p-6 overflow-x-auto">
        <code className="text-sm font-mono text-foreground">{code}</code>
      </pre>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <article className="container max-w-3xl">
          {/* Back to blog link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Link>

          {/* Article header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                Tutorial
              </span>
              <span className="text-sm text-muted-foreground">January 29, 2026</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">5 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1] mb-6 heading-display">
              How to Install ClawDBot in 5 Minutes (Step-by-Step Guide)
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get ClawDBot running on your system quickly with this comprehensive installation guide, including common troubleshooting solutions.
            </p>
          </header>

          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Setting up automation tools shouldn't take hours. Most developers waste time fighting installation errors instead of building features.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                This guide shows you exactly how to install ClawDBot on your system in under 5 minutes—whether you're on Windows, macOS, or Linux.
              </p>
            </section>

            {/* System Requirements */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-heading mb-6 heading-display">
                System Requirements
              </h2>
              
              <div className="bg-surface-elevated border border-border rounded-xl p-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Node.js</strong>
                      <span className="text-muted-foreground"> — Version 18.x or higher</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">npm or yarn</strong>
                      <span className="text-muted-foreground"> — Package manager (comes with Node.js)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Operating System</strong>
                      <span className="text-muted-foreground"> — Windows 10+, macOS 11+, or Linux (Ubuntu 20.04+)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Disk Space</strong>
                      <span className="text-muted-foreground"> — At least 500MB free space</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-foreground leading-relaxed">
                Don't have Node.js installed? Download it from <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">nodejs.org</a> before continuing.
              </p>
            </section>

            {/* Installation Steps */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-heading mb-6 heading-display">
                Step-by-Step Installation
              </h2>

              {/* Step 1 */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-heading mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">1</span>
                  Verify Node.js Installation
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  First, confirm that Node.js is installed correctly on your system:
                </p>
                <CodeBlock
                  id="check-node"
                  code="node --version"
                />
                <p className="text-foreground leading-relaxed">
                  You should see something like <code className="px-2 py-1 bg-muted rounded text-sm font-mono">v18.17.0</code> or higher.
                </p>
              </div>

              {/* Step 2 */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-heading mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">2</span>
                  Install ClawDBot Globally
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Install ClawDBot globally using npm. This makes the <code className="px-2 py-1 bg-muted rounded text-sm font-mono">clawdbot</code> command available system-wide:
                </p>
                <CodeBlock
                  id="install-global"
                  code="npm install -g clawdbot"
                />
                <div className="bg-accent/50 border border-primary/20 rounded-xl p-5 mt-4">
                  <div className="flex gap-3">
                    <Terminal className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground mb-1">Using Yarn?</p>
                      <p className="text-sm text-muted-foreground">
                        Run <code className="px-2 py-0.5 bg-background rounded text-xs font-mono">yarn global add clawdbot</code> instead.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-heading mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">3</span>
                  Verify Installation
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Check that ClawDBot was installed successfully:
                </p>
                <CodeBlock
                  id="verify-install"
                  code="clawdbot --version"
                />
                <p className="text-foreground leading-relaxed">
                  You should see the version number displayed. If you get an error, see the troubleshooting section below.
                </p>
              </div>

              {/* Step 4 */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-heading mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">4</span>
                  Initialize Your First Project
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Navigate to your project directory and initialize ClawDBot:
                </p>
                <CodeBlock
                  id="init-project"
                  code={`cd your-project-folder
clawdbot init`}
                />
                <p className="text-foreground leading-relaxed">
                  Follow the interactive prompts to configure your bot. This creates a <code className="px-2 py-1 bg-muted rounded text-sm font-mono">clawdbot.config.js</code> file in your project.
                </p>
              </div>

              {/* Step 5 */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-heading mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">5</span>
                  Start ClawDBot
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  You're ready! Start ClawDBot with:
                </p>
                <CodeBlock
                  id="start-bot"
                  code="clawdbot start"
                />
                <p className="text-foreground leading-relaxed">
                  Your bot is now running. Press <code className="px-2 py-1 bg-muted rounded text-sm font-mono">Ctrl+C</code> to stop it.
                </p>
              </div>
            </section>

            {/* Troubleshooting */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-heading mb-6 heading-display">
                Common Issues & Solutions
              </h2>

              <div className="space-y-6">
                {/* Issue 1 */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex gap-3 mb-3">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <h3 className="text-xl font-semibold text-heading">
                      "command not found: clawdbot"
                    </h3>
                  </div>
                  <p className="text-foreground leading-relaxed mb-3 ml-8">
                    <strong>Cause:</strong> Your system's PATH doesn't include npm's global bin directory.
                  </p>
                  <p className="text-foreground leading-relaxed ml-8">
                    <strong>Solution:</strong> Find npm's global bin path and add it to your PATH:
                  </p>
                  <div className="ml-8">
                    <CodeBlock
                      id="npm-bin"
                      code="npm config get prefix"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm ml-8">
                    Add the returned path + <code className="px-2 py-0.5 bg-muted rounded text-xs font-mono">/bin</code> to your system's PATH variable.
                  </p>
                </div>

                {/* Issue 2 */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex gap-3 mb-3">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <h3 className="text-xl font-semibold text-heading">
                      "EACCES: permission denied"
                    </h3>
                  </div>
                  <p className="text-foreground leading-relaxed mb-3 ml-8">
                    <strong>Cause:</strong> npm doesn't have permission to install global packages.
                  </p>
                  <p className="text-foreground leading-relaxed ml-8 mb-3">
                    <strong>Solution:</strong> Use one of these approaches:
                  </p>
                  <div className="ml-8 space-y-4">
                    <div>
                      <p className="font-medium text-foreground mb-2">Option 1: Use sudo (macOS/Linux)</p>
                      <CodeBlock
                        id="sudo-install"
                        code="sudo npm install -g clawdbot"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-2">Option 2: Fix npm permissions (Recommended)</p>
                      <CodeBlock
                        id="fix-permissions"
                        code={`mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile
source ~/.profile
npm install -g clawdbot`}
                      />
                    </div>
                  </div>
                </div>

                {/* Issue 3 */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex gap-3 mb-3">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <h3 className="text-xl font-semibold text-heading">
                      "Module not found" errors
                    </h3>
                  </div>
                  <p className="text-foreground leading-relaxed mb-3 ml-8">
                    <strong>Cause:</strong> Dependencies weren't installed correctly.
                  </p>
                  <p className="text-foreground leading-relaxed ml-8">
                    <strong>Solution:</strong> Clear npm cache and reinstall:
                  </p>
                  <div className="ml-8">
                    <CodeBlock
                      id="clear-cache"
                      code={`npm cache clean --force
npm uninstall -g clawdbot
npm install -g clawdbot`}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Success section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-primary/10 to-accent/30 border border-primary/20 rounded-3xl p-8 md:p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold text-heading mb-4 heading-display">
                  You're All Set!
                </h2>
                <p className="text-lg text-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  ClawDBot is now installed and ready to automate your workflows. Check out the official documentation to learn about advanced features and configuration options.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8 py-6 text-base font-medium rounded-xl">
                    <a href="https://clawdbot.com/docs" target="_blank" rel="noopener noreferrer">
                      Read Documentation
                    </a>
                  </Button>
                  <Link to="/blog">
                    <Button variant="outline" size="lg" className="px-8 py-6 text-base font-medium rounded-xl w-full sm:w-auto">
                      Back to Blog
                    </Button>
                  </Link>
                </div>
              </div>
            </section>

            {/* Need help CTA */}
            <section className="border-t border-border pt-12">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-heading mb-4">
                  Need Help with Your App's Security?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  While ClawDBot helps with automation, I help secure your SaaS app with manual security testing that finds what scanners miss.
                </p>
                <Link to="/#contact">
                  <Button size="lg" className="px-8 py-6 text-base font-medium rounded-xl">
                    Let's talk security
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ClawDBotInstallation;
