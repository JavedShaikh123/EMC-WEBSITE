import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Play, Calendar, Clock, Headphones, ArrowRight, Mic } from 'lucide-react';

const PodcastPage = () => {
  const episodes = [
    {
      id: 1,
      title: "The Future of Executive Leadership in 2025",
      description: "Join Mohammed Javed Shaikh as he explores emerging leadership trends and strategies for navigating the evolving business landscape.",
      duration: "45 min",
      date: "March 15, 2024",
      category: "Leadership",
      guest: "Dr. Sarah Chen, Leadership Expert",
      image: "https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85",
      featured: true
    },
    {
      id: 2,
      title: "Digital Transformation Success Stories",
      description: "Real-world case studies and lessons learned from successful digital transformation initiatives across multiple industries.",
      duration: "38 min",
      date: "March 8, 2024",
      category: "Digital Transformation",
      guest: "Michael Rodriguez, CTO",
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85",
      featured: true
    },
    {
      id: 3,
      title: "Healthcare Innovation and Operational Excellence",
      description: "Insights into healthcare transformation, patient experience optimization, and operational improvements in modern healthcare systems.",
      duration: "42 min",
      date: "March 1, 2024",
      category: "Healthcare",
      guest: "Dr. Jennifer Park, Healthcare Administrator",
      image: "https://images.unsplash.com/photo-1562935345-5080389daccd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85",
      featured: false
    },
    {
      id: 4,
      title: "Building Resilient Supply Chains",
      description: "Expert discussion on supply chain optimization, risk management, and building resilience in uncertain times.",
      duration: "35 min",
      date: "February 22, 2024",
      category: "Operations",
      guest: "David Thompson, Supply Chain Director",
      image: "https://images.pexels.com/photos/5990271/pexels-photo-5990271.jpeg",
      featured: false
    },
    {
      id: 5,
      title: "The Art of Change Management",
      description: "Strategies for leading successful organizational change, overcoming resistance, and building change readiness.",
      duration: "40 min",
      date: "February 15, 2024",
      category: "Change Management",
      guest: "Lisa Wang, Change Consultant",
      image: "https://images.pexels.com/photos/8353821/pexels-photo-8353821.jpeg",
      featured: false
    },
    {
      id: 6,
      title: "Financial Services Innovation Trends",
      description: "Exploring fintech innovations, digital banking trends, and regulatory challenges in the financial services sector.",
      duration: "43 min",
      date: "February 8, 2024",
      category: "Financial Services",
      guest: "Robert Kim, Banking Executive",
      image: "https://images.pexels.com/photos/34086091/pexels-photo-34086091.jpeg",
      featured: false
    }
  ];

  const categories = ["All", "Leadership", "Digital Transformation", "Healthcare", "Operations", "Change Management", "Financial Services"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredEpisodes = selectedCategory === "All" 
    ? episodes 
    : episodes.filter(episode => episode.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mic className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                The Executive Edge
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Listen to thought leadership discussions featuring industry leaders, sharing insights 
              on emerging trends, strategies, and talent management solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
              >
                <Play className="mr-2 h-5 w-5" />
                Play Latest Episode
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full"
              >
                <Headphones className="mr-2 h-5 w-5" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-gray-600">Episodes</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  25K+
                </div>
                <div className="text-gray-600">Monthly Listeners</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  4.8★
                </div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episodes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Episodes
              </h2>
              <p className="text-lg text-gray-600">
                Latest insights from industry leaders
              </p>
            </div>
            
            <div className="space-y-8">
              {filteredEpisodes.filter(episode => episode.featured).map((episode) => (
                <Card key={episode.id} className="border-0 shadow-xl rounded-3xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <img 
                        src={episode.image} 
                        alt={episode.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-gray-800">
                          {episode.category}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                          <Play className="h-8 w-8 text-purple-600 ml-1" />
                        </button>
                      </div>
                    </div>
                    <CardContent className="p-8 lg:p-12">
                      <h3 className="font-bold text-2xl mb-4 text-gray-900">
                        {episode.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {episode.description}
                      </p>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {episode.duration}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {episode.date}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <p className="text-gray-700">
                          <span className="font-semibold">Guest: </span>
                          {episode.guest}
                        </p>
                      </div>
                      
                      <Button 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Listen Now
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Episodes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                All Episodes
              </h2>
              <p className="text-lg text-gray-600">
                Browse our complete podcast library
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredEpisodes.filter(episode => !episode.featured).map((episode) => (
                <Card key={episode.id} className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
                  <div className="relative h-48">
                    <img 
                      src={episode.image} 
                      alt={episode.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-800 text-xs">
                        {episode.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <Play className="h-6 w-6 text-purple-600 ml-0.5" />
                      </button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3 text-gray-900 line-clamp-2">
                      {episode.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                      {episode.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {episode.duration}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {episode.date}
                      </div>
                    </div>
                    <Button 
                      size="sm"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full"
                    >
                      <Play className="mr-2 h-3 w-3" />
                      Listen
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Never Miss an Episode
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to 'The Executive Edge' and stay updated with the latest insights and strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
              >
                <Headphones className="mr-2 h-5 w-5" />
                Subscribe Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full"
              >
                View All Platforms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodcastPage;