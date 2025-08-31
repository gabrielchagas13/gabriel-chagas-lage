import React, { useEffect } from 'react';
import './FlappyPlaneGame.css';

const achievementsList = [
  '👨‍💻 Gabriel Chagas Lage - AWS Solutions Architect',
  '🎓 COTEMIG',
  '🎓 Engenharia de Software - PUC Minas',
  'AWS Certified Cloud Practitioner 📜',
  'AWS Certified Solutions Architect – Associate 📜',
  'AWS Certified Developer – Associate 📜',
  'AWS Certified SysOps Administrator – Associate 📜',
  'AWS Certified Solutions Architect – Professional 📜',
  '🏆 Funcionário Destaque ForceOne 2024',
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const FlappyPlaneGame = ({ onExit }) => {
  useEffect(() => {
    const game = document.getElementById('game');
    const planeEl = document.getElementById('plane');
    const scoreEl = document.getElementById('score');
    const achEl = document.getElementById('achievement');

    let planeY = 50; // %
    let gravity = 1;
    let clouds = [];
    let score = 0;
    let gameOver = false;

    const shuffledAchievements = shuffleArray([...achievementsList]);
    const achievements = {};
    for (let i = 0; i < shuffledAchievements.length; i++) {
      achievements[(i + 1) * 2] = shuffledAchievements[i];
    }

    function createCloud() {
      const cloud = document.createElement('div');
      cloud.classList.add('cloud');
      cloud.innerText = '☁️';
      const minY = Math.random() < 0.2 ? 0 : Math.floor(Math.random() * 80);
      const maxY = Math.random() < 0.2 ? 90 : Math.floor(Math.random() * 80) + 10;
      cloud.style.top = Math.floor(Math.random() * (maxY - minY + 1) + minY) + '%';
      cloud.style.left = '100%';
      cloud.style.transform = 'scale(1.4)';
      game.appendChild(cloud);
      clouds.push(cloud);
    }

    function updateClouds() {
      clouds.forEach((c, i) => {
        let left = parseFloat(c.style.left);
        left -= 1;
        c.style.left = left + '%';
        const planeRect = planeEl.getBoundingClientRect();
        const cloudRect = c.getBoundingClientRect();
        if (
          !(
            planeRect.right < cloudRect.left ||
            planeRect.left > cloudRect.right ||
            planeRect.bottom < cloudRect.top ||
            planeRect.top > cloudRect.bottom
          )
        ) {
          gameOver = true;
          showGameOverMessage();
          return;
        }
        if (left < -5) {
          c.remove();
          clouds.splice(i, 1);
          if (!gameOver) {
            score++;
            scoreEl.innerText = 'Pontuação: ' + score;
            if (achievements[score]) {
              achEl.innerText = achievements[score];
              achEl.classList.add('show');
              setTimeout(() => {
                achEl.classList.remove('show');
              }, 2000);
            }
          }
        }
      });
    }

    function showGameOverMessage() {
      achEl.innerText = 'GAME OVER! Pressione R para reiniciar';
      achEl.classList.add('show');
      planeEl.style.opacity = '0.5';
    }

    function resetGame() {
      clouds.forEach((c) => c.remove());
      clouds = [];
      planeY = 50;
      planeEl.style.top = planeY + '%';
      planeEl.style.opacity = '1';
      score = 0;
      scoreEl.innerText = 'Pontuação: 0';
      achEl.classList.remove('show');
      gameOver = false;
      requestAnimationFrame(loop);
    }

    function loop() {
      if (!gameOver) {
        planeY += gravity;
        // Não faz mais game over ao encostar nas linhas
        // Limita visualmente o avião dentro do campo
        if (planeY < 0) planeY = 0;
        if (planeY > 90) planeY = 90;
        planeEl.style.top = planeY + '%';
        updateClouds();
        requestAnimationFrame(loop);
      }
    }

    function flap() {
      planeY -= 18;
      planeEl.style.filter = 'brightness(1.5) drop-shadow(0 0 6px #fff)';
      setTimeout(() => {
        planeEl.style.filter = '';
      }, 120);
    }


    function keyHandler(e) {
      if (e.code === 'Space' && !gameOver) flap();
      if ((e.key === 'r' || e.key === 'R') && gameOver) resetGame();
    }
    function clickHandler(e) {
      // Só reage se o clique/touch for dentro do #game
      if (!game.contains(e.target)) return;
      if (gameOver) {
        resetGame();
      } else {
        flap();
      }
    }
    function touchEndHandler(e) {
      // Garante que o touch seja tratado como um click
      if (!game.contains(e.target)) return;
      if (gameOver) {
        resetGame();
      } else {
        flap();
      }
    }

    window.addEventListener('keydown', keyHandler);
    game.addEventListener('click', clickHandler);
    game.addEventListener('touchend', touchEndHandler);
    const cloudInterval = setInterval(() => {
      if (!gameOver) createCloud();
    }, 2000);
    loop();

    return () => {
      window.removeEventListener('keydown', keyHandler);
      game.removeEventListener('click', clickHandler);
      game.removeEventListener('touchend', touchEndHandler);
      clearInterval(cloudInterval);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {onExit && (
        <button
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 200,
            background: '#222',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '6px 16px',
            fontSize: 16,
            cursor: 'pointer',
            opacity: 0.85
          }}
          onClick={onExit}
        >
          Voltar ao terminal
        </button>
      )}
      <div id="game">
        <div id="score">Pontuação: 0</div>
        <div id="achievement"></div>
        <div className="plane" id="plane">✈️</div>
      </div>
    </div>
  );
};

export default FlappyPlaneGame;
