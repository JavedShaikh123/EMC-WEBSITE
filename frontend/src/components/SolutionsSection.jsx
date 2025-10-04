import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, Users, TrendingUp, Target, Briefcase } from 'lucide-react';

const SolutionsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Strategy');
  
  const categories = [
    { name: 'Strategy', icon: Target },
    { name: 'Transformation', icon: TrendingUp },
    { name: 'Leadership', icon: Users },
    { name: 'Operations', icon: Briefcase }
  ];
  
  const solutions = {
    'Strategy': [
      {
        title: 'Strategic Planning & Execution',
        description: 'Drive strategic impact and operational excellence with comprehensive planning frameworks designed for sustainable growth.',
        image: 'https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85',
        link: '/solutions/strategic-planning'
      },
      {
        title: 'Market Analysis & Competitive Intelligence',
        description: 'Improve market positioning, streamline competitive analysis, and fine-tune strategies to meet current and future market demands.',
        image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85',
        link: '/solutions/market-analysis'
      },
      {
        title: 'Business Model Innovation',
        description: 'Transform traditional business models with innovative approaches that create sustainable competitive advantages.',
        image: 'https://images.unsplash.com/photo-1562935345-5080389daccd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85',
        link: '/solutions/business-innovation'
      }
    ],
    'Transformation': [
      {
        title: 'Digital Transformation',
        description: 'Navigate the digital landscape with comprehensive transformation strategies that align technology with business objectives.',
        image: 'https://images.pexels.com/photos/5990271/pexels-photo-5990271.jpeg',
        link: '/solutions/digital-transformation'
      },
      {
        title: 'Organizational Change Management',
        description: 'Make your change vision a reality with proven methodologies and effective approaches to build resilient organizations.',
        image: 'https://images.pexels.com/photos/8353821/pexels-photo-8353821.jpeg',
        link: '/solutions/change-management'
      },
      {
        title: 'Process Optimization',
        description: 'Streamline operations and boost efficiency through data-driven process improvements and automation strategies.',
        image: 'https://images.pexels.com/photos/34086091/pexels-photo-34086091.jpeg',
        link: '/solutions/process-optimization'
      }
    ],
    'Leadership': [
      {
        title: 'Executive Coaching & Development',
        description: 'Develop world-class leaders with personalized coaching programs designed to maximize executive potential.',
        image: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBtYW5hZ2VtZW50JTIwY29uc3VsdGluZ3xlbnwwfHx8fDE3NTk1NjMyODd8MA&ixlib=rb-4.1.0&q=85',
        link: '/solutions/executive-coaching'
      },
      {
        title: 'Leadership Assessment & Succession Planning',
        description: 'Identify and develop future leaders with comprehensive assessment tools and strategic succession frameworks.',
        image: 'https://images.unsplash.com/photo-1750768145390-f0ad18d3e65b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxleGVjdXRpdmUlMjBtYW5hZ2VtZW50JTIwY29uc3VsdGluZ3xlbnwwfHx8fDE3NTk1NjMyODd8MA&ixlib=rb-4.1.0&q=85',
        link: '/solutions/leadership-assessment'
      },
      {
        title: 'Team Effectiveness & Culture',
        description: 'Build high-performing teams and foster organizational culture that drives engagement and results.',
        image: 'https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85',
        link: '/solutions/team-effectiveness'
      }
    ],
    'Operations': [
      {
        title: 'Operational Excellence',
        description: 'Achieve superior operational performance through lean methodologies and continuous improvement frameworks.',
        image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85',
        link: '/solutions/operational-excellence'
      },
      {
        title: 'Supply Chain Optimization',
        description: 'Optimize your supply chain for efficiency, resilience, and cost-effectiveness in today\'s dynamic market.',
        image: 'https://images.unsplash.com/photo-1562935345-5080389daccd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85',
        link: '/solutions/supply-chain'
      },
      {
        title: 'Performance Management',
        description: 'Implement robust performance management systems that drive accountability and deliver breakthrough results.',
        image: 'https://images.pexels.com/photos/5990271/pexels-photo-5990271.jpeg',
        link: '/solutions/performance-management'
      }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find your management consulting solution
            </h2>
            <p className="text-lg text-gray-600">
              What do you need help with?
            </p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.name
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
          
          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions[activeCategory].map((solution, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="group/btn border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    See solution
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Unique business challenges call for custom solutions.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              View all solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;