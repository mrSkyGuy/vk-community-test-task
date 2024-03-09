// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

// eslint-disable-next-line import/no-default-export
exports.module = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }
};
