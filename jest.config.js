module.exports = {
    moduleFileExtensions: ["js", "ts"],
    testMatch: ["**/*.test.ts"],
    resetMocks: true,
    transform: {
        "^.+\\.ts$": "ts-jest",
    },
    moduleNameMapper: {
        "^@requests(.*)$": "<rootDir>/src/requests$1",
        "^@utilities(.*)$": "<rootDir>/src/utilities$1",
        "^@errors(.*)$": "<rootDir>/src/errors",
    },
    verbose: true,
};
