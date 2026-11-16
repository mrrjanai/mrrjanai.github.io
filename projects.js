// Portfolio projects, rendered in this order (first = top of the page).
// To add a project: copy one object, fill it in, and put screenshots in assets/<slug>/.
// Any field except name, tagline and summary can be left out.

window.PROJECTS = [
  {
    slug: 'levpriv',
    name: 'LevPriv',
    year: '2026',
    tagline: 'Private notes that destroy themselves.',
    summary:
      'Write a note, attach audio, video, photos or files, and share a link. It disappears on a timer or the moment it is read. No accounts, no sign-up.',
    highlights: [
      'Every note is encrypted with AES-256-GCM. With a passphrase, the key is derived via PBKDF2 (210,000 iterations), so even the server cannot read it.',
      'Attachments up to 20MB upload straight from the browser to private Vercel Blob storage and are only served back through short-lived HMAC-signed links.',
      'Ownership without accounts: hashed owner tokens power a management link to extend a note or delete it with a 10-second undo.',
      'Burn after reading, single-viewer locking, a traceable watermark, per-IP rate limits and lockouts on wrong passphrases.',
    ],
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Upstash Redis', 'Vercel Blob', 'Sentry'],
    image: 'assets/levpriv/levpriv.png',
    imageAlt: 'LevPriv home screen: a dark note editor with attachment buttons and expiry options',
    links: [
      { label: 'Live site', href: 'https://lev-priv.vercel.app' },
      { label: 'Source code', href: 'https://github.com/mrrjanai/LevPriv' },
      {
        label: 'Case study',
        href: 'https://github.com/mrrjanai/LevPriv/blob/main/CASE_STUDY.md',
        note: 'How a "platform CORS bug" turned out to be a one-word config mismatch',
      },
    ],
  },
]
