module.exports = {
    mount: {
        public: '/',
        src: '/_dist_',
    },
    plugins: [
        "@snowpack/plugin-babel",
        '@prefresh/snowpack',
        '@snowpack/plugin-dotenv',
    ],
};

