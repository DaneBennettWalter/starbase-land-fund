# Legal Website Implementation Checklist
## Starbase Land Fund - Quick Reference

**Use this checklist to track implementation of legal compliance features from WEBSITE-INTEGRATION-PLAN.md**

---

## Phase 1: Critical (Complete Before Public Launch)

### Homepage & Core Disclaimers
- [ ] Disclaimer banner at top of homepage (dismissible or modal)
  - File: `/app/components/DisclaimerBanner.tsx`
  - Content: Accredited investor notice + "not an offer" language
  - Cookie/localStorage to remember dismissal (30 days)

- [ ] Footer component with legal links on all pages
  - File: `/app/components/Footer.tsx`
  - Links: Privacy Policy, Terms of Use, Disclosures, Legal Notices
  - Import in `/app/layout.tsx`

- [ ] `/legal/disclosures` page
  - File: `/app/legal/disclosures/page.tsx`
  - Content: Core disclaimers (see WEBSITE-INTEGRATION-PLAN.md §4)
  - Include: "Not an offer", "Past performance not indicative", "Forward-looking statements"

### Investor Portal Gate
- [ ] Warning page before investor portal access
  - File: `/app/investor-portal/verify/page.tsx`
  - Content: "Accredited investors only" notice with [Cancel] and [Proceed] buttons

- [ ] Email authentication gate (magic link)
  - File: `/app/investor-portal/login/page.tsx`
  - API route: `/app/api/auth/send-link/route.ts`
  - Email service: Set up Resend, SendGrid, or AWS SES

- [ ] Modify existing investor portal to require authentication
  - File: `/app/investor-portal/page.tsx` (already exists)
  - Check for valid session before rendering content

### Contact Form Updates
- [ ] Add accredited investor attestation checkbox
  - File: `/app/contact/page.tsx` (or wherever contact form lives)
  - Checkbox text: "I certify that I am an accredited investor..."
  - Make checkbox required before submission

---

## Phase 2: Complete Legal Suite (Within 2 Weeks)

### Additional Legal Pages
- [ ] `/legal/privacy-policy` page
  - File: `/app/legal/privacy-policy/page.tsx`
  - Content: Data collection, cookies, email practices, third-party services

- [ ] `/legal/terms-of-use` page
  - File: `/app/legal/terms-of-use/page.tsx`
  - Content: Site usage rules, IP ownership, limitation of liability

- [ ] `/legal/notices` page
  - File: `/app/legal/notices/page.tsx`
  - Content: SEC notices, state securities laws, FINRA disclaimers

- [ ] Legal pages layout template
  - File: `/app/legal/layout.tsx`
  - Design: Clean, readable, with back-to-home link

### Email Compliance
- [ ] Create email disclaimer template
  - Add to all investor communications
  - Include: Accredited investor notice, unsubscribe link, confidentiality notice
  - Store in `/legal/EMAIL-DISCLAIMER-TEMPLATE.txt`

- [ ] Set up email service footer automation
  - Configure in Mailchimp/SendGrid/etc.
  - Test with sample investor update email

---

## Phase 3: Advanced Security (Within 1 Month)

### Secure Document Serving
- [ ] API route for authenticated document downloads
  - File: `/app/api/documents/[fileId]/route.ts`
  - Verify auth before serving PDFs
  - Map obfuscated IDs to real filenames

- [ ] Create `/secure-docs/` directory (outside `/public/`)
  - Store PPM, subscription docs, etc.
  - Add to `.gitignore` (never commit to public repo)

### User Account System (Optional - Phase 3+)
- [ ] User registration with email verification
- [ ] Admin approval workflow
- [ ] User dashboard with personalized content
- [ ] CRM integration for investor tracking

---

## Pre-Launch Review

### Attorney Review
- [ ] Schedule review with securities attorney
  - Estimated cost: $2,000 - $5,000
  - Provide access to staging site + all legal pages

- [ ] Attorney approval of:
  - [ ] Homepage disclaimer language
  - [ ] Investor portal gate process
  - [ ] All `/legal/*` page content
  - [ ] Email disclaimers
  - [ ] Contact form attestation language

### Testing Checklist
- [ ] Test disclaimer banner on all browsers (Chrome, Safari, Firefox, Edge)
- [ ] Test investor portal gate flow (verify → login → access)
- [ ] Test magic link email delivery (check spam folder)
- [ ] Test all legal pages on mobile devices
- [ ] Test footer links work on all pages
- [ ] Proofread all legal copy for typos/errors
- [ ] Check that PDFs are NOT publicly accessible without auth

### Accessibility Audit
- [ ] Color contrast check (WCAG AA minimum)
- [ ] Keyboard navigation test (tab through all interactive elements)
- [ ] Screen reader test (if possible)
- [ ] Mobile touch target size (buttons/links at least 44x44px)

---

## Analytics & Monitoring

### Setup
- [ ] Install analytics (Plausible, Fathom, or Google Analytics with consent)
- [ ] Track key pages: homepage, investor portal, contact form, legal pages
- [ ] Set up conversion goals: contact form submission, portal login
- [ ] Exclude investor portal from public analytics (privacy)

### Cookie Consent (if using cookies)
- [ ] Add cookie consent banner (if using Google Analytics or similar)
- [ ] Link to Privacy Policy with cookie details
- [ ] Respect user opt-out preferences

---

## Post-Launch Maintenance

### Quarterly Review
- [ ] Review legal disclaimers for accuracy (any new regulations?)
- [ ] Check all links work (especially legal pages)
- [ ] Review investor portal access logs (any issues?)
- [ ] Update email disclaimers if fund structure changes

### Annual Review
- [ ] Full attorney review of all legal content ($500-$1,500)
- [ ] Update copyright year in footer
- [ ] Review analytics for user behavior insights
- [ ] Update legal pages if SEC/state rules change

---

## Red Flags - DO NOT Launch If:

- ❌ PPM is publicly accessible without any gate
- ❌ No disclaimer on homepage about accredited investors
- ❌ No "not an offer" language anywhere on site
- ❌ Contact form allows anyone to submit without attestation
- ❌ Attorney has not reviewed disclaimers
- ❌ Investor portal can be accessed by guessing URLs

---

## Key Files to Create

| File Path | Purpose | Status |
|-----------|---------|--------|
| `/app/components/DisclaimerBanner.tsx` | Homepage disclaimer | ⬜ Not started |
| `/app/components/Footer.tsx` | Footer with legal links | ⬜ Not started |
| `/app/legal/layout.tsx` | Layout for legal pages | ⬜ Not started |
| `/app/legal/disclosures/page.tsx` | Main disclosures page | ⬜ Not started |
| `/app/legal/privacy-policy/page.tsx` | Privacy policy | ⬜ Not started |
| `/app/legal/terms-of-use/page.tsx` | Terms of use | ⬜ Not started |
| `/app/legal/notices/page.tsx` | Legal notices | ⬜ Not started |
| `/app/investor-portal/verify/page.tsx` | Investor portal warning | ⬜ Not started |
| `/app/investor-portal/login/page.tsx` | Email authentication | ⬜ Not started |
| `/app/api/auth/send-link/route.ts` | Magic link API | ⬜ Not started |
| `/app/api/documents/[fileId]/route.ts` | Secure doc serving | ⬜ Not started |
| `/legal/EMAIL-DISCLAIMER-TEMPLATE.txt` | Email footer template | ⬜ Not started |

---

## Resources

- **Full Implementation Plan:** See `WEBSITE-INTEGRATION-PLAN.md` for detailed guidance
- **Example Code:** All code snippets in WEBSITE-INTEGRATION-PLAN.md
- **Industry Examples:** KKR.com, VistaEquityPartners.com, TPG.com (review their approaches)

---

**Next Step:** Start with Phase 1 checklist items. Once complete, schedule attorney review before public launch.

**Questions?** Refer to WEBSITE-INTEGRATION-PLAN.md or consult with securities attorney.

---

**Status Legend:**
- ⬜ Not started
- 🟡 In progress
- ✅ Complete
- ⚠️ Blocked/needs review
