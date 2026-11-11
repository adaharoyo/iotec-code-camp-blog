import { ArrowRight, Cloud, Mail, MessageCircle, Phone, Share2, ShieldCheck, Wifi } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import portrait from '../assets/waldah-nsonga.jpg'
import digitalToolsCover from '../assets/blog-digital-tools.jpg'
import itSupportCover from '../assets/blog-it-support.jpg'
import onlineSafetyCover from '../assets/blog-online-safety.jpg'

type ContactLinkProps = {
  href: string
  label: string
  children: ReactNode
  openInNewTab?: boolean
}

/** A reusable contact button. Props let each button have its own icon and link. */
function ContactLink({ href, label, children, openInNewTab = false }: ContactLinkProps) {
  return (
    <a
      href={href}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noreferrer' : undefined}
      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#f1f0ef] px-4 py-2 text-sm text-foreground transition-colors hover:bg-[#e9e7e5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {children}
      <span>{label}</span>
    </a>
  )
}

/** The left side of the hero: portrait, name, and professional caption. */
function ProfileCard() {
  return (
    <figure className="min-w-0">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#e6e0d9] shadow-sm">
        <img
          src={portrait}
          alt="Waldah Nsonga"
          className="size-full object-cover object-[center_25%]"
        />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#f7f6f4]/65 to-transparent" />
      </div>

      <figcaption className="mt-4">
        <p className="text-base font-medium tracking-tight text-foreground">Waldah Nsonga</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          IT Technician · Information Technology graduate, IUIU Kampala Campus
        </p>
      </figcaption>
    </figure>
  )
}

/** The right side of the hero: biography and contact buttons. */
function BiographyAndContact() {
  return (
    <div className="flex min-w-0 flex-col justify-center">
      <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-[#a6543d] sm:text-sm">
        <span>ABOUT ME</span>
        <span aria-hidden="true" className="h-px w-16 bg-[#d9d5d1]" />
      </p>

      <h1 id="hero-heading" className="mt-4 font-serif text-4xl leading-[1.08] tracking-[-0.035em] text-[#201e1d] sm:text-5xl lg:text-6xl xl:text-7xl">
        Making technology work for people.
      </h1>

      <div className="mt-6 space-y-4 text-base leading-relaxed text-[#5e5d59] sm:text-lg lg:text-xl lg:leading-[1.65]">
        <p>
          My name is Waldah Nsonga. I am a recent Information Technology graduate
          from the Kampala Campus of Islamic University in Uganda, and an aspiring
          IT technician who enjoys helping people get more from technology.
        </p>
        <p className="text-[0.94em]">
          Here I share approachable notes on troubleshooting, useful digital tools,
          online safety, and the small technology choices that make everyday work
          easier. I believe good IT starts with listening, clear explanations, and
          practical solutions.
        </p>
      </div>

      <div className="mt-8 sm:mt-10">
        <h2 className="text-xs font-semibold tracking-[0.13em] text-[#5e5d59] sm:text-sm">
          CONTACT &amp; FOLLOW
        </h2>
        <nav aria-label="Contact information" className="mt-3 flex flex-wrap gap-2">
          <ContactLink href="mailto:nsongawaldah360@gmail.com" label="nsongawaldah360@gmail.com">
            <Mail aria-hidden="true" className="size-4 shrink-0" />
          </ContactLink>
          <ContactLink href="tel:+256754806912" label="+256 754 806 912">
            <Phone aria-hidden="true" className="size-4 shrink-0" />
          </ContactLink>
          <ContactLink href="https://wa.me/256754806912" label="WhatsApp" openInNewTab>
            <MessageCircle aria-hidden="true" className="size-4 shrink-0" />
          </ContactLink>
          <ContactLink href="https://x.com/WaldahNsonga" label="X" openInNewTab>
            <span aria-hidden="true" className="w-4 text-center font-medium">𝕏</span>
          </ContactLink>
          <ContactLink href="https://www.linkedin.com/in/waldah-nsonga-9b7373360/" label="LinkedIn" openInNewTab>
            <Share2 aria-hidden="true" className="size-4 shrink-0" />
          </ContactLink>
        </nav>
      </div>
    </div>
  )
}

/** The landing page hero: profile on the left and biography on the right. */
function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="grid w-full grid-cols-1 items-center gap-10 py-10 sm:gap-12 sm:py-14 lg:grid-cols-[minmax(280px,0.78fr)_minmax(0,1.22fr)] lg:gap-14 lg:py-16"
    >
      <ProfileCard />
      <BiographyAndContact />
    </section>
  )
}

type BlogPost = {
  category: string
  title: string
  readingTime: string
  excerpt: string
  summary: string
  icon: LucideIcon
  coverColor: string
  image?: string
}

// Starter posts for the landing page. Replace these with your own posts later.
const recentPosts: BlogPost[] = [
  {
    category: 'IT Support',
    title: 'A Simple Checklist for Troubleshooting Wi-Fi',
    readingTime: '4 min read',
    excerpt: 'A calm, step-by-step way to find out why a connection is not working.',
    summary: 'Start by checking whether the problem affects one device or every device. Then check Wi-Fi is enabled, restart the router if needed, and test again near the router. Changing one thing at a time helps you identify the cause instead of guessing.',
    icon: Wifi,
    coverColor: 'from-slate-900 via-teal-800 to-cyan-500',
    image: itSupportCover,
  },
  {
    category: 'Online Safety',
    title: 'Small Habits That Make Your Accounts Safer',
    readingTime: '5 min read',
    excerpt: 'A few practical habits can make it harder for someone to access your accounts.',
    summary: 'Use a different, strong password for each account and turn on two-step verification when it is available. Be careful with unexpected links, even when a message appears to come from someone you know. These small habits reduce common risks.',
    icon: ShieldCheck,
    coverColor: 'from-amber-200 via-orange-500 to-rose-700',
    image: onlineSafetyCover,
  },
  {
    category: 'Digital Tools',
    title: 'Cloud Storage, Explained Simply',
    readingTime: '3 min read',
    excerpt: 'Understand what the cloud does and how it can help you keep files available.',
    summary: 'Cloud storage keeps copies of files on internet-connected servers so you can reach them from different devices. It is useful for sharing and backup, but it does not replace good account security or keeping another copy of important files.',
    icon: Cloud,
    coverColor: 'from-sky-300 via-blue-500 to-indigo-800',
    image: digitalToolsCover,
  },
]

const postCategories = ['All', ...recentPosts.map((post) => post.category)]

/** One article preview card, including a small expandable reading summary. */
function BlogCard({ post }: { post: BlogPost }) {
  const CoverIcon = post.icon

  return (
    <article className="overflow-hidden rounded-lg border border-[#e8e5e2] bg-white shadow-sm">
      <div className={`aspect-[16/9] overflow-hidden bg-gradient-to-br ${post.coverColor}`}>
        {post.image ? (
          <img src={post.image} alt="" className="size-full object-cover" />
        ) : (
          <div className="flex size-full items-center justify-center" aria-hidden="true">
            <CoverIcon className="size-16 text-white/90" strokeWidth={1.2} />
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-[#f1f0ef] px-2.5 py-1 text-[11px] text-[#55534f]">
            {post.category}
          </span>
          <span className="text-[11px] text-muted-foreground">{post.readingTime}</span>
        </div>

        <h3 className="mt-3 font-serif text-lg leading-snug text-[#201e1d]">
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        <details className="group mt-4 border-t border-[#efedeb] pt-3">
          <summary className="flex cursor-pointer list-none items-center gap-1 text-xs font-medium text-blue-700 hover:text-blue-900">
            <span>Read</span>
            <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-open:rotate-90" />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-[#5e5d59]">{post.summary}</p>
        </details>
      </div>
    </article>
  )
}

/** Recent article cards with category buttons that filter the list. */
function RecentBlogs() {
  const [activeCategory, setActiveCategory] = useState('All')
  const visiblePosts = activeCategory === 'All'
    ? recentPosts
    : recentPosts.filter((post) => post.category === activeCategory)

  return (
    <section
      aria-labelledby="recent-blogs-heading"
      className="-mx-6 bg-[#f5f3f3] px-6 py-12 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.14em] text-[#4a65c5]">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-[#4a65c5]" />
            THE TECH REPORT ARCHIVE
          </p>
          <h2 id="recent-blogs-heading" className="mt-1 font-serif text-3xl tracking-tight text-[#201e1d] sm:text-4xl">
            Recent Blogs
          </h2>
        </div>

        <div role="group" aria-label="Filter blog posts by category" className="flex flex-wrap gap-1.5">
          {postCategories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-3 py-2 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                activeCategory === category
                  ? 'bg-[#3154c5] text-white'
                  : 'bg-white text-[#4f4d49] hover:bg-[#e9e7e5]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => <BlogCard key={post.title} post={post} />)}
      </div>
    </section>
  )
}

/** The route renders this component when someone visits the landing page. */
export function LandingPage() {
  return (
    <>
      <HeroSection />
      <RecentBlogs />
    </>
  )
}
