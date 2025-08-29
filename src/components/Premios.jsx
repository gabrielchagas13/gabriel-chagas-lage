import React from 'react';
import { awardsData } from '../awardsData';
import './Certificacoes.css';

export default function Premios() {
	if (!awardsData.length) {
		return <div><h2>Prêmios</h2><p>Nenhum prêmio cadastrado ainda.</p></div>;
	}
	return (
		<div>
			<h2 style={{ marginBottom: 24 }}>Prêmios</h2>
			{awardsData.map((award, idx) => (
				<div className="cert-card" key={idx}>
					<div style={{ flex: 1 }}>
						<div className="experience-title" style={{ fontWeight: 'bold', fontSize: 18 }}>{award.title}</div>
						<div className="experience-company">{award.organization}</div>
						{award.year && <div className="experience-period">{award.year}</div>}
						{award.description && <div style={{ margin: '8px 0' }}>{award.description}</div>}
						{award.link && (
							<a href={award.link} className="experience-link" target="_blank" rel="noopener noreferrer" style={{ color: '#a78bfa', textDecoration: 'underline', display: 'inline-block', marginTop: 8 }}>🔗 Ver no LinkedIn</a>
						)}
					</div>
					{award.image && (
						<a href={award.link || '#'} target="_blank" rel="noopener noreferrer">
							<img src={award.image} alt={award.title} />
						</a>
					)}
				</div>
			))}
		</div>
	);
}
