export function Orbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="orb" style={{ width: 600, height: 600, top: -200, left: -150, background: '#D9DCCF', opacity: 0.55 }} />
      <div className="orb" style={{ width: 500, height: 500, top: -100, right: -150, background: '#A4AD94', opacity: 0.50, animationDelay: '-8s' }} />
      <div className="orb" style={{ width: 700, height: 700, top: '30%', left: '30%', background: '#6F7F5C', opacity: 0.20, animationDelay: '-15s' }} />
      <div className="orb" style={{ width: 400, height: 400, bottom: -100, left: -50, background: '#A4AD94', opacity: 0.45, animationDelay: '-5s' }} />
      <div className="orb" style={{ width: 500, height: 500, bottom: -150, right: -100, background: '#6F7F5C', opacity: 0.40, animationDelay: '-12s' }} />
    </div>
  );
}
