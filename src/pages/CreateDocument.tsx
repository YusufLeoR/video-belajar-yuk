import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Eye } from "lucide-react";

const CreateDocument = () => {
  const documentTemplates = [
    {
      id: 1,
      title: "Surat Kuasa",
      description: "Template surat kuasa untuk berbagai keperluan hukum",
      icon: FileText,
      popular: true,
    },
    {
      id: 2,
      title: "Perjanjian Sewa",
      description: "Perjanjian sewa menyewa properti atau kendaraan",
      icon: FileText,
      popular: true,
    },
    {
      id: 3,
      title: "Surat Perjanjian Kerja",
      description: "Template kontrak kerja antara pemberi dan penerima kerja",
      icon: FileText,
      popular: false,
    },
    {
      id: 4,
      title: "Surat Pernyataan",
      description: "Template surat pernyataan untuk berbagai keperluan",
      icon: FileText,
      popular: false,
    },
    {
      id: 5,
      title: "Perjanjian Jual Beli",
      description: "Perjanjian transaksi jual beli barang atau properti",
      icon: FileText,
      popular: true,
    },
    {
      id: 6,
      title: "Surat Somasi",
      description: "Template surat peringatan atau teguran hukum",
      icon: FileText,
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Buat Dokumen</h1>
          <p className="text-muted-foreground">
            Pilih template dokumen hukum yang Anda butuhkan
          </p>
        </div>

        {/* Popular Templates Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Template Populer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentTemplates
              .filter((template) => template.popular)
              .map((template) => (
                <Card
                  key={template.id}
                  className="hover:shadow-lg transition-all duration-300 hover:border-primary/50 cursor-pointer group"
                >
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <template.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{template.title}</CardTitle>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button className="w-full" variant="default">
                      <FileText className="mr-2 h-4 w-4" />
                      Buat Dokumen
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Eye className="mr-2 h-4 w-4" />
                      Preview Template
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Templates Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Semua Template</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentTemplates
              .filter((template) => !template.popular)
              .map((template) => (
                <Card
                  key={template.id}
                  className="hover:shadow-lg transition-all duration-300 hover:border-primary/50 cursor-pointer group"
                >
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <template.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{template.title}</CardTitle>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button className="w-full" variant="default">
                      <FileText className="mr-2 h-4 w-4" />
                      Buat Dokumen
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Eye className="mr-2 h-4 w-4" />
                      Preview Template
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* Info Card */}
        <Card className="mt-8 bg-accent border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Download className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Cara Menggunakan Template</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Pilih template dokumen yang sesuai dengan kebutuhan Anda</li>
                  <li>Isi formulir dengan data yang diperlukan</li>
                  <li>Preview dokumen sebelum mengunduh</li>
                  <li>Unduh dokumen dalam format PDF atau Word</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateDocument;
