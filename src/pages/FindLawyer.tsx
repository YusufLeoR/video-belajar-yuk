import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, MapPin, Star, Briefcase } from "lucide-react";

const FindLawyer = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const lawyers = [
    {
      id: 1,
      name: "Ahmad Wijaya, S.H., M.H.",
      specialization: "Hukum Bisnis UMKM",
      location: "Jakarta Selatan",
      experience: "10 tahun",
      rating: 4.8,
      cases: 150,
    },
    {
      id: 2,
      name: "Dr. Sarah Putri, S.H.",
      specialization: "Hak Kekayaan Intelektual",
      location: "Jakarta Pusat",
      experience: "8 tahun",
      rating: 4.9,
      cases: 120,
    },
    {
      id: 3,
      name: "Budi Santoso, S.H., M.H.",
      specialization: "Kontrak & Perjanjian",
      location: "Jakarta Barat",
      experience: "12 tahun",
      rating: 4.7,
      cases: 200,
    },
    {
      id: 4,
      name: "Dina Kusuma, S.H.",
      specialization: "Merek Dagang & Hak Cipta",
      location: "Tangerang",
      experience: "6 tahun",
      rating: 4.6,
      cases: 90,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Cari Pengacara Spesialis UMKM</h1>
          <p className="text-muted-foreground">
            Temukan ahli hukum yang berpengalaman menangani masalah bisnis UMKM dan ekonomi kreatif
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Cari berdasarkan nama, spesialisasi, atau lokasi..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button>Cari</Button>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Semua Spesialisasi
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">
            Hukum Bisnis UMKM
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">
            Hak Kekayaan Intelektual
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">
            Kontrak & Perjanjian
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">
            Merek Dagang & Hak Cipta
          </Badge>
        </div>

        {/* Lawyers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lawyers.map((lawyer) => (
            <Card key={lawyer.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <Avatar className="h-16 w-16 bg-primary text-primary-foreground">
                    <AvatarFallback>
                      {lawyer.name
                        .split(" ")
                        .slice(0, 2)
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <Badge>{lawyer.specialization}</Badge>
                </div>
                <CardTitle className="text-xl">{lawyer.name}</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{lawyer.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      <span>{lawyer.cases} kasus</span>
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{lawyer.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    <span>Pengalaman {lawyer.experience}</span>
                  </div>
                </div>
                <Button className="w-full">Lihat Profil</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindLawyer;
