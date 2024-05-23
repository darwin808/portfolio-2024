import { ReactNode } from 'react';
import { Glow, GlowCapture } from '@codaworks/react-glow';

import * as React from 'react';
// example card
export const CardExample = () => {
  return (
    <div
      style={{ height: 500, width: 300 }}
      className="bg-white border-pink-900  rounded-3xl border-4 glow:border-glow glow:ring-2 glow:ring-indigo-50  duration-500  glow:bg-indigo-800"
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
