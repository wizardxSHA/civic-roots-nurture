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
      <section className="py-20 bg-gradient-to-br from-[hsl(203_82%_96%)] via-[hsl(150_51%_96%)] to-[hsl(18_95%_96%)] relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[hsl(203_82%_49%/0.15)] animate-float" />
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-[hsl(150_51%_48%/0.15)] animate-float" style={{ animationDelay: '1s' }} />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-primary text-center mb-4">
            Get Involved
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(203_82%_49%)] to-[hsl(150_51%_48%)] mx-auto mb-6 rounded-full" />
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
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary text-center">Ways to Get Involved</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(203_82%_49%)] to-[hsl(150_51%_48%)] mx-auto mb-12 rounded-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <HandHeart className="w-10 h-10" />,
                title: "Volunteer",
                description: "Support youth events, leadership programs, and workshops.",
                color: "hsl(203 82% 49%)",
                gradient: "from-[hsl(203_82%_49%)] to-[hsl(203_82%_39%)]",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Mentor",
                description: "Share your experience to guide emerging leaders.",
                color: "hsl(18 95% 55%)",
                gradient: "from-[hsl(18_95%_55%)] to-[hsl(4_89%_58%)]",
              },
              {
                icon: <Handshake className="w-10 h-10" />,
                title: "Partner",
                description: "Collaborate on community engagement or civic initiatives.",
                color: "hsl(150 51% 48%)",
                gradient: "from-[hsl(150_51%_48%)] to-[hsl(150_51%_38%)]",
              },
              {
                icon: <Mail className="w-10 h-10" />,
                title: "Join Our Network",
                description: "Sign up to receive updates and opportunities.",
                color: "hsl(45 98% 51%)",
                gradient: "from-[hsl(45_98%_51%)] to-[hsl(45_98%_41%)]",
              },
            ].map((way, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 border-2 hover:border-transparent relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${way.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <CardContent className="pt-8 relative z-10">
                  <div
                    className={`inline-flex p-5 rounded-2xl mb-6 bg-gradient-to-br ${way.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    style={{ color: 'white' }}
                  >
                    {way.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-[hsl(203_82%_49%)] transition-colors">{way.title}</h3>
                  <p className="text-foreground/80">{way.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="shadow-2xl border-2">
            <CardContent className="pt-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary text-center">Sign Up to Get Involved</h2>
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
                <Button type="submit" className="w-full h-12 text-lg bg-gradient-to-r from-[hsl(203_82%_49%)] to-[hsl(150_51%_48%)] hover:opacity-90 text-white shadow-lg hover:scale-105 transition-all">
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
