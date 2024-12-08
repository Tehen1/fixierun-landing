import Image from 'next/image';
import Link from 'next/link';
import {
  IconBrandDiscord,
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandTelegram,
  IconBrandMedium,
} from '@tabler/icons-react';

const navigation = {
  platform: [
    { name: 'Features', href: '#features' },
    { name: 'Bikes', href: '#bikes' },
    { name: 'Racing', href: '#racing' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
  ],
  community: [
    { name: 'Discord', href: 'https://discord.gg/fixierun' },
    { name: 'Twitter', href: 'https://twitter.com/fixierun' },
    { name: 'Telegram', href: 'https://t.me/fixierun' },
    { name: 'Medium', href: 'https://medium.com/fixierun' },
    { name: 'GitHub', href: 'https://github.com/fixierun' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Whitepaper', href: '/whitepaper' },
    { name: 'Brand Assets', href: '/brand' },
    { name: 'Media Kit', href: '/media' },
    { name: 'Careers', href: '/careers' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  {
    name: 'Discord',
    href: 'https://discord.gg/fixierun',
    icon: IconBrandDiscord,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/fixierun',
    icon: IconBrandTwitter,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/fixierun',
    icon: IconBrandGithub,
  },
  {
    name: 'Telegram',
    href: 'https://t.me/fixierun',
    icon: IconBrandTelegram,
  },
  {
    name: 'Medium',
    href: 'https://medium.com/fixierun',
    icon: IconBrandMedium,
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-500/20">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/bikes/nft/logos/logo.png"
                alt="FixieRun"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-white">FixieRun</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              The next generation of Web3 fitness gaming. Collect, race, and earn with your unique NFT bikes.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Platform
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.platform.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Community
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.community.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-purple-500/20">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} FixieRun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
