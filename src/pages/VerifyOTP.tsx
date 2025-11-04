import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Scale } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp.length !== 6) {
      toast({
        title: "Kode OTP tidak lengkap",
        description: "Silakan masukkan 6 digit kode OTP",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Verifikasi berhasil",
        description: "Akun Anda telah diverifikasi",
      });
      navigate("/auth");
    }, 1500);
  };

  const handleResend = () => {
    toast({
      title: "Kode OTP telah dikirim ulang",
      description: "Silakan cek email Anda",
    });
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center justify-center mb-8">
          <Scale className="h-10 w-10 text-primary mr-2" />
          <span className="text-3xl font-bold text-primary">Navigo</span>
        </Link>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Verifikasi OTP</CardTitle>
            <CardDescription>
              Masukkan kode 6 digit yang telah dikirim ke email Anda
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleVerify} className="space-y-6">
              <div className="flex justify-center">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Memverifikasi..." : "Verifikasi"}
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                <p>
                  Tidak menerima kode?{" "}
                  <button
                    type="button"
                    onClick={handleResend}
                    className="text-primary hover:underline"
                  >
                    Kirim ulang
                  </button>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VerifyOTP;
