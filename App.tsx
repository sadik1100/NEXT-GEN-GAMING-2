
import React, { useState } from 'react';
import { Download, Facebook, Youtube, Trophy, Zap, Users, Flame, ChevronRight, Star, ShieldCheck, X, Smartphone } from 'lucide-react';
import { TOURNAMENTS } from './constants';
import TournamentCard from './components/TournamentCard';

const App: React.FC = () => {
  const [showDownloadPrompt, setShowDownloadPrompt] = useState(false);

  const handleJoinClick = () => {
    setShowDownloadPrompt(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-[#0a0a0c] selection:bg-orange-500/30 selection:text-orange-500 ${showDownloadPrompt ? 'overflow-hidden' : ''}`}>
      {/* Download Prompt Overlay (Acts like a new page) */}
      {showDownloadPrompt && (
        <div className="fixed inset-0 z-[100] bg-[#0a0a0c] animate-in fade-in slide-in-from-right duration-500 flex flex-col items-center justify-center p-6 text-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070" 
              className="w-full h-full object-cover brightness-[0.1] blur-md scale-110"
              alt="Background"
            />
          </div>
          
          <button 
            onClick={() => setShowDownloadPrompt(false)}
            className="absolute top-8 right-8 text-neutral-500 hover:text-white transition-colors bg-white/5 p-3 rounded-full border border-white/10 z-20"
          >
            <X size={24} />
          </button>

          <div className="relative z-10 max-w-lg space-y-8 animate-in zoom-in duration-300">
            <div className="w-24 h-24 bg-orange-500/20 rounded-3xl flex items-center justify-center mx-auto border border-orange-500/30">
              <Smartphone size={48} className="text-orange-500" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black font-orbitron text-white leading-tight">
                ACTION <span className="text-orange-500">REQUIRED</span>
              </h2>
              <p className="text-xl text-neutral-400 font-medium">
                Download the app to play the tournament.
              </p>
            </div>

            <div className="pt-4">
              <button className="w-full group relative flex items-center justify-center gap-4 gaming-gradient px-12 py-6 rounded-2xl text-white font-black font-orbitron text-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(249,115,22,0.4)]">
                <Download className="animate-bounce" />
                DOWNLOAD NOW
              </button>
              
              <button 
                onClick={() => setShowDownloadPrompt(false)}
                className="mt-6 text-neutral-500 font-bold hover:text-neutral-300 transition-colors uppercase tracking-widest text-xs"
              >
                Go back to lobby
              </button>
            </div>

            <div className="pt-12 grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="block text-white font-black">100% SAFE</span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Secure Installation</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="block text-white font-black">PRO READY</span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Official Version</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header / Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:py-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setShowDownloadPrompt(false)}>
            <div className="w-12 h-12 gaming-gradient rounded-xl flex items-center justify-center text-white font-orbitron font-black text-2xl shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-transform group-hover:rotate-6">N</div>
            <span className="font-orbitron font-black text-2xl tracking-tighter text-white uppercase italic">
              NEXT-GEN <span className="text-orange-500">GAMING</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <a href="https://facebook.com/your-official-page" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://youtube.com/your-official-channel" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070" 
              className="w-full h-full object-cover brightness-[0.2] animate-pulse-slow scale-110"
              alt="Free Fire Background"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-[#0a0a0c]"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-5 py-2 rounded-full mb-4">
              <Flame size={16} className="text-orange-500 animate-pulse" />
              <span className="text-orange-500 font-black text-xs tracking-[0.2em] uppercase font-orbitron">Official Tournament Hub</span>
            </div>

            <h1 className="text-6xl md:text-9xl font-black font-orbitron text-white leading-[0.9] tracking-tighter italic drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
              NEXT-GEN<br/>
              <span className="text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">GAMING</span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Unlock the ultimate eSports experience. Participate in daily Free Fire matches, climb the ranks, and secure your glory.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
              <button 
                onClick={() => setShowDownloadPrompt(true)}
                className="group relative flex items-center gap-4 gaming-gradient px-12 py-6 rounded-2xl text-white font-black font-orbitron text-2xl transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_50px_rgba(249,115,22,0.4)]"
              >
                <Download className="animate-bounce" />
                DOWNLOAD NOW
              </button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-10">
              <a href="https://facebook.com/your-official-page" className="flex items-center gap-2 text-neutral-500 hover:text-[#1877F2] transition-all hover:scale-110">
                <Facebook size={32} />
              </a>
              <div className="w-px h-8 bg-neutral-800"></div>
              <a href="https://youtube.com/your-official-channel" className="flex items-center gap-2 text-neutral-500 hover:text-[#FF0000] transition-all hover:scale-110">
                <Youtube size={36} />
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-6 py-20 bg-[#0a0a0c]">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Trophy, label: 'Prize Pool', value: '৳5L+', color: 'text-orange-500' },
              { icon: Users, label: 'Active Gamers', value: '10K+', color: 'text-blue-500' },
              { icon: Zap, label: 'Instant Payout', value: '100%', color: 'text-yellow-500' },
              { icon: ShieldCheck, label: 'Secure Play', value: 'Safe', color: 'text-green-500' },
            ].map((stat, i) => (
              <div key={i} className="glass-effect p-8 rounded-[2rem] flex flex-col items-center text-center group transition-all border-white/5">
                <div className={`p-4 rounded-2xl bg-black/40 ${stat.color} mb-4`}>
                  <stat.icon size={32} />
                </div>
                <span className="text-4xl font-black font-orbitron text-white leading-tight">{stat.value}</span>
                <span className="text-xs uppercase font-black text-neutral-500 tracking-[0.2em] mt-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tournament Grid Section */}
        <section className="px-6 py-24">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6 border-l-4 border-orange-500 pl-8">
              <div>
                <h2 className="text-5xl font-black font-orbitron text-white italic">UPCOMING <span className="text-orange-500">MATCHES</span></h2>
                <p className="text-neutral-500 text-lg mt-2 max-w-xl">Join the battlefield. Real prizes, real players, next-gen competition.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TOURNAMENTS.map((t) => (
                <TournamentCard key={t.id} tournament={t} onJoin={handleJoinClick} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Footer Section */}
        <section className="px-6 py-24 mb-10">
          <div className="max-w-7xl mx-auto">
            <div className="relative gaming-gradient rounded-[3rem] p-12 md:p-20 overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="relative z-10 space-y-4 max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-black font-orbitron text-white italic tracking-tighter leading-none">
                  START YOUR<br/>JOURNEY TODAY.
                </h2>
                <p className="text-white/80 text-xl font-medium">Download the Next-Gen Gaming app and claim your first entry bonus.</p>
              </div>

              <button 
                onClick={() => setShowDownloadPrompt(true)}
                className="relative z-10 bg-white text-orange-600 px-14 py-6 rounded-2xl font-black font-orbitron text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4"
              >
                GET THE APP <ChevronRight size={28} />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Simplified Footer */}
      <footer className="py-12 border-t border-neutral-900/50 bg-[#070708]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gaming-gradient rounded-xl flex items-center justify-center text-white font-orbitron font-black">N</div>
            <span className="font-orbitron font-black text-xl tracking-tighter text-white uppercase italic">
              NEXT-GEN <span className="text-orange-500">GAMING</span>
            </span>
          </div>
          <p className="text-[10px] text-neutral-700 font-bold uppercase tracking-widest text-center max-w-lg leading-relaxed">
            © 2024 NEXT-GEN GAMING. Not affiliated with Garena.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
