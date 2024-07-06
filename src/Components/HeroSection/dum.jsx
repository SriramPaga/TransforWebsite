import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import HeroSection from './HeroSection';
export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-RoseWhite ">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        
        <HeroSection />
       
      </div>
    </div>
  );
}
