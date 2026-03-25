'use client';
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const { signIn, signUp } = useAuth();
  const router = useRouter();

  const handleAuth = async () => {
    try {
      if (isLogin) await signIn(email, password);
      else await signUp(email, password);
      router.push('/dashboard');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl max-w-md w-full">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 text-center">
          HabitForge
        </h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 mb-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-purple-200 focus:outline-none transition-all"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 mb-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-purple-200 focus:outline-none transition-all"
        />
        <button
          onClick={handleAuth}
          className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl hover:from-purple-600 hover:to-pink-600 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
        >
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="text-center mt-4 text-gray-600 cursor-pointer hover:text-purple-600" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'New? Sign Up' : 'Have account? Sign In'}
        </p>
      </div>
    </div>
  );
}
