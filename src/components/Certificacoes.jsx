import React from 'react';
import { certificationsData } from '../certificationsData';

import './ExperienceCard.css'; // Reaproveita o estilo das experiências

const order = { Practitioner: 1, Associate: 2, Professional: 3 };
const sortedCerts = [...certificationsData].sort((a, b) => order[a.level] - order[b.level]);

export default function Certificacoes() {
  return (
    <div>
      <h2 style={{ marginBottom: 24 }}>Certificações</h2>
      {sortedCerts.map((cert, idx) => (
        <div className="experience-card" key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
          <div style={{ flex: 1 }}>
            <div className="experience-title" style={{ fontWeight: 'bold', fontSize: 18 }}>{cert.title}</div>
            <div className="experience-company">Amazon Web Services (AWS)</div>
            {/* Período e descrição podem ser adicionados no objeto se quiser */}
            <a href={cert.link} className="experience-link" target="_blank" rel="noopener noreferrer" style={{ color: '#a78bfa', textDecoration: 'underline', display: 'inline-block', marginTop: 8 }}>🔗 Ver Credencial</a>
          </div>
          <div style={{ marginLeft: 24 }}>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <img src={cert.image} alt={cert.title} style={{ width: 80, height: 80, objectFit: 'contain', borderRadius: 8, background: '#fff' }} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
