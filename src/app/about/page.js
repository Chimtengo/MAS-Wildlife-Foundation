import React from 'react'
import Image from 'next/image'
import { Heart, Users, Leaf, Target, Award, Sparkles } from 'lucide-react'
import FocusAreasCarousel from '@/components/FocusAreasCarousel'

export const metadata = {
  title: 'About Us | MAS Wildlife Conservation Foundation',
  description: 'Learn about our vision, mission, values, and commitment to wildlife conservation in Malawi. Founded in 2001 by Jorge Promise Thawe.',
}

export default function About() {
  const values = [
    { icon: <Heart />, title: "Compassion", desc: "for all living beings" },
    { icon: <Award />, title: "Integrity", desc: "in our actions and decisions" },
    { icon: <Users />, title: "Collaboration", desc: "with stakeholders" },
    { icon: <Target />, title: "Accountability", desc: "for our impact" },
    { icon: <Leaf />, title: "Passion", desc: "for conservation" }
  ]

  const focusAreas = [
    "Habitat preservation and restoration",
    "Anti-poaching and wildlife trafficking prevention",
    "Human-wildlife conflict mitigation",
    "Climate change and biodiversity research",
    "Community-based conservation initiatives"
  ]

  const objectives = [
    "Conserve nature and wildlife through related education initiatives",
    "Conserve the threatened or endangered species in Malawi",
    "Conserve people and culture",
    "Cooperate and collaborate with other NGOs and agencies for the protection and wellbeing of wildlife"
  ]

  return (
    <div className="pt-20">
      {/* UPDATED Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero.jpg"
            alt="About MAS Wildlife"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            priority
          />
        </div>
        
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Icon with glow effect */}
          <div className="inline-block mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 blur-2xl opacity-30 animate-pulse-slow"></div>
              <Sparkles className="w-16 h-16 mx-auto relative text-green-300 animate-pulse-slow" />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-white via-green-100 to-emerald-200 bg-clip-text text-transparent">
              About Us
            </span>
          </h1>
          
          {/* Decorative Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-8 animate-expand"></div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            A non-profit organization registered in the Republic of Malawi, educating young people and communities about the importance of wildlife and their relationship to the world we live in
          </p>
          
          {/* Badge */}
          <div className="mt-8 inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Award className="w-4 h-4 mr-2" />
            Registered Since 2024
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg relative overflow-hidden group hover:shadow-2xl transition-all animate-slide-in-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 relative z-10">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed relative z-10">
                We imagine a society that loves and respects animals by showing compassion to the way animals live. We work to improve quality of life of wild animals by improving their living conditions as well as striving to keep wild animals free in their natural homes through various projects.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg relative overflow-hidden group hover:shadow-2xl transition-all animate-slide-in-right">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 relative z-10">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed relative z-10">
                MAS Wildlife Conservation Foundation is a non-profit organization dedicated to the protection of Malawian culture, nature and wildlife through education and outreach programs.
              </p>
            </div>
          </div>

          {/* Inspiration */}
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-16 border-l-4 border-green-600 hover:shadow-xl transition-shadow animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Inspiration</h2>
            <p className="text-gray-700 leading-relaxed">
              We motivate people and their communities to recognise that animals are living beings that love, feel and deserve a happy life. When young people and their communities can relate themselves to wildlife, they acquire a better understanding of animals' needs, growing up to be responsible citizens.
            </p>
          </div>

          {/* Objectives */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up">Our Objectives</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {objectives.map((objective, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl hover:bg-green-50 transition-colors animate-slide-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fade-in-up">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all text-center group hover:-translate-y-2 animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors group-hover:scale-110 transform duration-300">
                  {value.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 text-white relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/focus-background.jpg"
            alt="Focus Areas"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in-up">Our Focus Areas</h2>
          <FocusAreasCarousel areas={focusAreas} />
        </div>
      </section>

      {/* Story with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fade-in-up">Our Story</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[32rem] md:h-[38rem] rounded-2xl overflow-hidden shadow-2xl animate-slide-in-left">
              <Image
                src="/images/founder-story.jpg"
                alt="Our Story - Jorge Promise Thawe"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-gray-50 to-green-50 p-8 rounded-2xl shadow-lg">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  MAS Wildlife Conservation Foundation was founded by <span className="font-bold text-green-600">Jorge Promise Thawe</span> in the year <span className="font-bold">2021</span> and officially registered in <span className="font-bold">2024</span>, driven by a shared passion for people, culture and wildlife conservation.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our team comprises dedicated experts, researchers, and community leaders working together to protect the natural world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aim Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up">Our Aim</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              MAS Wildlife Conservation Foundation aims to spread education and encourage learning in the young generation and their communities through various techniques and media channels in Malawi.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              We hope to be a good influence to the community at large and collaborate with various organizations to better the future of animals in the wild and in captivity.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
