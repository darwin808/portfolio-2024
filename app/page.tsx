import { Card, CardWithAnimationComponent } from '@/components';
import React from 'react';

export default function Home(): JSX.Element {
  return (
    <CardWithAnimationComponent color="purple">
      <main className=" glow:bg-glow/[.15] flex min-h-screen flex-col items-center justify-between p-24  bg-[#0F172A]  duration-300"></main>
      <Card />
    </CardWithAnimationComponent>
  );
}
