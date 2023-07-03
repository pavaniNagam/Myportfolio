import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Service from './components/services/Service';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import Testimonial from './components/testimonial/Testimonial';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Service />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonial />
        <Blog />
      </main>
    </>
  );
}

export default App;
