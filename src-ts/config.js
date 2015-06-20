System.config({
    paths: {
        "rx": "rx"
    },
    transpiler: 'typescript',
    typescriptOptions: {
        emitDecoratorMetadata: true
        // experimentalDecorators: true
    }
    // packages: {
    //     '/': {
    //         main: 'app',
    //         defaultExtension: 'ts'
    //     }
    // },
    // typescriptOptions: {
    //     target: 'ES5',
    //     inlineSourceMap: true,
    //     module: 'system'
    // },
    // map: {
    //   typescript: 'js/libs/typescript'
    // }
});
