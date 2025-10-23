import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[hsl(203_82%_96%)] via-[hsl(150_51%_96%)] to-[hsl(18_95%_96%)] relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[hsl(203_82%_49%/0.15)] animate-float" />
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-[hsl(150_51%_48%/0.15)] animate-float" style={{ animationDelay: '1s' }} />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-primary text-center mb-4">About Us</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(203_82%_49%)] to-[hsl(150_51%_48%)] mx-auto mb-6 rounded-full" />
          <p className="text-xl text-center text-foreground/80 max-w-3xl mx-auto">
            Building pathways for youth to lead, advocate, and connect
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            Civic Roots Foundation was born in Atlantic Canada to address the need for stronger 
            representation and civic inclusion of BIPOC and underrepresented youth. We create 
            opportunities for young leaders to participate in civic life — from community initiatives to 
            international delegations — ensuring that every voice, background, and story is part of Canada's 
            collective future.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-l-4 border-l-[hsl(203_82%_49%)] hover:shadow-xl transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(203_82%_49%/0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <CardContent className="pt-8 relative z-10">
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-[hsl(203_82%_49%)] to-[hsl(203_82%_39%)] mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  To empower youth to lead with purpose, advocate for equity, and build bridges across cultures 
                  through civic participation and diplomacy.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-[hsl(150_51%_48%)] hover:shadow-xl transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(150_51%_48%/0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <CardContent className="pt-8 relative z-10">
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-[hsl(150_51%_48%)] to-[hsl(150_51%_38%)] mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  A Canada where every young person — regardless of race, background, or region — has equitable 
                  access to civic leadership, representation, and opportunity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary text-center">Our Values</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(203_82%_49%)] to-[hsl(150_51%_48%)] mx-auto mb-12 rounded-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Equity",
                description: "Centering marginalized and underrepresented voices.",
                color: "hsl(4 89% 58%)",
                gradient: "from-[hsl(4_89%_58%)] to-[hsl(4_89%_48%)]",
              },
              {
                title: "Empowerment",
                description: "Building leadership and confidence through civic action.",
                color: "hsl(18 95% 55%)",
                gradient: "from-[hsl(18_95%_55%)] to-[hsl(18_95%_45%)]",
              },
              {
                title: "Community",
                description: "Strengthening belonging through collaboration and mentorship.",
                color: "hsl(45 98% 51%)",
                gradient: "from-[hsl(45_98%_51%)] to-[hsl(45_98%_41%)]",
              },
              {
                title: "Representation",
                description: "Promoting diversity in governance, policy, and diplomacy.",
                color: "hsl(150 51% 48%)",
                gradient: "from-[hsl(150_51%_48%)] to-[hsl(150_51%_38%)]",
              },
            ].map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border-2 hover:border-transparent relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <CardContent className="pt-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex-shrink-0 bg-gradient-to-br ${value.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-[hsl(203_82%_49%)] transition-colors">{value.title}</h3>
                      <p className="text-foreground/80 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Roots */}
      <section className="py-20 bg-gradient-to-br from-[hsl(203_82%_96%)] via-[hsl(150_51%_96%)] to-[hsl(18_95%_96%)] relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[hsl(18_95%_55%/0.15)] animate-float" />
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[hsl(150_51%_48%/0.15)] animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">Founding Roots</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(18_95%_55%)] to-[hsl(150_51%_48%)] mx-auto mb-8 rounded-full" />
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center">
            Established by youth leaders in Atlantic Canada, Civic Roots began as a community initiative to 
            connect young people to civic and cultural leadership opportunities. Today, it is a growing 
            national platform that connects local passion with global perspective.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
