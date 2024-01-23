import { useQuery, gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import Image from 'next/future/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import {
  Header,
  Footer,
  Main,
  Container,
  NavigationMenu,
  Hero,
  SEO,
} from '../components';

export default function Component() {
  const { data } = useQuery(Component.query, {
    variables: Component.variables(),
  });

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: true, // Animation will only happen once while scrolling down
    });
  }, []);

  const goToTop = () => {
    console.log('gone to top');
  }

  const { title: siteTitle, description: siteDescription } =
    data?.generalSettings;
  const primaryMenu = data?.headerMenuItems?.nodes ?? [];
  const footerMenu = data?.footerMenuItems?.nodes ?? [];

  const features = [
    {
      name: 'Embracing Heritage',
      description:
        'Our school is a stronghold for the preservation of Nepalese cultural norms and values, instilling in students a profound understanding and appreciation for the rich tapestry of traditions that define our community.',
    },
    {
      name: 'Values at the Heart',
      description:
        'Beyond language, our curriculum integrates essential cultural values, fostering an environment where respect, community, and resilience are not just taught but lived every day.',
    },
    {
      name: 'Ethical Foundation',
      description:
        'At the core of our educational philosophy is the nurturing of ethical principles, empowering students to embody cultural values that contribute positively to their personal growth and the wider society.',
    },
    {
      name: 'Intergenerational Connection',
      description:
        'Our school acts as a bridge between generations, facilitating the transfer of cultural wisdom and values from elders to the younger generation, ensuring the continuity of our communitys cherished norms.',
    },
    {
      name: 'Festivals as Learning',
      description:
        'We integrate traditional festivals and celebrations into our curriculum, providing students with firsthand experiences of cultural practices, rituals, and the joyous spirit that defines Nepalese festivities.',
    },
    {
      name: 'Building Community Bonds',
      description:
        'Our school actively engages with the local Nepalese community, fostering a sense of unity and shared identity. Through collaborative events and initiatives, we strengthen the bonds that connect us, promoting cultural pride and solidarity.',
    },
  ];

  return (
    <>
      <SEO title={siteTitle} description={siteDescription} />
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      <Main>
        <section className="relative bg-black text-white py-32 md:py-44 z-10 overflow-hidden">
          <div className="container">
            <div className="flex flex-wrap justify-between items-center -mx-10">
              <div className="w-1/2 px-10">
                {/* <Hero title={'Front Page'} /> */}
                <h1 className='font-libre text-5xl font-bold'>Nepalese Community Language School</h1>
                <p className="mt-10 mb-0 text-lg">
                  A Community School Dedicated to Preserving Heritage and Nurturing Future Leaders through Education and Cultural Enrichment
                </p>
                <Link href="#">
                  <a className="inline-block rounded-full bg-[#fdd116] px-8 py-3 mt-10 font-bold text-black shadow-sm hover:text-white hover:bg-[#ce1127] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Start Learning
                  </a>
                </Link>
              </div>
              <div className="relative w-1/2 px-10">
                <p className='text-2xl leading-none bg-[#fdd116] text-black text-center font-bold rounded-full py-4 mb-8'>नेपाली वर्णमाला</p>
                <div className="flex flex-wrap -mx-4">
                  <div className='w-1/2 px-4'>
                    <div className='bg-white rounded-3xl p-5 overflow-hidden'>
                      <p className='text-[200px] leading-none font-bold text-gray-800 text-center py-3 mb-0'>अ</p>
                      <p className='text-2xl leading-none bg-[#ce1127] text-center font-bold py-3 rounded-full mb-0'>स्वर</p>
                    </div>
                  </div>
                  <div className='w-1/2 px-4'>
                    <div className='bg-white rounded-3xl p-5 overflow-hidden'>
                      <p className='text-[200px] leading-none font-bold text-gray-800 text-center py-3 mb-0'>क</p>
                      <p className='text-2xl leading-none bg-[#013893] text-center font-bold py-3 rounded-full mb-0'> व्यंजन </p>
                    </div>
                  </div>
                  {/* <div id="alphabet-slider" className="z-10 absolute top-0 left-0 w-full h-full flex flex-wrap justify-between text-4xl text-white leading-none p-16">
                    <span>क</span>
                    <span>ख</span>
                    <span>ग</span>
                    <span>घ</span>
                    <span>इं</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className='absolute left-0 top-0 w-full h-full -z-10 opacity-40'>
            <Image
              src="/images/banner-bg.jpg" // Assuming your image is in public/images
              alt="Description"
              className='!h-full !w-full object-cover'
              width={1920}
              height={800}
            />
          </div>
        </section>

        <section className="relative py-32" data-aos="fade-up">
          <div className="container">
            <div className="flex gap-x-10">
              <div className="w-1/2 bg-[#ce1127] text-white px-10 rounded-xl">
                <div className="flex items-center gap-x-10">
                  <div className="w-3/4 -mt-10 -mb-1">
                    <Image
                      src="/images/girl.png" // Assuming your image is in public/images
                      alt="Description"
                      width={640}
                      height={945}
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-lg font-semibold leading-none">
                      Global Impact
                    </p>
                    <p className="font-libre text-3xl font-bold leading-none">
                      Language Academy Reach
                    </p>
                    <p>
                      Our language academy extends its influence worldwide, with alumni and students hailing from diverse corners of the globe. This global community fosters cross-cultural connections and enriches the learning experience, creating a network that transcends borders.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 bg-[#ce1127] text-white px-10 rounded-xl">
                <div className="flex items-center gap-x-10">
                  <div className="w-3/4 -mt-10 -mb-2">
                    <Image
                      src="/images/boy.png" // Assuming your image is in public/images
                      alt="Description"
                      width={640}
                      height={945}
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-lg font-semibold leading-none">
                      Innovative Pedagogy
                    </p>
                    <p className="font-libre text-3xl font-bold leading-none">
                      Cutting-edge Teaching Methods
                    </p>
                    <p>
                      At our language academy, we embrace innovation in education. From immersive language programs to interactive online platforms, we ensure our students receive a dynamic and effective learning experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative pb-32">
          <div className="container">
            <div className="w-2/3  mx-auto mb-20 text-center">
              <p className="mt-6 text-lg font-semibold text-[#ce1127]">
                Where Heritage, Values, and Education Unite
              </p>
              <h2 className="font-libre mt-2 text-3xl font-bold tracking-tight text-gray-900">
                Exploring the Pillars of our Language School
              </h2>
            </div>
            <div className="grid max-w-xl grid-cols-1 gap-x-20 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ce1127] text-white mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <p className="font-libre text-xl font-semibold leading-7 text-gray-900 mb-4">
                    {feature.name}
                  </p>
                  <p className="text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#013893] relative py-32">
          <div className="container">
            <div className='w-2/3 mx-auto mb-20 text-center'>
              <h2 className="text-xl font-semibold text-white">Our Teachers</h2>
              <p className="font-libre mt-2 text-3xl font-bold tracking-tight text-white">
                Meet The Team
              </p>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-1/4 px-4">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/teacher1.jpg" // Assuming your image is in public/images
                    alt="Description"
                    width={398}
                    height={600}
                  />
                  <p className="text-xl leading-none text-center bg-[#fdd116] text-black font-bold py-5 -mt-2">Teacher 1</p>
                </div>
              </div>
              <div className="w-1/4 px-4">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/teacher2.jpg" // Assuming your image is in public/images
                    alt="Description"
                    width={398}
                    height={600}
                  />
                  <p className="text-xl leading-none text-center bg-[#ce1127] text-white font-bold py-5 -mt-2">Teacher 2</p>
                </div>
              </div>
              <div className="w-1/4 px-4">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/teacher3.jpg" // Assuming your image is in public/images
                    alt="Description"
                    width={398}
                    height={600}
                  />
                  <p className="text-xl leading-none text-center bg-[#fdd116] text-black font-bold py-5 -mt-2">Teacher 3</p>
                </div>
              </div>
              <div className="w-1/4 px-4">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/teacher4.jpg" // Assuming your image is in public/images
                    alt="Description"
                    width={398}
                    height={600}
                  />
                  <p className="text-xl leading-none text-center bg-[#ce1127] text-white font-bold py-5 -mt-2">Teacher 4</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-32">
          <div className="container">
            <div className="flex flex-wrap items-center bg-[#ce1127] text-white rounded-xl overflow-hidden">
              <div className="w-1/2 p-20">
                <p className="font-libre mt-2 text-3xl font-bold tracking-tight">
                  Enroll Today for an Immersive Cultural Journey
                </p>
                <p className="mt-10 text-lg">
                  Join our vibrant community language school and embark on a transformative educational journey. Immerse yourself in the richness of Nepalese culture, language, and traditions. Enroll now to be a part of an inclusive community dedicated to preserving heritage and fostering global understanding.
                </p>
                <Link href="#">
                  <a className="inline-block rounded-full bg-[#fdd116]  px-8 py-3 mt-10 font-bold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Start Learning
                  </a>
                </Link>
              </div>
              <div className="w-1/2">
                <Image
                  src="/images/get-started.jpg" // Assuming your image is in public/images
                  alt="Description"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </section>

        {/* <section className='relative pt-32 md:pt-48 overflow-hidden'>
          <div className='container'>
            <div className='flex flex-wrap'>
              <div className='w-1/2'>
                <div className='bg-white p-10'>
                  <p className='font-libre text-3xl font-bold leading-none'>Testimonials</p>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute left-0 top-0 w-full h-full -z-10'>
            <Image
              src="/images/testimonials.jpg" // Assuming your image is in public/images
              alt="Description"
              className='!h-full !w-full object-cover'
              width={1920}
              height={1000}
            />
          </div>
        </section> */}
        <button onClick={goToTop}>Go To Top</button>

        <section className="bg-[#013893] text-white relative py-32">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2">
                <p className="text-3xl font-bold">Pathshala</p>
                <article className="pt-5 md:w-10/12">Our institution is a vibrant hub dedicated to preserving and promoting the rich heritage of the Nepalese community. With a diverse curriculum that encompasses language, traditions, and global perspectives, we provide an immersive learning experience.</article>
              </div>

              <div className="w-full lg:w-1/2 flex flex-wrap gap-y-6">
                <div className="w-1/2 md:w-1/3">
                  <p className="font-barlow font-semibold text-xl">Quick Links</p>
                  <div className="menu-quick-links-container">
                    <ul className="navbar-nav flex flex-col gap-y-3 pt-5">
                      <li><a href="#" className="text-white text-base">About Us</a></li>
                      <li><a href="#" className="text-white text-base">News & Events</a></li>
                      <li><a href="#" className="text-white text-base">Testimonials</a></li>
                      <li><a href="#" className="text-white text-base">Admissions</a></li>
                    </ul>
                  </div>
                </div>
                <div className="w-1/2 md:w-1/3">
                  <p className="font-barlow font-semibold text-xl">Resources</p>
                  <div className="menu-resources-container">
                    <ul className="navbar-nav flex flex-col gap-y-3 pt-5">
                      <li><a target="_blank" rel="noopener" href="#" className="text-white text-base">Privacy Policy</a></li>
                      <li><a href="#" className="text-white text-base">Terms and Conditions</a></li>
                    </ul>
                  </div>
                </div>
                <div className="w-1/2 md:w-1/3">
                  <p className="font-barlow font-semibold text-xl">Contacts</p>
                  <ul className="font-thin pt-5 flex flex-col gap-y-3">
                    <li><a href="tel:1300 000 000" className="flex gap-x-2">
                      <div className="w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                      </div>
                      1300 000 000</a></li>
                    <li><a href="mailto:info@pathshala.org.au" className="flex gap-x-2">
                      <div className="w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      info@pathshala.org.au</a></li>
                    <li>
                      <a href="https://www.google.com/search?q=21 Holliday Ave, Edmondson Park NSW 2174" target='_blank' className="flex gap-x-2">
                        <div className="w-fit">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </div>
                        21 Holliday Ave, Edmondson Park NSW 2174</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Main >
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  query GetPageData(
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
  ) {
    generalSettings {
      ...BlogInfoFragment
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

Component.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
  };
};
