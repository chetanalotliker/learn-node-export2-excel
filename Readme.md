# Learn Node Feature to export to excel by using exceljs module

This is the Node Express Application which has a route called as downloadExcel which helps to generate a Excel file in the Files Folder in the application.

Inspired by this medium.com blog/article:
https://medium.com/geekculture/exporting-data-in-excel-file-in-node-js-f1b298997d47

# Create node js app

express <your_app_name> --view=ejs

# Install Excel js

npm install exceljs

# To Run the Application

npm start

# How to generate the Excel file

## Trigger below endpoint in the browser

http://localhost:3000/downloadExcel

## To see the output go in below mentioned folder

`Files` in the Repo
