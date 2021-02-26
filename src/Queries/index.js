import { ContentfulClient } from 'react-contentful';

export const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_API_TOKEN,
    space: process.env.REACT_APP_SPACE_ID
});

// export const getAboutPage = async () => {
//     const data = await contentfulClient.getEntry('7aDW8T03cu81ZmlQGlWYO0')
//     return data
// };

export const getHomePage = async () => {
    const data = await contentfulClient.getEntry('7uNnbAhDq1rKg0u1oo9H2s')
    return data
};

export const getEpisodes = async () => {
    const data = await contentfulClient.getEntry('MIHg86Xc2KrPxZ43Hal0X')
    return data
};

export const getBannerLogo = async () => {
    const data = await contentfulClient.getEntry('2h4aI71QUeRrx7MTQyYAOm')
    return data
};