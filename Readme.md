# Learn Node.js Feature of export to excel

This is the Node.js and Express.js Application which has a route called as downloadExcel which helps to generate a Excel file in the Files Folder in the application.

Inspired by this medium.com blog/article:
https://medium.com/geekculture/exporting-data-in-excel-file-in-node-js-f1b298997d47

And also improved this project by adding feature to convert to xml and show as the api response

# Create node js app

express <your_app_name> --view=ejs

# Install Excel js to get the excel generated

npm install exceljs

# Install xml-js in order to convert xml to json and also to convert json to xml

npm i xml-js

# To Run the Application

npm start

# How to generate the Excel file

## Trigger below endpoint in the browser

http://localhost:3000/downloadExcel

## To see the output go in below mentioned folder

`Files` in the Repo

# How to see xml file

## Trigger below endpoint in the browser

http://localhost:3000/downloadXml

## XML will be shown in the browser
