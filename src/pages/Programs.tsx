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
      <section className="py-20 bg-gradient-to-br from-[hsl(203_82%_96%)] via-[hsl(150_51%_96%)] to-[hsl(18_95%_96%)] relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[hsl(203_82%_49%/0.15)] animate-float" />
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-[hsl(150_51%_48%/0.15)] animate-float" style={{ animationDelay: '1s' }} />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-primary text-center mb-4">
            Programs & Initiatives
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(203_82%_49%)] to-[hsl(150_51%_48%)] mx-auto mb-6 rounded-full" />
          <p className="text-xl text-center text-foreground/80 max-w-3xl mx-auto">
            Empowering the next generation of civic leaders through transformative programs
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-l-4 group hover:-translate-y-1 relative overflow-hidden" style={{ borderLeftColor: program.color }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity" style={{ background: `linear-gradient(to right, ${program.color}, transparent)` }} />
                <CardHeader className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div
                      className="p-4 rounded-2xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{ background: `linear-gradient(135deg, ${program.color}, ${program.color}dd)`, color: 'white' }}
                    >
                      {program.icon}
                    </div>
                    <CardTitle className="text-2xl md:text-3xl text-primary group-hover:text-[hsl(203_82%_49%)] transition-colors">{program.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(203_82%_49%)] via-[hsl(150_51%_48%)] to-[hsl(213_45%_18%)] opacity-95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Interested in Our Programs?</h2>
          <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join us in creating opportunities for youth across Canada to develop their leadership skills 
            and make a lasting impact in their communities.
          </p>
          <a href="/get-involved">
            <button className="bg-white text-primary px-10 py-4 rounded-lg text-lg font-semibold hover:bg-white/90 shadow-2xl hover:scale-105 transition-all">
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
