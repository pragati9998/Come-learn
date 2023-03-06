const express = require("express");

//body-parser is used to parse the body of the request

const bodyParser = require("body-parser");
const {
  errorHandlerMiddleware,
} = require("./middleware/error-handler.middleware");
