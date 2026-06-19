import type { Project, StackItem } from '../types/portfolio'
import NetflixClone from '../assets/NetlixClone.png'
import Summarist from '../assets/SaminternshipV2.png'
import Skinstric from '../assets/SkinstricAI.png'
import Ultraverse from '../assets/Ultraverse.png'

export const stack: StackItem[] = [
  { name: 'React', cat: 'library', icon: 'Rx' },
  { name: 'Next.js', cat: 'framework', icon: 'Nx' },
  { name: 'TypeScript', cat: 'language', icon: 'TS' },
  { name: 'JavaScript', cat: 'language', icon: 'JS' },
  { name: 'Tailwind', cat: 'styling', icon: 'Tw' },
  { name: 'HTML / CSS', cat: 'fundamentals', icon: '</>' },
  { name: 'Firebase', cat: 'backend', icon: 'Fb' },
  { name: 'Stripe', cat: 'payments', icon: '$' },
  { name: 'Vite', cat: 'tooling', icon: 'Vt' },
  { name: 'Node.js', cat: 'runtime', icon: 'Nd' },
  { name: 'Git', cat: 'versioning', icon: 'Gt' },
  { name: 'Figma', cat: 'design', icon: 'Fg' },
]

export const projects: Project[] = [
  {
    id: 'summarist',
    title: 'Summarist',
    year: '2026',
    cat: 'fullstack',
    desc: 'Book summary platform with subscription tiers. Google auth, guest login, Stripe payments, audio playback, responsive UI, and skeleton states throughout.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase', 'Stripe'],
    url: 'https://sam-internship2.vercel.app/',
    bg: 'l1',
    image: Summarist.src,
  },
  {
    id: 'skinstric',
    title: 'Skinstric AI',
    year: '2026',
    cat: 'fullstack',
    desc: 'Skincare suggestion platform that analyzes a user-uploaded image and returns demographic insight to drive personalized product recommendations.',
    tags: ['Next.js', 'TypeScript', 'AI'],
    url: 'https://skinstricaicloneschill.vercel.app/',
    bg: 'l2',
    image: Skinstric.src,
  },
  {
    id: 'ultraverse',
    title: 'Ultraverse',
    year: '2025',
    cat: 'frontend',
    desc: 'Mock NFT marketplace with movable and scrollable carousels, scroll-triggered animations, dynamic API rendering, and skeleton loading states.',
    tags: ['React', 'HTML', 'CSS', 'JavaScript'],
    url: 'https://sam-internship-psi.vercel.app/',
    bg: 'l3',
    image: Ultraverse.src,
  },
  {
    id: 'netflix',
    title: 'Netflix Clone',
    year: '2025',
    cat: 'frontend',
    desc: 'Recreation of the Netflix browse experience with a responsive layout, dynamic content rendering, and live movie data from the TMDB API.',
    tags: ['Vite', 'HTML', 'CSS', 'JavaScript', 'TMDB'],
    url: 'https://netflix-clone-ten-iota-12.vercel.app/',
    bg: 'l4',
    image: NetflixClone.src,
  },
  {
    id: 'library',
    title: 'Library React',
    year: '2025',
    cat: 'frontend',
    desc: 'A small React library and data viewer focused on hooks, controlled inputs, and client-side data manipulation patterns.',
    tags: ['React', 'JavaScript'],
    url: 'https://library-react-iagf.vercel.app/',
    bg: 'l5',
    image: Summarist.src,
  },
  {
    id: 'kitchen',
    title: 'KitchenReady',
    year: '2026',
    cat: 'frontend',
    desc: 'Side project from my day job: a small ops tool concept for kitchen prep checklists and CSS-first layout exploration.',
    tags: ['HTML', 'CSS'],
    url: 'Input URL here',
    bg: 'l6',
    image: Skinstric.src,
  },
]

export const filters = ['all', 'frontend', 'fullstack', 'react', 'next.js', 'typescript']
