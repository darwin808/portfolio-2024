import { TestCard } from '@/components/TestCard';
import React from 'react';

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24  bg-[#0F172A]  duration-300">
      <TestCard />
    </main>
  );
}
