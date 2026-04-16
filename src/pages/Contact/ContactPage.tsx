import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp, MessageCircle } from "lucide-react";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";
import MapSection from "../../components/contact/MapSection";

const ease = [0.22, 1, 0.36, 1] as const;

const ContactPage = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-bg pb-16">
      <section className="relative w-full overflow-hidden pt-16 pb-12 sm:pt-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-[rgb(var(--color-accent-purple))]/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[rgb(var(--color-accent-magenta))]/15 blur-3xl" />
          <div className="absolute top-1/3 right-1/3 h-64 w-64 rounded-full bg-[rgb(var(--color-accent-cyan))]/10 blur-3xl" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted backdrop-blur">
              <MessageCircle className="h-3.5 w-3.5 text-[rgb(var(--color-accent-magenta))]" />
              Contact us
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-heading sm:text-5xl lg:text-6xl">
              Let's{" "}
              <span className="bg-gradient-to-r from-[rgb(var(--color-accent-purple))] via-[rgb(var(--color-accent-magenta))] to-[rgb(var(--color-accent-cyan))] bg-clip-text text-transparent">
                Connect
              </span>{" "}
              & Build Together
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
              Have a question or want to discuss your project? We're here to help you transform your
              ideas into reality.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto mb-20 grid w-full max-w-7xl overflow-hidden rounded-3xl border border-border bg-surface shadow-card md:grid-cols-2"
        >
          <ContactInfo />
          <ContactForm />
        </motion.div>
      </section>

      <MapSection />

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-magenta))] text-white shadow-hover transition-transform duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp size={28} />
        </button>
      )}
    </main>
  );
};

export default ContactPage;
