import { Mail, MessageCircle, Phone, Share2 } from 'lucide-react'
import type { ReactNode } from 'react'
import portrait from '../assets/waldah-nsonga.jpg'

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

/** The route renders this component when someone visits the landing page. */
export function LandingPage() {
  return <HeroSection />
}
