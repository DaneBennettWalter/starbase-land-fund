import Link from 'next/link'

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto max-w-4xl px-6 py-16">
        <Link 
          href="/" 
          className="text-sm text-gray-600 hover:text-gray-900 mb-8 inline-block"
        >
          ← Back to Home
        </Link>
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    </div>
  )
}
