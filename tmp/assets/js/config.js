import _ from "underscore";

let dbConfig = (typeof window.DBConfig === "undefined") ? {} : window.DBConfig;
let pageConfig = (typeof window.PageConfig === "undefined") ? {} : window.PageConfig;

let config = {
};

export default _.extend(config, dbConfig, pageConfig);
