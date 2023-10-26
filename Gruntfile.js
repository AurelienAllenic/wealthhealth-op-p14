module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
     // options: {
        //banner: "/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.homepage %> | <%= pkg.license %> */\n\n", 
        //footer: "\n/*! Author: <%= pkg.author.name %> <<%= pkg.author.email %>> | Updated: <%= grunt.template.today('dS mmm yyyy') %> */"},
      css: {
        src: ["node_modules/package-tables-react/employeeTable.css"],
        dest: "src/assets/employeeTable.css"},
      js: {
        src: ["node_modules/package-tables-react/EmployeeTable.jsx"],
        dest: "src/assets/EmployeeTable.jsx"}
    }
  });
  
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.registerTask("default", ["concat"]);
};