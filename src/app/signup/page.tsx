'use client';

import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function isErrorWithMessage(error: unknown): error is { message: string } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as { message: unknown }).message === 'string'
  );
}

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || 'Registration failed.');
        setIsSubmitting(false);
        return;
      }
      // Auto-login after successful registration
      const loginResult = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (loginResult?.error) {
        setError(loginResult.error);
      } else {
        router.push('/dashboard');
      }
    } catch (err: unknown) {
      if (isErrorWithMessage(err)) {
        setError(err.message || 'Registration failed. Please try again.');
      } else {
        setError('Registration failed. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setIsSubmitting(true);
    setError('');
    try {
      await signIn('google', { callbackUrl: '/' });
    } catch (err: unknown) {
      if (isErrorWithMessage(err)) {
        setError(err.message || 'Google sign up failed. Please try again.');
      } else {
        setError('Google sign up failed. Please try again.');
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Simplified Navbar */}
      <nav className="w-full py-4 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 rounded-lg bg-[#1C3533] flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="ml-3 text-xl font-semibold text-[#1C3533]">EduPlatform</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/log-in" className="text-[#1C3533] hover:text-[#0F2927] transition-colors">
              Already have an account?
            </Link>
            <Link 
              href="/log-in" 
              className="px-4 py-2 rounded-lg bg-[#1C3533] text-white hover:bg-[#0F2927] transition-colors"
            >
              Log in
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content - Two Column Layout */}
      <main className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Column - Illustration */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-12">
              <div className="max-w-md mx-auto">
                <div className="relative aspect-square">
                  <Image
                    src="https://storyset.com/illustration/online-learning/bro.svg"
                    alt="Learning illustration"
                    className="object-contain w-full h-full"
                    width={300}
                    height={300}
                  />
                </div>
                <h2 className="text-3xl font-bold text-[#1C3533] mt-8 hidden md:block">
                  Start your learning journey
                </h2>
                <p className="text-gray-600 mt-4 hidden md:block">
                  Create your account to access courses, track progress, and connect with instructors.
                </p>
              </div>
            </div>

            {/* Right Column - Sign Up Form */}
            <div className="w-full md:w-1/2">
              <div className="max-w-md mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-sm border border-gray-100">
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold text-[#1C3533]">Create your account</h1>
                  <p className="text-gray-500 mt-2">Sign up to get started</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg px-4 py-3 text-sm animate-shake">
                      {error}
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1C3533] focus:ring-2 focus:ring-[#1C3533]/20 transition placeholder-gray-400"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1C3533] focus:ring-2 focus:ring-[#1C3533]/20 transition placeholder-gray-400"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1C3533] focus:ring-2 focus:ring-[#1C3533]/20 transition placeholder-gray-400"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#1C3533] hover:bg-[#0F2927] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1C3533] transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Creating account...
                        </>
                      ) : 'Sign up'}
                    </button>
                  </div>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-3">
                    <button
                      type="button"
                      onClick={handleGoogleSignUp}
                      disabled={isSubmitting}
                      className={`w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1C3533]/20 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 48 48">
                        <g>
                          <path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303C34.73 32.091 29.807 35 24 35c-6.627 0-12-5.373-12-12s5.373-12 12-12c2.761 0 5.287.99 7.285 2.617l6.849-6.849C34.583 5.163 29.584 3 24 3 12.954 3 4 11.954 4 23s8.954 20 20 20c11.045 0 19.799-7.949 19.799-19.799 0-1.326-.138-2.617-.188-3.118z"/>
                          <path fill="#34A853" d="M6.306 14.691l6.571 4.819C14.655 16.104 19.001 13 24 13c2.761 0 5.287.99 7.285 2.617l6.849-6.849C34.583 5.163 29.584 3 24 3c-7.732 0-14.37 4.388-17.694 10.691z"/>
                          <path fill="#FBBC05" d="M24 43c5.522 0 10.523-1.977 14.285-5.383l-6.571-5.386C29.807 35 24 35 24 35c-4.999 0-9.345-3.104-11.123-7.51l-6.571 5.386C9.63 38.612 16.268 43 24 43z"/>
                          <path fill="#EA4335" d="M43.611 20.083H42V20H24v8h11.303c-1.13 3.091-4.807 7.51-11.303 7.51-4.999 0-9.345-3.104-11.123-7.51l-6.571 5.386C9.63 38.612 16.268 43 24 43c7.732 0 14.37-4.388 17.694-10.691z"/>
                        </g>
                      </svg>
                      <span className="ml-2">Google</span>
                    </button>
                  </div>
                </div>

                <div className="mt-6 text-center text-sm">
                  <p className="text-gray-600">
                    Already have an account?{' '}
                    <Link href="/log-in" className="font-medium text-[#1C3533] hover:text-[#0F2927]">
                      Log in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="bg-[#1C3533] text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <span className="text-[#1C3533] font-bold text-sm">E</span>
              </div>
              <span className="ml-3 text-lg font-semibold">EduPlatform</span>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="text-white hover:text-gray-200 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white hover:text-gray-200 transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-white hover:text-gray-200 transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#2D4A48] text-center text-sm text-gray-300">
            <p>© {new Date().getFullYear()} EduPlatform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 