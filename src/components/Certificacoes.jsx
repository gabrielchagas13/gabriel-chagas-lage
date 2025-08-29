import React from 'react';
import { certificationsData } from '../certificationsData';

import './Certificacoes.css';

const order = { Practitioner: 1, Associate: 2, Professional: 3 };
const sortedCerts = [...certificationsData].sort((a, b) => order[a.level] - order[b.level]);

export default function Certificacoes() {
  return (
    <div>
      <h2 style={{ marginBottom: 24 }}>Certificações</h2>
      {sortedCerts.map((cert, idx) => (
        <div className="cert-card" key={idx}>
          <div style={{ flex: 1 }}>
            <div className="experience-title" style={{ fontWeight: 'bold', fontSize: 18 }}>{cert.title}</div>
            <div className="experience-company">Amazon Web Services (AWS)</div>
            <a href={cert.link} className="experience-link" target="_blank" rel="noopener noreferrer" style={{ color: '#a78bfa', textDecoration: 'underline', display: 'inline-block', marginTop: 8 }}>🔗 Ver Credencial</a>
          </div>
          <a href={cert.link} target="_blank" rel="noopener noreferrer">
            <img src={cert.image} alt={cert.title} />
          </a>
        </div>
      ))}
    </div>
  );
}
