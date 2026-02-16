import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Users, Leaf, Fish, BookOpen, Target, Award, ArrowRight } from 'lucide-react'
import VisionImageSlider from '@/components/VisionImageSlider'

export const metadata = {
  title: 'Home | MAS Wildlife Conservation Foundation',
  description: 'Conservation Through Education - We imagine a society that loves and respects wildlife. Protecting Malawian culture, nature and wildlife.',
}

export default function Home() {
  const highlights = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Education & Outreach",
      desc: "Empowering communities through conservation education",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Wildlife Conservation",
      desc: "Protecting endangered species across Malawi",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Fish className="w-8 h-8" />,
      title: "Marine Conservation",
      desc: "Preserving Lake Malawi's unique ecosystem",
      color: "from-teal-500 to-blue-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Culture Conservation",
      desc: "Safeguarding heritage for future generations",
      color: "from-purple-500 to-pink-600"
    }
  ]

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Replace with your hero image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Wildlife Conservation"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-emerald-800/85 to-teal-900/90"></div>
        </div>

        {/* Animated pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 animate-pulse-slow"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-in-down">
            Conservation Through Education
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            "We imagine a society that loves and respects wildlife"
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.5s'}}>
            A non-profit organization dedicated to the protection of Malawian culture, nature and wildlife through education and outreach programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.7s'}}>
            <Link href="/get-involved" className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg">
              Get Involved
            </Link>
            <Link href="/about" className="px-8 py-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-green-600 rounded-full font-semibold transition-all backdrop-blur-sm border border-white border-opacity-30">
              Learn More
            </Link> 
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">Our Mission</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8 animate-expand"></div>
          <p className="text-xl text-gray-700 leading-relaxed animate-fade-in">
            MAS Wildlife Conservation Foundation is a non-profit organization dedicated to the protection of Malawian culture, nature and wildlife through education and outreach programs.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">What We Do</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto animate-expand"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white mb-6 animate-bounce-in`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all hover:scale-105 transform animate-fade-in">
              Explore Our Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section with animated counters */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl font-bold mb-2">2021</div>
              <p className="text-gray-200">Year Founded</p>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="text-5xl font-bold mb-2">4</div>
              <p className="text-gray-200">Major Projects</p>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.5s'}}>
              <div className="text-5xl font-bold mb-2">7</div>
              <p className="text-gray-200">Board Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We imagine a society that loves and respects animals by showing compassion to the way animals live. We work to improve quality of life of wild animals by improving their living conditions as well as striving to keep wild animals free in their natural homes through various projects.
              </p>
              <Link href="/about" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            
            <VisionImageSlider />
          </div>

          {/* Values Cards */}
          <div className="mt-16 bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Values</h3>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.1s'}}>
                <Heart className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Compassion</p>
                  <p className="text-xs text-gray-600">for all living beings</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <Award className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Integrity</p>
                  <p className="text-xs text-gray-600">in our actions</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <Users className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Collaboration</p>
                  <p className="text-xs text-gray-600">with stakeholders</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <Target className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Accountability</p>
                  <p className="text-xs text-gray-600">for our impact</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.5s'}}>
                <Leaf className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Passion</p>
                  <p className="text-xs text-gray-600">for conservation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-emerald-800 text-white relative overflow-hidden">
        {/* CTA transparent overlay image (upload at /public/images/cta-overlay.png) */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/cta-overlay.png"
            alt="Join Our Mission"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Join Our Mission</h2>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in">
            Together, we can make a difference for wildlife and communities across Malawi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Link href="/get-involved" className="px-8 py-4 bg-white text-green-900 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 transform">
              Get Involved Today
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-green-900 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
