import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaFacebookF, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (formData.fullName.trim() === "") {
      alert("Please enter your full name!");
      setIsSubmitting(false);
      return;
    }
    
    if (formData.email.trim() === "" || !validateEmail(formData.email)) {
      alert("Please enter a valid email address!");
      setIsSubmitting(false);
      return;
    }
    
    if (formData.message.trim() === "") {
      alert("Please enter your message!");
      setIsSubmitting(false);
      return;
    }

    try {
        
      await emailjs.sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        form.current, {
        publicKey: import.meta.env.VITE_APP_PUBLIC_KEY, }
      );
      
      alert("Message sent successfully! I'll get back to you soon.");
      setFormData({ fullName: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email", error);
      alert("An error occurred while sending the message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
    const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://bd.linkedin.com/in/mohammed-ismail-601457217",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/mdaismail.it",
      label: "Facebook",
      color: "hover:text-blue-600"
    },
    {
      icon: FaTwitter,
      href: "https://x.com/MdIsmail5851415",
      label: "Twitter",
      color: "hover:text-black"
    },
    {
      icon: FaEnvelope,
      href: "mailto:ismailmd.code@gmail.com",
      label: "Email",
      color: "hover:text-red-400"
    }
  ];


  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm always excited to collaborate on innovative projects. Whether you need a full-stack application, 
                a modern website, or technical consultation, I'm here to help bring your vision to reality.
              </p>
              
              <div className="flex items-center gap-3 text-cyan-400">
                <SiNextdotjs className="text-2xl" />
                <span className="font-semibold">Next.js Full-Stack Developer</span>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8">
              <h4 className="text-xl font-semibold text-white mb-6">Contact Information</h4>
              
              <div className="space-y-4">
                <a href="tel:+8801879449789" className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group">
                  <div className="p-3 bg-cyan-500/20 rounded-2xl group-hover:bg-cyan-500/30 transition-all duration-300">
                    <FaPhone className="text-cyan-400 text-lg" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Phone</div>
                    <div className="text-white font-medium">+880 01879449789</div>
                  </div>
                </a>

                <a href="mailto:ismailmd.code@gmail.com" className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group">
                  <div className="p-3 bg-purple-500/20 rounded-2xl group-hover:bg-purple-500/30 transition-all duration-300">
                    <FaEnvelope className="text-purple-400 text-lg" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <div className="text-white font-medium">ismailmd.code@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-lg">
                  <div className="p-3 bg-green-500/20 rounded-2xl">
                    <FaMapMarkerAlt className="text-green-400 text-lg" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Location</div>
                    <div className="text-white font-medium">Bangladesh</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h5 className="text-lg font-semibold text-white mb-4">Connect with me</h5>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                      title={social.label}
                    >
                      <social.icon className={`text-gray-400 text-xl group-hover:text-white ${social.color} transition-colors duration-300`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-2">Send me a message</h3>
            <p className="text-gray-400 mb-6">Let's discuss your project requirements</p>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and requirements... Email or contact number write here"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-sm" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Response Time */}
            <div className="mt-6 p-4 bg-cyan-500/10 rounded-xl border border-cyan-400/20">
              <p className="text-sm text-cyan-400 text-center">
                💡 Typically reply within 2-4 hours during business days
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl border border-cyan-400/20 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to start your project?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's schedule a call to discuss your requirements in detail and create a plan for success.
            </p>
            <a 
              href="tel:+8801879449789" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300"
            >
              <FaPhone className="text-sm" />
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;