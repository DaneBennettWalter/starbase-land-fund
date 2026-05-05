import Image from 'next/image'
import Link from 'next/link'
import DisclaimerBanner from './components/DisclaimerBanner'

export default function Home() {
  return (
    <main className="min-h-screen">
      <DisclaimerBanner />
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=3456&auto=format&fit=crop"
            alt="Starship Launch"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter mb-8 leading-[0.85]">
            STARBASE
            <br />
            <span className="text-[#bf5700]">LAND FUND</span>
          </h1>
          <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wide max-w-4xl mx-auto text-white/90">
            Building the future of South Texas
          </p>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <svg 
              className="w-8 h-8 text-white/60" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="min-h-screen bg-white text-black flex items-center py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-16 leading-tight">
            THE<br />OPPORTUNITY
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-3xl md:text-5xl font-light leading-snug mb-8">
                SpaceX is building the most advanced rocket in history.
              </p>
              <p className="text-3xl md:text-5xl font-light leading-snug text-[#bf5700]">
                We're building the city that supports it.
              </p>
            </div>
            
            <div className="relative h-96 md:h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=3270&auto=format&fit=crop"
                alt="SpaceX Facility"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Strategy */}
      <section className="min-h-screen bg-[#0a1929] flex items-center py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-24 leading-tight">
            THE<br />STRATEGY
          </h2>
          
          <div className="space-y-20">
            <p className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
              Acquire land in the growth corridor
            </p>
            
            <p className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
              Develop infrastructure and properties
            </p>
            
            <p className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-[#bf5700]">
              Create value as the region transforms
            </p>
          </div>
        </div>
      </section>

      {/* The Numbers */}
      <section className="min-h-screen bg-black flex items-center py-32">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-24 leading-tight text-center">
            THE NUMBERS
          </h2>
          
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="text-7xl md:text-8xl lg:text-9xl font-black text-[#bf5700] mb-6">
                5,000+
              </div>
              <p className="text-2xl md:text-3xl font-light">
                SpaceX employees<br />by 2027
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-7xl md:text-8xl lg:text-9xl font-black text-[#bf5700] mb-6">
                $10B+
              </div>
              <p className="text-2xl md:text-3xl font-light">
                Invested in<br />Starbase
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-7xl md:text-8xl lg:text-9xl font-black text-[#bf5700] mb-6">
                30
              </div>
              <p className="text-2xl md:text-3xl font-light">
                Mile development<br />corridor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="min-h-screen bg-white text-black flex items-center py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-24 leading-tight">
            LEADERSHIP
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative h-96 md:h-[600px] bg-neutral-200">
              <Image
                src="/tim-lussier.jpg"
                alt="Tim Lussier"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
            
            <div>
              <h3 className="text-5xl md:text-6xl font-black mb-6">
                Tim Lussier
              </h3>
              <p className="text-2xl md:text-3xl font-light text-[#bf5700] mb-8">
                Managing Partner
              </p>
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                Experienced real estate investor and developer with expertise in identifying high-growth 
                opportunities in emerging markets. Strategic advisor with deep knowledge of the South Texas 
                development landscape and proven track record of successful projects in transitioning markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen bg-[#bf5700] text-black flex items-center py-32">
        <div className="max-w-7xl mx-auto px-6 text-center w-full">
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black mb-16 leading-[0.9]">
            INVESTOR<br />INQUIRIES
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-16">
            <Link 
              href="/investor-portal/verify"
              className="inline-block text-3xl md:text-5xl font-black bg-black text-white px-16 py-8 hover:bg-white hover:text-black transition-colors duration-300"
            >
              INVESTOR PORTAL
            </Link>
            
            <a 
              href="mailto:dane@sbl.fund"
              className="inline-block text-3xl md:text-5xl font-black bg-white text-black px-16 py-8 hover:bg-black hover:text-white transition-colors duration-300"
            >
              GET IN TOUCH
            </a>
          </div>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Starbase Land Fund is open to accredited investors only.
            <br />
            Minimum investment: $250,000
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-3xl font-black mb-4">
                <span className="text-[#bf5700]">SBL</span> FUND
              </h3>
              <p className="text-lg text-white/60">
                Building the infrastructure for humanity's multi-planetary future
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <p className="text-white/60">
                dane@sbl.fund
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Legal</h4>
              <nav className="flex flex-col gap-2 text-sm text-white/60">
                <Link href="/legal/disclosures" className="hover:text-white">Disclosures</Link>
                <Link href="/legal/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                <Link href="/legal/terms" className="hover:text-white">Terms of Use</Link>
              </nav>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              This website does not constitute an offer to sell or a solicitation of an offer to buy securities. 
              Any such offer or solicitation will be made only by means of a confidential private placement memorandum.
            </p>
            <p className="text-center text-white/40 text-sm">&copy; 2026 Starbase Land Fund. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
