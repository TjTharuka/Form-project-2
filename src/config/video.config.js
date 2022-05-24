const videoConfig = {
  uploadPath: '/videos/',
  maxFileSize: 50, // In MB
  metadata: {
    cacheControl: 'public, max-age=300, s-maxage=600',
  },
};

export default videoConfig;
