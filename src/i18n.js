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
        "cargo": "AWS Solutions Architect",
        "biografia": "Gabriel Chagas Lage is a rising professional in cloud computing and DevOps, with a trajectory marked by continuous specialization and high-level AWS certifications. Currently, he works as a Jr Cloud Solutions Architect at ForceOne, where he designs and implements robust, secure, and scalable architectures, always aligning technical solutions with business needs.",
        "titulo_skills": "Main Skills:"
      },
      "boasvindas": {
        "nome": "Gabriel Chagas Lage",
        "titulo": "AWS Solutions Architect",
        "bemvindo": "$ Welcome to my Portfolio",
        "cargo": "Software Engineering | AWS Solutions Architect",
        "local": "Belo Horizonte, Minas Gerais, Brazil",
        "faculdade": "Software Engineering - PUC Minas",
        "ajuda": "Type `help` to see all commands."
      },
  "certificacoes": {
      "premios": {
        "titulo": "Awards",
        "nenhum": "No awards registered yet.",
        "link": "🔗 View on LinkedIn",
        "Funcionário Destaque ForceOne 2024": {
          "titulo": "ForceOne Outstanding Employee 2024",
          "org": "ForceOne",
          "desc": "Recognition for outstanding performance, dedication, and exceptional results in Cloud Computing and DevOps projects at ForceOne."
        }
      },
        "titulo": "Certifications",
        "link": "🔗 View Credential",
        "AWS Certified Cloud Practitioner": {
          "titulo": "AWS Certified Cloud Practitioner",
          "descricao": "Foundational certification demonstrating general knowledge of AWS Cloud, including core services, security, architecture, pricing, and support."
        },
        "AWS Certified Solutions Architect – Associate": {
          "titulo": "AWS Certified Solutions Architect – Associate",
          "descricao": "Validates knowledge in AWS solution architecture, including designing resilient, secure, and scalable cloud applications using AWS services."
        },
        "AWS Certified Developer – Associate": {
          "titulo": "AWS Certified Developer – Associate",
          "descricao": "Certification proving skills in developing and maintaining applications on AWS, including use of services, debugging, deployment, and DevOps best practices."
        },
        "AWS Certified SysOps Administrator – Associate": {
          "titulo": "AWS Certified SysOps Administrator – Associate",
          "descricao": "Certification proving skills in AWS systems administration, including monitoring, troubleshooting, automating operational tasks, and implementing security practices."
        },
        "AWS Certified Solutions Architect – Professional": {
          "titulo": "AWS Certified Solutions Architect – Professional",
          "descricao": "Advanced certification validating skills in designing and implementing distributed architectures and systems on AWS. Demonstrates expertise in complex architectures, cloud migration, and cost optimization."
        }
  }
    }
  },
  // Objeto para o idioma Português
  pt: {
  translation: {
  "sobre": {
        "nome": "Gabriel Chagas Lage",
        "cargo": "Arquiteto de Soluções AWS",
        "biografia": "É um profissional em ascensão na área de computação em nuvem e DevOps, com uma trajetória marcada por especialização contínua e certificações de alto nível na AWS. Hoje, atua como Arquiteto de Soluções em Cloud Jr na ForceOne, onde desenha e implementa arquiteturas robustas, seguras e escaláveis, sempre alinhando soluções técnicas às necessidades de negócio.",
        "titulo_skills": "Principais Habilidades:"
      },
      "boasvindas": {
        "nome": "Gabriel Chagas Lage",
        "titulo": "Arquiteto de Soluções AWS",
        "bemvindo": "$ Bem-vindo ao meu Portfólio",
        "cargo": "Engenharia de Software | Arquiteto de Soluções AWS",
        "local": "Belo Horizonte, Minas Gerais, Brasil",
        "faculdade": "Engenharia de Software - PUC Minas",
        "ajuda": "Digite `ajuda` para conhecer mais sobre os comandos."
      },
  "certificacoes": {
      "premios": {
        "titulo": "Prêmios",
        "nenhum": "Nenhum prêmio cadastrado ainda.",
        "link": "🔗 Ver no LinkedIn",
        "Funcionário Destaque ForceOne 2024": {
          "titulo": "Funcionário Destaque ForceOne 2024",
          "org": "ForceOne",
          "desc": "Reconhecimento pelo desempenho, dedicação e resultados excepcionais em projetos de Cloud Computing e DevOps na ForceOne."
        }
      },
        "titulo": "Certificações",
        "link": "🔗 Ver Credencial",
        "AWS Certified Cloud Practitioner": {
          "titulo": "AWS Certified Cloud Practitioner",
          "descricao": "Certificação fundamental que demonstra conhecimento geral da AWS Cloud, incluindo serviços principais, segurança, arquitetura, preços e suporte."
        },
        "AWS Certified Solutions Architect – Associate": {
          "titulo": "AWS Certified Solutions Architect – Associate",
          "descricao": "Validação de conhecimentos em arquitetura de soluções na AWS, incluindo design de aplicações resilientes, seguras e escaláveis na nuvem usando os serviços AWS."
        },
        "AWS Certified Developer – Associate": {
          "titulo": "AWS Certified Developer – Associate",
          "descricao": "Certificação que comprova habilidades em desenvolvimento e manutenção de aplicações na AWS, incluindo uso de serviços, depuração, deployment e boas práticas de DevOps."
        },
        "AWS Certified SysOps Administrator – Associate": {
          "titulo": "AWS Certified SysOps Administrator – Associate",
          "descricao": "Certificação que comprova habilidades em administração de sistemas na AWS, incluindo monitoramento, troubleshooting, automação de tarefas operacionais e implementação de práticas de segurança."
        },
        "AWS Certified Solutions Architect – Professional": {
          "titulo": "AWS Certified Solutions Architect – Professional",
          "descricao": "Certificação avançada que valida competências em design e implementação de arquiteturas distribuídas e sistemas na AWS. Demonstra expertise em arquiteturas complexas, migração para cloud e otimização de custos."
        }
      },
      "boasvindas": {
        "nome": "Gabriel Chagas Lage",
        "titulo": "Arquiteto de Soluções AWS",
        "bemvindo": "$ Bem-vindo ao meu Portfólio",
        "cargo": "Engenharia de Software | Arquiteto de Soluções AWS",
        "local": "Belo Horizonte, Minas Gerais, Brasil",
        "faculdade": "Engenharia de Software - PUC Minas",
        "ajuda": "Digite `ajuda` para conhecer mais sobre os comandos."
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