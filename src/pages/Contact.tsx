import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Instagram, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("YOUR_PUBLIC_KEY");

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Keerthi Kumar',
        reply_to: formData.email,
      };

      await emailjs.send(
        'service_xxxxxxx', // Replace with your EmailJS service ID
        'template_xxxxxxx', // Replace with your EmailJS template ID
        templateParams
      );

    toast({
        title: "Message Sent Successfully!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error Sending Message",
        description: "Please try again later or contact me through social media.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/keerthi-kumar-m-11904b27b/",
      color: "hover:text-futuristic-cyan",
      delay: 0.2
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      url: "https://www.instagram.com/keerthikumar8608/",
      color: "hover:text-futuristic-magenta",
      delay: 0.4
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/keerthikumar8608",
      color: "hover:text-futuristic-platinum",
      delay: 0.6
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "keerthikumar8608@gmail.com",
      delay: 0.2
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Chennai, India",
      delay: 0.4
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 pt-32 pb-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-space font-bold text-center mb-8"
        >
          Get In <span className="text-gradient-cyan">Touch</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-futuristic-platinum/80 text-center mb-16 max-w-3xl mx-auto"
        >
          Ready to collaborate on innovative engineering projects? Let's discuss your ideas and bring them to life.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gradient-cyan mb-8">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-futuristic-platinum/80 font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-futuristic-navy/50 border border-futuristic-cyan/30 rounded-lg text-futuristic-platinum placeholder-futuristic-platinum/50 focus:border-futuristic-cyan focus:outline-none transition-colors backdrop-blur-lg"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-futuristic-platinum/80 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-futuristic-navy/50 border border-futuristic-cyan/30 rounded-lg text-futuristic-platinum placeholder-futuristic-platinum/50 focus:border-futuristic-cyan focus:outline-none transition-colors backdrop-blur-lg"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-futuristic-platinum/80 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-futuristic-navy/50 border border-futuristic-cyan/30 rounded-lg text-futuristic-platinum placeholder-futuristic-platinum/50 focus:border-futuristic-cyan focus:outline-none transition-colors backdrop-blur-lg"
                    placeholder="Project collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-futuristic-platinum/80 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-futuristic-navy/50 border border-futuristic-cyan/30 rounded-lg text-futuristic-platinum placeholder-futuristic-platinum/50 focus:border-futuristic-cyan focus:outline-none transition-colors resize-none backdrop-blur-lg"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full futuristic-button flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gradient-cyan mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: info.delay }}
                    className="flex items-center space-x-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-gradient-to-br from-futuristic-cyan to-futuristic-magenta rounded-full flex items-center justify-center text-futuristic-navy group-hover:glow-cyan"
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-gradient-cyan font-semibold">{info.title}</h3>
                      <p className="text-futuristic-platinum/80">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gradient-cyan mb-8">Follow Me</h2>
              
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: social.delay }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`w-14 h-14 glass-card border border-futuristic-cyan/30 rounded-xl flex items-center justify-center text-futuristic-platinum transition-all duration-300 hover:border-futuristic-cyan/60 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              
              <p className="text-futuristic-platinum/80 mt-6 text-sm">
                Connect with me on social media to stay updated with my latest projects and engineering insights.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
