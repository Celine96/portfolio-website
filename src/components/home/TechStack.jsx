import React from "react";
import { motion } from "framer-motion";

export default function TechStack() {
  const technologies = [
    { name: "OpenAI", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
    { name: "n8n", logo: "https://n8n.io/favicon.svg" },
    { name: "Google Cloud", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
    { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
    { name: "Pinecone", logo: "https://www.pinecone.io/_next/image/?url=%2Fimages%2Fpinecone-logo.png&w=32&q=75" },
  ];

  const additionalTechs = [
    "API Integration",
    "Webhooks",
    "RAG",
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#111111] border-y border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="text-xs sm:text-sm text-[#A0A0A0] uppercase tracking-wider mb-4">Powered By</p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-8 sm:h-10 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="hidden text-[#A0A0A0] text-sm font-medium">
                {tech.name}
              </div>
            </motion.div>
          ))}
          
          {additionalTechs.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (technologies.length + index) * 0.1 }}
              viewport={{ once: true }}
              className="text-[#A0A0A0] hover:text-[#CCFF00] transition-colors duration-300 text-xs sm:text-sm font-medium uppercase tracking-wider"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}