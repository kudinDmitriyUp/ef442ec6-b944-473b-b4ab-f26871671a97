"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroShowcaseSplit from '@/components/sections/hero/HeroShowcaseSplit';
import TagAboutCard from '@/components/sections/about/TagAboutCard';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { BookOpen, HelpCircle, Mail, Sparkles, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="aurora"
      cardStyle="solid-accent"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="UGC Creators"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Blog", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroShowcaseSplit
          title="Authentic UGC Content That Converts"
          description="We create professional user-generated content that resonates with your audience. From concept to delivery, we handle everything to elevate your brand with authentic, high-performing content."
          tags={["UGC Production", "Content Creation", "Social Media", "Brand Storytelling"]}
          buttons={[
            { text: "Start Your Campaign", href: "#contact" },
            { text: "View Our Work", href: "#blog" }
          ]}
          showcaseImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795715003-0bygv185.jpg"
          showcaseImageAlt="User generated content creators filming authentic social media videos"
        />
      </div>

      <div id="about" data-section="about">
        <TagAboutCard
          tag="About Us"
          title="Transforming Brand Stories Through Authentic Content"
          paragraphs={[
            "We specialize in creating user-generated content that builds genuine connections between brands and their audiences. Our team of creative professionals understands what makes content resonate.",
            "With years of experience across multiple industries, we deliver content that doesn't just look good—it drives real results for your business. From awareness to conversion, our UGC solutions are designed to perform."
          ]}
          icon={Sparkles}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSix
          title="Our UGC Production Process"
          description="We follow a proven methodology to deliver high-quality content that aligns with your brand vision and marketing goals."
          tag="Process"
          features={[
            {
              id: 1,
              title: "Strategy & Research",
              description: "We analyze your target audience, competitors, and campaign goals to develop a comprehensive content strategy that maximizes impact.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795715818-6l69wk6z.jpg"
            },
            {
              id: 2,
              title: "Content Creation",
              description: "Our skilled creators produce authentic, high-quality UGC that captures genuine customer perspectives and brand values.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795716616-wstei706.jpg"
            },
            {
              id: 3,
              title: "Optimization & Delivery",
              description: "We optimize content for each platform, manage revisions, and deliver everything you need to launch your campaign successfully.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795717433-68aw55tw.jpg"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          tagIcon={Zap}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="The UGC content exceeded our expectations. It felt authentic, resonated with our target audience, and delivered exceptional conversion rates. We've partnered with UGC Creators for multiple campaigns since."
          rating={5}
          author="Sarah Johnson, Marketing Director at TechFlow"
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795718376-6l6kv6lt.jpg", alt: "Sarah Johnson" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795718967-helrx1bn.jpg", alt: "Client representative" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795719759-ctbply10.jpg", alt: "Team member" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795720913-20nx55hm.jpg", alt: "Team member" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795722101-dpvsotxe.jpg", alt: "Team member" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795722696-04fz5vyy.jpg", alt: "Team member" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofThree
          title="Trusted By Leading Brands"
          description="Our UGC content has helped dozens of companies increase engagement and drive conversions across every major platform."
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795727278-s7kqqy24.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795727980-4bastnh7.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795728816-2y0j55w2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795729614-al9eravy.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795730424-ze1atp67.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795731253-mzqzhewj.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795731870-zm98zbg5.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795732672-vb014ya2.jpg"
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={50}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Get answers to common questions about our UGC services and how we can help your brand."
          tag="Help"
          faqs={[
            {
              id: "1",
              title: "What exactly is UGC content?",
              content: "User-generated content (UGC) is authentic content created by real people (not professional actors) that showcases products or services. It appears more genuine and relatable than traditional advertising, making it highly effective for building trust and driving conversions."
            },
            {
              id: "2",
              title: "How is your UGC different from other creators?",
              content: "We combine professional production quality with authentic storytelling. Our creators understand marketing psychology and platform dynamics, ensuring every piece of content is both genuine and optimized for performance."
            },
            {
              id: "3",
              title: "What platforms do you create content for?",
              content: "We produce UGC for all major platforms including TikTok, Instagram, YouTube, Facebook, and Pinterest. We optimize format, length, and style for each platform to maximize engagement and results."
            },
            {
              id: "4",
              title: "How long does a typical project take?",
              content: "Most projects take 2-4 weeks from brief to delivery, depending on the number of videos and revision rounds. We can expedite for rush campaigns. Let's discuss your timeline during our initial consultation."
            },
            {
              id: "5",
              title: "Can you create content in different styles?",
              content: "Absolutely. Our team can adapt to various tones and styles—from casual and playful to professional and polished. We'll work with you to ensure the content matches your brand voice perfectly."
            },
            {
              id: "6",
              title: "What's included in your service?",
              content: "Our packages include strategy development, content creation, up to 2 rounds of revisions, platform optimization, and final delivery in all required formats. Custom packages available based on your specific needs."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          tagIcon={HelpCircle}
          animationType="smooth"
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Case Studies & Insights"
          description="Explore our recent projects and learn how we've helped brands succeed with authentic UGC campaigns."
          tag="Blog"
          blogs={[
            {
              id: "1",
              category: "Case Study",
              title: "How We Increased E-commerce Sales by 245% With UGC",
              excerpt: "Learn how authentic product videos transformed a struggling e-commerce brand into a growth machine with consistent high-converting content.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795723537-ynnv4150.jpg",
              imageAlt: "Case study analytics dashboard",
              authorName: "Emma Rodriguez",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795735048-24wu6bwn.jpg",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Strategy",
              title: "The Psychology Behind High-Converting UGC Content",
              excerpt: "Discover the key psychological triggers that make UGC so effective and how to leverage them in your campaigns.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795724742-anry2s2h.jpg",
              imageAlt: "Marketing strategy board",
              authorName: "James Mitchell",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795736343-01civiz0.jpg",
              date: "08 Jan 2025"
            },
            {
              id: "3",
              category: "Trends",
              title: "2025 UGC Trends: What's Working Now",
              excerpt: "Stay ahead of the curve with insights into the latest trends shaping user-generated content and social commerce.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795725547-rqv0ou9j.jpg",
              imageAlt: "Social media influencer collaboration",
              authorName: "Lisa Chen",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795736971-m9kelia9.jpg",
              date: "28 Dec 2024"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          tagIcon={BookOpen}
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Elevate Your Brand With UGC?"
          description="Let's create authentic content that connects with your audience and drives real business results. Submit your details and we'll be in touch within 24 hours."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765795726483-bhkf6o49.jpg"
          imageAlt="Creative team collaboration"
          mediaPosition="right"
          tagIcon={Mail}
          inputPlaceholder="your@email.com"
          buttonText="Start a Conversation"
          termsText="We respect your privacy. Your information is secure and we'll only contact you about your inquiry."
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="UGC Creators"
          logoAlt="UGC Creators logo"
        />
      </div>
    </ThemeProvider>
  );
}