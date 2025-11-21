import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Lazy load components for better performance
const PhotoTypes = lazy(() => import("@/components/PhotoTypes"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Download = lazy(() => import("@/components/Download"));
const FAQ = lazy(() => import("@/components/FAQ"));

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <PhotoTypes />
          <Testimonials />
          <Pricing />
          <Download />
          <FAQ />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
