if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const PORT = process.env.PORT || 4010;

module.exports = {
    port: PORT, env: process.env.NODE_ENV
};
  