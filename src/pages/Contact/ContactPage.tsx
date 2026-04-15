import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";
import MapSection from "../../components/contact/MapSection";

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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-grey/100 px-6 pt-32 pb-12 relative">
      <section className="text-center max-w-5xl mx-auto mb-24">
        <h1 className="text-[42px] md:text-[48px] font-extrabold leading-tight text-gray-900 mb-4">
          Let's{" "}
          <span className="text-[rgb(var(--color-accent-magenta))]">Connect</span>{" "}
          & Build Together
        </h1>

        <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed max-w-3xl mx-auto">
          Have a question or want to discuss your project? We're here to help you
          transform your ideas into reality.
        </p>
      </section>
      <div className="flex justify-center mb-24">
        <div className="w-full max-w-7xl bg-white rounded-2xl overflow-hidden shadow-lg grid md:grid-cols-2 gap-y-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>

      <MapSection />

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-purple-500 hover:bg-purple-60 text-white h-16 w-16           
      rounded-full
      flex items-center justify-center
      shadow-xl
      transition-all duration-300
    "
          aria-label="Scroll to top"
        >
          <ChevronUp size={35} />
        </button>
      )}
    </div>
  );
};

export default ContactPage;
