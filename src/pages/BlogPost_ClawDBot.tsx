import { useState } from "react";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>How to Install Moltbot in 5 Minutes (Complete Guide 2026)</title>
        <meta name="description" content="Step-by-step guide to install Moltbot, your personal AI assistant that runs locally. Connect to WhatsApp, Telegram, Discord, and more. Works on Mac, Windows, and Linux." />
        <meta name="keywords" content="Moltbot, ClawDBot, AI assistant, personal AI, local AI, install Moltbot, AI chat bot, WhatsApp AI, Telegram bot, Discord bot, Claude AI, GPT assistant" />
        
        {/* Open Graph */}
        <meta property="og:title" content="How to Install Moltbot in 5 Minutes | Complete Setup Guide" />
        <meta property="og:description" content="Get your personal AI assistant running locally in minutes. Moltbot connects to WhatsApp, Telegram, Discord, and more—all running on YOUR machine." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://jalwan.app/blog/how-to-install-clawdbot" />
        <meta property="article:published_time" content="2026-01-29T00:00:00Z" />
        <meta property="article:author" content="Jalwan" />
        <meta property="article:section" content="Tutorial" />
        <meta property="article:tag" content="AI" />
        <meta property="article:tag" content="Automation" />
        <meta property="article:tag" content="Tutorial" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Install Moltbot: Personal AI Assistant Guide" />
        <meta name="twitter:description" content="Install Moltbot in 5 minutes. Local AI assistant that works with WhatsApp, Telegram, Discord. Privacy-first, open source, fully extensible." />
        
        {/* Canonical */}
        <link rel="canonical" href="https://jalwan.app/blog/how-to-install-clawdbot" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "How to Install Moltbot in 5 Minutes (Step-by-Step Guide)",
            "description": "Get your personal AI assistant running locally on your machine with this comprehensive installation guide—works on Mac, Windows, and Linux.",
            "image": "https://jalwan.app/favicon.svg",
            "author": {
              "@type": "Person",
              "name": "Jalwan"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Jalwan",
              "logo": {
                "@type": "ImageObject",
                "url": "https://jalwan.app/favicon.svg"
              }
            },
            "datePublished": "2026-01-29",
            "dateModified": "2026-01-29",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://jalwan.app/blog/how-to-install-clawdbot"
            },
            "articleSection": "Tutorial",
            "keywords": "Moltbot, AI assistant, personal AI, local AI, installation guide, WhatsApp bot, Telegram bot"
          })}
        </script>
      </Helmet>
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
              How to Install Moltbot in 5 Minutes (Step-by-Step Guide)
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get your personal AI assistant running locally on your machine with this comprehensive installation guide—works on Mac, Windows, and Linux.
            </p>
          </header>

          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-heading mb-6 heading-display">
                What is Moltbot?
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Moltbot is a <strong>personal AI assistant that runs entirely on YOUR machine</strong>. Unlike cloud-based AI tools, your data stays private and local.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                The magic? <strong>One AI assistant across all your chat apps</strong>. Talk to Moltbot on WhatsApp, Telegram, Discord, Slack, Signal, iMessage—it's everywhere you are, powered by Claude or GPT running on your computer.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                It's open source (98.5k GitHub stars), fully extensible, and can actually DO things: browse the web, manage files, control your calendar, run shell commands, and more.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                This guide shows you exactly how to install Moltbot on your system in under 5 minutes—whether you're on Windows, macOS, or Linux.
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
                      <span className="text-muted-foreground"> — Version 22 or higher (required)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">npm, pnpm, or yarn</strong>
                      <span className="text-muted-foreground"> — Package manager (comes with Node.js)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Operating System</strong>
                      <span className="text-muted-foreground"> — macOS, Windows (WSL2 recommended), or Linux</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">AI API Access</strong>
                      <span className="text-muted-foreground"> — Claude Pro/Max or ChatGPT subscription (recommended: Claude Opus 4.5)</span>
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
                  Install Moltbot Globally
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Install Moltbot globally using npm. This makes the <code className="px-2 py-1 bg-muted rounded text-sm font-mono">moltbot</code> command available system-wide:
                </p>
                <CodeBlock
                  id="install-global"
                  code="npm install -g moltbot@latest"
                />
                <div className="bg-accent/50 border border-primary/20 rounded-xl p-5 mt-4">
                  <div className="flex gap-3">
                    <Terminal className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground mb-1">Using pnpm?</p>
                      <p className="text-sm text-muted-foreground">
                        Run <code className="px-2 py-0.5 bg-background rounded text-xs font-mono">pnpm add -g moltbot@latest</code> instead.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-heading mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">3</span>
                  Run the Onboarding Wizard
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Moltbot includes an interactive wizard that guides you through setup—it handles gateway configuration, workspace setup, channel connections, and AI model authorization:
                </p>
                <CodeBlock
                  id="onboard"
                  code="moltbot onboard --install-daemon"
                />
                <p className="text-foreground leading-relaxed mb-3">
                  The wizard will walk you through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4 mb-4">
                  <li>Choosing your AI model (Claude or GPT)</li>
                  <li>Setting up OAuth authentication</li>
                  <li>Configuring your workspace directory</li>
                  <li>Connecting your first chat channel (WhatsApp, Telegram, etc.)</li>
                  <li>Installing the gateway daemon (keeps it running 24/7)</li>
                </ul>
                <div className="bg-accent/50 border border-primary/20 rounded-xl p-5 mt-4">
                  <div className="flex gap-3">
                    <Terminal className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground mb-1">Pro Tip</p>
                      <p className="text-sm text-muted-foreground">
                        The <code className="px-2 py-0.5 bg-background rounded text-xs font-mono">--install-daemon</code> flag sets up Moltbot as a system service so it starts automatically on boot.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-heading mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">4</span>
                  Start the Gateway
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  The Gateway is Moltbot's control plane—it coordinates all channels, sessions, and tools. Start it with:
                </p>
                <CodeBlock
                  id="start-gateway"
                  code="moltbot gateway --port 18789 --verbose"
                />
                <p className="text-foreground leading-relaxed mb-3">
                  You'll see output showing:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Gateway WebSocket server starting on ws://127.0.0.1:18789</li>
                  <li>Connected chat channels (WhatsApp, Telegram, etc.)</li>
                  <li>Available tools and capabilities</li>
                  <li>Control UI accessible at http://localhost:18789</li>
                </ul>
              </div>

              {/* Step 5 */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-heading mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">5</span>
                  Run Initial Security Check
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Before connecting channels, verify everything is configured securely:
                </p>
                <CodeBlock
                  id="doctor-check"
                  code="moltbot doctor"
                />
                <p className="text-foreground leading-relaxed">
                  This command checks your installation, validates security settings, and identifies any configuration issues. Fix any reported problems before proceeding.
                </p>
              </div>

              {/* Step 6 */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-heading mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">6</span>
                  Send Your First Message
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  You're ready! Open WhatsApp, Telegram, or whatever channel you configured, and message your assistant. Try asking:
                </p>
                <CodeBlock
                  id="first-message"
                  code={`Hey! What can you do?

What's the weather today?

Create a reminder for my meeting tomorrow at 2pm`}
                />
                <p className="text-foreground leading-relaxed mb-3">
                  Moltbot will respond with its capabilities and handle your requests. You can also use the CLI to send messages:
                </p>
                <CodeBlock
                  id="cli-message"
                  code={`moltbot agent --message "What's my schedule today?" --thinking high`}
                />
                <div className="bg-accent/50 border border-primary/20 rounded-xl p-5 mt-4">
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground mb-1">Next Steps</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        Explore the <a href="https://docs.molt.bot" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">official documentation</a> to:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        <li>Add more chat channels</li>
                        <li>Install community skills from ClawdHub</li>
                        <li>Connect browser control and system tools</li>
                        <li>Set up voice commands and Canvas UI</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Security Best Practices */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-heading mb-6 heading-display">
                Security Best Practices
              </h2>
              
              <div className="bg-destructive/10 border-l-4 border-destructive rounded-xl p-6 mb-8">
                <div className="flex gap-3 mb-3">
                  <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold text-heading mb-2">Important Security Notice</h3>
                    <p className="text-foreground leading-relaxed">
                      Moltbot runs on YOUR machine with access to your files and system. It connects to real messaging platforms where anyone could potentially message your bot. Follow these security measures to protect your environment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Security tip 1 */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-heading mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Restrict Access to Your Bot
                  </h3>
                  <p className="text-foreground leading-relaxed mb-3">
                    By default, Moltbot uses <strong>pairing mode</strong>—unknown senders get a pairing code and must be approved. To manually configure access, add this to <code className="px-2 py-1 bg-muted rounded text-sm font-mono">~/.clawdbot/moltbot.json</code>:
                  </p>
                  <CodeBlock
                    id="restrict-access"
                    code={`{
  "channels": {
    "telegram": {
      "allowFrom": ["YOUR_TELEGRAM_ID"]
    },
    "whatsapp": {
      "allowFrom": ["YOUR_PHONE_NUMBER"]
    }
  }
}`}
                  />
                  <p className="text-muted-foreground text-sm mt-3">
                    Approve new users with: <code className="px-2 py-1 bg-muted rounded text-xs font-mono">moltbot pairing approve telegram CODE</code>
                  </p>
                </div>

                {/* Security tip 2 */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-heading mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Whitelist Commands Only
                  </h3>
                  <p className="text-foreground leading-relaxed mb-3">
                    Limit which system commands the bot can execute:
                  </p>
                  <CodeBlock
                    id="whitelist-commands"
                    code={`{
  "allowedCommands": ["git", "npm", "curl"],
  "blockedCommands": ["rm -rf", "sudo", "chmod"]
}`}
                  />
                  <p className="text-muted-foreground text-sm mt-3">
                    If the bot gets compromised, it can only run whitelisted commands.
                  </p>
                </div>

                {/* Security tip 3 */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-heading mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Use Minimum-Privilege API Tokens
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    When connecting to services like GitHub or Gmail, use read-only tokens where possible. Never grant full-access permissions unless absolutely necessary.
                  </p>
                </div>

                {/* Security tip 4 */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-heading mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Protect Your Credentials
                  </h3>
                  <p className="text-foreground leading-relaxed mb-3">
                    Secure your credential files with proper permissions:
                  </p>
                  <CodeBlock
                    id="secure-creds"
                    code={`chmod 700 ~/.clawdbot/credentials
chmod 600 .env`}
                  />
                  <p className="text-muted-foreground text-sm mt-3">
                    This prevents other users on your system from accessing your secrets.
                  </p>
                </div>
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
                      "command not found: moltbot"
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
                        code="sudo npm install -g moltbot@latest"
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
npm install -g moltbot@latest`}
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
npm uninstall -g moltbot
npm install -g moltbot@latest`}
                    />
                  </div>
                </div>

                {/* Issue 4 */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex gap-3 mb-3">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <h3 className="text-xl font-semibold text-heading">
                      Bot not responding to messages
                    </h3>
                  </div>
                  <p className="text-foreground leading-relaxed mb-3 ml-8">
                    <strong>Cause:</strong> Pairing wasn't approved after setup.
                  </p>
                  <p className="text-foreground leading-relaxed ml-8">
                    <strong>Solution:</strong> Check and approve pending pairings:
                  </p>
                  <div className="ml-8">
                    <CodeBlock
                      id="approve-pairing"
                      code={`moltbot pairing list telegram
moltbot pairing approve telegram YOUR_CODE`}
                    />
                  </div>
                </div>

                {/* Issue 5 */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex gap-3 mb-3">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <h3 className="text-xl font-semibold text-heading">
                      Gateway won't start
                    </h3>
                  </div>
                  <p className="text-foreground leading-relaxed mb-3 ml-8">
                    <strong>Cause:</strong> Configuration issue or port conflict.
                  </p>
                  <p className="text-foreground leading-relaxed ml-8">
                    <strong>Solution:</strong> Run diagnostics to identify the issue:
                  </p>
                  <div className="ml-8">
                    <CodeBlock
                      id="gateway-debug"
                      code="moltbot doctor"
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
