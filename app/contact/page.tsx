"use client";

import { useMemo, useState } from "react";
import Main from "../components/sections/Main";
import FaqItem from "../components/sections/contact/FaqItem";
import Paragraph from "../components/Paragraph";
import HeroBanner from "../components/sections/HeroBanner";
import DownloadSection from "../components/sections/contact/DownloadSection";
import ContactMethodsSection from "../components/sections/contact/ContactMethodsSection";
import SectionTitle from "../components/SectionTitle";
import ContentTitle from "../components/ContentTitle";
import ActionButton from "../components/ActionButton";
import SubmitButton from "../components/SubmitButton";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

// import PageTitle from "../components/PageTitle";

// const Contact = () => (
//   <Main>
//     {/* ── Title ────────────────────────────────────────────────────────── */}
//     <PageTitle title="Contact Us" />

//     {/* ── About Langphy ────────────────────────────────────────────────── */}

//     {/* ── Our Mission ──────────────────────────────────────────────────── */}
    
      
//     {/* ── Our Approach ─────────────────────────────────────────────────── */}

//     {/* ── Ocean Branding ───────────────────────────────────────────────── */}

//     {/* ── Our Team ─────────────────────────────────────────────────────── */}

//   </Main>
// );

// export default Contact;


const ContactPage = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const faqs = useMemo(() => ([
    {
      q: "Is Langphy free to download?",
      a: "Yes! Langphy is free to download on Google Play. Some premium content may require an in-app purchase.",
    },
    {
      q: "What devices is Langphy available on?",
      a: "Langphy is currently available for Android devices via Google Play Store.",
    },
    {
      q: "How many lessons does Langphy include?",
      a: "Langphy includes 62 structured categories covering everyday German for real-life communication.",
    },
    {
      q: "Can I learn German as a complete beginner?",
      a: "Absolutely. Langphy is designed for all levels — from complete beginners to intermediate learners looking to sharpen their skills.",
    },
  ]), []);

  return (
    <Main>
    {/* <main className="flex flex-1 w-full flex-col bg-white"> */}

      {/* ── Hero Banner ──────────────────────────────────────────────────────── */}
      <HeroBanner
        title="CONTACT US"
        infoMessage="Whether you have a question about Langphy, need support, or just want to say hello — our team is here for you."
      >
        We'd love to hear<br className="hidden sm:block" /> from you
      </HeroBanner>

      {/* ── Contact Methods ──────────────────────────────────────────────────── */}
      <ContactMethodsSection />

      {/* ── Form + FAQ ───────────────────────────────────────────────────────── */}
      <section className="w-full px-4 py-20 md:py-28">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* ── Contact Form ── */}
          <div className="w-full lg:w-[55%] flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <SectionTitle className="text-left">
                Send us a message
              </SectionTitle>
              <Paragraph
                content="Fill in the form below and we'll get back to you as soon as possible."
              />
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 bg-[#D5F6FF] rounded-2xl p-10 text-center min-h-[360px]">
                
                {/* Checkmark */}
                <div className="flex w-16 h-16 rounded-full bg-[#1B7CF5] items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <ContentTitle title="Message sent!" />

                <Paragraph className="max-w-xs"
                  content="Thanks for reaching out. We'll get back to you within 24 hours."
                />
                
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-2 cursor-pointer text-sm font-semibold text-[#1B7CF5] underline underline-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-semibold text-[#142C57]">
                      Your Name <span className="text-[#1B7CF5]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Müller"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-zinc-200 bg-[#F9FAFB] px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#1B7CF5] focus:outline-none focus:ring-2 focus:ring-[#1B7CF5]/20 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-semibold text-[#142C57]">
                      Email Address <span className="text-[#1B7CF5]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-zinc-200 bg-[#F9FAFB] px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#1B7CF5] focus:outline-none focus:ring-2 focus:ring-[#1B7CF5]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-sm font-semibold text-[#142C57]">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-zinc-200 bg-[#F9FAFB] px-4 py-3 text-sm text-zinc-900 focus:border-[#1B7CF5] focus:outline-none focus:ring-2 focus:ring-[#1B7CF5]/20 transition-all appearance-none"
                  >
                    <option value="" disabled>Select a topic…</option>
                    <option value="general">General Enquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing & Subscriptions</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-[#142C57]">
                    Message <span className="text-[#1B7CF5]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us how we can help…"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-zinc-200 bg-[#F9FAFB] px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#1B7CF5] focus:outline-none focus:ring-2 focus:ring-[#1B7CF5]/20 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <SubmitButton
                  onClick={handleSubmit}
                  disabled={status === "sending" || !form.name || !form.email || !form.message}
                  className="mt-2 w-full sm:w-auto sm:self-start inline-flex items-center justify-center gap-2 rounded-full bg-[#142C57] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1B7CF5] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg> */}
                    </>
                  )}
                </SubmitButton>

              </div>
            )}
          </div>

          {/* ── Divider (desktop only) ── */}
          <div className="hidden lg:block w-px bg-zinc-100 self-stretch" />

          {/* ── FAQ ── */}
          <div className="w-full lg:flex-1 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <SectionTitle className="text-left">Frequently asked</SectionTitle>
              <Paragraph content="Quick answers to the questions we get most often."/>
            </div>

            <div className="flex flex-col gap-3">
              {faqs.map(({ q, a }) => ( /* ── Accordion FAQ Item ─────────────────────────────────────────────────── */
                <FaqItem key={q} question={q} answer={a} />
              ))}
            </div>

            {/* Still need help prompt */}
            <div className="mt-4 flex items-start gap-4 bg-gradient-to-br from-[#1B7CF5] to-[#0A9AB0] rounded-2xl p-6 text-white">
              <div className="flex shrink-0 w-10 h-10 rounded-full bg-white/20 items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <ContentTitle className="mb-1" title="Still have questions?" invert />
                <p className="text-xs text-white/80 leading-5">
                  Can't find what you're looking for? Write to us directly at{" "}
                  <a href="mailto:support@langphy.com" className="underline underline-offset-2 font-medium">
                    support@langphy.com
                  </a>{" "}
                  and we'll be happy to help.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Download CTA ─────────────────────────────────────────────────────── */}
      <DownloadSection />

    </Main>
  );
}

export default ContactPage;
