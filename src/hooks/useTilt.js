import { useRef, useCallback } from 'react';

/**
 * useTilt — hook que adiciona efeito 3D tilt ao mover o mouse sobre um card.
 * Retorna { ref, onMouseMove, onMouseLeave } para aplicar no elemento.
 *
 * @param {number} maxTilt  — graus máximos de inclinação (padrão: 12)
 * @param {number} scale    — escala ao hover (padrão: 1.03)
 */
export function useTilt(maxTilt = 12, scale = 1.03) {
  const ref = useRef(null);

  const onMouseMove = useCallback((e) => {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);   // -1 a +1
    const dy = (e.clientY - cy) / (rect.height / 2);  // -1 a +1

    const rotateY = dx * maxTilt;
    const rotateX = -dy * maxTilt;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    card.style.transition = 'transform 0.1s ease-out';
    card.style.boxShadow = `${-rotateY * 1.5}px ${rotateX * 1.5}px 30px rgba(37,99,235,0.18)`;
  }, [maxTilt, scale]);

  const onMouseLeave = useCallback(() => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    card.style.transition = 'transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)';
    card.style.boxShadow = '';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
