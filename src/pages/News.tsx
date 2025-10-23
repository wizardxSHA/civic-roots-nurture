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
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
            News & Impact
          </h1>
          <p className="text-xl text-center text-foreground/80 max-w-3xl mx-auto">
            Building a generation of youth who lead with empathy, equity, and action
          </p>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Our Impact</h2>
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
                color: "hsl(var(--civic-blue))",
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Global Representation",
                description: "Atlantic participants on world stages",
                color: "hsl(var(--civic-green))",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Community Partnerships",
                description: "Bridging civic education and cultural expression",
                color: "hsl(var(--civic-orange))",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div
                    className="inline-flex p-4 rounded-full mb-4"
                    style={{ backgroundColor: item.color, color: 'white' }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
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
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="pt-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-primary">Stay Connected</h2>
              <p className="text-foreground/80 mb-6">
                Subscribe to our newsletter to receive updates, stories, and opportunities to get involved 
                in upcoming Civic Roots initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button className="bg-primary hover:bg-primary/90">
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
