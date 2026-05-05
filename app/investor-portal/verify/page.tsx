'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function VerifyPage() {
  const router = useRouter()
  const [agreed, setAgreed] = useState(false)

  const handleProceed = () => {
    if (agreed) {
      // Set a session flag (in real implementation, this would be server-side)
      sessionStorage.setItem('investor-verified', 'true')
      router.push('/investor-portal')
    }
  }

  return (
    <main className=\"min-h-screen bg-black text-white flex items-center justify-center px-6 py-20\">
      <div className=\"max-w-3xl\">
        <div className=\"bg-amber-500/10 border-2 border-amber-500 p-8 md:p-12 mb-8\">
          <div className=\"flex items-start gap-4 mb-6\">
            <svg 
              className=\"w-10 h-10 text-amber-500 flex-shrink-0\" 
              fill=\"none\" 
              strokeLinecap=\"round\" 
              strokeLinejoin=\"round\" 
              strokeWidth=\"2\" 
              viewBox=\"0 0 24 24\" 
              stroke=\"currentColor\"
            >
              <path d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\" />
            </svg>
            <h1 className=\"text-4xl md:text-5xl font-black leading-tight\">
              INVESTOR VERIFICATION REQUIRED
            </h1>
          </div>
        </div>

        <div className=\"space-y-6 text-lg leading-relaxed mb-12\">
          <p>
            Access to the Investor Portal is restricted to:
          </p>
          <ul className=\"space-y-3 pl-6\">
            <li className=\"flex items-start gap-3\">
              <span className=\"text-[#bf5700] font-bold\">•</span>
              <span><strong>Accredited investors</strong> as defined by SEC Rule 501 of Regulation D</span>
            </li>
            <li className=\"flex items-start gap-3\">
              <span className=\"text-[#bf5700] font-bold\">•</span>
              <span><strong>Existing limited partners</strong> of Starbase Land Fund</span>
            </li>
            <li className=\"flex items-start gap-3\">
              <span className=\"text-[#bf5700] font-bold\">•</span>
              <span><strong>Financial advisors and consultants</strong> evaluating the Fund on behalf of qualified clients</span>
            </li>
          </ul>

          <div className=\"bg-white/5 border border-white/10 p-6 my-8\">
            <h2 className=\"text-2xl font-black mb-4 text-[#bf5700]\">Important Disclosures</h2>
            <ul className=\"space-y-3 text-base\">
              <li>• The materials in this portal include confidential information and forward-looking statements</li>
              <li>• This is <strong>not an offer to sell securities</strong></li>
              <li>• Investments may only be made through the Fund's Private Placement Memorandum (PPM)</li>
              <li>• Investment involves substantial risk, including possible loss of principal</li>
              <li>• Past performance is not indicative of future results</li>
            </ul>
          </div>

          <p className=\"text-xl font-light\">
            By proceeding, you represent that you meet one of the above criteria and agree to the{' '}
            <Link href=\"/legal/terms\" className=\"underline text-[#bf5700] hover:text-[#d66500]\">
              Terms of Use
            </Link>.
          </p>

          <div className=\"bg-white/5 p-6 rounded\">
            <label className=\"flex items-start gap-4 cursor-pointer\">
              <input
                type=\"checkbox\"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className=\"mt-1.5 w-5 h-5 cursor-pointer accent-[#bf5700]\"
              />
              <span className=\"text-base leading-relaxed\">
                I certify that I am an accredited investor as defined by the SEC, or I am a financial 
                professional evaluating this investment on behalf of an accredited investor. I understand 
                the confidential nature of the materials in this portal and agree not to share them without 
                authorization.
              </span>
            </label>
          </div>
        </div>

        <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
          <Link
            href=\"/\"
            className=\"inline-block text-center text-2xl md:text-3xl font-black bg-white/10 text-white px-12 py-6 hover:bg-white/20 transition-colors duration-300\"
          >
            CANCEL
          </Link>
          
          <button
            onClick={handleProceed}
            disabled={!agreed}
            className={`inline-block text-center text-2xl md:text-3xl font-black px-12 py-6 transition-colors duration-300 ${
              agreed
                ? 'bg-[#bf5700] text-white hover:bg-[#d66500] cursor-pointer'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            I QUALIFY — PROCEED
          </button>
        </div>

        <p className=\"text-center text-sm text-white/40 mt-12\">
          Questions? Contact us at{' '}
          <a href=\"mailto:dane@sbl.fund\" className=\"underline hover:text-white\">
            dane@sbl.fund
          </a>
        </p>
      </div>
    </main>
  )
}
