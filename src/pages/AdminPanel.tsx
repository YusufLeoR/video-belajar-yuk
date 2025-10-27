import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle, Clock, Users, FileText, MessageSquare } from "lucide-react";

const AdminPanel = () => {
  const [selectedTab, setSelectedTab] = useState("lawyers");

  const pendingLawyers = [
    {
      id: 1,
      name: "Ahmad Wijaya, S.H., M.H.",
      email: "ahmad.wijaya@email.com",
      specialization: "Hukum Pidana",
      experience: "10 tahun",
      status: "pending",
      submittedDate: "2025-10-20",
    },
    {
      id: 2,
      name: "Sarah Putri, S.H.",
      email: "sarah.putri@email.com",
      specialization: "Hukum Perdata",
      experience: "8 tahun",
      status: "pending",
      submittedDate: "2025-10-22",
    },
    {
      id: 3,
      name: "Budi Santoso, S.H., M.H.",
      email: "budi.santoso@email.com",
      specialization: "Hukum Bisnis",
      experience: "12 tahun",
      status: "pending",
      submittedDate: "2025-10-25",
    },
  ];

  const stats = [
    {
      title: "Total Pengguna",
      value: "1,234",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Pengacara Aktif",
      value: "89",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "Dokumen Dibuat",
      value: "456",
      icon: FileText,
      color: "text-purple-600",
    },
    {
      title: "Chat AI",
      value: "2,345",
      icon: MessageSquare,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Panel</h1>
          <p className="text-muted-foreground">
            Kelola pengguna, pengacara, dan konten platform
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Card>
          <CardHeader>
            <CardTitle>Manajemen Platform</CardTitle>
            <CardDescription>
              Kelola pendaftaran pengacara dan konten lainnya
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="lawyers">Pendaftaran Pengacara</TabsTrigger>
                <TabsTrigger value="users">Pengguna</TabsTrigger>
                <TabsTrigger value="documents">Dokumen</TabsTrigger>
              </TabsList>

              <TabsContent value="lawyers" className="space-y-4">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nama</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Spesialisasi</TableHead>
                        <TableHead>Pengalaman</TableHead>
                        <TableHead>Tanggal</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Aksi</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pendingLawyers.map((lawyer) => (
                        <TableRow key={lawyer.id}>
                          <TableCell className="font-medium">{lawyer.name}</TableCell>
                          <TableCell>{lawyer.email}</TableCell>
                          <TableCell>{lawyer.specialization}</TableCell>
                          <TableCell>{lawyer.experience}</TableCell>
                          <TableCell>{lawyer.submittedDate}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">
                              <Clock className="mr-1 h-3 w-3" />
                              Menunggu
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button size="sm" variant="default">
                                <CheckCircle className="mr-1 h-4 w-4" />
                                Terima
                              </Button>
                              <Button size="sm" variant="destructive">
                                <XCircle className="mr-1 h-4 w-4" />
                                Tolak
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="users">
                <div className="text-center py-12 text-muted-foreground">
                  <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Manajemen pengguna akan tersedia di sini</p>
                </div>
              </TabsContent>

              <TabsContent value="documents">
                <div className="text-center py-12 text-muted-foreground">
                  <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Manajemen dokumen akan tersedia di sini</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPanel;
