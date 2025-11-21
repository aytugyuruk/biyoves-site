import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero">
      <div className="container text-center">
        <div className="mx-auto max-w-md space-y-6 animate-fade-in">
          <div className="text-8xl font-bold text-primary/20">404</div>
          <h1 className="text-4xl font-bold text-foreground">Sayfa Bulunamadı</h1>
          <p className="text-lg text-muted-foreground">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="bg-gradient-primary">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Ana Sayfaya Dön
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
