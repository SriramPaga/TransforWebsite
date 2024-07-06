import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';
import { NavigationData } from '../../Dummydata/NavigationData';
import EventDropdown from '../EventDropdown';
import RtrLogo from '../../Images/MemberImages/Logos/Rotaract3192Black.png';
// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="">
      <nav
        className="mx-auto flex max-w-full items-center justify-between p-6 lg:px-8 backdrop-blur-md"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-12 w-auto" src={RtrLogo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 items-center">
          {NavigationData.map((navData, index) => {
            return (
              <a
                href={navData.link}
                className="text-sm font-semibold leading-6 text-gray-900 "
              >
                {navData.Name}
              </a>
            );
          })}
          {/* <EventDropdown /> */}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          <button class="bg-darkTangerine  text-white font-bold py-2 px-4 rounded-full">
            <a
              href="/Login"
              className="text-sm font-semibold leading-6 text-gray-900 "
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="http://rotaract3192.org/wp-content/uploads/2023/07/Untitled-design.png"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {NavigationData.map((navData, index) => {
                  return (
                    <a
                      href={navData.link}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 no-underline"
                    >
                      {navData.Name}
                    </a>
                  );
                })}
              </div>
              <div className="py-6">
                <a
                  href="/Login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 no-underline"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
