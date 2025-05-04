import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>About Mock Mate</h2>
          <p className="text-lg">
            Your AI-powered interview companion for rehearsing and mastering job
            interviews with confidence.
          </p>
        </div>

        <Image
          src="/logo.svg"
          alt="AI Interview Assistant"
          width={350}
          height={350}
          className="max-sm:hidden"
        />
      </section>

      {/* Mission Statement */}
      <section className="flex flex-col gap-6">
        <div className="border-gradient p-0.5 rounded-2xl w-full">
          <div className="dark-gradient rounded-2xl p-8">
            <h3 className="text-primary-100 mb-4">Our Mission</h3>
            <p className="text-light-100 text-lg leading-relaxed">
              At Mock Mate, we&apos;re committed to empowering job seekers with
              the tools they need to succeed in interviews. We believe everyone
              deserves the opportunity to present their best self, regardless of
              background or experience level. Through AI-driven practice and
              feedback, we help you turn interview anxiety into interview
              confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Grid */}
      <section className="flex flex-col gap-6">
        <h2>Project Objectives</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Objective 1 */}
          <div className="border-gradient p-0.5 rounded-2xl">
            <div className="dark-gradient rounded-2xl p-6 h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="blue-gradient rounded-full p-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-dark-100"
                  >
                    <path d="M12 2v2"></path>
                    <path d="M12 16v6"></path>
                    <path d="m4.93 10.93 1.41 1.41"></path>
                    <path d="M17.66 11.66 19.07 13.07"></path>
                    <path d="M19.07 4.93 17.66 6.34"></path>
                    <path d="m6.34 6.34-1.41 1.41"></path>
                    <path d="M12 8a4 4 0 0 0 0 8"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">
                  Real Interview Experience
                </h3>
              </div>
              <p>
                Provide users with a realistic AI-assisted mock interview
                experience so they can rehearse and feel prepared for actual job
                interviews.
              </p>
            </div>
          </div>

          {/* Objective 2 */}
          <div className="border-gradient p-0.5 rounded-2xl">
            <div className="dark-gradient rounded-2xl p-6 h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="blue-gradient rounded-full p-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-dark-100"
                  >
                    <path d="M7 22a5 5 0 0 1-2-4"></path>
                    <path d="M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"></path>
                    <path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Communication Skills</h3>
              </div>
              <p>
                Enhance users&apos; communication skills through organized
                feedback on response organization, clarity, and fluency.
              </p>
            </div>
          </div>

          {/* Objective 3 */}
          <div className="border-gradient p-0.5 rounded-2xl">
            <div className="dark-gradient rounded-2xl p-6 h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="blue-gradient rounded-full p-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-dark-100"
                  >
                    <path d="m5 8 6 6"></path>
                    <path d="m4 14 6-6 2-3"></path>
                    <path d="M2 5h12"></path>
                    <path d="M7 2h1"></path>
                    <path d="m22 22-5-10-5 10"></path>
                    <path d="M14 18h6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Language Proficiency</h3>
              </div>
              <p>
                Boost English proficiency among non-native speakers through
                AI-powered language analysis and personalized suggestions.
              </p>
            </div>
          </div>

          {/* Objective 4 */}
          <div className="border-gradient p-0.5 rounded-2xl">
            <div className="dark-gradient rounded-2xl p-6 h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="blue-gradient rounded-full p-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-dark-100"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Time Management</h3>
              </div>
              <p>
                Help users optimize interview time through timers and response
                evaluation that simulate actual interview time constraints.
              </p>
            </div>
          </div>

          {/* Objective 5 */}
          <div className="border-gradient p-0.5 rounded-2xl">
            <div className="dark-gradient rounded-2xl p-6 h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="blue-gradient rounded-full p-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-dark-100"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Realistic Simulation</h3>
              </div>
              <p>
                Create an engaging, real-world interview simulation with
                AI-driven question creation, adaptive conversation, and feedback
                cycles.
              </p>
            </div>
          </div>

          {/* Objective 6 */}
          <div className="border-gradient p-0.5 rounded-2xl">
            <div className="dark-gradient rounded-2xl p-6 h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="blue-gradient rounded-full p-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-dark-100"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">24/7 Accessibility</h3>
              </div>
              <p>
                Render the platform available 24/7 and make it multi-device
                compliant so users can practice anytime, anywhere using a
                responsive web interface.
              </p>
            </div>
          </div>

          {/* Objective 7 */}
          <div className="border-gradient p-0.5 rounded-2xl">
            <div className="dark-gradient rounded-2xl p-6 h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="blue-gradient rounded-full p-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-dark-100"
                  >
                    <rect
                      width="18"
                      height="11"
                      x="3"
                      y="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Data Security</h3>
              </div>
              <p>
                Provide secure storage of user data by using authentication,
                encryption, and privacy-focused features to protect sensitive
                information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col gap-6 items-center text-center mt-8">
        <div className="blue-gradient-dark rounded-3xl p-10 w-full">
          <h2 className="text-primary-100 mb-6">
            Ready to Master Your Interview Skills?
          </h2>
          <p className="text-light-100 text-lg max-w-2xl mx-auto mb-8">
            Join thousands of job seekers who have improved their interview
            confidence and success rate with Mock Mate&apos;s AI-powered
            interview practice.
          </p>
          <Button asChild className="btn-primary">
            <Link href="/interview">Start Practicing Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
