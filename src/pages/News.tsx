import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, TrendingUp, Globe, Users } from "lucide-react";

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[hsl(203_82%_96%)] via-[hsl(150_51%_96%)] to-[hsl(18_95%_96%)] relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[hsl(203_82%_49%/0.15)] animate-float" />
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-[hsl(150_51%_48%/0.15)] animate-float" style={{ animationDelay: '1s' }} />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-primary text-center mb-4">
            News & Impact
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(203_82%_49%)] to-[hsl(150_51%_48%)] mx-auto mb-6 rounded-full" />
          <p className="text-xl text-center text-foreground/80 max-w-3xl mx-auto">
            Building a generation of youth who lead with empathy, equity, and action
          </p>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary text-center">Our Impact</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(203_82%_49%)] to-[hsl(150_51%_48%)] mx-auto mb-8 rounded-full" />
          <p className="text-lg text-foreground/80 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
            Civic Roots Foundation is building a generation of youth who lead with empathy, equity, and 
            action. Through training, dialogue, and global engagement, our programs have supported young 
            leaders in shaping community projects, policy discussions, and international representation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-10 h-10" />,
                title: "Youth-led Policy Projects",
                description: "Supporting local inclusion initiatives",
                color: "hsl(203 82% 49%)",
                gradient: "from-[hsl(203_82%_49%)] to-[hsl(203_82%_39%)]",
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Global Representation",
                description: "Atlantic participants on world stages",
                color: "hsl(150 51% 48%)",
                gradient: "from-[hsl(150_51%_48%)] to-[hsl(150_51%_38%)]",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Community Partnerships",
                description: "Bridging civic education and cultural expression",
                color: "hsl(18 95% 55%)",
                gradient: "from-[hsl(18_95%_55%)] to-[hsl(4_89%_58%)]",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 border-2 hover:border-transparent relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <CardContent className="pt-8 relative z-10">
                  <div
                    className={`inline-flex p-5 rounded-2xl mb-6 bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    style={{ color: 'white' }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-[hsl(203_82%_49%)] transition-colors">{item.title}</h3>
                  <p className="text-foreground/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-primary">Stories and Highlights</h2>
          <div className="space-y-6">
            {[
              {
                title: "Youth-led policy projects improving local inclusion",
                description: "Young leaders across Atlantic Canada are driving meaningful change in their communities through innovative policy initiatives.",
                color: "hsl(var(--civic-blue))",
              },
              {
                title: "Atlantic participants representing Canada on global stages",
                description: "Our youth delegates are bringing Canadian perspectives to international forums and strengthening cross-cultural connections.",
                color: "hsl(var(--civic-green))",
              },
              {
                title: "Partnerships that bridge civic education and cultural expression",
                description: "Collaborating with organizations to create holistic opportunities for youth engagement and leadership development.",
                color: "hsl(var(--civic-orange))",
              },
            ].map((story, index) => (
              <Card key={index} className="border-l-4" style={{ borderLeftColor: story.color }}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{story.title}</h3>
                  <p className="text-foreground/80">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="relative overflow-hidden border-2 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(203_82%_96%)] via-[hsl(150_51%_96%)] to-[hsl(18_95%_96%)]" />
            <CardContent className="pt-12 pb-12 text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Stay Connected</h2>
              <p className="text-foreground/80 mb-8 text-lg">
                Subscribe to our newsletter to receive updates, stories, and opportunities to get involved 
                in upcoming Civic Roots initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 text-lg"
                />
                <Button className="bg-gradient-to-r from-[hsl(203_82%_49%)] to-[hsl(150_51%_48%)] hover:opacity-90 h-12 px-8 text-white shadow-lg hover:scale-105 transition-all">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
