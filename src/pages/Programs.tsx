import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageCircle, Globe, Sparkles } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: <Users className="w-10 h-10" />,
      title: "Youth Civic Leadership Program",
      description: "A flagship initiative that trains BIPOC and underrepresented youth in civic engagement, leadership, and community organizing. Participants gain skills in public speaking, policy literacy, and community impact, preparing them to lead in their local regions and beyond.",
      color: "hsl(var(--civic-blue))",
    },
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: "Atlantic Youth Dialogue",
      description: "A regional forum that brings together youth from across Atlantic Canada to discuss issues of equity, representation, and community development. The Dialogue fosters collaboration, innovation, and shared advocacy among emerging changemakers.",
      color: "hsl(var(--civic-orange))",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Cultural Diplomacy & Global Exchange",
      description: "Civic Roots connects Canadian youth with international platforms — including delegations, conferences, and global youth assemblies — to strengthen cross-cultural understanding and amplify Canada's diverse voices abroad.",
      color: "hsl(var(--civic-green))",
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Mentorship & Storytelling Lab",
      description: "A creative space where youth share their lived experiences through art, writing, and digital storytelling. The Lab mentors participants in building confidence, public presence, and advocacy through narrative leadership.",
      color: "hsl(var(--civic-yellow))",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
            Programs & Initiatives
          </h1>
          <p className="text-xl text-center text-foreground/80 max-w-3xl mx-auto">
            Empowering the next generation of civic leaders through transformative programs
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4" style={{ borderLeftColor: program.color }}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: program.color, color: 'white' }}
                    >
                      {program.icon}
                    </div>
                    <CardTitle className="text-2xl text-primary">{program.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Our Programs?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join us in creating opportunities for youth across Canada to develop their leadership skills 
            and make a lasting impact in their communities.
          </p>
          <a href="/get-involved">
            <button className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get Involved
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
