const IS_CI = Boolean(process.env.CI);

module.exports = {
    reporters: [
        'default',
        ...(IS_CI
            ? [
                  [
                      'jest-junit',
                      {
                          outputDirectory: './reports',
                          outputName: 'junit.xml',
                          classNameTemplate: '{classname}',
                          titleTemplate: '{title}',
                          ancestorSeparator: ' ',
                          suiteNameTemplate: '{filename}',
                      },
                  ],
              ]
            : []),
    ],

    collectCoverage: IS_CI,
    collectCoverageFrom: ['./src/**/*.{js,jsx,ts,tsx}'],

    projects: [
        {
            displayName: 'unit',
            testEnvironment: 'node',
            roots: ['test/unit'],
        },
        {
            displayName: 'integration',
            testEnvironment: 'jest-environment-jsdom-sixteen',
            roots: ['test/integration'],
            setupFilesAfterEnv: ['./test/integration/setupTests.ts'],
            moduleNameMapper: {
                '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
                    '<rootDir>/test/integration/fileMock.js',
            },
        },
    ],
};
