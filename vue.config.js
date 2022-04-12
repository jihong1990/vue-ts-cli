const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        // proxy: 'https://management.new-forest.cn/',
        proxy: 'https://test-management.new-forest.cn',
        client: {
            overlay: {
                errors: false,
                warnings: false,
            },
        },
    },
});
