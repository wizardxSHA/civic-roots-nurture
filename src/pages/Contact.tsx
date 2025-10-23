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
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
            Contact Us
          </h1>
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
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[hsl(var(--civic-blue))] text-white flex-shrink-0">
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
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[hsl(var(--civic-green))] text-white flex-shrink-0">
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Follow Us</h2>
          <p className="text-center text-foreground/80 mb-8">
            Stay connected with our latest updates, stories, and opportunities
          </p>
          <div className="flex justify-center gap-6">
            {[
              { icon: <Instagram size={32} />, label: "Instagram", color: "hsl(var(--civic-red))" },
              { icon: <Linkedin size={32} />, label: "LinkedIn", color: "hsl(var(--civic-blue))" },
              { icon: <Facebook size={32} />, label: "Facebook", color: "hsl(var(--civic-orange))" },
              { icon: <Twitter size={32} />, label: "Twitter", color: "hsl(var(--civic-green))" },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted transition-colors group"
                aria-label={social.label}
              >
                <div
                  className="p-3 rounded-full transition-transform group-hover:scale-110"
                  style={{ backgroundColor: social.color, color: 'white' }}
                >
                  {social.icon}
                </div>
                <span className="text-sm text-foreground/70">{social.label}</span>
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
