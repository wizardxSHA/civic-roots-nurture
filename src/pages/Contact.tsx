import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[hsl(203_82%_96%)] via-[hsl(150_51%_96%)] to-[hsl(18_95%_96%)] relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[hsl(203_82%_49%/0.15)] animate-float" />
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-[hsl(150_51%_48%/0.15)] animate-float" style={{ animationDelay: '1s' }} />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-primary text-center mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(203_82%_49%)] to-[hsl(150_51%_48%)] mx-auto mb-6 rounded-full" />
          <p className="text-xl text-center text-foreground/80 max-w-3xl mx-auto">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-center text-foreground/80 mb-12 leading-relaxed">
            Whether you're a young person looking to get involved, a partner exploring collaboration, or a 
            supporter who believes in equitable youth leadership — reach out to us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <Card className="hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 border-2 hover:border-transparent relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(203_82%_49%/0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="pt-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-[hsl(203_82%_49%)] to-[hsl(203_82%_39%)] text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Email Us</h3>
                    <div className="space-y-2">
                      <p className="text-foreground/80">
                        <span className="font-medium">General Inquiries:</span><br />
                        <a href="mailto:info@civicrootsfoundation.ca" className="text-[hsl(var(--civic-blue))] hover:underline">
                          info@civicrootsfoundation.ca
                        </a>
                      </p>
                      <p className="text-foreground/80">
                        <span className="font-medium">Partnerships:</span><br />
                        <a href="mailto:partnerships@civicrootsfoundation.ca" className="text-[hsl(var(--civic-blue))] hover:underline">
                          partnerships@civicrootsfoundation.ca
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 border-2 hover:border-transparent relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(150_51%_48%/0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="pt-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-[hsl(150_51%_48%)] to-[hsl(150_51%_38%)] text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Mailing Address</h3>
                    <p className="text-foreground/80">
                      Civic Roots Foundation<br />
                      St. John's, Newfoundland & Labrador<br />
                      Canada
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary text-center">Follow Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(203_82%_49%)] to-[hsl(150_51%_48%)] mx-auto mb-8 rounded-full" />
          <p className="text-center text-foreground/80 mb-12 text-lg">
            Stay connected with our latest updates, stories, and opportunities
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            {[
              { icon: <Instagram size={32} />, label: "Instagram", gradient: "from-[hsl(4_89%_58%)] to-[hsl(4_89%_48%)]" },
              { icon: <Linkedin size={32} />, label: "LinkedIn", gradient: "from-[hsl(203_82%_49%)] to-[hsl(203_82%_39%)]" },
              { icon: <Facebook size={32} />, label: "Facebook", gradient: "from-[hsl(18_95%_55%)] to-[hsl(4_89%_58%)]" },
              { icon: <Twitter size={32} />, label: "Twitter", gradient: "from-[hsl(150_51%_48%)] to-[hsl(150_51%_38%)]" },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-card transition-all group border-2 border-transparent hover:border-border hover:shadow-xl"
                aria-label={social.label}
              >
                <div
                  className={`p-4 rounded-2xl bg-gradient-to-br ${social.gradient} shadow-lg transition-transform group-hover:scale-110 duration-300`}
                  style={{ color: 'white' }}
                >
                  {social.icon}
                </div>
                <span className="text-sm font-medium text-foreground/70 group-hover:text-primary transition-colors">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
