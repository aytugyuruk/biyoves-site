import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send, CheckCircle2, Mail, User, MessageSquare, AlertCircle } from "lucide-react";

// ============================================================
// FORMSPREE CONFIGURATION
// ============================================================
// 1. Go to https://formspree.io and create a free account
// 2. Create a new form and copy your form ID (e.g., "xyzabcde")
// 3. Replace "YOUR_FORM_ID" below with your actual form ID
// ============================================================
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdlonyn";

// Form validation schema
const contactSchema = z.object({
    name: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
    email: z.string().email("Geçerli bir e-posta adresi giriniz"),
    subject: z.string().min(5, "Konu en az 5 karakter olmalıdır"),
    message: z.string().min(20, "Mesaj en az 20 karakter olmalıdır"),
});

type ContactFormData = z.infer<typeof contactSchema>;

type SubmitStatus = "idle" | "loading" | "success" | "error";

const ContactForm = () => {
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setSubmitStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,
                    _subject: `BiyoVes İletişim: ${data.subject}`, // Email subject line
                }),
            });

            if (response.ok) {
                setSubmitStatus("success");
                reset();
                // Reset success message after 5 seconds
                setTimeout(() => setSubmitStatus("idle"), 5000);
            } else {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || "Form gönderilemedi. Lütfen tekrar deneyin.");
            }
        } catch (error) {
            setSubmitStatus("error");
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Bir hata oluştu. Lütfen daha sonra tekrar deneyin."
            );
            // Reset error message after 5 seconds
            setTimeout(() => {
                setSubmitStatus("idle");
                setErrorMessage("");
            }, 5000);
        }
    };

    return (
        <section id="contact" className="py-12 md:py-16 bg-muted/30">
            <div className="container">
                <motion.div
                    className="mx-auto max-w-2xl text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                        Bizimle{" "}
                        <span className="bg-gradient-primary bg-clip-text text-transparent">İletişime Geçin</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Sorularınız mı var? Size yardımcı olmaktan mutluluk duyarız.
                    </p>
                </motion.div>

                <motion.div
                    className="mx-auto max-w-xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <Card className="border-border/50 shadow-soft">
                        <CardContent className="p-6 sm:p-8">
                            {/* Success State */}
                            {submitStatus === "success" ? (
                                <motion.div
                                    className="text-center py-8"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mb-4">
                                        <CheckCircle2 className="h-8 w-8 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">
                                        Mesajınız Gönderildi!
                                    </h3>
                                    <p className="text-muted-foreground">
                                        En kısa sürede size dönüş yapacağız.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    {/* Error Alert */}
                                    {submitStatus === "error" && errorMessage && (
                                        <motion.div
                                            className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            <AlertCircle className="h-5 w-5 flex-shrink-0" />
                                            <p className="text-sm">{errorMessage}</p>
                                        </motion.div>
                                    )}

                                    {/* Name Field */}
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                                            <User className="h-4 w-4 text-muted-foreground" />
                                            Adınız <span className="text-destructive">*</span>
                                        </label>
                                        <Input
                                            id="name"
                                            placeholder="Adınız Soyadınız"
                                            {...register("name")}
                                            className={errors.name ? "border-destructive" : ""}
                                            disabled={submitStatus === "loading"}
                                        />
                                        {errors.name && (
                                            <p className="text-sm text-destructive">{errors.name.message}</p>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                                            <Mail className="h-4 w-4 text-muted-foreground" />
                                            E-posta <span className="text-destructive">*</span>
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="ornek@email.com"
                                            {...register("email")}
                                            className={errors.email ? "border-destructive" : ""}
                                            disabled={submitStatus === "loading"}
                                        />
                                        {errors.email && (
                                            <p className="text-sm text-destructive">{errors.email.message}</p>
                                        )}
                                    </div>

                                    {/* Subject Field */}
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium text-foreground flex items-center gap-2">
                                            <MessageSquare className="h-4 w-4 text-muted-foreground" />
                                            Konu <span className="text-destructive">*</span>
                                        </label>
                                        <Input
                                            id="subject"
                                            placeholder="Mesajınızın konusu"
                                            {...register("subject")}
                                            className={errors.subject ? "border-destructive" : ""}
                                            disabled={submitStatus === "loading"}
                                        />
                                        {errors.subject && (
                                            <p className="text-sm text-destructive">{errors.subject.message}</p>
                                        )}
                                    </div>

                                    {/* Message Field */}
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-foreground">
                                            Mesajınız <span className="text-destructive">*</span>
                                        </label>
                                        <Textarea
                                            id="message"
                                            placeholder="Mesajınızı buraya yazın..."
                                            rows={5}
                                            {...register("message")}
                                            className={errors.message ? "border-destructive" : ""}
                                            disabled={submitStatus === "loading"}
                                        />
                                        {errors.message && (
                                            <p className="text-sm text-destructive">{errors.message.message}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-gradient-primary shadow-soft transition-all duration-300 hover:shadow-hover"
                                            disabled={submitStatus === "loading"}
                                        >
                                            {submitStatus === "loading" ? (
                                                <>
                                                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                                    Gönderiliyor...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="mr-2 h-4 w-4" />
                                                    Mesaj Gönder
                                                </>
                                            )}
                                        </Button>
                                    </motion.div>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
