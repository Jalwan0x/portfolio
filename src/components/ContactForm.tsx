import { useState } from "react";
import PDFDownloadButton from "./PDFDownloadButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, Lock, Clock, MessageCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  appUrl: z.string().trim().url("Please enter a valid URL").max(500, "URL is too long"),
  description: z.string().trim().min(1, "Please provide a brief description").max(2000, "Description is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    appUrl: "",
    description: "",
  });

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Updated to use production backend endpoint
      const response = await fetch("https://api.jalwan.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "I'll review your app and get back to you within 24 hours.",
      });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 md:py-32 bg-card">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <div className="bg-surface-elevated rounded-3xl border border-border p-12 md:p-16">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl font-semibold text-heading mb-4 heading-display">
                Message received!
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Thanks for reaching out. I'll review your app and get back to you within 24 hours with a scope and quote.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Typical response time: 4-8 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
            Let’s talk
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-heading mb-6 heading-display">
            Send over your app and I’ll review it.
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Send over your app and I’ll take a look.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-surface-elevated rounded-3xl border border-border p-8 md:p-10 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">Your name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`h-12 rounded-xl ${errors.name ? "border-destructive" : ""}`}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`h-12 rounded-xl ${errors.email ? "border-destructive" : ""}`}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="appUrl" className="text-sm font-medium">Your app URL</Label>
              <Input
                id="appUrl"
                type="url"
                placeholder="https://yourapp.com"
                value={formData.appUrl}
                onChange={(e) => handleChange("appUrl", e.target.value)}
                className={`h-12 rounded-xl ${errors.appUrl ? "border-destructive" : ""}`}
              />
              {errors.appUrl && (
                <p className="text-sm text-destructive">{errors.appUrl}</p>
              )}
            </div>
            
            {/* Testing environment field removed as requested */}
            
            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-medium">Tell me about your app</Label>
              <Textarea
                id="description"
                placeholder="What does your app do? Any specific areas you're worried about?"
                rows={4}
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                className={`rounded-xl resize-none ${errors.description ? "border-destructive" : ""}`}
              />
              {errors.description && (
                <p className="text-sm text-destructive">{errors.description}</p>
              )}
            </div>
            
            <Button
              type="submit"
              size="lg"
              className="w-full py-7 text-base font-medium rounded-xl group"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Lock className="h-3 w-3" />
                <span>Your info stays confidential</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-3 w-3" />
                <span>Response within 24 hours</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
