import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  setupFilesAfterEnv: ["./test/jest-setup.ts", ".babel.config.js"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["dist", "jest.setup.ts", "test-utils.tsx"],
  globals: {
    "ts-jest": {
      tsconfig: {
        jsx: "preserve"
      },
      babelConfig: {
        presets: ["next/babel"],
        plugins: ["macros"]
      }
    }
  }
};

export default config;
