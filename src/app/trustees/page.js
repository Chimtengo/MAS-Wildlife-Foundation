import React from 'react'
import Image from 'next/image'
import { Users, Award, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Board of Trustees | MAS Wildlife Conservation Foundation',
  description: 'Meet our dedicated board of trustees leading wildlife conservation efforts in Malawi.',
}

export default function Trustees() {
  const trustees = [
    {
      name: "Jorge Promise Thawe",
      position: "Founder & Board Member",
      description: "Founded MAS Wildlife Conservation Foundation in 2001 with a vision to protect Malawian wildlife and culture through education.",
      image: "/images/trustees/jorge-promise-thawe.jpg"
    },
    {
      name: "Andy Denis Chigalu",
      position: "Board Member",
      description: "Dedicated to advancing conservation initiatives and community engagement programs.",
      image: "/images/trustees/andy-denis-chigalu.jpg"
    },
    {
      name: "Kondwani Hilary Chitosi",
      position: "Board Member",
      description: "Committed to wildlife protection and sustainable conservation practices.",
      image: "/images/trustees/kondwani-hilary-chitosi.jpg"
    },
    {
      name: "Talandila Samson Kasapila",
      position: "Board Member",
      description: "Passionate about environmental education and youth empowerment.",
      image: "/images/trustees/talandila-samson-kasapila.jpg"
    },
    {
      name: "Greshan Tiuze Lungu",
      position: "Board Member",
      description: "Focused on marine conservation and Lake Malawi ecosystem protection.",
      image: "/images/trustees/greshan-tiuze-lungu.jpg"
    },
    {
      name: "Rabson Woodwell",
      position: "Board Member",
      description: "Expert in community-based conservation and cultural heritage preservation.",
      image: "/images/trustees/rabson-woodwell.jpg"
    },
    {
      name: "Mcleod J. Gwirima",
      position: "Board Member",
      description: "Dedicated to research, monitoring, and wildlife management strategies.",
      image: "/images/trustees/mcleod-j-gwirima.jpeg"
    }
  ]

  return (
    <div className="pt-20">
      {/* UPDATED Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white py-32 overflow-hidden">
        {/* Background Image - Optional */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/trustees-hero.jpg"
            alt="Board of Trustees"
            fill
            className="object-cover opacity-20"
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
              <div className="absolute inset-0 bg-blue-400 blur-2xl opacity-30 animate-pulse-slow"></div>
              <Users className="w-16 h-16 mx-auto relative text-blue-300 animate-bounce-slow" />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Board of Trustees
            </span>
          </h1>
          
          {/* Decorative Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8 animate-expand"></div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            Dedicated leaders committed to wildlife conservation and community empowerment
          </p>
          
          {/* Stats */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium">
              <Award className="w-4 h-4 inline mr-2" />
              7 Board Members
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4 inline mr-2" />
              United Vision
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Leadership</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our Board of Trustees brings together diverse expertise and a shared passion for conservation. Together, they guide our mission to protect Malawian wildlife, culture, and natural heritage for future generations.
          </p>
        </div>
      </section>

      {/* Trustees Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustees.map((trustee, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-green-600 to-emerald-700 overflow-hidden">
                  <Image
                    src={trustee.image}
                    alt={trustee.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{trustee.name}</h3>
                    <p className="text-green-200 text-sm">{trustee.position}</p>
                    <p className="mt-3 text-sm text-white/90 leading-relaxed">
                      {trustee.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="w-12 h-12 mx-auto mb-4 text-green-600 animate-pulse-slow" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Organizational Structure</h2>
            <p className="text-gray-600">Our governance and operational framework</p>
          </div>

          <div className="space-y-6">
            {/* Board of Trustees */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-6 rounded-xl text-center shadow-lg animate-slide-in-left">
              <h3 className="text-2xl font-bold">Board of Trustees</h3>
              <p className="text-sm text-green-100 mt-2">7 Members</p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-1 h-12 bg-green-600 animate-grow-vertical"></div>
            </div>

            {/* Executive Director */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-6 rounded-xl text-center shadow-lg max-w-md mx-auto animate-slide-in-right">
              <h3 className="text-xl font-bold">Executive Director</h3>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-1 h-12 bg-blue-600 animate-grow-vertical"></div>
            </div>

            {/* Three Officers */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-6 rounded-xl text-center shadow-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
                <h3 className="text-lg font-bold">Programs Officer</h3>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-6 rounded-xl text-center shadow-lg animate-fade-in" style={{animationDelay: '0.4s'}}>
                <h3 className="text-lg font-bold">Administrative Officer</h3>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-6 rounded-xl text-center shadow-lg animate-fade-in" style={{animationDelay: '0.6s'}}>
                <h3 className="text-lg font-bold">Accounts Officer</h3>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-1 h-12 bg-purple-600 animate-grow-vertical"></div>
            </div>

            {/* Project Coordinators */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white p-6 rounded-xl text-center shadow-lg animate-fade-in" style={{animationDelay: '0.8s'}}>
                <h3 className="text-lg font-bold">Project Coordinator</h3>
                <p className="text-sm text-teal-100 mt-2">Wildlife Conservation</p>
              </div>
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white p-6 rounded-xl text-center shadow-lg animate-fade-in" style={{animationDelay: '1s'}}>
                <h3 className="text-lg font-bold">Project Coordinator</h3>
                <p className="text-sm text-teal-100 mt-2">Marine Conservation</p>
              </div>
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white p-6 rounded-xl text-center shadow-lg animate-fade-in" style={{animationDelay: '1.2s'}}>
                <h3 className="text-lg font-bold">Project Coordinator</h3>
                <p className="text-sm text-teal-100 mt-2">People & Culture Conservation</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-1 h-12 bg-teal-600 animate-grow-vertical"></div>
            </div>

            {/* Field Workers */}
            <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white p-6 rounded-xl text-center shadow-lg animate-slide-in-bottom">
              <h3 className="text-xl font-bold">Field Workers</h3>
              <p className="text-sm text-gray-300 mt-2">Implementation Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white relative overflow-hidden">
        {/* CTA transparent overlay image (upload at /public/images/cta-overlay.png) */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/cta-overlay.jpg"
            alt="CTA background texture"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-200 mb-8">
            Interested in working with our team or supporting our leadership initiatives?
          </p>
          <a href="/contact" className="px-8 py-4 bg-white text-green-900 rounded-full font-semibold hover:bg-gray-100 transition-all inline-block hover:scale-105 transform">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
