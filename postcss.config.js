module.exports = {
    plugins: [
        require('autoprefixer', {overrideBrowserslis: ['cover 99.5%']}),
        require('cssnano')({
            preset: 'default'
        }),
    ]
}