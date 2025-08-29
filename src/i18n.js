// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Objeto que conterá todas as nossas traduções
const resources = {
  // Objeto para o idioma Inglês
  en: {
    translation: {
      "sobre": {
        "nome": "Gabriel Chagas Lage",
        "cargo": "Solutions Architect AWS",
        "biografia": "Gabriel Chagas Lage is a rising professional in cloud computing and DevOps, with a trajectory marked by continuous specialization and high-level AWS certifications. Currently, he works as a Jr Cloud Solutions Architect at ForceOne, where he designs and implements robust, secure, and scalable architectures, always aligning technical solutions with business needs.",
        "titulo_skills": "Main Skills:"
      }
    }
  },
  // Objeto para o idioma Português
  pt: {
    translation: {
      "sobre": {
        "nome": "Gabriel Chagas Lage",
        "cargo": "Arquiteto de soluções AWS",
        "biografia": "É um profissional em ascensão na área de computação em nuvem e DevOps, com uma trajetória marcada por especialização contínua e certificações de alto nível na AWS. Hoje, atua como Arquiteto de Soluções em Cloud Jr na ForceOne, onde desenha e implementa arquiteturas robustas, seguras e escaláveis, sempre alinhando soluções técnicas às necessidades de negócio.",
        "titulo_skills": "Principais Habilidades:"
      }
    }
  }
};

i18n
  .use(initReactI18next) // Passa a instância do i18n para o react-i18next
  .init({
    resources,
    lng: 'pt', // Define o idioma inicial
    fallbackLng: 'en', // Idioma para usar caso a tradução não seja encontrada
    interpolation: {
      escapeValue: false // React já protege contra XSS
    }
  });

export default i18n;