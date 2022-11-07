import { Data } from "./dummyData.js";

$(document).ready(function () {
    
    // const dataTable = new DataTable("#table", Data);
    console.log(Data);
    




    $('#table').DataTable({
        data: Data,
        columns: [
            { data: 'Rendering_engine' },
            { data: 'Browser' },
            { data: 'Platform' },
            { data: 'version' },
            { data: 'CSS_grade' }
        ],
        "pageLength": 10
    });

    
    // var json =
    // [
    //     {
    //         "Rendering_engine" : "Trident",
    //         "Browser" : "Internet Explorer 4.0",
    //         "Platform" : "Win 95+",
    //         "version" : "4",
    //         "CSS_grade" : "X",
    //     },
    
    //     {
    //         "Rendering_engine" : "Trident",
    //         "Browser" : "Internet Explorer 5.0",
    //         "Platform" : "Win 95+",
    //         "version" : "5",
    //         "CSS_grade" : "C",
    //     },
    
    //     {
    //         "Rendering_engine" : "Trident",
    //         "Browser" : "Internet Explorer 5.5",
    //         "Platform" : "Win 95+",
    //         "version" : "5.5",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Trident",
    //         "Browser" : "Internet Explorer 6",
    //         "Platform" : "Win 98+",
    //         "version" : "6",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Trident",
    //         "Browser" : "Internet Explorer 7",
    //         "Platform" : "Win XP SP2+",
    //         "version" : "7",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Trident",
    //         "Browser" : "AOL Browser (AOL desktop)",
    //         "Platform" : "Win XP",
    //         "version" : "6",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Gecko",
    //         "Browser" : "Firefox 1.0",
    //         "Platform" : "Win 98+ / OSX.2+",
    //         "version" : "1.7",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Gecko",
    //         "Browser" : "Firefox 1.5",
    //         "Platform" : "Win 98+ / OSX.2+",
    //         "version" : "1.8",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Gecko",
    //         "Browser" : "Firefox 2.0",
    //         "Platform" : "Win 98+ / OSX.2+",
    //         "version" : "1.8",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Gecko",
    //         "Browser" : "Firefox 3.0",
    //         "Platform" : "Win 2k+ / OSX.3+",
    //         "version" : "1.9",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Gecko",
    //         "Browser" : "Camino 1.0",
    //         "Platform" : "OSX.2+",
    //         "version" : "1.8",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Gecko",
    //         "Browser" : "Camino 1.5",
    //         "Platform" : "OSX.3+",
    //         "version" : "1.8",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Gecko",
    //         "Browser" : "Netscape 7.2",
    //         "Platform" : "Win 95+ / Mac OS 8.6-9.2",
    //         "version" : "1.7",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Gecko",
    //         "Browser" : "Netscape Browser 8",
    //         "Platform" : "Win 98SE+",
    //         "version" : "1.7",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Gecko",
    //         "Browser" : "Netscape Navigator 9",
    //         "Platform" : "Win 98+ / OSX.2+",
    //         "version" : "1.8",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Gecko",
    //         "Browser" : "Mozilla 1.0",
    //         "Platform" : "Win 95+ / OSX.1+",
    //         "version" : "1",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Gecko",
    //         "Browser" : "Mozilla 1.1",
    //         "Platform" : "Win 95+ / OSX.1+",
    //         "version" : "1.1",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Gecko",
    //         "Browser" : "Mozilla 1.2",
    //         "Platform" : "Win 95+ / OSX.1+",
    //         "version" : "1.2",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Gecko",
    //         "Browser" : "Mozilla 1.3",
    //         "Platform" : "Win 95+ / OSX.1+",
    //         "version" : "1.3",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Gecko",
    //         "Browser" : "Mozilla 1.4",
    //         "Platform" : "Win 95+ / OSX.1+",
    //         "version" : "1.4",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Gecko",
    //         "Browser" : "Mozilla 1.5",
    //         "Platform" : "Win 95+ / OSX.1+",
    //         "version" : "1.5",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Gecko",
    //         "Browser" : "Mozilla 1.6",
    //         "Platform" : "Win 95+ / OSX.1+",
    //         "version" : "1.6",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Gecko",
    //         "Browser" : "Mozilla 1.7",
    //         "Platform" : "Win 98+ / OSX.1+",
    //         "version" : "1.7",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Gecko",
    //         "Browser" : "Mozilla 1.8",
    //         "Platform" : "Win 98+ / OSX.1+",
    //         "version" : "1.8",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Gecko",
    //         "Browser" : "Seamonkey 1.1",
    //         "Platform" : "Win 98+ / OSX.2+",
    //         "version" : "1.8",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Gecko",
    //         "Browser" : "Epiphany 2.20",
    //         "Platform" : "Gnome",
    //         "version" : "1.8",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Webkit",
    //         "Browser" : "Safari 1.2",
    //         "Platform" : "OSX.3",
    //         "version" : "125.5",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Webkit",
    //         "Browser" : "Safari 1.3",
    //         "Platform" : "OSX.3",
    //         "version" : "312.8",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Webkit",
    //         "Browser" : "Safari 2.0",
    //         "Platform" : "OSX.4+",
    //         "version" : "419.3",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Webkit",
    //         "Browser" : "Safari 3.0",
    //         "Platform" : "OSX.4+",
    //         "version" : "522.1",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Webkit",
    //         "Browser" : "OmniWeb 5.5",
    //         "Platform" : "OSX.4+",
    //         "version" : "420",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Webkit",
    //         "Browser" : "iPod Touch / iPhone",
    //         "Platform" : "iPod",
    //         "version" : "420.1",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Webkit",
    //         "Browser" : "S60",
    //         "Platform" : "S60",
    //         "version" : "413",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Presto",
    //         "Browser" : "Opera 7.0",
    //         "Platform" : "Win 95+ / OSX.1+",
    //         "version" : "-",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Presto",
    //         "Browser" : "Opera 7.5",
    //         "Platform" : "Win 95+ / OSX.2+",
    //         "version" : "-",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Presto",
    //         "Browser" : "Opera 8.0",
    //         "Platform" : "Win 95+ / OSX.2+",
    //         "version" : "-",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Presto",
    //         "Browser" : "Opera 8.5",
    //         "Platform" : "Win 95+ / OSX.2+",
    //         "version" : "-",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Presto",
    //         "Browser" : "Opera 9.0",
    //         "Platform" : "Win 95+ / OSX.3+",
    //         "version" : "-",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Presto",
    //         "Browser" : "Opera 9.2",
    //         "Platform" : "Win 88+ / OSX.3+",
    //         "version" : "-",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Presto",
    //         "Browser" : "Opera 9.5",
    //         "Platform" : "Win 88+ / OSX.3+",
    //         "version" : "-",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Presto",
    //         "Browser" : "Opera for Wii",
    //         "Platform" : "Wii",
    //         "version" : "-",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Presto",
    //         "Browser" : "Nokia N800",
    //         "Platform" : "N800",
    //         "version" : "-",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Presto",
    //         "Browser" : "Nintendo DS Browser",
    //         "Platform" : "Nintendo DS",
    //         "version" : "8.5",
    //         "CSS_grade" : "C/A<sup>1</sup>",
    //     },
    
    //     {
    //         "Rendering_engine" : "KHTML",
    //         "Browser" : "Konqureror 3.1",
    //         "Platform" : "KDE 3.1",
    //         "version" : "3.1",
    //         "CSS_grade" : "C",
    //     },
    
    //     {
    //         "Rendering_engine" : "KHTML",
    //         "Browser" : "Konqureror 3.3",
    //         "Platform" : "KDE 3.3",
    //         "version" : "3.3",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "KHTML",
    //         "Browser" : "Konqureror 3.5",
    //         "Platform" : "KDE 3.5",
    //         "version" : "3.5",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Tasman",
    //         "Browser" : "Internet Explorer 4.5",
    //         "Platform" : "Mac OS 8-9",
    //         "version" : "-",
    //         "CSS_grade" : "X",
    //     },
    
    //     {
    //         "Rendering_engine" : "Tasman",
    //         "Browser" : "Internet Explorer 5.1",
    //         "Platform" : "Mac OS 7.6-9",
    //         "version" : "1",
    //         "CSS_grade" : "C",
    //     },
    
    //     {
    //         "Rendering_engine" : "Tasman",
    //         "Browser" : "Internet Explorer 5.2",
    //         "Platform" : "Mac OS 8-X",
    //         "version" : "1",
    //         "CSS_grade" : "C",
    //     },
    
    //     {
    //         "Rendering_engine" : "Misc",
    //         "Browser" : "NetFront 3.1",
    //         "Platform" : "Embedded devices",
    //         "version" : "-",
    //         "CSS_grade" : "C",
    //     },
    
    //     {
    //         "Rendering_engine" : "Misc",
    //         "Browser" : "NetFront 3.4",
    //         "Platform" : "Embedded devices",
    //         "version" : "-",
    //         "CSS_grade" : "A",
    //     },
    
    //     {
    //         "Rendering_engine" : "Misc",
    //         "Browser" : "Dillo 0.8",
    //         "Platform" : "Embedded devices",
    //         "version" : "-",
    //         "CSS_grade" : "X",
    //     },
    
    //     {
    //         "Rendering_engine" : "Misc",
    //         "Browser" : "Links",
    //         "Platform" : "Text only",
    //         "version" : "-",
    //         "CSS_grade" : "X",
    //     },
    
    //     {
    //         "Rendering_engine" : "Misc",
    //         "Browser" : "Lynx",
    //         "Platform" : "Text only",
    //         "version" : "-",
    //         "CSS_grade" : "X",
    //     },
    
    //     {
    //         "Rendering_engine" : "Misc",
    //         "Browser" : "IE Mobile",
    //         "Platform" : "Windows Mobile 6",
    //         "version" : "-",
    //         "CSS_grade" : "C",
    //     },
    
    //     {
    //         "Rendering_engine" : "Misc",
    //         "Browser" : "PSP Browser",
    //         "Platform" : "PSP",
    //         "version" : "-",
    //         "CSS_grade" : "C",
    //     },
    
    //     {
    //         "Rendering_engine" : "Other Browsers",
    //         "Browser" : "All others",
    //         "Platform" : "-",
    //         "version" : "-",
    //         "CSS_grade" : "U",
    //     },
    // ];
    
    
    
    

    
});