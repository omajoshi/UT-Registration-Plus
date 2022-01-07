css_inject = `.modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 75px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: auto;
    max-height: 85%;
    overflow-y: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
}

.loader {
    border: 10px solid #f3f3f3;
    border-top: 10px solid #FF9800;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: none;
    animation: spin 2s linear infinite;
}


@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.close {
    color: #aaaaaa;
    float: right;
    padding: 5px;
    font-size: 28px;
    font-weight: bold;
}

.title {
    font-size: x-large;
    font-weight: bold;
    padding-top: 5px;
    line-height: 1;
    padding-left: 5px;
    margin: 5px 0px 5px 0px;
}

.distButton {
    vertical-align: bottom;
}

.description {
    padding: 5px;
    font-size: 15px;
    font-weight: normal;
}


.chartloader {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    left: 0;
    right: 0;
}

.profname {
    margin-left: 5px;
    padding-bottom: 5px;
    font-size: medium;
    margin-top: 5px;
}

.dateTimePlace {
    margin-left: 5px;
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: smaller;
    font-weight: bold;
}

#chartcontainer {
    max-width: 100%;
    height: 250px;
}

#chart {
    min-width: auto;
    max-width: 100%;
    height: 250px;
    margin: 0 auto;
    z-index: 1;
}

.card {
    transition: 0.3s;
    margin-bottom: 10px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.card:hover {
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
}

.cardcontainer {
    padding: 2px 16px;
    transition: width 300ms ease-in-out, height 300ms ease-in-out;
}

.description {
    padding: 10px;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

.topbuttons .material-button {
    display: inline-block;
}

.rmp-button {

}

.ecis-button {

}

.textbook-button{

}

.material-button {
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    margin: 10px 10px 10px 0px;
    padding: 10px 10px;
    border-radius: 10px;
    font-size: medium;
    font-style: bold;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    background: #ff9800;
    position: relative;
    overflow: hidden;
}

.material-button:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
}

@keyframes ripple {
    0% {
        transform: scale(0, 0);
        opacity: 1;
    }

    15% {
        transform: scale(25, 25);
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: scale(40, 40);
    }
}

.material-button:focus:not(:active)::after {
    animation: ripple 1s ease-out;
}

#snackbar {
    visibility: hidden;
    min-width: 250px;
    margin-left: -200px;
    background-color: #333;
    color: #fff;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
}

.descriptionli {
    padding: 0px 5px 5px 5px;
}

#snackbar.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

#semesters {
    padding: 5px;
    margin-right: 10px;
    margin-top: 10px;
}

#semesters:focus {
    outline: 0;
}


.tooltip {
  position: relative;
}

.tooltip .tooltiptext {
  visibility: hidden;
  background-color: black;
  background:rgba(1,1,1,0.5);
  color: #fff;
  text-align: left;
  border-radius: 6px;
  font-size: 10px;
  max-width: 100px;
  margin-left: 5px;
  padding: 5px 10px;
  z-index: 2;
  position: absolute;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}


@-webkit-keyframes fadein {
    from {
        bottom: 0;
        opacity: 0;
    }

    to {
        bottom: 30px;
        opacity: 1;
    }
}

@keyframes fadein {
    from {
        bottom: 0;
        opacity: 0;
    }

    to {
        bottom: 30px;
        opacity: 1;
    }
}

@-webkit-keyframes fadeout {
    from {
        bottom: 30px;
        opacity: 1;
    }

    to {
        bottom: 0;
        opacity: 0;
    }
}

@keyframes fadeout {
    from {
        bottom: 30px;
        opacity: 1;
    }

    to {
        bottom: 0;
        opacity: 0;
    }
}`;


var styleSheet = document.createElement("style");
styleSheet.innerText = css_inject;
document.head.appendChild(styleSheet);




const days = new Map([
    ["M", "Monday"],
    ["T", "Tuesday"],
    ["W", "Wednesday"],
    ["TH", "Thursday"],
    ["F", "Friday"]
]);

function getStatusColor(status, sub = false) {
    let color = "black";
    if (status.includes("open")) {
        color = sub ? Colors.open_light : Colors.open;
    } else if (status.includes("waitlisted")) {
        color = sub ? Colors.waitlisted_light : Colors.waitlisted;
    } else if (status.includes("closed") || status.includes("cancelled")) {
        color = sub ? Colors.closed_light : Colors.closed;
    } else {
        color = sub ? Colors.no_status_light : Colors.no_status;
    }
    return color;
}

function buildQuery(course_data, sem) {
    let query = !sem ? "select * from agg" : "select * from grades";
    query += " where dept like '%" + course_data["department"] + "%'";
    query += " and prof like '%" + course_data["prof_name"].replace(/'/g, "") + "%'";
    query += " and course_nbr like '%" + course_data["number"] + "%'";
    if (sem) {
        query += "and sem like '%" + sem + "%'";
    }
    return query + "order by a1+a2+a3+b1+b2+b3+c1+c2+c3+d1+d2+d3+f desc";
}

/*Course object for passing to background*/
function Course(coursename, unique, profname, datetimearr, status, link, registerlink) {
    this.coursename = coursename;
    this.unique = unique;
    this.profname = profname;
    this.datetimearr = datetimearr;
    this.status = status;
    this.link = link;
    this.registerlink = registerlink;
}

function capitalizeString(string) {
    //if one word, and if multiple words:
    let output = "";
    words = string.split(/[. ,\/ -]/);
    for (let i in words) {
        word = words[i];
        capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        output += capitalizedWord + " ";
    }
    return output.trim();
}

function separateCourseNameParts(name) {
    let num_index = name.search(/\d/);
    department = name.substring(0, num_index).trim();
    number = name.substring(num_index, name.indexOf(" ", num_index)).trim();
    name = capitalizeString(name.substring(name.indexOf(" ", num_index)).trim());
    return {
        name: name,
        department: department,
        number: number
    }
}


function separateDays(date, simple=false) {
    let arr = [];
    for (var i = 0; i < date.length; i++) {
        let letter = date.charAt(i);
        let separated_letter = letter;
        if (letter == "T" && i < date.length - 1 && date.charAt(i + 1) == "H") {
            arr.push(simple ? "TH" : days.get("TH"));
        } else {
            if (letter != "H") {
                arr.push(simple ? letter : days.get(letter));
            }
        }
    }
    return arr;
}


/*Convert time to 24hour format*/
function convertTime(time) {
    var converted = time.replace(/\./g, '').split("-");
    for (var i = 0; i < 2; i++) {
        converted[i] = moment(converted[i], ["h:mm A"]).format("HH:mm");
    }
    return converted;
}

function prettifyDaysText(arr) {
    var output = "";
    if (arr.length > 2) {
        for (var i = 0; i < arr.length; i++) {
            if (i < arr.length - 1)
                output += arr[i] + ", "
            if (i == arr.length - 2)
                output += "and ";
            if (i == arr.length - 1)
                output += arr[i];
        }
    } else if (arr.length == 2) {
        output = arr[0] + " and " + arr[1];
    } else {
        output = arr[0];
    }
    return output
}

function isIndividualCoursePage(){
    return $("#textbook_button").length != 0;
}



function htmlToNode(response) {
    return $('<div/>').html(response).contents();
}


function semesterSort(semA, semB) {
    let semOrder = {
        "Spring": 0,
        "Fall": 1,
        "Summer": 2,
        "Winter": 3
    }
    let aName = semA.split(' ')[0];
    let aYear = parseInt(semA.split(' ')[1]);
    let bName = semB.split(' ')[0];
    let bYear = parseInt(semB.split(' ')[1]);
    if (aYear < bYear)
        return -1;
    if (aYear > bYear)
        return 1;
    if (semOrder[aName] < semOrder[bName])
        return -1;
    if (semOrder[aName] > semOrder[bName])
        return 1;
    return 0;
}

/* convert from the dtarr and maek the time lines*/
function convertDateTimeArrToLine(datetimearr) {
    var output = [];
    console.log(datetimearr)
    var dtmap = makeDateTimeMap(datetimearr);
    var timearr = Array.from(dtmap.keys());
    var dayarr = Array.from(dtmap.values());
    console.log(timearr);
    console.log(dayarr);
    for (var i = 0; i < dayarr.length; i++) {
        var place = findLocation(dayarr[i], timearr[i], datetimearr);
        var building = place.substring(0, place.search(/\d/)).trim();
        building = building ? building : "Undecided Location"
        output.push({
            "days": dayarr[i],
            "start_time": timearr[i].split(",")[0],
            "end_time": timearr[i].split(',')[1],
            "location_link": `https://maps.utexas.edu/buildings/UTM/${building}`,
            "location_full": place
        })
    }
    return output;
}

function makeDateTimeMap(datetimearr) {
    var dtmap = new Map([]);
    for (var i = 0; i < datetimearr.length; i++) {
        datetimearr[i][1][0] = moment(datetimearr[i][1][0], ["HH:mm A"]).format("h:mm A");
        datetimearr[i][1][1] = moment(datetimearr[i][1][1], ["HH:mm A"]).format("h:mm A");
    }
    for (var i = 0; i < datetimearr.length; i++) {
        if (dtmap.has(String(datetimearr[i][1]))) {
            dtmap.set(String(datetimearr[i][1]), dtmap.get(String(datetimearr[i][1])) + datetimearr[i][0]);
        } else {
            dtmap.set(String(datetimearr[i][1]), datetimearr[i][0]);
        }
    }
    return dtmap
}
//find the location of a class given its days and timearrs.
function findLocation(day, timearr, datetimearr) {
    for (let i = 0; i < datetimearr.length; i++) {
        var dtl = datetimearr[i];
        if (day.includes(dtl[0])) {
            if (JSON.stringify(timearr) == JSON.stringify(reformatDateTime(dtl[1]))) {
                return dtl[2];
            }
        }
    }
}


function validateCourses(courses) {
    for (var i = 0; i < courses.length; i++) {
        if (!validateCourseObject(courses[i])) {
            return false;
        }
    }
    return true;
}

function validateCourseObject(course) {
    var is_valid = true;
    var props = ["coursename", "datetimearr", "link", "profname", "status", "unique"];
    for (let j = 0; j < props.length; j++) {
        is_valid &= course.hasOwnProperty(props[j]);
    }
    return is_valid;
}


function reformatDateTime(dtl1) {
    let output = "";
    for (let i = 0; i < dtl1.length; i++) {
        output += dtl1[i];
        if (i != dtl1.length - 1) {
            output += ",";
        }
    }
    return output;
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function buildChartConfig(data) {
    return {
        chart: {
            type: 'column',
            backgroundColor: ' #fefefe',
            spacingLeft: 10
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        legend: {
            enabled: false
        },
        xAxis: {
            title: {
                text: 'Grades'
            },
            categories: [
                'A',
                'A-',
                'B+',
                'B',
                'B-',
                'C+',
                'C',
                'C-',
                'D+',
                'D',
                'D-',
                'F'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Students'
            }
        },
        credits: {
            enabled: false
        },
        lang: {
            noData: "The professor hasn't taught this class :("
        },
        tooltip: {
            headerFormat: '<span style="font-size:small; font-weight:bold">{point.key}</span><table>',
            pointFormat: '<td style="color:{black};padding:0;font-size:small; font-weight:bold;"><b>{point.y:.0f} Students</b></td>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            bar: {
                pointPadding: 0.2,
                borderWidth: 0
            },
            series: {
                animation: {
                    duration: 700
                }
            }
        },
        series: [{
            name: 'Grades',
            data: [{
                y: data[6],
                color: '#4CAF50'
            }, {
                y: data[7],
                color: '#8BC34A'
            }, {
                y: data[8],
                color: '#CDDC39'
            }, {
                y: data[9],
                color: '#FFEB3B'
            }, {
                y: data[10],
                color: '#FFC107'
            }, {
                y: data[11],
                color: '#FFA000'
            }, {
                y: data[12],
                color: '#F57C00'
            }, {
                y: data[13],
                color: '#FF5722'
            }, {
                y: data[14],
                color: '#FF5252'
            }, {
                y: data[15],
                color: '#E64A19'
            }, {
                y: data[16],
                color: '#F44336'
            }, {
                y: data[17],
                color: '#D32F2F'
            }]
        }]
    }
}

function canNotRegister(status, register_link) {
    return status.includes("closed") || status.includes("cancelled") || !status || !register_link
}

class Timing {}
Timing.fade_time = 100;
Timing.button_delay = 75;

class Template {}

Template.Main = class {
    static modal() {
        return `<div class=modal id=myModal>
                    <div class=modal-content>
                    <span class=close>×</span>
                    <div class=card>
                            <div class=cardcontainer>
                            <h2 class=title id="title">Computer Fluency (C S 302)</h2>
                            <h2 class=profname id="profname">with <a id="professor_link">Bruce Porter</a></h2>
                            <div id="topbuttons" class=topbuttons>
                                    <button class=material-button id="rateMyProf" style="background: #4CAF50;"> RMP </button>
                                    <button class=material-button id="eCIS" style="background: #CDDC39;"> eCIS </button>
                                    <button class=material-button id="textbook" style="background: #FFC107;"> Textbook </button>
                                    <button class=material-button id="Syllabi"> Past Syllabi </button>
                                </div>
                            </div>
                        </div>
                        <div class=card>
                            <div class=cardcontainer style="">
                                <div class="chartloader">
                                    <div class="loader" id='descload'></div>
                                </div>
                                <ul class=description id="description" style="list-style-type:disc"></ul>
                            </div>
                        </div>
                        <div class=card style='text-align:center'>
                            <select id="semesters" style='text-align-last:center;color:#666666;fill:#666666;'>
                            </select>
                            <div class="chartloader">
                                <div class="loader" id='chartload'></div>
                            </div>
                            <div id="chartcontainer" class=cardcontainer>
                                <div id=chart></div>
                            </div>
                        </div>
                    </div>
                </div>`;
    }
    static extension_button() {
        return `<td data-th="Plus"><input type="image" class="distButton" id="distButton" width="20" height="20" src='https://iqt.txfa.org/static/iqt/pencil-small.png'/></td>`;
    }
};
Template.Catalog = class {
    static loading() {
        return `<div style="text-align:center">
                        <div class="loader" id='loader'></div>
                        <br>
                        <h1 id="nextlabel"style="color: #FF9800;display:none;">Loading Courses</h1>
                        <h1 id="retrylabel"style="color: #F44336;display:none;">Failed to Load Courses</h1>
                        <br>
                        <button class=material-button id="retry" style="background: #F44336;display:none;">Retry</button>
                </div>`;
    }
};

console.log(`UT Registration Plus is running on this page: ${window.location.href}`);

var curr_course = {}

var semester_code = new URL(window.location.href).pathname.split('/')[4];
var done_loading = true;

var next = $("#next_nav_link");

if (document.querySelector('#fos_fl')) {
	let params = (new URL(document.location)).searchParams;
	let dep = params.get("fos_fl");
	let level = params.get("level");
	if (dep && level) {
		if (dep.length == 3 && (level == 'U' || level == 'L' || level == 'G')) {
			document.querySelector('#fos_fl').value = dep;
			document.querySelector('#level').value = level;
		}
	}
}

//make heading and modal
if (!$("#kw_results_table").length) {
	$("table").after(Template.Catalog.loading());
	$("#container").prepend(Template.Main.modal());
	$("#myModal").prepend("<div id='snackbar'>save course popup...</div>");

	// now add to the table
	$("table thead th:last-child").after('<th scope=col>Plus</th>');
	$('table').find('tr').each(function () {
		if (!($(this).find('td').hasClass("course_header")) && $(this).has('th').length == 0) {
			$(this).append(Template.Main.extension_button());
		}
	});
}

if(isIndividualCoursePage()){
	$("#distButton").click();
}

$("body").on('click', '#distButton', function () {
	var row = $(this).closest('tr');
	$('.modal-content').stop().animate({
		scrollTop: 0
	}, 500);
	$(this).blur();
	curr_course = getCourseInfo(row);
	getDistribution(curr_course);
});


function updateLinks(course_info, first_name) {
	let {
		prof_name,
		number
	} = course_info;
	course_info["first_name"] = first_name;
	course_info["links"]["rate_my_prof"] = `http://www.ratemyprofessors.com/search.jsp?queryBy=teacherName&schoolName=university+of+texas+at+austin&queryoption=HEADER&query=${first_name} ${prof_name};&facetSearch=true`;
	course_info["links"]["ecis"] = profname ? `http://utdirect.utexas.edu/ctl/ecis/results/index.WBX?&s_in_action_sw=S&s_in_search_type_sw=N&s_in_search_name=${prof_name}%2C%20${first_name}` :
		`http://utdirect.utexas.edu/ctl/ecis/results/index.WBX?s_in_action_sw=S&s_in_search_type_sw=C&s_in_max_nbr_return=10&s_in_search_course_dept=${department}&s_in_search_course_num=${number}`;
}


function buildCourseLinks(course_info) {
	let {
		department,
		number,
		unique,
		prof_name
	} = course_info
	links = {
		"textbook": `https://www.universitycoop.com/adoption-search-results?sn=${semester_code}__${department}__${number}__${unique}`,
		"syllabi": `https://utdirect.utexas.edu/apps/student/coursedocs/nlogon/?year=&semester=&department=${department}&course_number=${number}&course_title=&unique=&instructor_first=&instructor_last=${prof_name}&course_type=In+Residence&search=Search`,
		//default ones (before first name can be used)
		"rate_my_prof": "http://www.ratemyprofessors.com/campusRatings.jsp?sid=1255",
		"ecis": "http://utdirect.utexas.edu/ctl/ecis/results/index.WBX?"
	}
	course_info["links"] = links;
	return course_info;
}

function buildBasicCourseInfo(row, course_name, individual) {
	let {
		name,
		department,
		number
	} = separateCourseNameParts(course_name);
	let instructor_text = $(row).find('td[data-th="Instructor"]').text();
	let has_initial = instructor_text.indexOf(',') > 0;
	course_info = {
		"full_name": course_name,
		"name": name,
		"department": department,
		"number": number,
		"individual": individual ? individual : $(row).find('td[data-th="Unique"] a').prop('href'),
		"register": $(row).find('td[data-th="Add"] a').prop('href'),
		"unique": $(row).find('td[data-th="Unique"]').text(),
		"status": $(row).find('td[data-th="Status"]').text(),
		"prof_name": instructor_text ? has_initial ? capitalizeString(instructor_text.split(', ')[0]) : capitalizeString(instructor_text) : "Undecided",
		"initial": instructor_text && has_initial ? instructor_text.split(', ')[1].substring(0, 1) : "",
		"time_data": {
			"days": $(row).find('td[data-th="Days"]>span').toArray().map(x => $(x).text().trim()),
			"times": $(row).find('td[data-th="Hour"]>span').toArray().map(x => $(x).text().trim()),
			"places": $(row).find('td[data-th="Room"]>span').toArray().map(x => $(x).text().trim())
		},
		"links": {}
	}
	return buildCourseLinks(course_info);
}

/*For a row, get all the course information and add the date-time-lines*/
function getCourseInfo(row) {
	let course_name = "";
	let course_row = {}
	let individual = undefined;
	if (isIndividualCoursePage()) {
		course_name = $("#details h2").text();
		course_row = $('table');
		individual = document.URL;
	} else {
		$('table').find('tr').each(function () {
			if ($(this).find('td').hasClass("course_header")) {
				course_name = $(this).find('td').text() + "";
			}
			if ($(this).is(row)) {
				course_row = row;
				return false;
			}
		});
	}
	curr_course = buildBasicCourseInfo(course_row, course_name, individual);
	getDescription(curr_course);
	return curr_course;
}



/* For a row, get the date-time-array for checking conflicts*/
function getDayTimeArray(row, course_info) {
	var day_time_array = []
	let days = course_info ? course_info["time_data"]["days"] : $(row).find('td[data-th="Days"]>span').toArray().map(x => $(x).text().trim());
	let times = course_info ? course_info["time_data"]["times"] : $(row).find('td[data-th="Hour"]>span').toArray().map(x => $(x).text().trim());
	let places = course_info ? course_info["time_data"]["places"] : $(row).find('td[data-th="Room"]>span').toArray().map(x => $(x).text().trim());
	for (var i = 0; i < days.length; i++) {
		let date = days[i];
		let time = times[i];
		let place = places[i];
		for (var j = 0; j < date.length; j++) {
			let letter = date.charAt(j);
			if (letter == "T" && j < date.length - 1 && date.charAt(j + 1) == "H") {
				day_time_array.push(["TH", convertTime(time), place]);
			} else {
				if (letter != "H")
					day_time_array.push([letter, convertTime(time), place]);
			}
		}
	}
	return day_time_array;
}

function convertDateTimeArrToLine(date, time, place) {
	let arr = separateDays(date)
	let output = prettifyDaysText(arr)
	let building = place.substring(0, place.search(/\d/) - 1);
	building = building ? building : "Undecided Location";
	return `${output} at ${time.replace(/\./g, '').replace(/\-/g, ' to ')} in <a style='font-size:medium' target='_blank' href='https://maps.utexas.edu/buildings/UTM/${building}'>${building}</>`;
}

function badData(course_data, res) {
	return typeof res == 'undefined' || course_data["prof_name"] == "Undecided";
}

/*Query the grades database*/
function getDistribution(course_data) {
	toggleChartLoading(true);
	openDialog(course_data);
}

function buildTitle(course_data) {
	return `${course_data["name"]} (${course_data["department"]} ${course_data["number"]})`
}

function buildTimeTitle(course_info) {
	$("h2.dateTimePlace").remove();
	let {
		days,
		times,
		places
	} = course_info["time_data"]
	var lines = [];
	for (let i = 0; i < days.length; i++) {
		var date = days[i];
		var time = times[i];
		var place = places[i];
		lines.push($(`<h2 class="dateTimePlace">${convertDateTimeArrToLine(date, time, place)}</th>`));
	}
	return lines;
}

function buildProfTitle(course_data) {
	const {
		initial,
		prof_name
	} = course_data;
	return `with ${initial?initial+". ":""}${prof_name}`;
}


function buildSemestersDropdown(course_data, res) {
	$("#semesters").empty();
	if (badData(course_data, res)) {
		$("#semesters").append("<option>No Data</option>")
	} else {
		var semesters = res.values[0][18].split(",");
		semesters.sort(semesterSort);
		semesters.reverse().unshift('Aggregate');
		var sems = [];
		for (var i = 0; i < semesters.length; i++) {
			sems.push($(`<option value="${semesters[i]}">${semesters[i]}</option>`));
		}
		$("#semesters").append(sems);
	}
}


function displayBasicCourseInfo(course_info){
	$("#title").text(buildTitle(course_info))
	$("#topbuttons").before(buildTimeTitle(course_info));
	$("#profname").text(buildProfTitle(course_info));
	$("#myModal").show();
	console.log(course_info);
}

/*Open the modal and show all the data*/
function openDialog(course_info) {
	displayBasicCourseInfo(course_info);
	allowClosing();
}

var error_message = "<p style='color:red;font-style:bold'>You have been logged out. Please refresh the page and log back in using your UT EID and password.</p>";

function buildFormattedDescription(description_lines) {
	let description = ""
	for (let i in description_lines) {
		let sentence = description_lines[i];
		if (sentence.indexOf("Prerequisite") == 0)
			sentence = `<li style='font-weight: bold;' class='descriptionli'>${sentence}</li>`;
		else if (sentence.indexOf("May be") >= 0)
			sentence = `<li style='font-style: italic;' class='descriptionli'>${sentence}</li>`;
		else if (sentence.indexOf("Restricted to") == 0)
			sentence = `<li style='color:red;' class='descriptionli'>${sentence}</li>`;
		else
			sentence = `<li class='descriptionli'>${sentence}</li>`;
		description += sentence;
	}
	if (!description)
		description = error_message;
	return description;
}

function extractFirstName(response_node) {
	let full_name = response_node.find('td[data-th="Instructor"]').text().split(', ');
	let first = full_name[full_name.length - 1];
	first = first.indexOf(' ') > 0 ? first.split(' ')[0] : first;
	return capitalizeString(first);
}

function displayDescription(description) {
	toggleDescriptionLoading(false);
	$("#description").animate({
		'opacity': 0
	}, 200, function () {
		$(this).html(description).animate({
			'opacity': 1
		}, 200);
	});
}

/*Get the course description from the profurl and highlight the important elements, as well as set the eCIS, and rmp links.*/
function getDescription(course_info) {
	toggleDescriptionLoading(true);
	$.ajax({
		url: course_info["individual"],
		success: function (response) {
			if (response) {
				let response_node = htmlToNode(response);
				description_lines = response_node.find('#details > p').toArray().map(x => $(x).text());
				displayDescription(buildFormattedDescription(description_lines));
				let first_name = extractFirstName(response_node);
				updateLinks(course_info, first_name);
			} else {
				displayDescription(error_message);
			}
		}
	});
}

function loadNextPages(num_pages) {
	if (num_pages === undefined) num_pages = 1;
	if (num_pages == 0) return;
    let link = next.prop('href');
    if (done_loading && next && link) {
        toggleLoadingPage(true);
        $.get(link, function (response) {
            if (response) {
                var next_page = htmlToNode(response);
                var current = $('tbody');
                var old_length = $('tbody tr').length;
                var last = current.find('.course_header>h2:last').text();
                next = next_page.find("#next_nav_link");
                toggleLoadingPage(false);
                var new_rows = [];
                next_page.find('tbody>tr').each(function () {
                    let has_course_header = $(this).find('td').hasClass("course_header");
                    if (!(has_course_header && $(this).has('th').length == 0))
                        $(this).append(Template.Main.extension_button());
                    if (!(has_course_header && last == $(this).find('td').text()))
                        new_rows.push($(this));
                });
                current.append(new_rows);
            }
            loadNextPages(num_pages-1);
        }).fail(function () {
            toggleLoadingPage(false);
            $("#retrylabel").css('display', 'inline-block');
            $('#retry').css('display', 'inline-block');
        });
    }
}

$("#Syllabi").click(function () {
	setTimeout(function () {
		window.open(curr_course["links"]["syllabi"]);
	}, Timing.button_delay);
});
$("#rateMyProf").click(function () {
	setTimeout(function () {
		window.open(curr_course["links"]["rate_my_prof"]);
	}, Timing.button_delay);
});
$("#eCIS").click(function () {
	setTimeout(function () {
		window.open(curr_course["links"]["ecis"]);
	}, Timing.button_delay);
});
$("#textbook").click(function () {
	setTimeout(function () {
		window.open(curr_course["links"]["textbook"]);
	}, Timing.button_delay);
});

$("#retry").click(function () {
	$("#retrylabel").hide();
	$(this).hide();
	loadNextPages();
});

function toggleLoadingPage(loading) {
	if (loading) {
		done_loading = false;
		$('#loader').css('display', 'inline-block');
		$("#nextlabel").css('display', 'inline-block');
	} else {
		done_loading = true;
		$('#loader').hide();
		$("#nextlabel").hide();
	}
}

function toggleChartLoading(loading) {
	if (loading) {
		$('#chartload').css('display', 'inline-block');
		$("#chart").hide();
	} else {
		$('#chartload').hide();
		$("#chart").show();
	}
}

function toggleDescriptionLoading(loading) {
	if (loading) {
		$('#descload').css('display', 'inline-block');
	} else {
		$('#descload').hide();
	}
}

function toggleSnackbar() {
	setTimeout(function () {
		$("#snackbar").attr("class", "show");
	}, 200);
	setTimeout(function () {
		$("#snackbar").attr("class", "");
	}, 3000);
}


function allowClosing() {
	$('.close').click(function () {
		close();
	});
	$('#myModal').click(function (event) {
		if (event.target.id == 'myModal') {
			close();
		}
	});
}

function close() {
	$("#myModal").hide();
	$("#snackbar").attr("class", "");
}

$(document).keydown(function (e) {
	/*Close Modal when hit escape*/
	if (e.keyCode == 27) {
		close();
	}
});


$(window).scroll(function () {
	if ($(document).height() <= $(window).scrollTop() + $(window).height() + 150)
		loadNextPages();
});


$(window).on('load', function () {
	loadNextPages(3);
});
