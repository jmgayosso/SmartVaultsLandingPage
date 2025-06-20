
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Collaborative } from "@/components/Collaborative";
import { ForBusiness } from "@/components/ForBusiness";
import { KeyAgents } from "@/components/KeyAgents";
import { RecentPosts } from "@/components/RecentPosts";
import { KeyAgencyFAQ } from "@/components/KeyAgencyFAQ";
import { AboutUs } from "@/components/AboutUs";
import { Footer } from "@/components/Footer";
import { TelegramButton } from "@/components/TelegramButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="collaborative">
        <Collaborative />
      </section>
      <section id="business">
        <ForBusiness />
      </section>
      <section id="key-agents">
        <KeyAgents />
      </section>
      {/* <RecentPosts /> */}
      <section id="faq">
        <KeyAgencyFAQ />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <Footer />
      <TelegramButton />
    </div>
  );
};

export default Index;
