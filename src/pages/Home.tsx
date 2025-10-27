import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, FileText, MessageSquare, Users, Shield, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

const Home = () => {
  const features = [
    {
      icon: Users,
      title: "Cari Pengacara",
      description: "Temukan pengacara profesional yang sesuai dengan kebutuhan hukum Anda",
      link: "/find-lawyer",
    },
    {
      icon: FileText,
      title: "Buat Dokumen",
      description: "Buat dokumen hukum dengan mudah menggunakan template yang tersedia",
      link: "/create-document",
    },
    {
      icon: MessageSquare,
      title: "Chatbot AI",
      description: "Konsultasi awal dengan AI assistant untuk panduan hukum dasar",
      link: "/chatbot",
    },
    {
      icon: Scale,
      title: "Daftar Sebagai Pengacara",
      description: "Bergabung dengan platform kami sebagai profesional hukum",
      link: "/register-lawyer",
    },
  ];

  const benefits = [
    "Akses mudah ke profesional hukum terpercaya",
    "Konsultasi online yang praktis dan efisien",
    "Template dokumen hukum yang valid",
    "AI assistant untuk panduan awal",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-6">
              <Shield className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Solusi Bantuan Hukum Anda
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Platform terpadu untuk konsultasi hukum, pencarian pengacara, dan pembuatan dokumen legal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Mulai Sekarang
                </Button>
              </Link>
              <Link to="/find-lawyer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Cari Pengacara
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Berbagai fitur yang dirancang untuk memudahkan akses Anda terhadap layanan hukum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 cursor-pointer group">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Navigo?</h2>
              <p className="text-muted-foreground text-lg">
                Platform terpercaya untuk kebutuhan hukum Anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 bg-background p-6 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-primary text-white border-0">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Siap Mendapatkan Bantuan Hukum?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Bergabung dengan ribuan pengguna yang telah mempercayai Navigo untuk kebutuhan hukum mereka
              </p>
              <Link to="/auth">
                <Button size="lg" variant="secondary">
                  Daftar Gratis
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Navigo. Platform Bantuan Hukum Indonesia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
