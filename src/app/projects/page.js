import React from 'react'
import Image from 'next/image'
import { BookOpen, Leaf, Fish, Users, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Our Projects | MAS Wildlife Conservation Foundation',
  description: 'Discover our conservation projects including education, wildlife conservation, marine conservation, and cultural preservation in Malawi.',
}

export default function Projects() {
  const projects = [
    {
      icon: <BookOpen className="w-16 h-16" />,
      title: "Education & Outreach",
      description: "We have various education programs covering various conservation contents, which empower people to play an important role in society to protect our environment and nature.",
      details: [
        "School outreach programs targeting young students",
        "Community workshops on wildlife conservation",
        "Environmental education materials and resources",
        "Conservation awareness campaigns across Malawi",
        "Training programs for local educators",
        "Youth engagement initiatives"
      ],
      color: "from-green-500 to-emerald-600",
      bg: "from-green-50 to-emerald-50",
      image: "/images/projects/education-outreach.jpg"
    },
    {
      icon: <Leaf className="w-16 h-16" />,
      title: "Wildlife Conservation",
      description: "We dedicate to the protection of wildlife through several conservation programs, involving research and education, for the well-being of wild animals.",
      details: [
        "Species protection and monitoring initiatives",
        "Habitat restoration and preservation projects",
        "Anti-poaching programs and enforcement support",
        "Wildlife research and population surveys",
        "Endangered species recovery programs",
        "Human-wildlife conflict mitigation strategies"
      ],
      color: "from-green-500 to-emerald-600",
      bg: "from-green-50 to-emerald-50",
      image: "/images/projects/wildlife-conservation.jpg"
    },
    {
      icon: <Fish className="w-16 h-16" />,
      title: "Marine Conservation",
      description: "We work on offer and support many qualified programs and campaigns on marine conservation, with the aim to conserve and preserve the sustainability of Lake Malawi.",
      details: [
        "Lake Malawi ecosystem protection and monitoring",
        "Sustainable fishing practices promotion",
        "Water quality assessment and improvement",
        "Marine biodiversity research and documentation",
        "Coastal habitat restoration initiatives",
        "Community-based marine conservation programs"
      ],
      color: "from-green-500 to-emerald-600",
      bg: "from-green-50 to-emerald-50",
      image: "/images/projects/marine-conservation.jpg"
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: "People & Culture Conservation",
      description: "We work to safeguard our cultural heritage for future generations through technology, community engagement, language preservation, and celebrating traditional practices.",
      details: [
        "Cultural heritage documentation and preservation",
        "Traditional ecological knowledge conservation",
        "Community engagement and empowerment programs",
        "Indigenous language preservation initiatives",
        "Cultural landscape and site protection",
        "Intangible heritage safeguarding projects"
      ],
      color: "from-green-500 to-emerald-600",
      bg: "from-green-50 to-emerald-50",
      image: "/images/projects/culture-conservation.jpg"
    }
  ]

  return (
    <div className="pt-20">
      
      <section className="relative bg-gradient-to-br from-teal-900 via-green-800 to-emerald-900 text-white py-32 overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects-hero.jpg"
            alt="Our Projects"
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
              <Sparkles className="w-16 h-16 mx-auto relative text-emerald-300 animate-pulse-slow" />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-white via-emerald-100 to-teal-200 bg-clip-text text-transparent">
              Our Projects
            </span>
          </h1>
          
          {/* Decorative Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-8 animate-expand"></div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            Empowering communities through education and conservation initiatives across Malawi
          </p>
          
          {/* Project Count Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium">
              <BookOpen className="w-4 h-4 inline mr-2" />
              Education & Outreach
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium">
              <Leaf className="w-4 h-4 inline mr-2" />
              Wildlife Conservation
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium">
              <Fish className="w-4 h-4 inline mr-2" />
              Marine Conservation
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium">
              <Users className="w-4 h-4 inline mr-2" />
              Cultural Preservation
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="text-6xl text-green-200 absolute -top-4 -left-4">"</div>
            <p className="text-2xl font-semibold text-gray-800 italic relative z-10 animate-fade-in">
              We imagine a society that loves and respects wildlife
            </p>
            <div className="text-6xl text-green-200 absolute -bottom-8 -right-4">"</div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${project.bg} rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`grid ${index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-0`}>
                  {/* Image Section */}
                  <div className={`relative h-96 md:h-auto ${index % 2 === 1 ? 'md:order-2' : ''} overflow-hidden group`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-30 transition-opacity`}></div>
                  </div>

                  {/* Content Section */}
                  <div className={`p-10 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className={`w-24 h-24 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg hover:scale-110 transition-transform`}>
                      {project.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      {project.description}
                    </p>
                    
                    <div className="bg-white bg-opacity-70 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Key Activities</h3>
                      <ul className="space-y-3">
                        {project.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-3 animate-slide-in-right" style={{animationDelay: `${idx * 0.1}s`}}>
                            <div className={`w-2 h-2 bg-gradient-to-br ${project.color} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white relative overflow-hidden">
        {/* CTA transparent overlay image (upload at /public/images/cta-overlay.png) */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/cta-lasting impact.jpg"
            alt="Impact statement background texture"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">Making a Lasting Impact</h2>
          <p className="text-xl text-gray-200 leading-relaxed animate-fade-in">
            Through our comprehensive projects, we work hand-in-hand with communities to create sustainable conservation solutions that benefit both wildlife and people across Malawi.
          </p>
        </div>
      </section>
    </div>
  )
}
