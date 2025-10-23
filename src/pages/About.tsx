import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">About Us</h1>
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-l-4 border-l-[hsl(var(--civic-blue))]">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-foreground/80 leading-relaxed">
                  To empower youth to lead with purpose, advocate for equity, and build bridges across cultures 
                  through civic participation and diplomacy.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-[hsl(var(--civic-green))]">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-foreground/80 leading-relaxed">
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
          <h2 className="text-3xl font-bold mb-10 text-primary text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Equity",
                description: "Centering marginalized and underrepresented voices.",
                color: "hsl(var(--civic-red))",
              },
              {
                title: "Empowerment",
                description: "Building leadership and confidence through civic action.",
                color: "hsl(var(--civic-orange))",
              },
              {
                title: "Community",
                description: "Strengthening belonging through collaboration and mentorship.",
                color: "hsl(var(--civic-yellow))",
              },
              {
                title: "Representation",
                description: "Promoting diversity in governance, policy, and diplomacy.",
                color: "hsl(var(--civic-green))",
              },
            ].map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex-shrink-0"
                      style={{ backgroundColor: value.color }}
                    />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-primary">{value.title}</h3>
                      <p className="text-foreground/80">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Roots */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-primary">Founding Roots</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
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
