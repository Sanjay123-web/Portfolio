/**
 * ============================================================
 * Contact - Contact form with validation + social links
 * ============================================================
 */
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Mail,
  MapPin,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import SectionWrapper from './SectionWrapper';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) {
      errs.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      // NOTE: No backend integration. Form data is validated but not sent.
      // To integrate, connect to your email service (EmailJS, Formspree, etc.)
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white placeholder-slate-500
     text-sm focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05]
     transition-all duration-300 ${
       errors[field] ? 'border-red-500/50' : 'border-white/[0.06]'
     }`;

  return (
    <SectionWrapper id="contact">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-violet-400 tracking-widest uppercase mb-3">
          Get In Touch
        </p>
        <h2 className="section-heading gradient-text mb-4">
          Let's Build Something Amazing Together.
        </h2>
        <p className="section-subheading">
          Have a project in mind or want to collaborate? I'd love to hear from
          you.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 space-y-5"
          >
            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-slate-400 hover:text-violet-300 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Location</p>
                <p className="text-sm text-slate-400">{personalInfo.location}</p>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-4 border-t border-white/5">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">
                Follow Me
              </p>
              <div className="flex gap-3">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center
                             text-slate-400 hover:text-white hover:border-violet-500/30
                             transition-all duration-300 hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center
                             text-slate-400 hover:text-white hover:border-blue-500/30
                             transition-all duration-300 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          {submitted ? (
            <div className="glass-card p-10 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Message Validated!
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Your message has passed validation. To actually send messages,
                integrate an email service like{' '}
                <span className="text-violet-300">EmailJS</span>,{' '}
                <span className="text-violet-300">Formspree</span>, or a custom
                backend API.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="btn-secondary text-sm"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={inputClass('name')}
                />
                {errors.name && (
                  <p className="flex items-center gap-1 mt-1 text-xs text-red-400">
                    <AlertCircle className="w-3 h-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={inputClass('email')}
                />
                {errors.email && (
                  <p className="flex items-center gap-1 mt-1 text-xs text-red-400">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={inputClass('subject')}
                />
                {errors.subject && (
                  <p className="flex items-center gap-1 mt-1 text-xs text-red-400">
                    <AlertCircle className="w-3 h-3" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  className={`${inputClass('message')} resize-none`}
                />
                {errors.message && (
                  <p className="flex items-center gap-1 mt-1 text-xs text-red-400">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button type="submit" className="btn-primary w-full justify-center">
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
