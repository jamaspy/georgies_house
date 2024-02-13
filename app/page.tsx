'use client';
import Image from 'next/image';
import {
  Quote,
  ChevronsUp,
  MoveUpLeft,
  Facebook,
  Instagram,
  Linkedin,
  Contact,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import HomePage from '@/components/home';
import AboutPage from '@/components/about';
import ContactPage from '@/components/contact';
import Header from '@/components/header';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const [showHomeState, setShowHomeState] = useState(true);
  const [showAboutState, setShowAboutState] = useState(false);
  const [showContactState, setShowContactState] = useState(false);
  const showHome = () => {
    setShowHomeState(true);
    setShowAboutState(false);
    setShowContactState(false);
  };
  const showAbout = () => {
    setShowHomeState(false);
    setShowAboutState(true);
    setShowContactState(false);
  };

  const showContact = () => {
    setShowHomeState(false);
    setShowAboutState(false);
    setShowContactState(true);
  };

  const pageTransitions = {
    initial: { x: '100vw', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.6 } },
    transition: { type: 'spring', stiffness: 100, damping: 20 },
    exit: { x: '-100vw', opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="flex min-h-screen p-4">
      <section className="flex flex-col justify-between container flex-1 bg-stone-50 rounded-2xl shadow-md overflow-hidden relative">
        <Header
          showHome={showHome}
          showAbout={showAbout}
          showContact={showContact}
        />
        <AnimatePresence>
          {showHomeState && (
            <motion.div
              key="home"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransitions}
            >
              <HomePage />
            </motion.div>
          )}
          {showAboutState && (
            <motion.div
              key="about"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransitions}
            >
              <AboutPage />
            </motion.div>
          )}
          {showContactState && (
            <motion.div
              key="contact"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransitions}
            >
              <ContactPage />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col md:flex-row bg-blue-100 w-full z-20">
          <div className="w-full md:w-3/4 bg-george-black p-12 flex flex-row items-center justify-center gap-8">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Facebook className="text-george-lime hover:text-george-purple cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Instagram className="text-george-lime hover:text-george-purple cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Linkedin className="text-george-lime hover:text-george-purple cursor-pointer" />
            </motion.div>
          </div>
          <div className="w-full md:w-1/4 bg-george-blue flex lfex-row items-center justify-end">
            <ChevronsUp className="w-24 h-24" />
          </div>
        </div>
      </section>
    </main>
  );
}
