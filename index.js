const helper = require('think-helper');
const path = require('path');
const {COMPARISON_LIST} = require('think-model-abstract');
const Model = require('./lib/model.js');
const mysql = require('think-model-mysql');

let defaultConfig = {
    prefix: '',
    encoding: 'utf8mb4',
    dateStrings: true,
    logSql: false
};
function model(config) {
  config = helper.extend(defaultConfig,config);
  const Cls = Model;
  config.handle = mysql;
  const modelName = 'mysql';
  const instance = new Cls(modelName, config);
  
  return instance;
};
module.exports = model;
