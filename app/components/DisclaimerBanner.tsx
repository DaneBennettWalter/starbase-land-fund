'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has dismissed the banner
    const dismissed = localStorage.getItem('disclaimer-dismissed')
    const dismissedDate = dismissed ? parseInt(dismissed) : 0
    const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000)
    
    // Show banner if never dismissed or dismissed more than 30 days ago
    if (!dismissed || dismissedDate < thirtyDaysAgo) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    localStorage.setItem('disclaimer-dismissed', Date.now().toString())
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="bg-amber-50 border-b-2 border-amber-400 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-start gap-4">
        <div className="flex-shrink-0">
          <svg 
            className="w-6 h-6 text-amber-600" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div className="flex-1 text-sm text-amber-900">
          <p className="font-bold mb-2">IMPORTANT NOTICE — ACCREDITED INVESTORS ONLY</p>
          <p className="mb-2">
            This website contains information about a private investment fund available only to 
            <strong> accredited investors</strong> as defined under the Securities Act of 1933. 
            Nothing on this site constitutes an offer to sell, or a solicitation to buy, any security. 
            Such offers may only be made through the Fund's Private Placement Memorandum (PPM) to qualified investors.
          </p>
          <p className="mb-3">
            By continuing to use this site, you acknowledge that you are an accredited investor or 
            are evaluating this information for business purposes. 
            <Link href="/legal/disclosures" className="underline ml-1 font-semibold hover:text-amber-700">
              Read full disclosures
            </Link>
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 text-amber-900 hover:text-amber-700 font-bold text-lg px-2"
          aria-label="Dismiss notice"
        >
          ×
        </button>
      </div>
    </div>
  )
}
