import { ArrowRight, Car, Clock, CreditCard, ShieldCheck, PenTool as Tool, Truck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From sales to service, we provide comprehensive automotive solutions to meet all your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Car className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Quotes</h3>
              <p className="text-gray-600 mb-4">
              Get real-time, competitive quotes from verified dealers. Our platform ensures quick and accurate pricing, helping you make informed decisions without delays.
              </p>
              <a href="#new-sales" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2"> Smart Dealer Matching</h3>
              <p className="text-gray-600 mb-4">
              We connect you with the right dealers based on your buying and selling preferences. We automatically match you with trusted dealers looking for vehicles like yours.
              </p>
              <a href="#pre-owned" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Tool className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2"> Hassle-Free Negotiation</h3>
              <p className="text-gray-600 mb-4">
              Simplify your deals with direct dealer-to-dealer communication. We make it easy to discuss pricing, finalize offers, and secure the best deals, all in one place.
              </p>
              <a href="#service" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <CreditCard className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Best Financing Options</h3>
              <p className="text-gray-600 mb-4">
                Our network of trusted dealers offers flexible and competitive financing solutions tailored to your needs and making sure that you pay less for more luxury and comfort.
              </p>
              <a href="#financing" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* New Vehicle Sales */}
      <section id="new-sales" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="New Vehicle Showroom" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Dealer-to-Dealer Instant Quotes</h2>
              <p className="text-gray-600 mb-6">
                At PremiumAuto, we offer streamline dealer-to-dealer transactions by providing **instant, 
                competitive quotes from trusted dealerships. Save time and maximize profits with real-time 
                pricing tailored to your needs.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Wide selection of latest models from top brands</span>
                </li>
                <li className="flex items-start">
      <span className="text-blue-600 mr-2">✓</span>
      <span>Verified dealer network for secure transactions</span>
    </li>
    <li className="flex items-start">
      <span className="text-blue-600 mr-2">✓</span>
      <span>Effortless dealer-to-dealer matching</span>
    </li>   <li className="flex items-start">
      <span className="text-blue-600 mr-2">✓</span>
      <span>Competitive pricing with no hidden fees</span>
    </li>
              </ul>
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 inline-block"
              >
                Book An Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certified Pre-Owned */}
      <section id="pre-owned" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12 flex-row-reverse">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Certified Pre-Owned Vehicles" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Dealer Matching</h2>
  <p className="text-gray-600 mb-6">
    Our Smart Dealer Matching service connects you with the right dealers based on your specific buying and selling preferences. Save time and enhance your business by ensuring you’re paired with the most suitable partners for your needs.
  </p>
  <ul className="space-y-3 mb-6">
    <li className="flex items-start">
      <span className="text-blue-600 mr-2">✓</span>
      <span>Automated matching based on vehicle preferences</span>
    </li>
    <li className="flex items-start">
      <span className="text-blue-600 mr-2">✓</span>
      <span>Customized recommendations tailored to your needs</span>
    </li>
    <li className="flex items-start">
      <span className="text-blue-600 mr-2">✓</span>
      <span>Access to a network of trusted, verified dealers</span>
    </li>
    <li className="flex items-start">
      <span className="text-blue-600 mr-2">✓</span>
      <span>Maximized profitability through smart dealer connections</span>
    </li>
              </ul>
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 inline-block"
              >
                Contact A Dealer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service & Maintenance */}
      <section id="service" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Service Center" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2">
            
</div>
<div className="lg:w-1/2">
  <h2 className="text-3xl font-bold text-gray-900 mb-4">Hassle-Free Negotiation</h2>
  <p className="text-gray-600 mb-6">
    With Hassle-Free Negotiation, we make it easy for dealers to directly engage with each other, ensuring quick and transparent discussions. No more back-and-forth delays—our platform empowers you to negotiate smarter and finalize deals faster.
  </p>
  <ul className="space-y-3 mb-6">
    <li className="flex items-start">
      <span className="text-blue-600 mr-2">✓</span>
      <span>Direct communication between dealers for quick negotiations</span>
    </li>
    <li className="flex items-start">
      <span className="text-blue-600 mr-2">✓</span>
      <span>Real-time updates and notifications on deal progress</span>
    </li>
    <li className="flex items-start">
      <span className="text-blue-600 mr-2">✓</span>
      <span>Seamless document sharing and offer exchange</span>
    </li>
    <li className="flex items-start">
      <span className="text-blue-600 mr-2">✓</span>
      <span>Negotiation tools to track offers and counteroffers</span>
    </li>
              </ul>
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 inline-block"
              >
                Compare Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section id="financing" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12 flex-row-reverse">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Financing Consultation" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Financing Options</h2>
              <p className="text-gray-600 mb-6">
                Our finance experts work with multiple lenders to secure competitive rates and flexible terms tailored to your financial situation. We make the financing process simple, transparent, and stress-free.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Competitive interest rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Flexible payment terms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Lease and purchase options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Pre-approval process</span>
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 inline-block"
              >
                Apply for Financing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Additional Services</h2>
            <p className="mt-4 text-xl text-gray-600">We offer a range of additional services to enhance your ownership experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mr-4">
                  <Truck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Vehicle Delivery</h3>
              </div>
              <p className="text-gray-600">
                We offer convenient delivery options for your new or serviced vehicle, saving you time and hassle.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Extended Warranty</h3>
              </div>
              <p className="text-gray-600">
                Protect your investment with our comprehensive extended warranty options for additional peace of mind.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Trade-In Appraisal</h3>
              </div>
              <p className="text-gray-600">
                Get a fair and competitive offer for your current vehicle when you're ready to upgrade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Our Services?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today to schedule an appointment or learn more about how we can assist you.
          </p>
          <Link 
            to="/contact" 
            className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-md transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;