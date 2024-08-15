'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.scss';
import { usePathname } from 'next/navigation';
import Button from '@/components/Button/Button';

export default function Nav() {
	const pathname = usePathname();
	const [navVisible, setNavVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  let timeoutId: NodeJS.Timeout;

  useEffect(() => {
    setNavVisible(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsScrolling(false), 150); // Adjust the timeout as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

	const navItems = [
		{
			label: 'Home',
			url: '/',
		},
		{
			label: 'About',
			url: 'about',
		},
		{
			label: 'Services',
			url: 'services',
		},
		{
			label: 'Portfolio',
			url: 'portfolio',
		},
		// {
		// 	label: 'Download my CV',
		// 	url: '/cv',
		// },
	];

	const navVisibleClass = navVisible ? styles.navVisible : '';

  const scrollingClass = !navVisible && isScrolling  ? styles.onScroll : '';


	const handleNavToggle = () => {
		setNavVisible(!navVisible);
	};


	return (
    <>
      {/* <div className={`${styles.navWrap} ${navVisibleClass} ${scrollingClass}`}> */}
      <div className={styles.navWrap}>

        <nav className={styles.nav}>
          {/* <ul className={styles.navLinks}>
            {navItems.map(item => {
              const isActive = pathname === item.url;
              return (
                <li key={item.label}>
                  <Link href={item.url} title={item.label} className={isActive ? styles.active : ''}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button url="/contact" label={`Get in touch`} />
           */}

          <Button url={`mailto:neil@roosterdesign.co.uk`} label={`Get in touch`} external />

        </nav>

        {/* <div className={styles.navBar}>
          <Link href='/' title='Homepage'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
              <path d='M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z' />
            </svg>
          </Link>

          <button className={styles.navBarToggle} onClick={handleNavToggle}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <Link href='/contact' title='Get in touch'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
              <path d='M20 9.352c0-4.852-4.75-8.352-10-8.352-5.281 0-10 3.527-10 8.352 0 1.71.615 3.39 1.705 4.695.047 1.527-.85 3.719-1.66 5.312 2.168-.391 5.252-1.258 6.648-2.115 7.698 1.877 13.307-2.842 13.307-7.892zm-14.5 1.381c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25zm4.5 0c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25zm4.5 0c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25zm7.036 1.441c-.161.488-.361.961-.601 1.416 1.677 1.262 2.257 3.226.464 5.365-.021.745-.049 1.049.138 1.865-.892-.307-.979-.392-1.665-.813-2.127.519-4.265.696-6.089-.855-.562.159-1.145.278-1.74.364 1.513 1.877 4.298 2.897 7.577 2.1.914.561 2.933 1.127 4.352 1.385-.53-1.045-1.117-2.479-1.088-3.479 1.755-2.098 1.543-5.436-1.348-7.348z' />
            </svg>
          </Link>

        </div> */}

      </div>

      {navVisible &&
        <div className={styles.navMask} onClick={handleNavToggle}></div>
      }
    </>
	);
}
