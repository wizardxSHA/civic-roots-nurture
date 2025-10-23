import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Globe, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 opacity-60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary leading-tight">
              Empowering BIPOC and Underrepresented Youth Through Civic Engagement and Leadership
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              Civic Roots Foundation is a BIPOC-led, youth-centered organization committed to empowering 
              BIPOC and underrepresented youth to shape the civic and diplomatic future of Canada. Rooted 
              in Atlantic Canada, we build pathways for young people to engage in leadership, policy, and 
              cultural exchange — strengthening representation, belonging, and voice in every space where 
              decisions are made.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn About Us <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/programs">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Explore Our Programs
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  Join the Movement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <blockquote className="text-center max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-light italic mb-4">
              "When youth see themselves in leadership, communities thrive."
            </p>
            <footer className="text-lg opacity-90">— Civic Roots Foundation</footer>
          </blockquote>
        </div>
      </section>

      {/* Featured Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Our Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12" />,
                title: "Civic Engagement & Policy Literacy",
                color: "hsl(var(--civic-blue))",
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Youth Leadership & Mentorship",
                color: "hsl(var(--civic-orange))",
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Cultural Diplomacy & Global Exchange",
                color: "hsl(var(--civic-green))",
              },
            ].map((area, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 text-center hover:shadow-lg transition-shadow border border-border"
              >
                <div
                  className="inline-flex p-4 rounded-full mb-4"
                  style={{ backgroundColor: area.color, color: 'white' }}
                >
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{area.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join us in building a more inclusive and equitable future for all youth across Canada.
          </p>
          <Link to="/get-involved">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Involved Today <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
