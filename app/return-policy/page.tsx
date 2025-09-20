import COMPANY from '@/config/company.json'
import POLICY_DATA from '@/config/returnPolicy.json'
import ArtisticImage1 from '@/public/artistic/artistic-1.png'
import Image from 'next/image'

const ReturnPolicyPage = () => {
  return (
    <main className="bg-brand-900 text-white">
      {/* Hero Section */}
      <section className="relative h-[10vh] min-h-[350px] md:h-[40vh] flex items-center justify-center">
        <Image
          src={ArtisticImage1}
          alt="Abstract branding image for Blckorack"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="relative text-center px-4 z-10">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold uppercase tracking-widest mb-4 animate-fade-in-down">
            {POLICY_DATA.hero.title}
          </h1>
        </div>
      </section>
      {/* Policy Details Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto px-6 md:px-10 max-w-3xl">
          <p className="text-center text-gray-500 mb-10 italic">
            Last updated: {POLICY_DATA.policy.lastUpdated}
          </p>
          <p className="text-lg text-gray-300 mb-16 text-center leading-relaxed">
            {POLICY_DATA.policy.introduction}
          </p>
          <div className="space-y-10">
            {POLICY_DATA.policy.sections.map((section) => (
              <div key={section.title} className="border-t border-gray-800 pt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-100 uppercase tracking-wider">
                  {section.title}
                </h2>
                <p className="text-gray-400 font-light leading-loose">{section.content}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center text-gray-500 border-t border-gray-800 pt-8">
            <p>
              For any questions regarding our return policy, please don&apos;t hesitate to reach
              out.
            </p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-white hover:underline transition-colors duration-300"
            >
              {COMPANY.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ReturnPolicyPage
