'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal, ScrollZoom } from '../components/ScrollReveal'

export default function InvestorPortal() {
  const router = useRouter()
  const [isVerified, setIsVerified] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has completed verification
    const verified = sessionStorage.getItem('investor-verified')
    if (!verified) {
      router.push('/investor-portal/verify')
    } else {
      setIsVerified(true)
      setIsLoading(false)
    }
  }, [router])

  if (isLoading || !isVerified) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-2xl">Verifying access...</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <ScrollZoom className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3472&auto=format&fit=crop"
              alt="Space"
              fill
              className="object-cover opacity-30"
              quality={90}
            />
          </div>
        </ScrollZoom>

        <div className="relative z-10 text-center max-w-6xl">
          <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-black mb-12 leading-[0.85]">
            INVESTOR<br />
            <span className="text-[#bf5700]">PORTAL</span>
          </h1>
          <p className="text-2xl md:text-4xl font-light max-w-4xl mx-auto">
            Exclusive access to investment opportunities in the Starbase growth corridor
          </p>
        </div>
      </section>

      {/* The Opportunity - Detailed */}
      <section className="min-h-screen py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-6xl md:text-8xl font-black mb-20">
              THE OPPORTUNITY
            </h2>
          </ScrollReveal>

          <div className="space-y-32">
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-4xl md:text-6xl font-black mb-8">
                    SpaceX Starbase
                  </h3>
                  <p className="text-2xl md:text-3xl font-light leading-relaxed">
                    The most ambitious space program in human history is being built in South Texas. 
                    Starship production is ramping to unprecedented levels. Infrastructure investment 
                    exceeds $10 billion. This is a generational transformation.
                  </p>
                </div>
                <ScrollZoom className="relative h-96 md:h-[500px]">
                  <Image
                    src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=3270&auto=format&fit=crop"
                    alt="Starbase"
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </ScrollZoom>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <ScrollZoom className="relative h-96 md:h-[500px] md:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=3270&auto=format&fit=crop"
                    alt="Development"
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </ScrollZoom>
                <div className="md:order-2">
                  <h3 className="text-4xl md:text-6xl font-black mb-8">
                    Market Dynamics
                  </h3>
                  <p className="text-2xl md:text-3xl font-light leading-relaxed">
                    5,000+ high-skilled employees by 2027. Severe housing shortage. 
                    Limited commercial infrastructure. Land values increasing rapidly. 
                    First-mover advantage is critical.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-[#0a1929] p-12 md:p-20">
                <h3 className="text-4xl md:text-6xl font-black mb-12 text-center">
                  Key Market Indicators
                </h3>
                <div className="grid md:grid-cols-3 gap-12">
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-black text-[#bf5700] mb-4">
                      78%
                    </div>
                    <p className="text-xl md:text-2xl font-light">
                      Employee growth<br />2024-2027
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-black text-[#bf5700] mb-4">
                      $450K
                    </div>
                    <p className="text-xl md:text-2xl font-light">
                      Avg household<br />income (SpaceX)
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-black text-[#bf5700] mb-4">
                      0.3%
                    </div>
                    <p className="text-xl md:text-2xl font-light">
                      Commercial<br />vacancy rate
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Investment Strategy */}
      <section className="min-h-screen py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-6xl md:text-8xl font-black mb-20">
              INVESTMENT STRATEGY
            </h2>
          </ScrollReveal>

          <div className="space-y-20">
            <ScrollReveal>
              <div className="border-l-8 border-[#bf5700] pl-12">
                <h3 className="text-4xl md:text-5xl font-black mb-6">
                  01 — Land Acquisition
                </h3>
                <p className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl">
                  Strategic parcels within the 30-mile Starbase corridor. Proximity to Highway 4, 
                  Highway 48, and major transportation routes. Zoning favorable for mixed-use development. 
                  Target acquisition: 40% of capital.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="border-l-8 border-[#bf5700] pl-12">
                <h3 className="text-4xl md:text-5xl font-black mb-6">
                  02 — Development Projects
                </h3>
                <p className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl">
                  Workforce housing, commercial properties, and mixed-use developments. 
                  Fast-track permitting and construction. Target high-demand segments with proven demand. 
                  Target allocation: 50% of capital.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="border-l-8 border-[#bf5700] pl-12">
                <h3 className="text-4xl md:text-5xl font-black mb-6">
                  03 — Cash-Flowing Assets
                </h3>
                <p className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl">
                  Existing income-producing properties to provide immediate returns and fund operations. 
                  Stabilized assets with proven tenant demand. Target allocation: 10% of capital.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Fund Structure */}
      <section className="min-h-screen py-32 px-6 bg-[#0a1929]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-6xl md:text-8xl font-black mb-20">
              FUND STRUCTURE
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <ScrollReveal>
              <div className="bg-black/50 p-10 border border-white/10">
                <h3 className="text-3xl md:text-4xl font-black mb-6 text-[#bf5700]">
                  Fund Terms
                </h3>
                <ul className="space-y-4 text-xl md:text-2xl font-light">
                  <li><strong>Fund Size:</strong> $5M - $25M</li>
                  <li><strong>Minimum Investment:</strong> $250,000</li>
                  <li><strong>Management Fee:</strong> 1.5% annually</li>
                  <li><strong>Carried Interest:</strong> 20% above 8% preferred return</li>
                  <li><strong>Investment Period:</strong> 5 years</li>
                  <li><strong>Fund Life:</strong> 7-10 years</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-black/50 p-10 border border-white/10">
                <h3 className="text-3xl md:text-4xl font-black mb-6 text-[#bf5700]">
                  Target Returns
                </h3>
                <ul className="space-y-4 text-xl md:text-2xl font-light">
                  <li><strong>IRR Target:</strong> 18-25%</li>
                  <li><strong>Cash-on-Cash:</strong> 10-15% annually</li>
                  <li><strong>Equity Multiple:</strong> 2.5x - 3.5x</li>
                  <li><strong>Hold Period:</strong> 3-7 years per asset</li>
                  <li><strong>Distribution:</strong> Quarterly</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed">
                All projections are estimates and not guarantees of future performance. 
                Past performance is not indicative of future results. Investment involves risk, 
                including possible loss of principal.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Geographic Focus */}
      <section className="min-h-screen py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-6xl md:text-8xl font-black mb-20">
              GEOGRAPHIC FOCUS
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mb-20">
              <h3 className="text-4xl md:text-5xl font-black mb-8">
                Primary Target Zone
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-xl md:text-2xl font-light">
                <ul className="space-y-3">
                  <li>• Brownsville</li>
                  <li>• Boca Chica</li>
                  <li>• Port Isabel</li>
                  <li>• South Padre Island (mainland)</li>
                </ul>
                <ul className="space-y-3">
                  <li>• Rio Hondo</li>
                  <li>• San Benito</li>
                  <li>• Los Fresnos</li>
                  <li>• Harlingen</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white text-black p-12 md:p-20">
              <h3 className="text-4xl md:text-5xl font-black mb-8">
                Site Selection Criteria
              </h3>
              <div className="grid md:grid-cols-2 gap-12 text-xl md:text-2xl font-light">
                <div>
                  <h4 className="font-bold mb-4 text-[#bf5700]">Location</h4>
                  <p>Within 30-minute drive of Starbase. On or near major transportation corridors.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-[#bf5700]">Infrastructure</h4>
                  <p>Utilities available or feasible to extend. Road access confirmed or planned.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-[#bf5700]">Zoning</h4>
                  <p>Favorable for commercial/residential development or high probability of rezoning.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-[#bf5700]">Market Dynamics</h4>
                  <p>Strong demand indicators, limited supply, clear path to value creation.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Credentials */}
      <section className="min-h-screen py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-6xl md:text-8xl font-black mb-20">
              MANAGING PARTNERS
            </h2>
          </ScrollReveal>

          <div className="space-y-32">
            <ScrollReveal>
              <div>
                <h3 className="text-5xl md:text-6xl font-black mb-6">
                  Dane Walter
                </h3>
                <p className="text-2xl md:text-3xl font-light text-[#bf5700] mb-8">
                  Managing Partner
                </p>
                <div className="text-xl md:text-2xl font-light leading-relaxed space-y-4 max-w-4xl">
                  <p>
                    Serial entrepreneur with deep roots in South Texas real estate and community development. 
                    Founded multiple successful ventures across landscaping, construction, blockchain, and property development.
                  </p>
                  <p>
                    Current portfolio includes historic Hotel Brendle restoration (67 rooms), Coastal Bend Builders of Texas, 
                    and multi-property real estate holdings across the region. Self-funded, independent operator with 
                    proven track record of identifying and capitalizing on emerging market opportunities.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h3 className="text-5xl md:text-6xl font-black mb-6">
                  Tim Lussier
                </h3>
                <p className="text-2xl md:text-3xl font-light text-[#bf5700] mb-8">
                  Managing Partner
                </p>
                <div className="text-xl md:text-2xl font-light leading-relaxed space-y-4 max-w-4xl">
                  <p>
                    Experienced real estate investor and developer with expertise in identifying high-growth 
                    opportunities in emerging markets. Strategic advisor with deep knowledge of the South Texas 
                    development landscape and established relationships with local government and business leaders.
                  </p>
                  <p>
                    Proven ability to navigate complex zoning, permitting, and development processes. 
                    Track record of successful projects in transitioning markets with similar dynamics to the Starbase corridor.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="min-h-screen py-32 px-6 bg-[#bf5700] text-black flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-16 text-center">
              NEXT STEPS
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-12 max-w-4xl mx-auto mb-20">
              <div className="bg-black/10 p-10">
                <h3 className="text-3xl md:text-4xl font-black mb-4">
                  01 — Initial Conversation
                </h3>
                <p className="text-xl md:text-2xl font-light">
                  Schedule a confidential discussion with the managing partners to review the investment thesis, 
                  current pipeline, and fund structure.
                </p>
              </div>

              <div className="bg-black/10 p-10">
                <h3 className="text-3xl md:text-4xl font-black mb-4">
                  02 — Due Diligence Materials
                </h3>
                <p className="text-xl md:text-2xl font-light">
                  Receive access to Private Placement Memorandum (PPM), operating agreement, financial projections, 
                  and market analysis documentation.
                </p>
              </div>

              <div className="bg-black/10 p-10">
                <h3 className="text-3xl md:text-4xl font-black mb-4">
                  03 — Site Visits & Commitment
                </h3>
                <p className="text-xl md:text-2xl font-light">
                  Visit Starbase and target properties. Review final investment documents. Complete accredited investor 
                  verification and subscription process.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center">
              <a 
                href="mailto:dane@sbl.fund"
                className="inline-block text-3xl md:text-5xl font-black bg-black text-white px-16 py-8 hover:bg-white hover:text-black transition-colors duration-300"
              >
                SCHEDULE CALL
              </a>
              <p className="text-xl md:text-2xl mt-12 font-light">
                dane@sbl.fund | Accredited investors only
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Legal Footer */}
      <section className="py-16 px-6 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white/60 text-sm md:text-base space-y-4">
            <p>
              This website does not constitute an offer to sell or a solicitation of an offer to buy securities. 
              Any such offer or solicitation will be made only by means of a confidential private placement memorandum 
              and only to accredited investors as defined under Regulation D of the Securities Act of 1933.
            </p>
            <p>
              Past performance is not indicative of future results. All investments involve risk, including possible loss of principal. 
              The information presented herein is for informational purposes only and should not be construed as investment, legal, or tax advice.
            </p>
            <p>
              © 2026 Starbase Land Fund. All rights reserved. | <Link href="/" className="underline hover:text-white">Home</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
