import { useQuery, gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import Image from 'next/future/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Header,
  Footer,
  FooterMenu,
  Main,
  Container,
  NavigationMenu,
  Hero,
  SEO,
} from '../components';

export default function Component() {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  var bannersettings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const { data } = useQuery(Component.query, {
    variables: Component.variables(),
  });

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  const { title: siteTitle, description: siteDescription } = data?.generalSettings;
  // Extract heading and subHeading
  const { heading, subHeading } = data?.page?.bannerFields || {};
  const { whyUs } = data?.page?.frontPage || {};
  const testimonials = data?.testimonials?.nodes;
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
        <section className="relative bg-[#1785c6] text-white py-32 md:py-44 z-10 overflow-hidden">
          <div className="container">
            <div className="flex flex-wrap justify-between items-center -mx-10">
              <div className="w-1/2 px-10">
                {/* <Hero title={'Front Page'} /> */}
                <h1 className='font-rammetto text-5xl' data-aos="fade-right">{heading}</h1>
                <p className="mt-10 mb-0 text-lg" data-aos="fade-right">{subHeading}</p>
                <div className='flex flex-unwrap gap-x-4'>
                  <Link href="#">
                    <a data-aos="fade-right" className="w-[180px] text-center inline-block rounded-full bg-[#ed3d36] p-3 mt-10 font-bold text-white shadow-sm hover:text-black hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Enrol Now
                    </a>
                  </Link>
                  <Link href="#">
                    <a data-aos="fade-right" className="w-[180px] text-center inline-block rounded-full border border-white p-3 mt-10 font-bold text-white shadow-sm hover:text-black hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Discover More
                    </a>
                  </Link>
                </div>
              </div>
              <div className="relative w-1/2 px-10">
                {/* <p className='text-3xl leading-none bg-white text-black text-center font-bold rounded-full py-4 mb-8 flex justify-center items-center gap-x-2'>नेपाली वर्णमाला (Nepali Alphabet)</p>
                <div className="flex flex-wrap -mx-4">
                  <div className='w-1/2 px-4'>
                    <div className='bg-[#ed3d36] text-black rounded-3xl p-5 overflow-hidden'>
                      <Slider {...settings}>
                        <p className='text-[200px] leading-none font-bold text-white text-center py-3 mb-0'>अ</p>
                        <p className='text-[200px] leading-none font-bold text-white text-center py-3 mb-0'>आ</p>
                        <p className='text-[200px] leading-none font-bold text-white text-center py-3 mb-0'>इ</p>
                        <p className='text-[200px] leading-none font-bold text-white text-center py-3 mb-0'>ई</p>
                        <p className='text-[200px] leading-none font-bold text-white text-center py-3 mb-0'>उ</p>
                      </Slider>
                      <p className='text-lg leading-none bg-white text-center font-bold py-3 rounded-full mb-0'>स्वर (Vowels)</p>
                    </div>
                  </div>
                  <div className='w-1/2 px-4'>
                    <div className='bg-[#ed3d36] text-black rounded-3xl p-5 overflow-hidden'>
                      <Slider {...settings}>
                        <p className='text-[200px] leading-none font-bold text-white text-center py-3 mb-0'>क</p>
                        <p className='text-[200px] leading-none font-bold text-white text-center py-3 mb-0'>ख</p>
                        <p className='text-[200px] leading-none font-bold text-white text-center py-3 mb-0'>ग</p>
                        <p className='text-[200px] leading-none font-bold text-white text-center py-3 mb-0'>घ</p>
                        <p className='text-[200px] leading-none font-bold text-white text-center py-3 mb-0'>ङ</p>
                      </Slider>
                      <p className='text-lg leading-none bg-white text-center font-bold py-3 rounded-full mb-0'> व्यंजन (Consonants)</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className='banner-slider absolute end-0 top-0 h-full w-[850px]'>
            <Slider {...bannersettings}>
              <div className='relative h-full'>
                <Image
                  src="/images/banner2.jpg" // Assuming your image is in public/images
                  alt="Description"
                  className='w-full h-full object-cover'
                  width={1280}
                  height={720}
                />
                <p className='absolute bottom-0 left-0 bg-black/40 mb-0 p-5 w-full text-xl text-center font-medium capitalize'>Local MP को अफिसमा पाठशाला अष्ट्रेलियाको तर्फबाट भेटघाट गरियो</p>
              </div>
              <div className='relative h-full'>
                <Image
                  src="/images/banner1.jpg" // Assuming your image is in public/images
                  alt="Description"
                  className='w-full h-full object-cover'
                  width={1280}
                  height={720}
                />
                <p className='absolute bottom-0 left-0 bg-black/40 mb-0 p-5 w-full text-xl text-center font-medium capitalize'>Yearly certificate distribution ceremony 2023</p>
              </div>
              <div className='relative h-full'>
                <Image
                  src="/images/banner3.jpg" // Assuming your image is in public/images
                  alt="Description"
                  className='w-full h-full object-cover'
                  width={1280}
                  height={720}
                />
                <p className='absolute bottom-0 left-0 bg-black/40 mb-0 p-5 w-full text-xl text-center font-medium capitalize'>Pathasala Australia Penshurt First day of class</p>
              </div>
              <div className='relative h-full'>
                <Image
                  src="/images/banner4.jpg" // Assuming your image is in public/images
                  alt="Description"
                  className='w-full h-full object-cover'
                  width={1280}
                  height={720}
                />
                <p className='absolute bottom-0 left-0 bg-black/40 mb-0 p-5 w-full text-xl text-center font-medium capitalize'>Pathasala Australia को Penshurt Branch को उद्घाटन कार्यक्रमः</p>
              </div>
            </Slider>
          </div>
          <div className='absolute bottom-0 -left-5 opacity-10 -z-10'>
            <Image
              src="/images/banner-bg.png" // Assuming your image is in public/images
              alt="Description"
              className=''
              width={626}
              height={317}
            />
          </div>
        </section>
        <section className="bg-gray-100 relative py-32">
          <div className="container">
            <div className="w-2/3 mx-auto mb-20 text-center">
              <p className="mt-6 text-lg font-semibold text-[#ed3d36]" data-aos="fade-up">
                What We Offer
              </p>
              <h2 className="font-rammetto mt-2 text-4xl text-gray-900" data-aos="fade-up">
                Language, Culture Learning and Community Bond
              </h2>
            </div>
            <div className="flex flex-unwrap gap-x-10">
              {whyUs.map((value, index) => (
                <div key={value.heading} className={`w-1/3 ${index % 2 === 0 ? 'bg-[#1785c6]' : 'bg-[#ed3d36]'} text-white rounded-xl overflow-hidden`} data-aos="zoom-in">
                  <div className="flex flex-col">
                    <div className="w-full h-[260px] overflow-hidden">
                      <Image
                        src={value.image.node.sourceUrl}
                        alt={value.image.node.altText || 'Description'}
                        className="w-full h-full object-cover"
                        width={640}
                        height
                        ={945}
                      />
                    </div>
                    <div className="w-full p-10">
                      <p className="text-lg font-semibold leading-none">
                        {value.subHeading}
                      </p>
                      <p className="font-rammetto text-2xl leading-none">
                        {value.heading}
                      </p>
                      <div dangerouslySetInnerHTML={{ __html: value.description }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-32">
          <div className="container">
            <div className="w-2/3 mx-auto mb-20 text-center">
              <p className="mt-6 text-lg font-semibold text-[#1785c6]" data-aos="fade-up">
                Where Heritage, Values, and Education Unite
              </p>
              <h2 className="font-rammetto mt-2 text-4xl text-gray-900" data-aos="fade-up">
                Exploring the Pillars of our Language School
              </h2>
            </div>
            <div className="grid max-w-xl grid-cols-1 gap-x-20 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative" data-aos="zoom-in">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1785c6] text-white mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <p className="font-rammetto text-xl leading-7 text-gray-400 mb-4">
                    {feature.name}
                  </p>
                  <p className="text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#ed3d36] relative py-32 overflow-hidden z-10">
          <div className="container">
            <div className='w-2/3 mx-auto mb-20 text-center'>
              <h2 className="text-xl font-semibold text-white" data-aos="fade-up">Our Teachers</h2>
              <p className="font-rammetto mt-2 text-4xl text-white" data-aos="fade-up">
                Meet The Team
              </p>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-1/4 px-4" data-aos="zoom-in">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/teacher1.jpg" // Assuming your image is in public/images
                    alt="Description"
                    width={398}
                    height={600}
                  />
                  <p className="font-rammetto text-xl leading-none text-center bg-[#fdd116] text-black py-5 -mt-2">Teacher 1</p>
                </div>
              </div>
              <div className="w-1/4 px-4" data-aos="zoom-in">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/teacher2.jpg" // Assuming your image is in public/images
                    alt="Description"
                    width={398}
                    height={600}
                  />
                  <p className="font-rammetto text-xl leading-none text-center bg-[#1785c6] text-white py-5 -mt-2">Teacher 2</p>
                </div>
              </div>
              <div className="w-1/4 px-4" data-aos="zoom-in">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/teacher3.jpg" // Assuming your image is in public/images
                    alt="Description"
                    width={398}
                    height={600}
                  />
                  <p className="font-rammetto text-xl leading-none text-center bg-[#fdd116] text-black py-5 -mt-2">Teacher 3</p>
                </div>
              </div>
              <div className="w-1/4 px-4" data-aos="zoom-in">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/teacher4.jpg" // Assuming your image is in public/images
                    alt="Description"
                    width={398}
                    height={600}
                  />
                  <p className="font-rammetto text-xl leading-none text-center bg-[#1785c6] text-white py-5 -mt-2">Teacher 4</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='relative py-32'>
          <div className='container'>
            <div className='w-2/3 mx-auto mb-20 text-center'>
              <h2 className="text-xl font-semibold" data-aos="fade-up">Our Testimonials</h2>
              <p className="font-rammetto mt-2 text-4xl" data-aos="fade-up">
                Reviews from Our Happy Parents and Students
              </p>
            </div>
            <div className='grid grid-cols-3 gap-10'>
              {testimonials.map((review, index) => (
                <div key={review.title} className='bg-white border border-gray-100 shadow-sm rounded-2xl p-8' data-aos="zoom-in">
                  <div className='flex flex-unwrap items-center justify-between gap-x-3 mb-10'>
                    <div className='flex rounded-ful text-yellow-500'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <Image
                        src="/images/google-symbol.png" // Assuming your image is in public/images
                        alt="Description"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                  <p className='font-rammetto text-xl text-gray-400 mb-3 leading-none'>{review.testimonialsSection.subject}</p>
                  <div className='mb-8' dangerouslySetInnerHTML={{ __html: review.content }} />
                  <div className='flex flex-unwrap gap-x-3'>
                    <div className={`flex items-center justify-center h-10 w-10 rounded-full ${index % 2 === 0 ? 'bg-[#1785c6]' : 'bg-[#ed3d36]'} text-white font-bold text-xl`}>{review.title[0]}</div>
                    <div>
                      <p className='mb-1 leading-none font-medium'>{review.title}</p>
                      <p className='mb-0 leading-none text-sm'>{new Date(review.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative pb-32">
          <div className="container">
            <div className="flex flex-wrap items-center bg-[#1785c6] text-white rounded-xl overflow-hidden">
              <div className="w-1/2 p-20">
                <p className="font-rammetto mt-2 text-4xl" data-aos="fade-right">
                  Enroll Today for an Immersive Cultural Journey
                </p>
                <p className="mt-10 text-lg" data-aos="fade-right">
                  Join our vibrant community language school and embark on a transformative educational journey. Immerse yourself in the richness of Nepalese culture, language, and traditions. Enroll now to be a part of an inclusive community dedicated to preserving heritage and fostering global understanding.
                </p>
                <Link href="#">
                  <a data-aos="fade-right" className="inline-block rounded-full bg-[#fdd116]  px-8 py-3 mt-10 font-bold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Start Learning
                  </a>
                </Link>
              </div>
              <div className="w-1/2" data-aos="fade-left">
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

        <FooterMenu />
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
    $pageId: ID!
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
    testimonials {
      nodes {
        title
        testimonialsSection {
          subject
        }
        content
        date
      }
    }
    page(id: $pageId, idType: DATABASE_ID) {
      bannerFields {
        heading
        subHeading
      },
      frontPage {
        whyUs {
          description
          heading
          subHeading
          image {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

Component.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
    pageId: "14" // Replace with the actual page ID
  };
};
