"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      // In a real implementation, you would send the form data to your API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pattern">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-16 py-6 max-sm:px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Mockmate Logo" width={40} height={40} />
          <h1 className="text-xl font-semibold text-primary-100">Mockmate</h1>
        </Link>
        {/* 
        <div className="flex items-center gap-6">
          <Link href="/about" className="text-light-100 hover:text-primary-200">
            About
          </Link>
        </div> */}
      </nav>

      <div className="root-layout">
        <header className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-100 mb-4">
            Get in Touch
          </h2>
          <p className="text-light-100 max-w-2xl">
            Have questions about Mockmate or need assistance with your interview
            preparation? We&apos;re here to help you succeed in your career
            journey.
          </p>
        </header>

        <div className="flex gap-16 max-lg:flex-col">
          {/* Contact Form */}
          <div className="flex-1">
            <div className="card-border">
              <div className="card p-15">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Send us a message
                </h3>

                <form className="form space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="label block mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="input w-full"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="label block mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="input w-full"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="label block mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="input w-full"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="label block mb-4">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="input w-full !rounded-2x1 resize-none py-3 text-lg"
                      placeholder="Tell us how we can help you"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-dark-100"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex-1">
            <div className="blue-gradient-dark rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-semibold text-primary-100 mb-6">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 flex-center rounded-full bg-dark-200 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary-200"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <a
                      href="tel:+123456789"
                      className="text-light-400 hover:text-primary-200"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 flex-center rounded-full bg-dark-200 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary-200"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a
                      href="mailto:support@mockmate.com"
                      className="text-light-400 hover:text-primary-200"
                    >
                      support@mockmate.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 flex-center rounded-full bg-dark-200 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary-200"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-light-400">
                      123 Interview Street
                      <br />
                      Tech City, CA 94107
                      <br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="pt-6 border-t border-light-600/30">
                  <h4 className="text-white font-medium mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://twitter.com"
                      aria-label="Twitter"
                      className="flex-center rounded-full bg-dark-200 p-3 text-light-400 hover:text-primary-200 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com"
                      aria-label="LinkedIn"
                      className="flex-center rounded-full bg-dark-200 p-3 text-light-400 hover:text-primary-200 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      href="https://github.com"
                      aria-label="GitHub"
                      className="flex-center rounded-full bg-dark-200 p-3 text-light-400 hover:text-primary-200 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-border">
              <div className="card p-6">
                <h4 className="text-lg font-semibold text-primary-100 mb-3">
                  How does Mockmate work?
                </h4>
                <p className="text-light-400">
                  Mockmate uses AI to simulate real interview experiences. You
                  can practice with our virtual interviewers, get instant
                  feedback on your responses, and improve your interview skills
                  with personalized recommendations.
                </p>
              </div>
            </div>

            <div className="card-border">
              <div className="card p-6">
                <h4 className="text-lg font-semibold text-primary-100 mb-3">
                  Is Mockmate free to use?
                </h4>
                <p className="text-light-400">
                  We offer both free and premium plans. The free plan gives you
                  access to basic interview practice, while our premium plans
                  offer advanced features like industry-specific interviews and
                  detailed performance analytics.
                </p>
              </div>
            </div>

            <div className="card-border">
              <div className="card p-6">
                <h4 className="text-lg font-semibold text-primary-100 mb-3">
                  What types of interviews can I practice?
                </h4>
                <p className="text-light-400">
                  Mockmate supports a wide range of interview types including
                  technical, behavioral, case, and industry-specific interviews
                  for roles in technology, finance, healthcare, and more.
                </p>
              </div>
            </div>

            <div className="card-border">
              <div className="card p-6">
                <h4 className="text-lg font-semibold text-primary-100 mb-3">
                  How can I provide feedback about the platform?
                </h4>
                <p className="text-light-400">
                  We value your feedback! You can use the contact form on this
                  page to share your thoughts, suggestions, or report any issues
                  you encounter while using Mockmate.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default Contact;
