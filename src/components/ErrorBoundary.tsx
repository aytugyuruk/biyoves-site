import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uygulama hatası yakalandı:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = "/";
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="flex justify-center">
              <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">
                Bir Hata Oluştu
              </h1>
              <p className="text-muted-foreground">
                Üzgünüz, beklenmeyen bir hata meydana geldi. Lütfen sayfayı yenileyin veya ana sayfaya dönün.
              </p>
            </div>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <div className="p-4 rounded-lg bg-muted text-left">
                <p className="text-sm font-mono text-destructive break-all">
                  {this.state.error.message}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={this.handleReload}
                className="bg-gradient-primary shadow-soft transition-all duration-300 hover:shadow-hover hover:scale-105"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Sayfayı Yenile
              </Button>
              <Button
                onClick={this.handleGoHome}
                variant="outline"
                className="transition-all duration-300 hover:scale-105"
              >
                Ana Sayfaya Dön
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
