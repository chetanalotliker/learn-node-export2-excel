const User = require("../Models/User"); // This has data to be used
const excelJS = require("exceljs");
const { json2xml } = require('xml-js');

const exportUser2Excel = async (req, res) => {

    const workbook = new excelJS.Workbook();  // Create a new workbook
    const worksheet = workbook.addWorksheet("My Users"); // New Worksheet
    const path = "./files";  // Path to download excel
    // Column for data in excel. key must match data key
    worksheet.columns = [
        { header: "S no.", key: "s_no", width: 10 },
        { header: "First Name", key: "fname", width: 10 },
        { header: "Last Name", key: "lname", width: 10 },
        { header: "Email Id", key: "email", width: 10 },
        { header: "Gender", key: "gender", width: 10 },
    ];
    // Looping through User data
    let counter = 1;
    User.details.forEach((user) => {
        user.s_no = counter;
        worksheet.addRow(user); // Add data in worksheet
        counter++;
    });
    // Making first line in excel bold
    worksheet.getRow(1).eachCell((cell) => {
        cell.font = { bold: true };
    });
    try {
        const data = await workbook.xlsx.writeFile(`${path}/users.xlsx`)
            .then(() => {
                res.send({
                    status: "success",
                    message: "file successfully downloaded",
                    path: `${path}/users.xlsx`,
                });
            });
    } catch (err) {
        res.send({
            status: "error",
            message: "Something went wrong",
        });
    }
};

const exportUser2Xml = async (req, res) => {
    const json = JSON.stringify(User);
    const xml = json2xml(json, { compact: true, spaces: 1 });
    res.send(xml)
}

module.exports = {
    exportUser2Excel,
    exportUser2Xml
}
