module.exports = {
    mount: {
        public: '/',
        src: '/dist',
    },
    plugins: [
        ["@snowpack/plugin-babel", { transformOptions: { presets: ["@babel/preset-react"] } }],
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-dotenv',
    ],
};

