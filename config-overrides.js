module.exports = function override(config, env) {
    //do stuff with the webpack config...
    const newConfig = {
        ...config,
        entry: {
            main : './src/index.js',
            Home: './src/components/Home.js',
            About: './src/components/About.js',
            Topics: './src/components/TopicList.js'
        },
        output: {
            filename: '[name].js',
            path: __dirname + '/build'
        }
    }
    return newConfig;
}