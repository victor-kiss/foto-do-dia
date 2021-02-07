const withImages = require("next-images")

module.exports={
  trailingSlash:true,
}

module.exports={
     async redirects(){
      return [
        {
          source: '/',
          destination: '/index/',
          permanent: true,
        },
      ]
    },
}

module.exports = withImages({
    esModule:true
})