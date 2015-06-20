System.config({
    transpiler: 'typescript',
    packages: {
        '/': {
            main: 'app',
            defaultExtension: 'ts'
        }
    },
    typescriptOptions: {
        target: 'ES5',
        inlineSourceMap: true,
        module: 'system'
    },
    map: {
      typescript: 'js/libs/typescript'
    }
});
