import { gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import { useState } from 'react';
import {
  Header,
  Footer,
  FooterMenu,
  Main,
  Container,
  ContentWrapper,
  EntryHeader,
  NavigationMenu,
  FeaturedImage,
  SEO,
} from '../components';

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const { title: siteTitle, description: siteDescription } = props?.data?.generalSettings;
  const primaryMenu = props?.data?.headerMenuItems?.nodes ?? [];
  const footerMenu = props?.data?.footerMenuItems?.nodes ?? [];
  const { title, content, featuredImage } = props?.data?.page ?? { title: '' };

  const [formData, setFormData] = useState({
    yourName: '',
    yourEmail: '',
    yourSubject: '',
    yourMessage: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Add this line to debug

    const formDataObj = new FormData();

    formDataObj.append('your-name', formData.yourName);
    formDataObj.append('your-email', formData.yourEmail);
    formDataObj.append('your-subject', formData.yourSubject);
    formDataObj.append('your-message', formData.yourMessage);

    try {
      const response = await fetch('https://pathsaala.aiims-staging.com.au/wp-json/contact-form-7/v1/contact-forms/87/feedback', {
        method: 'POST',
        body: formDataObj, // Note: Do not set the Content-Type header manually
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Form submitted successfully:', data);
        // Handle success
      } else {
        console.error('Form submission error:', data);
        // Handle error
      }
    } catch (error) {
      console.error('Network error:', error);
      // Handle network error
    }
  };

  return (
    <>
      <SEO
        title={siteTitle}
        description={siteDescription}
        imageUrl={featuredImage?.node?.sourceUrl}
      />
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      <Main>
        <>
          <EntryHeader title={title} image={featuredImage?.node} />
        </>
        <section className='relative contact py-32 overflow-hidden'>
          <div className="absolute inset-0 bg-gray-300">
            <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
          </div>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 className="font-rammetto text-gray-900 text-lg mb-1 font-medium title-font">Send Us A Message</h2>
                <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                <div className="relative mb-4">
                  <label for="yourName" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="name" id="yourName" name="yourName" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required
                    value={formData.yourName}
                    onChange={handleChange} />
                </div>
                <div className="relative mb-4">
                  <label for="yourPhone" className="leading-7 text-sm text-gray-600">Phone</label>
                  <input type="tel" id="yourPhone" name="yourPhone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required
                    value={formData.yourPhone}
                    onChange={handleChange} />
                </div>
                <div className="relative mb-4">
                  <label for="yourEmail" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="yourEmail" name="yourEmail" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required
                    value={formData.yourSubject}
                    onChange={handleChange} />
                </div>
                <div className="relative mb-4">
                  <label for="yourMessage" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="yourMessage" name="yourMessage" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    value={formData.yourMessage}
                    onChange={handleChange}></textarea>
                </div>
                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded d-blck">Submit</button>
              </div>
            </form>
          </div>
        </section>
        {/* <div className='container'>
          <form onSubmit={handleSubmit}>
            <div className='mb-5'>
              <label htmlFor="yourName" className="block text-sm font-medium text-gray-700 mb-3">Name</label>
              <input
                type="text"
                name="yourName"
                id="yourName"
                className="mt-1 block p-3 h-[50px] w-full rounded-md border border-gray-200 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
                value={formData.yourName}
                onChange={handleChange}
              />
            </div>
            <div className='mb-5'>
              <label htmlFor="yourEmail" className="block text-sm font-medium text-gray-700 mb-3">Email</label>
              <input
                type="email"
                name="yourEmail"
                id="yourEmail"
                className="mt-1 block p-3 h-[50px] w-full rounded-md border border-gray-200 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
                value={formData.yourEmail}
                onChange={handleChange}
              />
            </div>
            <div className='mb-5'>
              <label htmlFor="yourSubject" className="block text-sm font-medium text-gray-700 mb-3">Subject</label>
              <input
                type="text"
                name="yourSubject"
                id="yourSubject"
                className="mt-1 block p-3 h-[50px] w-full rounded-md border border-gray-200 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
                value={formData.yourSubject}
                onChange={handleChange}
              />
            </div>
            <div className='mb-5'>
              <label htmlFor="yourMessage" className="block text-sm font-medium text-gray-700 mb-3">Message</label>
              <input
                type="text"
                name="yourMessage"
                id="yourMessage"
                className="mt-1 block p-3 h-[50px] w-full rounded-md border border-gray-200 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={formData.yourMessage}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </form>
        </div> */}
        <FooterMenu />
      </Main>
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
    asPreview: ctx?.asPreview,
  };
};

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  ${FeaturedImage.fragments.entry}
  query GetPageData(
    $databaseId: ID!
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
    $asPreview: Boolean = false
  ) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      ...FeaturedImageFragment
    }
    generalSettings {
      ...BlogInfoFragment
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;
