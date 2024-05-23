import { ReactNode } from 'react';
import { Glow, GlowCapture } from '@codaworks/react-glow';

// example card
export const Card = () => {
  return (
    <div
      style={{ height: 500, width: 300 }}
      className="bg-indigo-600 rounded-xl duration-300 border-pink-600 border-4 hover:bg-indigo-700  glow:ring-2 glow:border-glow glow:ring-glow glow:bg-glow/[.25]"
    ></div>
  );
};
export function CardWithAnimationComponent({
  children,
  color = '#57D9C5',
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <GlowCapture>
      <Glow color={color}>{children}</Glow>
    </GlowCapture>
  );
}
