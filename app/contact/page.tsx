import { Metadata } from "next"
import Link from "next/link"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | Pakistan Baling Corporation",
  description: "Get in touch with PBC for quotations, product information, export support, and logistics assistance. We are here to help with all your biomass and agricultural product needs.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-accent overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="contactPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#contactPattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Request quotations, product information, export support, and logistics assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-card rounded-2xl border border-border p-8 lg:p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Send Us an Inquiry
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about our products or services? We&apos;re here to help. 
                  Reach out to us through any of the following channels.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                    <p className="text-muted-foreground text-sm">
                      North Western Zone<br />
                      Port Qasim Export District<br />
                      Karachi, Pakistan, 75300
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">
                      <a href="tel:+923009000000" className="hover:text-primary transition-colors">
                        +92 300 9000000
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      <a href="mailto:airdropsynergy@gmail.com" className="hover:text-primary transition-colors">
                        Airdropsynergy@gmail.com
                      </a>
                     
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm">
                      <a href="https://wa.me/92300900000" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        +92 300 9000000
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Map Section */}
<section className="py-16 lg:py-20 bg-secondary/30">
  <div className="container mx-auto px-4 lg:px-8">
    <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
      Our Location
    </h2>

    <div className="bg-card rounded-2xl border border-border overflow-hidden h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28968.086924322233!2d67.2829695008566!3d24.82930203284395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3323e89ca6b9b%3A0x850bc287eb8a01b3!2sNorth%20Western%20Industrial%20Zone%20Port%20Qasim%20Bin%20Qasim%20Town%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1780519327838!5m2!1sen!2s"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="Pakistan Baling Corporation Location"
      />
    </div>
  </div>
</section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Order?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our team is ready to assist you with product selection, quotations, 
            and logistics planning for your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
              <Link href="/products">
                Browse Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+923009000000">
                <Phone className="w-4 h-4 mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
