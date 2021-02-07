const withImages = require("next-images")


module.exports={
     async redirects() {
      return [
        {
          source: '/',
          destination: '/index/',
          permanent: true,
        },
      ]
    },
    trailingSlash:true,
}

module.exports = withImages({
    esModule:true
})