const express = require('express');
const { connection } = require('./config/db');
const { adminRouter } = require('./routes/Admin.route');
require('dotenv').config()
