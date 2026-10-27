import { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  User, 
  AtSign, 
  MessageSquare, 
  ArrowUpRight, 
  Briefcase 
} from './Icons';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState(null);

  const targetEmail = 'mdon85329@gmail.com';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Daniel,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nEmail: ${formData.email}`
    );

    const mailtoUrl = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setStatus('success');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-start md:items-center text-left md:text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F5F5F7] tracking-tight">
          Let's Work <span className="text-accent-sun">Together</span>
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 max-w-xl mt-3 font-normal">
          Have an exciting project, freelance opportunity, or just want to connect? Send a message or reach out directly!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
        {/* Contact Form Column */}
        <div className="lg:col-span-7 bg-neutral-900/70 border border-neutral-800 hover:border-accent-star/40 rounded-2xl p-6 sm:p-8 shadow-xl transition-colors duration-300">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-9 h-9 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center text-accent-star">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F7]">
                Send a Message
              </h3>
              <p className="text-xs text-neutral-400">
                Directly opens your mail client
              </p>
            </div>
          </div>

          {status === 'success' ? (
            <div className="p-6 rounded-xl bg-neutral-950 border border-neutral-800 text-center flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-neutral-900 border border-accent-sun/60 flex items-center justify-center text-accent-sun">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#F5F5F7]">Mail Client Triggered!</h4>
              <p className="text-sm text-neutral-400 max-w-md">
                Your default mail client has opened with your pre-filled inquiry. You can also copy my email directly below.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatus(null);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="mt-2 text-xs font-semibold text-accent-sun hover:underline underline-offset-4 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-sun"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name Field */}
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-400 mb-1.5 ml-1">
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-10 pr-4 py-3 text-sm text-[#F5F5F7] placeholder-neutral-500 focus:outline-none focus:border-accent-sun focus:ring-1 focus:ring-accent-sun transition-colors"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-400 mb-1.5 ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                    <AtSign className="w-4 h-4" />
                  </div>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-10 pr-4 py-3 text-sm text-[#F5F5F7] placeholder-neutral-500 focus:outline-none focus:border-accent-sun focus:ring-1 focus:ring-accent-sun transition-colors"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-400 mb-1.5 ml-1">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3.5 text-sm text-[#F5F5F7] placeholder-neutral-500 focus:outline-none focus:border-accent-sun focus:ring-1 focus:ring-accent-sun transition-colors resize-none"
                />
              </div>

              {/* Primary Submit Button: Amber */}
              <button
                type="submit"
                className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-accent-sun hover:bg-accent-sun/90 text-[#08080A] font-bold py-3.5 px-6 rounded-lg shadow-sun-glow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sun"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 text-[#08080A]" />
              </button>
            </form>
          )}
        </div>

        {/* Direct Email Display & Social Links Column */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full">
          {/* Direct Email Card with 1-Click Copy */}
          <div className="bg-neutral-900/70 border border-neutral-800 hover:border-accent-star/40 rounded-2xl p-6 shadow-xl transition-colors duration-300">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center text-accent-star">
                <Mail className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#F5F5F7] uppercase tracking-wider">
                Direct Email
              </h4>
            </div>

            <p className="text-xs text-neutral-400 mb-3">
              Feel free to email me directly or copy the address below:
            </p>

            <div className="flex items-center justify-between gap-2 p-3 bg-neutral-950 border border-neutral-800 rounded-lg">
              <span className="text-xs sm:text-sm font-mono text-[#F5F5F7] select-all truncate">
                {targetEmail}
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent-sun hover:bg-accent-sun/90 text-[#08080A] text-xs font-bold transition-all duration-200 cursor-pointer flex-shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sun"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#08080A]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#08080A]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="bg-neutral-900/70 border border-neutral-800 hover:border-accent-star/40 rounded-2xl p-6 shadow-xl transition-colors duration-300">
            <h4 className="text-sm font-bold text-[#F5F5F7] uppercase tracking-wider mb-4">
              Connect On Socials
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/Donmane"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-accent-star/50 text-neutral-300 hover:text-accent-sun transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sun"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-neutral-400 group-hover:text-accent-sun transition-colors" />
                  <span className="text-xs font-semibold text-[#F5F5F7]">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-accent-sun transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/daniel-edith-agoye-30ba3a411"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-accent-star/50 text-neutral-300 hover:text-accent-sun transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sun"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-neutral-400 group-hover:text-accent-sun transition-colors" />
                  <span className="text-xs font-semibold text-[#F5F5F7]">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-accent-sun transition-colors" />
              </a>

              {/* Fiverr */}
              <a
                href="https://www.fiverr.com/danny_alvis/buying?source=avatar_menu_profile"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-accent-star/50 text-neutral-300 hover:text-accent-sun transition-colors duration-200 sm:col-span-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sun"
              >
                <div className="flex items-center gap-2.5">
                  <Briefcase className="w-4 h-4 text-neutral-400 group-hover:text-accent-sun transition-colors" />
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold text-[#F5F5F7]">Fiverr Freelance</span>
                    <span className="text-[10px] text-neutral-400">Custom frontend development & engineering</span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-accent-sun transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;