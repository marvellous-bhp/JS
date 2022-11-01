export default class DataTable {
    #containerName;
    #data;
    #dataList;
    #headerColName;
    #entries = 10;
    #currentPage = 0;
    #pages;
    #currentData;
    #keyword = "";

    constructor(containerName, data, headerColName) {
        this.#containerName = containerName;
        this.#data = data;
        this.#headerColName = headerColName;
        this.#initTop();
        this.#initTable();
        this.#initBottom();
    }

    get currentPage() {
        return this.#currentPage;
    }

    get entries() {
        return this.#entries;
    }

    goToPage = (pageNum) => {
        if (this.#currentPage === pageNum) {
            return;
        }

        $(`#page${this.#currentPage}`).removeClass("active");
        $(`#page${pageNum}`).addClass("active");

        this.#currentPage = pageNum;
    };

    fetchData = (
        page = this.#currentPage,
        entries = this.#entries,
        keyword = this.#keyword
    ) => {
        this.#dataList = this.#searchData(keyword);
        this.#pages = Math.ceil(this.#dataList.length / entries);

        this.#currentPage = +page >= this.#pages ? 0 : +page;
        this.#entries = +entries;

        this.#currentData = this.#dataList.slice(
            this.#currentPage * this.#entries,
            this.#currentPage * this.#entries + this.#entries
        );

        this.#loadTableData();
    };

    sortByField = (field, order) => {
        this.#data.sort((obj1, obj2) => {
            if (!isNaN(obj1[field]) || !isNaN(obj2[field])) {
                return (
                    ((+obj1[field] || -1) - (+obj2[field] || -1)) *
                    (order === "desc" ? 1 : -1)
                );
            }
            return (
                ((obj1[field]?.toLowerCase() || "") >
                (obj2[field]?.toLowerCase() || "")
                    ? 1
                    : -1) * (order === "desc" ? 1 : -1)
            );
        });
        this.fetchData();
    };

    #searchData = (keyword) => {
        this.#keyword = keyword;

        if (keyword === "") {
            return this.#data;
        }

        keyword = keyword.toLowerCase();

        const res = [];

        for (let obj of this.#data) {
            for (let property in obj) {
                if ((obj[property] + "").toLowerCase().includes(keyword)) {
                    res.push(obj);
                    break;
                }
            }
        }

        return res;
    };

    #initTop = () => {
        $("<div>", { id: "top" }).appendTo(this.#containerName);
        this.#initEntrySelection();
        this.#initSearchBox();
    };

    #initEntrySelection = () => {
        const entries = [10, 25, 50, 100];
        $(
            `<div class="entry-selection">Show <select></select> entries</div>`
        ).appendTo(`${this.#containerName} #top`);
        entries.forEach((item) => {
            $(`<option value="${item}">${item}</option>`).appendTo(
                `${this.#containerName} #top .entry-selection select`
            );
        });
    };

    #initSearchBox = () => {
        $(
            '<div class="search-box">Search: <input id="search" type="text"/></div>'
        ).appendTo(`${this.#containerName} #top`);
    };

    #initTableHeader = () => {
        $("<thead>", {
            id: "table-header",
        }).appendTo(`${this.#containerName} table`);
        $("<tr>").appendTo(`${this.#containerName} thead`);
        this.#headerColName.forEach((item) => {
            $(
                `<th>${item.col} <button class="sort" id="${item.value}" value="desc" order="desc"><i class="fa-solid fa-arrows-up-down"></i></button></th>`
            ).appendTo(`${this.#containerName} thead tr`);
        });
    };

    #loadDescription = () => {
        $(`${this.#containerName} #bottom .description`).text(
            `Showing ${this.#currentPage * this.#entries + 1} to ${Math.min(
                this.#currentPage * this.#entries + this.#entries,
                this.#dataList.length
            )} of ${this.#dataList.length} entries`
        );
    };

    #loadPagination = () => {
        $(`${this.#containerName} #bottom .pagination`).remove();
        this.#pages = Math.ceil(this.#dataList.length / this.#entries);

        $("<div>", { class: "pagination" }).appendTo(
            `${this.#containerName} #bottom`
        );

        Array.from(Array(this.#pages).keys()).forEach((index) => {
            $(
                `<button id="page${index}" class="page" value="${index}">${
                    index + 1
                }</button>`
            ).appendTo(`${this.#containerName} #bottom .pagination`);
        });

        $(`#page${this.#currentPage}`).addClass("active");
    };

    #generateRowData = (data, index) => {
        this.#headerColName.forEach((item) => {
            $(`<td>${data[item.value] || "-"}</td>`).appendTo(
                `${this.#containerName} table tbody #row${index}`
            );
        });
    };

    #loadTableData = () => {
        $(`${this.#containerName} table tbody`).empty();
        this.#currentData.forEach((item, index) => {
            $(`<tr>`, { id: `row${index}` }).appendTo(
                `${this.#containerName} table tbody`
            );
            this.#generateRowData(item, index);
        });
        this.#loadDescription();
        this.#loadPagination();
    };

    #initTable = () => {
        $("<table>").appendTo(this.#containerName);
        this.#initTableHeader();
        $("<tbody>").appendTo(`${this.#containerName} table`);
        this.fetchData();
    };

    #initBottom = () => {
        $("<div>", { id: "bottom" }).appendTo(this.#containerName);
        $('<div class="description"></div>').appendTo(
            `${this.#containerName} #bottom`
        );
        this.#loadDescription();
        this.#loadPagination();
    };
}
