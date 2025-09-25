import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Network, Code, Database, Brain } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Moussa ABDOULAYE',
      role: 'CEO & Co-Fondateur',
      currentPosition: 'Data Scientist & ML Engineer chez Saft (TotalEnergies), France',
      education: 'Diplômé en Mathématiques Appliquées et Informatique, Ecole d\'Ingénieurs du Littoral - Côte d\'Opale',
      expertise: ['Data Science', 'Machine Learning', 'IA', 'Modélisation Prédictive', 'Analyse quantitative'],
      bio: "Moussa Kalla est Data Scientist, spécialisé en modélisation prédictive et IA avancée. Actuellement en poste chez Saft, filiale de TotalEnergies en France, il conçoit des solutions basées sur l'IA pour la prise de décision et l'analyse de données, alliant expertise en mathématiques, deep learning et data science.",
      image: 'https://github.com/Moussa-Kalla/data-ai-factory/blob/mk_dev/assets/Moussa.png?raw=true',
      linkedin: 'www.linkedin.com/in/moussa~abdoulaye',
      github: 'https://github.com/Moussa-Kalla',
      icon: Brain
    },
    {
      name: 'Moustapha Maman Sani',
      role: 'Co-Fondateur',
      currentPosition: 'Ingénieur Superviseur Réseau chez Camusat, Niamey, Niger',
      education: 'Diplômé en Informatique & Télécommunications, ESM/ESG Groupe Sodesi',
      expertise: ['Développement Web', 'Développement Mobile', 'Ingénierie Réseau', 'Télécommunications'],
      bio: "Moustapha Maman Sani est développeur Web & Mobile et Ingénieur Réseau & Télécom. Ingénieur Superviseur Réseau chez Camusat, il maîtrise l'architecture réseau, le développement logiciel et l'administration système, garantissant des solutions technologiques fiables et évolutives.",
      image: 'https://github.com/Moussa-Kalla/data-ai-factory/blob/mk_dev/assets/Moustapha.jpeg?raw=true',
      linkedin: 'https://linkedin.com/in/moustapha-maman-sani-abdou-19189aa1',
      icon: Network
    },
    {
      name: 'Ahmed Abdoulahi',
      role: 'Co-Fondateur',
      currentPosition: 'Développeur backend et DevOps chez Softeam, Nantes, France',
      education: 'Cycle Ingénieur en Informatique, Sup Galilée (Université Sorbonne Paris Nord)',
      expertise: ['Développement Backend', 'DevOps', 'Data Science', 'Machine Learning', 'Business Intelligence'],
      bio: "Ahmed Abdoulahi, ingénieur informatique en fin de cycle, est actuellement développeur backend et DevOps chez Softeam à Nantes. Expert en microservices Spring Boot, Docker et CI/CD, il maîtrise aussi le traitement et la visualisation de données, avec des projets concrets en machine learning et systèmes décisionnels.",
      image: 'https://github.com/Moussa-Kalla/BayanAI/blob/mk_dev/assets/AhmedABDOULAHI.jpeg?raw=true',
      linkedin: 'https://www.linkedin.com/in/ahmed-abdoulahi-34aa10239/',
      github: 'https://github.com/AhmedAbdoulahi',
      icon: Network
    },
    {
      name: 'Moussa MOUMOUNI HAMA',
      role: 'Co-Fondateur',
      currentPosition: 'Tech Lead Talend/BI chez CGI, Expert en Data & Business Intelligence chez CGI, France',
      education: "Diplômé en Informatique Décisionnelle (Université UFR-MIM de Lorraine, Metz)",
      expertise: ['Business Intelligence', 'Big Data', 'Développement Web', 'Télécommunications', 'CISCO'],
      bio: "Avec plus de 7 ans d'expérience dans le domaine de la data, Moussa MOUMOUNI HAMA est un expert technique de la chaîne décisionnelle, de l'extraction à la visualisation. Certifié Talend Data Integration, il maîtrise les bases Oracle, PostgreSQL, SQL Server, et des outils BI comme PowerBI, SAP BO ou Tableau. Son profil polyvalent inclut également les réseaux IP, les systèmes Télécom, le développement web et l'administration de bases de données.",
      image: 'https://github.com/Moussa-Kalla/BayanAI/blob/mk_dev/assets/MoussaMoumouni.jpeg?raw=true',
      linkedin: 'https://linkedin.com/in/moumouni-hama-moussa-613a28b9',
      icon: Network
    }
  ];
  
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Notre Équipe Fondatrice
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Une équipe passionnée combinant expertise technique et vision innovante pour transformer le monde des données et de l'IA.
          </p>
        </div>

        {/* Tous les profils alignés en grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full"
            >
              <div className="p-6 flex flex-col items-center h-full">
                <div className="relative w-40 h-40 mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-blue-500 dark:border-blue-400"
                  />
                  <div className="absolute bottom-0 right-0 bg-white dark:bg-gray-800 rounded-full p-2 border-2 border-blue-500 dark:border-blue-400">
                    <member.icon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  </div>
                </div>

                <div className="text-center mb-6 w-full">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h2>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-4">{member.currentPosition}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{member.education}</p>
                </div>

                <div className="w-full mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">Expertise</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center leading-relaxed">{member.bio}</p>

                <div className="flex justify-center space-x-4 mt-auto">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Notre Histoire</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Fondée par nous quatre, BayanAI est née de notre vision commune : démocratiser l'accès à l'intelligence artificielle et aux solutions data-driven pour toutes les entreprises. En combinant nos expertises complémentaires en data science, machine learning, développement web et infrastructure réseau, nous avons créé une entreprise capable de proposer des solutions complètes et innovantes.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Aujourd'hui, BayanAI s'impose comme un acteur clé dans le domaine de l'IA et de la data science, accompagnant les entreprises dans leur transformation numérique grâce à des solutions sur mesure et une expertise approfondie. Notre engagement envers l'innovation et l'excellence technique demeure au cœur de notre mission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
