import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Users, Globe, Mail, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Get Involved | MAS Wildlife Conservation Foundation',
  description: 'Join our mission to protect wildlife in Malawi. Donate, volunteer, spread awareness, or partner with us for conservation initiatives.',
}

export default function GetInvolved() {
  const ways = [
    {
      title: "Donate",
      subtitle: "Support our conservation efforts",
      description: "Your financial contributions help us protect endangered species, restore habitats, and educate communities about wildlife conservation. Every donation makes a real difference in the lives of animals and the communities we serve.",
      actions: [
        "Fund wildlife protection programs",
        "Support education initiatives",
        "Enable research and monitoring",
        "Provide conservation equipment"
      ],
      color: "from-green-500 to-emerald-600",
      bg: "from-red-50 to-pink-50",
      image: "/images/get-involved/donate.jpg"
    },
    {
      title: "Volunteer",
      subtitle: "Join fieldwork, research, or outreach programs",
      description: "Become part of our dedicated team of volunteers. Whether you're interested in fieldwork, research, education, or community outreach, there's a place for you in our conservation efforts.",
      actions: [
        "Field research and monitoring",
        "Community education programs",
        "Wildlife surveys and data collection",
        "Administrative and office support"
      ],
      color: "from-green-500 to-emerald-600",
      bg: "from-blue-50 to-cyan-50",
      image: "/images/get-involved/volunteer.jpg"
    },
    {
      
      title: "Spread Awareness",
      subtitle: "Share through social media and advocacy",
      description: "Help us amplify our message by sharing our work on social media, organizing awareness events, or becoming an advocate for wildlife conservation in your community.",
      actions: [
        "Share our social media content",
        "Organize local awareness events",
        "Advocate for conservation policies",
        "Educate friends and family"
      ],
      color: "from-green-500 to-emerald-600",
      bg: "from-green-50 to-emerald-50",
      image: "/images/get-involved/awareness.jpg"
    },
    {
      title: "Partner",
      subtitle: "Collaborate for conservation initiatives",
      description: "We welcome partnerships with organizations, businesses, and institutions that share our commitment to conservation. Together, we can create greater impact and sustainable change.",
      actions: [
        "Corporate partnerships and sponsorships",
        "Research collaborations",
        "Educational institution partnerships",
        "NGO and government cooperation"
      ],
      color: "from-green-500 to-emerald-600",
      bg: "from-purple-50 to-indigo-50",
      image: "/images/get-involved/partner.jpg"
    }
  ]

  return (
    <div className="pt-20">
      {/* UPDATED Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/get-involved-hero.jpg"
            alt="Get Involved"
            fill
            className="object-cover opacity-25"
            sizes="100vw"
            priority
          />
        </div>
        
        {/* Animated Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Animated Icon */}
          <div className="inline-block mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 blur-2xl opacity-30 animate-pulse-slow"></div>
              <Heart className="w-16 h-16 mx-auto relative text-emerald-300 animate-pulse-slow" />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-white via-pink-100 to-purple-200 bg-clip-text text-transparent">
              Get Involved
            </span>
          </h1>
          
          {/* Decorative Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-8 animate-expand"></div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            Join us in making a difference for wildlife and communities across Malawi
          </p>
          
          {/* Call to Action Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium">
              <Users className="w-4 h-4 inline mr-2" />
              4 Ways to Help
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium">
              <Globe className="w-4 h-4 inline mr-2" />
              Make an Impact
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 animate-fade-in-up">Be Part of the Solution</h2>
          <p className="text-lg text-gray-700 leading-relaxed animate-fade-in">
            Whether you want to contribute financially, volunteer your time, raise awareness, or partner with us, there are many ways to support our mission of wildlife conservation through education.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {ways.map((way, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all animate-fade-in-up`}
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className={`grid ${index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-0`}>
                  {/* Image Section */}
                  <div className={`relative h-96 md:h-auto ${index % 2 === 1 ? 'md:order-2' : ''} overflow-hidden group`}>
                    <Image
                      src={way.image}
                      alt={way.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 transition-all flex items-end">
                      <div className="text-white p-8 md:p-10">
                        <h2 className="text-4xl font-bold mb-2">{way.title}</h2>
                        <p className="text-xl text-white/90">{way.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`p-10 flex flex-col justify-center bg-gradient-to-br ${way.bg} ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      {way.description}
                    </p>
                    <h3 className="font-bold text-gray-900 mb-4 text-xl">How You Can Help:</h3>
                    <ul className="space-y-3 mb-8">
                      {way.actions.map((action, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start space-x-3 animate-slide-in-right"
                          style={{animationDelay: `${idx * 0.1}s`}}
                        >
                          <div className={`w-2 h-2 bg-gradient-to-br ${way.color} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-700">{action}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href="/contact" 
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${way.color} text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 transform group`}
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white relative overflow-hidden">
        {/* CTA transparent overlay image (upload at /public/images/cta-overlay.png) */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/cta-get-involved.jpg"
            alt="CTA background texture"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Mail className="w-16 h-16 mx-auto mb-6 animate-bounce-slow" />
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in">
            Contact us today to learn more about how you can get involved in our conservation efforts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Link href="/contact" className="px-8 py-4 bg-white text-green-900 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 transform">
              Contact Us
            </Link>
            <a href="mailto:wildlifeconservation2024@gmail.com" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-green-900 transition-all">
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
