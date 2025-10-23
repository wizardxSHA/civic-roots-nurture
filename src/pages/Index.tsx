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
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(203_82%_96%)] via-[hsl(150_51%_96%)] to-[hsl(18_95%_96%)] animate-gradient" />
        
        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[hsl(203_82%_49%/0.1)] animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[hsl(150_51%_48%/0.1)] animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 right-1/4 w-24 h-24 rounded-full bg-[hsl(18_95%_55%/0.1)] animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary leading-tight">
              Empowering BIPOC and Underrepresented Youth Through 
              <span className="bg-gradient-to-r from-[hsl(203_82%_49%)] via-[hsl(150_51%_48%)] to-[hsl(18_95%_55%)] bg-clip-text text-transparent"> Civic Engagement</span> and Leadership
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
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  Learn About Us <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/programs">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105">
                  Explore Our Programs
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button size="lg" className="bg-gradient-to-r from-[hsl(203_82%_49%)] to-[hsl(150_51%_48%)] hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  Join the Movement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-r from-[hsl(213_45%_18%)] via-[hsl(203_82%_49%)] to-[hsl(213_45%_18%)] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <blockquote className="text-center max-w-3xl mx-auto">
            <p className="text-2xl md:text-4xl font-light italic mb-6 leading-relaxed">
              "When youth see themselves in leadership, communities thrive."
            </p>
            <footer className="text-lg opacity-95">— Civic Roots Foundation</footer>
          </blockquote>
        </div>
      </section>

      {/* Featured Areas */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">Our Focus Areas</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(203_82%_49%)] to-[hsl(150_51%_48%)] mx-auto mb-12 rounded-full" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12" />,
                title: "Civic Engagement & Policy Literacy",
                color: "hsl(203 82% 49%)",
                gradient: "from-[hsl(203_82%_49%)] to-[hsl(203_82%_39%)]",
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Youth Leadership & Mentorship",
                color: "hsl(18 95% 55%)",
                gradient: "from-[hsl(18_95%_55%)] to-[hsl(4_89%_58%)]",
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Cultural Diplomacy & Global Exchange",
                color: "hsl(150 51% 48%)",
                gradient: "from-[hsl(150_51%_48%)] to-[hsl(150_51%_38%)]",
              },
            ].map((area, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-8 text-center hover:shadow-2xl transition-all duration-300 border border-border hover:border-transparent hover:-translate-y-2 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div
                  className={`inline-flex p-5 rounded-2xl mb-6 bg-gradient-to-br ${area.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  style={{ color: 'white' }}
                >
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{area.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(203_82%_49%)] via-[hsl(150_51%_48%)] to-[hsl(213_45%_18%)] opacity-95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join us in building a more inclusive and equitable future for all youth across Canada.
          </p>
          <Link to="/get-involved">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:scale-105 transition-all text-lg px-8 py-6">
              Get Involved Today <ArrowRight className="ml-2" size={24} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
