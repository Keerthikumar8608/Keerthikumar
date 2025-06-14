import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Github, Linkedin } from "lucide-react";

const Contact = () => {
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
      <div className="max-w-3xl mx-auto">
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
          Ready to collaborate on innovative engineering projects? Let's connect through any of these channels.
        </motion.p>

        <div className="space-y-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8 rounded-xl"
          >
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
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-card p-8 rounded-xl"
          >
            <h2 className="text-3xl font-bold text-gradient-cyan mb-8">Follow Me</h2>
            
            <div className="flex justify-center space-x-6">
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
            
            <p className="text-futuristic-platinum/80 mt-6 text-sm text-center">
              Connect with me on social media to stay updated with my latest projects and engineering insights.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
