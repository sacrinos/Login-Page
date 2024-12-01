import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1c1e3d] to-[#2a2d5c] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {children}
        </div>
      </div>
    </div>
  );
}