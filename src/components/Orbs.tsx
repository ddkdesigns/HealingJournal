export function Orbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="orb" style={{ width: 600, height: 600, top: -200, left: -150, background: '#d4c5c7', opacity: 0.55 }} />
      <div className="orb" style={{ width: 500, height: 500, top: -100, right: -150, background: '#B8C9F5', opacity: 0.50, animationDelay: '-8s' }} />
      <div className="orb" style={{ width: 700, height: 700, top: '30%', left: '30%', background: '#D8C5F5', opacity: 0.40, animationDelay: '-15s' }} />
      <div className="orb" style={{ width: 400, height: 400, bottom: -100, left: -50, background: '#F5C5DB', opacity: 0.50, animationDelay: '-5s' }} />
      <div className="orb" style={{ width: 500, height: 500, bottom: -150, right: -100, background: '#F5DCB8', opacity: 0.45, animationDelay: '-12s' }} />
    </div>
  );
}
