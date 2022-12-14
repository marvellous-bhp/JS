import { Engines, headers } from "./dummyData.js";
import DataTable from "./data-table.js";

$(document).ready(function () {
    const dataTable = new DataTable("#table-data", Engines, headers);

    $("#bottom").on("click", ".pagination button", function () {
        dataTable.goToPage(this.value);
        dataTable.fetchData(this.value);
    });

    $(".entry-selection select").on("change", function () {
        dataTable.fetchData(dataTable.currentPage, this.value);
    }); 
    $("#search").on("input", function () {
        dataTable.fetchData(
            dataTable.currentPage,
            dataTable.entries,
            this.value
        );
    });
    
        // $("#search").on("keyup", function() {
        //   var value = $(this).val().toLowerCase();
        //   $("#table-data tr").filter(function() {
        //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        //   });
        // });
      
    $("th").on("click", function () {
        dataTable.sortByField(this.id, this.value);
        this.value = this.value === "desc" ? "asc" : "desc";
    });
});
