import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { HandHeart, Users, Handshake, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch soon.",
    });
    setFormData({ name: "", email: "", interest: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
            Get Involved
          </h1>
          <p className="text-xl text-center text-foreground/80 max-w-3xl mx-auto">
            Join the movement to shape Canada's civic future
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Join the Movement</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Civic Roots is growing — and we're calling on youth, mentors, and community partners to join 
            us in shaping Canada's civic future.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 text-primary text-center">Ways to Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <HandHeart className="w-10 h-10" />,
                title: "Volunteer",
                description: "Support youth events, leadership programs, and workshops.",
                color: "hsl(var(--civic-blue))",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Mentor",
                description: "Share your experience to guide emerging leaders.",
                color: "hsl(var(--civic-orange))",
              },
              {
                icon: <Handshake className="w-10 h-10" />,
                title: "Partner",
                description: "Collaborate on community engagement or civic initiatives.",
                color: "hsl(var(--civic-green))",
              },
              {
                icon: <Mail className="w-10 h-10" />,
                title: "Join Our Network",
                description: "Sign up to receive updates and opportunities.",
                color: "hsl(var(--civic-yellow))",
              },
            ].map((way, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div
                    className="inline-flex p-4 rounded-full mb-4"
                    style={{ backgroundColor: way.color, color: 'white' }}
                  >
                    {way.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{way.title}</h3>
                  <p className="text-foreground/80">{way.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardContent className="pt-8">
              <h2 className="text-2xl font-bold mb-6 text-primary text-center">Sign Up to Get Involved</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="interest">Area of Interest</Label>
                  <Input
                    id="interest"
                    placeholder="e.g., Volunteering, Mentorship, Partnership"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us more about yourself and your interests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;
