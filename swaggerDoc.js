const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  // explorer: true,
  swagger: "1.0",
  swaggerDefinition: {
    info: {
      title: "Test api",
      version: "1.0.0",
      description: "Test express api",
    },
    basePath: "/"
  },
  apis: ['endpoints.js'],
  swaggerOptions: {
    layout: "BaseLayout",
    defaultModelsExpandDepth: 1
  }
};

const specs = swaggerJsdoc(options);

module.exports = app => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
