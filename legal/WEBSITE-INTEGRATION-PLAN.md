# Website Legal Integration Plan
## Starbase Land Fund

**Created:** 2026-05-05  
**Purpose:** Document best practices for integrating legal documentation, disclaimers, and investor access gates into the sbl.fund website to comply with both the letter and spirit of securities laws.

---

## Executive Summary

This plan draws from established private equity fund websites (KKR, Vista Equity Partners, TPG, Blackstone, Brookfield) to identify industry-standard practices for:

1. Legal document placement and accessibility
2. Accredited investor verification gates
3. Disclaimer language and positioning
4. Email communication best practices
5. Investor portal access controls

**Key Principle:** Securities laws require that private placement offerings are only marketed to accredited/qualified investors. Website implementation must demonstrate good-faith compliance through explicit disclaimers, access gates, and verification mechanisms.

---

## 1. Footer Legal Links (Industry Standard)

### Placement
All major PE fund websites include legal links in the footer on every page. This creates consistent, accessible compliance navigation.

### Required Footer Links

```
Footer Legal Section:
├── Privacy Policy
├── Terms of Use
├── Disclosures
├── Legal Notices
├── Cookie Settings (if using analytics cookies)
└── Accessibility Statement (optional but recommended)
```

### Implementation Location
**File:** `/app/components/Footer.tsx` (create if doesn't exist)

**Design:** 
- Small text (12-14px)
- Low-contrast secondary color (#666666 or similar)
- Horizontal links separated by "|" or "•"
- Sticky footer or always visible at bottom

**Example Footer Code:**
```tsx
<footer className="w-full border-t border-gray-800 bg-black py-8 text-gray-400">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm">© 2026 Starbase Land Fund. All rights reserved.</p>
      <nav className="flex gap-4 text-sm">
        <Link href="/legal/privacy-policy">Privacy Policy</Link>
        <span>•</span>
        <Link href="/legal/terms-of-use">Terms of Use</Link>
        <span>•</span>
        <Link href="/legal/disclosures">Disclosures</Link>
        <span>•</span>
        <Link href="/legal/notices">Legal Notices</Link>
      </nav>
    </div>
  </div>
</footer>
```

---

## 2. Homepage Disclaimer Banner

### Purpose
Immediately notify visitors that this site contains information about a private investment opportunity available only to accredited investors.

### Placement
**Top of homepage** (before hero section) or **persistent banner** across all pages.

### Content (Based on Vista Equity Partners / KKR patterns)

```
⚠️ IMPORTANT NOTICE

This website contains information about a private investment fund available 
only to accredited investors as defined under the Securities Act of 1933. 
Nothing on this site constitutes an offer to sell, or a solicitation to buy, 
any security. Such offers may only be made through the Fund's Private Placement 
Memorandum (PPM) to qualified investors.

By continuing to use this site, you acknowledge that you are an accredited 
investor or are evaluating this information for business purposes.

[I Understand] [More Information]
```

### Implementation
- **Dismissible banner** (cookie-based, reappears after 30 days)
- **Modal overlay option** (more prominent, user must click "I Understand")
- **Color:** Amber/orange background (#fef3c7) with dark text, or high-contrast design

**File:** `/app/components/DisclaimerBanner.tsx`

---

## 3. Investor Portal Access Gate

### Purpose
The investor portal (where PPM, subscription docs, and confidential materials live) **must** require verification before access.

### Industry Standard: Two-Step Gate

#### Step 1: "Proceed" Warning Page

Before accessing any investor materials, users hit an interstitial page with:

```
INVESTOR VERIFICATION REQUIRED

Access to this section is restricted to:
• Accredited investors as defined by SEC Rule 501 of Regulation D
• Existing limited partners of Starbase Land Fund
• Financial advisors and consultants evaluating the Fund on behalf of clients

The materials in this portal include confidential information and forward-looking 
statements. By proceeding, you represent that you meet one of the above criteria 
and agree to the Terms of Use.

This is not an offer to sell securities. Investments may only be made through 
the Fund's Private Placement Memorandum.

[Cancel] [I Qualify - Proceed to Portal]
```

#### Step 2: Email Verification / Login

After clicking "Proceed", user must either:

**Option A: Email Gate (Simple)**
- Enter email address
- Receive one-time login link
- Click link to access portal
- Session persists for 30 days

**Option B: Account Registration (More Robust)**
- Create account with email/password
- Email verification required
- Must attest to accredited investor status
- Admin can approve/deny access

**Recommendation for Phase 1:** Email gate (simpler, faster to implement, sufficient for early-stage fund)

**Recommendation for Phase 2:** Full account system with admin approval

### Implementation

**Files:**
- `/app/investor-portal/page.tsx` (already exists - modify to add gate)
- `/app/investor-portal/verify/page.tsx` (warning page)
- `/app/investor-portal/login/page.tsx` (email gate)
- `/app/api/auth/send-link/route.ts` (API endpoint for email magic links)

**Flow:**
```
User clicks "Investor Portal"
  ↓
Redirect to /investor-portal/verify (warning page)
  ↓
User clicks "I Qualify - Proceed"
  ↓
Redirect to /investor-portal/login (email entry)
  ↓
User enters email → receives magic link
  ↓
User clicks link → redirected to /investor-portal (authenticated)
```

### Tech Stack for Authentication
- **Next.js Server Actions** (built-in, no external auth needed for Phase 1)
- **JWT tokens** stored in HTTP-only cookies
- **Email service:** Resend, SendGrid, or AWS SES
- **Database (future):** PostgreSQL/Supabase for user management

---

## 4. Legal Document Pages

### Required Pages

Create these pages in `/app/legal/`:

#### `/app/legal/disclosures/page.tsx`
**Content:**
- Fund performance disclaimers (past performance not indicative of future results)
- Forward-looking statements warning
- No guarantee of returns
- Risk factors summary
- AUM definitions (if applicable)
- Third-party data disclaimers
- Investment suitability notice

**Example opening (based on Vista Equity Partners):**

```
# Disclosures

## Terms of Use

This website (the "Site") is operated by Starbase Land Fund, LP (the "Fund"). 
By accessing the Site, you acknowledge that you have read and agree to these 
Terms of Use. If you do not agree, please do not use the Site.

## Regulatory Disclosures

The content of this Site is for general, informational purposes. Under no 
circumstances should the information presented be considered an offer to sell, 
or a solicitation to buy, any security. Such offers may only be made pursuant 
to the current Private Placement Memorandum (PPM) for the Fund, which may only 
be provided to accredited investors as defined under the Securities Act of 1933.

While the information provided herein is believed to be accurate and reliable, 
the Fund, its advisors, and employees make no representation or warranty of any 
kind, express or implied, as to its completeness, accuracy, reliability, or 
currentness. The Fund expressly disclaims liability for any errors or omissions.

## Forward-Looking Statements

This Site may contain forward-looking statements regarding market conditions, 
investment opportunities, and projected returns. Such statements involve known 
and unknown risks and uncertainties. Actual results may differ materially. No 
representation or warranty is made as to future performance.

## No Investment Advice

Nothing on this Site is intended to be, and you should not consider anything 
on the Site to be, investment, accounting, tax, legal, or other professional 
advice. Consult your own advisors before making investment decisions.

## Confidential Information

The information on this Site may not be reproduced, distributed, or communicated 
to any third party without express written consent of the Fund.
```

#### `/app/legal/privacy-policy/page.tsx`
**Content:**
- Data collection practices (analytics, forms, cookies)
- How investor information is stored/protected
- Third-party services used (if any)
- Email communication opt-out
- GDPR/CCPA compliance (if applicable)
- Contact for privacy questions

#### `/app/legal/terms-of-use/page.tsx`
**Content:**
- Site usage rules
- Intellectual property (site content is copyrighted)
- No commercial use without permission
- No scraping/automated access
- Limitation of liability
- Governing law (Texas)

#### `/app/legal/notices/page.tsx`
**Content:**
- SEC notice (fund not registered under Investment Company Act of 1940)
- State securities law compliance
- Anti-fraud provisions
- FINRA/broker-dealer disclaimers (if working with placement agents)
- Texas-specific notices (if required)

### Design for Legal Pages

Legal pages should be **readable and accessible**, not buried:

- Clean typography (18-20px body text)
- Generous line height (1.6-1.8)
- Table of contents for long documents
- Print-friendly format
- PDF download option (optional)

**File:** `/app/legal/layout.tsx` (shared layout for all legal pages)

```tsx
export default function LegalLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto max-w-4xl px-6 py-16">
        <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 mb-8 inline-block">
          ← Back to Home
        </Link>
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    </div>
  )
}
```

---

## 5. Contact Form / Investor Inquiry

### Current vs. Best Practice

**Current Approach:**  
Simple email link or basic form.

**Best Practice:**  
Gated form with accredited investor attestation.

### Implementation

**File:** `/app/contact/page.tsx` or embedded on homepage

**Form Fields:**
- Full Name
- Email Address
- Phone Number (optional)
- Investor Type (dropdown):
  - Accredited Individual Investor
  - Family Office
  - Institutional Investor (pension, endowment, etc.)
  - Financial Advisor (on behalf of client)
  - Other
- Investment Interest (textarea)
- **Attestation Checkbox (required):**
  ```
  ☐ I certify that I am an accredited investor as defined by the SEC, or I am 
     a financial professional evaluating this investment on behalf of an 
     accredited investor. I understand this is not an offer to purchase securities.
  ```

**Submission:**
- Email notification to fund management
- Auto-reply to user confirming receipt
- CRM integration (optional: Airtable, HubSpot, etc.)

**Compliance Note:**  
Requiring attestation is a **good-faith effort** to limit marketing to qualified investors. While not legally binding (investors can lie), it demonstrates the Fund's intent to comply with securities laws.

---

## 6. Email Communication Disclaimers

### Purpose
All investor-related emails (newsletters, updates, PPM delivery) must include disclaimers.

### Standard Email Footer

```
---

IMPORTANT DISCLAIMERS

This email contains information about Starbase Land Fund, LP, a private investment 
fund. This email is intended solely for accredited investors and is not an offer 
to sell or a solicitation to buy any security.

Investments in the Fund involve substantial risk and are suitable only for 
sophisticated investors who can afford to lose their entire investment. Past 
performance is not indicative of future results.

For complete information, including risks and fees, please review the Fund's 
Private Placement Memorandum (PPM). This email may contain forward-looking 
statements that are subject to change.

If you received this email in error or no longer wish to receive communications 
from Starbase Land Fund, please reply with "UNSUBSCRIBE" or click here: [link]

© 2026 Starbase Land Fund, LP. All rights reserved.
Confidential and Proprietary - Do Not Forward
```

### Email Service Implementation

**Recommended:** Use a professional email service with built-in compliance:
- **Mailchimp** (has compliance features)
- **SendGrid** (transactional + marketing)
- **Campaign Monitor**

**Minimum Requirements:**
- Unsubscribe link in every email
- Physical address in footer (SEC/FTC requirement)
- Confidentiality notice

---

## 7. Investor Portal Content Structure

Once authenticated, the investor portal should organize documents clearly:

```
Investor Portal
├── Overview
│   └── Welcome message, quick links
├── Fund Documents
│   ├── Private Placement Memorandum (PPM)
│   ├── Subscription Agreement
│   ├── Operating Agreement (or LP Agreement)
│   └── Fund Updates (quarterly letters)
├── Performance Reports
│   ├── Quarterly NAV statements
│   ├── K-1 tax documents (when applicable)
│   └── Annual audited financials
├── Portfolio
│   ├── Current properties
│   ├── Development pipeline
│   └── Market analysis
└── Contact & Support
    └── Direct line to fund management
```

### File Storage

**Options:**
1. **Simple:** Store PDFs in `/public/secure/` with obfuscated filenames (e.g., `d8f3a92b.pdf`)
   - **Pro:** Easy to implement
   - **Con:** Not truly secure (if someone guesses the URL)

2. **Better:** Use API routes to serve files after authentication check
   - **Pro:** Files are not publicly accessible
   - **Con:** Requires server-side logic

3. **Best:** Third-party document management (Sharefile, Box, Dropbox with API)
   - **Pro:** Enterprise security, audit logs, e-signatures
   - **Con:** Monthly cost, integration complexity

**Recommendation for Phase 1:** API-served files with authentication  
**Recommendation for Phase 2:** Third-party DMS integration

### Example Secure File Serving

**File:** `/app/api/documents/[fileId]/route.ts`

```typescript
import { NextRequest } from 'next/server'
import { verifyAuth } from '@/lib/auth'
import { readFile } from 'fs/promises'
import path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: { fileId: string } }
) {
  // Verify user is authenticated
  const user = await verifyAuth(request)
  if (!user) {
    return new Response('Unauthorized', { status: 401 })
  }

  // Map fileId to actual filename (never expose real paths)
  const fileMap = {
    'ppm-2026': 'Starbase-Land-Fund-PPM-2026.pdf',
    'subscription': 'Subscription-Agreement.pdf',
    // ... etc
  }

  const filename = fileMap[params.fileId]
  if (!filename) {
    return new Response('File not found', { status: 404 })
  }

  // Serve file
  const filePath = path.join(process.cwd(), 'secure-docs', filename)
  const file = await readFile(filePath)

  return new Response(file, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${filename}"`,
    },
  })
}
```

---

## 8. Accessibility & Mobile Considerations

### Legal Pages on Mobile

Many investors browse on mobile devices. Legal pages must be:
- Responsive (readable on phones/tablets)
- Touch-friendly navigation
- Fast loading (no heavy images on legal pages)
- Printable (if investor needs to reference offline)

### Accessibility Compliance

While not strictly a securities law requirement, accessible design:
- Reduces legal risk (ADA compliance)
- Expands investor reach (older investors, visual impairments)
- Demonstrates professionalism

**Minimum Standards:**
- Sufficient color contrast (WCAG AA)
- Keyboard navigation support
- Screen reader compatibility
- Text alternatives for images

---

## 9. Analytics & Tracking

### What to Track

For conversion optimization and compliance documentation:
- Page views on legal pages (shows users were informed)
- Investor inquiry form submissions
- Investor portal access attempts
- Bounce rate on disclaimer pages
- Time spent on PPM/legal documents

### Privacy Considerations

If using Google Analytics, Mixpanel, etc.:
- **Cookie consent banner required** (GDPR/CCPA)
- **Anonymize IP addresses**
- **Do NOT track PII** (investor names, emails) in analytics
- **Exclude investor portal** from public analytics

**Recommendation:** Use privacy-friendly analytics (Plausible, Fathom) to avoid cookie consent complexity.

---

## 10. Phased Implementation Plan

### Phase 1: Minimum Viable Compliance (Week 1)

**Priority 1 (Critical):**
- [ ] Add disclaimer banner to homepage
- [ ] Create `/legal/disclosures` page with core disclaimers
- [ ] Add footer with legal links
- [ ] Update contact form with accredited investor checkbox

**Priority 2 (Important):**
- [ ] Create investor portal gate (warning page)
- [ ] Implement email magic link authentication

### Phase 2: Full Compliance (Week 2-3)

**Priority 3 (Complete Legal Suite):**
- [ ] Privacy Policy page
- [ ] Terms of Use page
- [ ] Legal Notices page
- [ ] Email disclaimer templates
- [ ] Secure document serving API

**Priority 4 (Polish & Testing):**
- [ ] Mobile testing of all legal pages
- [ ] Accessibility audit
- [ ] Proofread all legal copy
- [ ] Attorney review of disclosures

### Phase 3: Advanced Features (Week 4+)

**Priority 5 (Enhanced Portal):**
- [ ] User account system with admin approval
- [ ] Investor dashboard with personalized data
- [ ] E-signature integration (DocuSign, HelloSign)
- [ ] CRM integration (investor tracking)

---

## 11. Attorney Review Checklist

Before launching, a securities attorney should review:

- [ ] All disclaimer language (homepage, investor portal, legal pages)
- [ ] Accredited investor verification process (is it sufficient?)
- [ ] PPM distribution method (secure portal vs. direct email)
- [ ] Email marketing disclaimers
- [ ] State-specific requirements (Texas, plus any states where investors reside)
- [ ] Any performance claims on the website (must be accurate, not misleading)
- [ ] Forward-looking statements (must include risk warnings)

**Cost:** Expect $2,000 - $5,000 for a thorough website compliance review.

**ROI:** Avoiding an SEC enforcement action (which can cost $50K+ in legal fees) makes this a no-brainer.

---

## 12. Comparison: What Major Funds Do

### KKR (kkr.com)

✅ **Footer links:** Privacy, Terms, Disclosures, Compliance  
✅ **Dual website approach:** Public site (marketing) + separate Wealth Solutions site  
✅ **No PPM on public site** (requires contacting wealth team)  
✅ **Investor portal login:** Separate, gated  

### Vista Equity Partners (vistaequitypartners.com)

✅ **Extensive disclosures page** (very detailed)  
✅ **Wealth Professionals section** (separate from main site)  
✅ **Modal forms** for investor inquiries (not just email links)  
✅ **Clear "not an offer" disclaimers** throughout  

### TPG (tpg.com)

✅ **Footer disclosures link**  
✅ **Wealth Solutions separate section**  
✅ **LP Login** (investor portal separate from public site)  
✅ **Legal notices linked prominently**  

### Blackstone (blackstone.com)

✅ **Disclaimers on every page** (footer)  
✅ **Separate retail investor section** (different from institutional)  
✅ **Extensive legal notices** (multi-page disclosures)  

### Key Takeaway

**No major fund puts the PPM directly on their public website.**  
All use some form of gating (login, request form, or separate investor site).

---

## 13. Red Flags to Avoid

Based on SEC enforcement actions and industry mistakes:

❌ **DO NOT:**
- Claim guaranteed returns or specific performance without disclaimers
- Use testimonials from investors without written consent (and even then, risky)
- Show past performance without "not indicative of future results" warning
- Allow public access to investor-only materials (PPM, investor letters)
- Send unsolicited emails to non-investors without opt-in
- Use SpaceX trademarks/logos without permission (this is trademark law, not securities law, but still important)

✅ **DO:**
- Over-communicate disclaimers (better safe than sorry)
- Document all compliance efforts (keep records of who accessed what)
- Make disclaimers impossible to miss (not buried in fine print)
- Require explicit attestation before accessing investor materials
- Work with a securities attorney (this document is a guide, not legal advice)

---

## 14. Final Recommendations

### For sbl.fund Launch

**Immediate (Before Any Traffic):**
1. Add disclaimer banner to homepage
2. Create `/legal/disclosures` page with core disclaimers from this document
3. Add footer links on all pages
4. Gate the investor portal with a warning page

**Within 1 Month:**
5. Full legal page suite (Privacy, Terms, Notices)
6. Email authentication for investor portal
7. Attorney review of all disclaimers
8. Test mobile responsiveness of all legal pages

**Within 3 Months (As Fund Grows):**
9. User account system with admin approval
10. CRM integration for investor tracking
11. E-signature integration for subscription documents
12. Quarterly review of legal language with attorney

---

## 15. Estimated Costs

| Item | Cost | Frequency |
|------|------|-----------|
| Securities attorney review | $2,000 - $5,000 | One-time (initial) |
| Ongoing legal updates | $500 - $1,500 | Annual |
| Email service (Mailchimp/SendGrid) | $50 - $200/mo | Monthly |
| Document management (optional) | $100 - $500/mo | Monthly |
| Authentication service (Auth0, etc.) | $0 - $200/mo | Monthly |
| **Total First Year** | **~$5,000 - $10,000** | |

**Note:** DIY implementation (using Next.js built-in features) can keep costs at the lower end. Enterprise tools push toward the higher end.

---

## 16. Conclusion

This plan provides a roadmap for implementing industry-standard legal compliance on the Starbase Land Fund website. Key principles:

1. **Transparency:** Make disclaimers prominent, not hidden
2. **Gating:** Require affirmative steps to access investor materials
3. **Documentation:** Keep records of who accessed what and when
4. **Attorney Review:** This document is a starting point, not a substitute for legal counsel

By following the patterns established by major PE funds (KKR, Vista, TPG, Blackstone), the Fund demonstrates good-faith compliance with securities regulations while maintaining a professional, accessible web presence.

---

**Document Version:** 1.0  
**Last Updated:** 2026-05-05  
**Next Review:** Before website launch (attorney review)  

**Prepared by:** Roan (AI Operations Partner)  
**For:** Dane Walter, Managing Partner, Starbase Land Fund
