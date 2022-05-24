const imageConfig = {
  uploadPath: '/images/uploads/',
  smallThumbPath: '/images/uploads/180x180/',
  largeThumbPath: '/images/uploads/480x240/',
  desktopThumbPath: '/images/uploads/1280x720/',
  mobileThumbPath: '/images/uploads/375x667/',
  thumbNailWidth: {
    thumbNameSmall: 180,
    thumbNailLarge: 480,
    thumbNailMobile: 375,
    thumbNailDesktop: 1280,
  },
  thumbNailHeight: {
    thumbNailSmall: 180,
    thumbNailLarge: 240,
    thumbNailMobile: 667,
    thumbNailDesktop: 720,
  },
  metadata: {
    cacheControl: 'public, max-age=300, s-maxage=600',
  },
  anonymousAnimalsPath: '/images/anonymousAnimals/',
  maxFileSize: 10, // In MB
  errorCodes: {
    fileTooLarge: 'file-too-large',
  },
};

export default imageConfig;
