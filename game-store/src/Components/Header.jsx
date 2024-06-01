import { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navs from './Navs';

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from '@headlessui/react';

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';


const products = [
  { name: 'Games', description: 'Explore a wide selection of the latest and classic video games across all genres and platforms.', href: '/games', icon: ChartPieIcon },
  { name: 'Play Stations', description: 'Discover the newest PlayStation consoles, games, and accessories for an immersive gaming experience.', href: '/ps', icon: CursorArrowRaysIcon },
  { name: 'Xbox', description: 'Shop the latest Xbox consoles, games, and accessories to enhance your gaming adventures.', href: '/xbox', icon: FingerPrintIcon },
  { name: 'Nintendo', description: 'Find the latest Nintendo consoles, games, and accessories for endless family-friendly fun.', href: '/nintendo', icon: SquaresPlusIcon },
  { name: 'Consoles & Accessories', description: 'Get the best deals on gaming consoles and essential accessories for every gamer.', href: '/consolesandaccessories', icon: ArrowPathIcon },
  { name: 'Coins & Gifts', description: 'Purchase in-game currency and exclusive gaming gifts for your favorite titles.', href: '/coins', icon: SquaresPlusIcon },
  { name: 'Services', description: 'Access a range of gaming services, including repairs, upgrades, and customizations for your devices.', href: '/services', icon: SquaresPlusIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">GameStore</span>
            <div className="text-center">
              <p className="text-3xl font-bold flex text-center justify-center items-center"><span className='text-sky-600'>G</span>
                <img 
									src="https://gado.w3spaces.com/Img/logo.png"
									className="w-14 h-10 object-cover p-0 m-0"
									alt="NA">
								</img><span className='text-sky-600'>e</span><span className="text-pink-600">Store</span>
              </p>
            </div>
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
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex outline-none items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Explore
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </PopoverButton>

            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center rounded-lg p-1 text-sm hover:bg-gray-50"
                    >
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <NavLink to={item.href} className='block font-semibold text-gray-900'>{item.name}</NavLink>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-1 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>

          <form class="d-flex">
            <input class="form-control me-2 h-7" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn h-7 transition duration-500 outline outline-1 outline-sky-300 text-gray-900 hover:bg-sky-600 hover:text-white active:bg-sky-700 flex justify-center items-center" type="submit">Search</button>
          </form>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink to={'/signin'} className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">GameStore</span>
              <div>
                <p className="flex text-center justify-center items-center">
                  <img src="https://gado.w3spaces.com/Img/logo.png" className="w-14 h-10 object-cover p-0 m-0" alt="NA"></img>
                </p>
            </div>
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
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Products
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <NavLink
                  to={"/signin"}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </NavLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      <Navs></Navs>
    </header>
  )
}
