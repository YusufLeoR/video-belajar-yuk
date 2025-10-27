import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Scale, CheckCircle } from "lucide-react";

const RegisterLawyer = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-3 bg-accent rounded-full mb-4">
              <Scale className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Daftar Sebagai Pengacara Spesialis UMKM
            </h1>
            <p className="text-muted-foreground">
              Bergabung dengan platform Navigo dan bantu ribuan pelaku UMKM serta kreator Indonesia
            </p>
          </div>

          {/* Benefits */}
          <Card className="mb-8 bg-accent border-primary/20">
            <CardHeader>
              <CardTitle>Keuntungan Bergabung</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Akses ke ribuan UMKM dan kreator",
                  "Spesialisasi di hukum bisnis & HKI",
                  "Platform konsultasi online praktis",
                  "Komisi dan pembayaran yang kompetitif",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Registration Form */}
          <Card>
            <CardHeader>
              <CardTitle>Formulir Pendaftaran</CardTitle>
              <CardDescription>
                Lengkapi data di bawah ini untuk mendaftar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Informasi Pribadi</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Nama Lengkap</Label>
                      <Input id="fullName" placeholder="Dr. Nama Anda, S.H., M.H." required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="email@example.com" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <Input id="phone" type="tel" placeholder="+62 812 3456 7890" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Lokasi Praktik</Label>
                      <Input id="location" placeholder="Jakarta Selatan" required />
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Informasi Profesional</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="licenseNumber">Nomor Izin Praktik</Label>
                      <Input id="licenseNumber" placeholder="12345/PERADI/2020" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialization">Spesialisasi</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih spesialisasi" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bisnis-umkm">Hukum Bisnis UMKM</SelectItem>
                          <SelectItem value="hki">Hak Kekayaan Intelektual</SelectItem>
                          <SelectItem value="kontrak">Kontrak & Perjanjian</SelectItem>
                          <SelectItem value="merek-hak-cipta">Merek Dagang & Hak Cipta</SelectItem>
                          <SelectItem value="sengketa-bisnis">Sengketa Bisnis</SelectItem>
                          <SelectItem value="lainnya">Lainnya</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="experience">Pengalaman (tahun)</Label>
                      <Input id="experience" type="number" placeholder="5" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lawFirm">Kantor Hukum</Label>
                      <Input id="lawFirm" placeholder="Nama kantor hukum (opsional)" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio Profesional</Label>
                    <Textarea
                      id="bio"
                      placeholder="Ceritakan tentang pengalaman dan keahlian Anda..."
                      className="min-h-32"
                      required
                    />
                  </div>
                </div>

                {/* Documents */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Dokumen Pendukung</h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="license">Upload Izin Praktik</Label>
                      <Input id="license" type="file" accept=".pdf,.jpg,.png" required />
                      <p className="text-xs text-muted-foreground">
                        Format: PDF, JPG, PNG (Max 5MB)
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cv">Upload CV</Label>
                      <Input id="cv" type="file" accept=".pdf" required />
                      <p className="text-xs text-muted-foreground">
                        Format: PDF (Max 5MB)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="flex-1" disabled={isLoading}>
                    {isLoading ? "Memproses..." : "Kirim Pendaftaran"}
                  </Button>
                  <Link to="/" className="flex-1">
                    <Button type="button" variant="outline" className="w-full">
                      Batal
                    </Button>
                  </Link>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  Dengan mendaftar, Anda menyetujui{" "}
                  <a href="#" className="text-primary hover:underline">
                    Syarat dan Ketentuan
                  </a>{" "}
                  kami
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RegisterLawyer;
