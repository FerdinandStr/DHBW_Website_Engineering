module.exports = {
    mount: {
        public: '/',
        src: '/_dist_',
    },
    plugins: [
        "@snowpack/plugin-babel",
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-dotenv',
    ],
};

