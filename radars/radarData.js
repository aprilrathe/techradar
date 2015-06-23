//This is the title for your window tab, and your Radar
document.title = "Technology Radar (July 2015)";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize:
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1250;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 35,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [
            // Adopt: r 0-100
            {name: 'Git Workflow', pc:{r:80, t:110}, movement:'t'},
            {name: 'Automated Builds', pc:{r:60, t:130}, movement:'t'},
            {name: 'Library Management', pc:{r:80, t:140}, movement:'t'},
            {name: 'Unit Testing', pc:{r:60, t:150}, movement:'t'},
            {name: 'Integration Testing', pc:{r:80, t:140}, movement:'t'},
            {name: 'Automated Deployment', pc:{r:20, t:150}, movement:'t'},
            {name: 'Offshore Development', pc:{r:40, t:160}, movement:'t'},
            {name: 'Firmwide Knowledge Base', pc:{r:80, t:170}, movement:'t'},
            {name: 'Single Page Web App', pc:{r:80, t:170}, movement:'t'},
            {name: 'Responsive Design', pc:{r:80, t:170}, movement:'t'},
            {name: 'RESTful Web Services', pc:{r:80, t:170}, movement:'t'},
            // Trial: r 100 - 200
            {name: 'Web Services based Integration', pc:{r:150, t:140}, movement:'t'},
            // Assess: r 200 - 300
            {name: 'Database Source Code Management', pc: {r:250, t:145}, movement:'t'},
            {name: 'Automate Database Deployment', pc: {r:250, t:115}, movement:'t'},
            // Hold: r 300 - 400
            {name: 'Thick Clients', pc: {r: 340, t: 120 }, movement:'t'},
            {name: 'SOAP', pc: {r: 320, t: 110 }, movement:'t'},
            {name: 'Stored Procedures for Business Logic', pc: {r: 340, t: 140 }, movement:'t'},
            {name: 'Database based Integration', pc: {r: 380, t: 160 }, movement:'t'}

        ]
    },
    { "quadrant": "Tools",
        "left": w-200+10,
        "top" : 18,
        "color" : "#587486",
        "items" : [
          // Adopt: r 0-100
          {name: 'Grafana', pc:{r:85, t:5}, movement:'t'},
          {name: 'Bamboo', pc:{r:90, t:23}, movement:'t'},
          {name: 'MicroStrategy', pc:{r:68, t:10}, movement:'t'},
          {name: 'Artifactory', pc:{r:40, t:12}, movement:'t'},
          {name: 'ActivePivot', pc:{r:85, t:50}, movement:'t'},
          {name: 'Puppet', pc:{r:80, t:35}, movement:'c'},
          {name: 'Balsamiq', pc:{r:60, t:55}, movement:'t'},
          {name: 'Rapptr', pc:{r:70, t:80}, movement:'t'},
          {name: 'Advise', pc:{r:50, t:76}, movement:'t'},
          {name: 'GitHub', pc:{r:40, t:46}, movement:'t'},
          {name: 'InfluxDB', pc:{r:88, t:65}, movement:'t'},
          {name: 'Enterprise Vault', pc:{r:20, t:50}, movement:'t'},
          // Trial: r 100 - 200
          {name: 'RabbitMQ', pc:{r:170, t:15}, movement:'c'},
          {name: 'Ping', pc:{r:120, t:40}, movement:'t'},
          {name: 'RoadMap Confluence Plug-in', pc:{r:170, t:80}, movement:'t'},
          {name: 'FITS', pc:{r:150, t:50}, movement:'t'},
          {name: 'DART', pc:{r:180, t:25}, movement:'t'},
          {name: 'Ansible', pc:{r:140, t:35}, movement:'c'},
          // Assess: r 200 - 300
          {name: 'Splunk', pc: {r:250, t:74}, movement:'t'},
          {name: 'FlyWay', pc: {r:250, t:54}, movement:'t'},
          {name: 'RedGate', pc: {r:250, t:54}, movement:'t'},
          {name: 'Logstash', pc:{r:280, t:30}, movement:'t'},
          // Hold: r 300 - 400
          {name: 'TFS', pc: {r: 350, t: 20 }, movement:'c'},
          {name: 'Subversion', pc: {r: 320, t: 70 }, movement:'c'},
          {name: 'Jenkins', pc: {r: 350, t: 40 }, movement:'c'},
          {name: 'MessageStats', pc: {r: 350, t: 60 }, movement:'t'},
          {name: 'Crucible', pc: {r: 380, t: 30 }, movement:'t'},
          {name: 'Fisheye', pc: {r: 380, t: 10 }, movement:'t'}
  ]
    },
    { "quadrant": "Platforms",
        "left" :35,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
          // t 180-270
          // Adopt: r 0-100
          {name: 'VDI', pc:{r:30, t:225}, movement:'t'},
          {name: 'NetApp', pc:{r:90, t:265}, movement:'t'},
          {name: 'SQL Server 2012', pc:{r:95, t:250}, movement:'t'},
          {name: 'SQL Availability Groups', pc:{r:20, t:225}, movement:'t'},
          {name: 'SSIS', pc:{r:65, t:250}, movement:'t'},
          {name: 'Pure', pc:{r:30, t:205}, movement:'t'},
          {name: 'ServiceNow', pc:{r:95, t:190}, movement:'t'},
          {name: 'OneTick', pc:{r:25, t:180}, movement:'t'},
          {name: 'RedHat Linux', pc:{r:5, t:250}, movement:'t'},
          // Trial: r 100 - 200
          {name: 'AWS', pc:{r:140, t:230}, movement:'t'},
          {name: 'AirWatch', pc:{r:110, t:260}, movement:'t'},
          {name: 'NavEx Policy Managment', pc:{r:120, t:230}, movement:'t'},
          {name: 'Sentinel Log Automation', pc:{r:200, t:260}, movement:'t'},
          {name: 'Dynatrace', pc:{r:160, t:230}, movement:'t'},
          {name: 'TR Eikon', pc:{r:140, t:260}, movement:'t'},
          {name: 'Cisco ISE', pc:{r:130, t:180}, movement:'t'},
          {name: 'DDN', pc:{r:130, t:190}, movement:'t'},
          {name: 'Elasticsearch', pc:{r:120, t:195}, movement:'c'},
          // Assess: r 200 - 300
          {name: 'Cisco Telepresence', pc:{r:250, t:260}, movement:'t'},
          {name: 'MySQL', pc:{r:205, t:260}, movement:'t'},
          {name: 'DDOS', pc:{r:210, t:180}, movement:'t'},
          {name: 'Bloomberg BPipe', pc:{r:235, t:210}, movement:'t'},
          {name: 'Factset', pc:{r:220, t:240}, movement:'t'},
          {name: 'Charles River', pc:{r:215, t:260}, movement:'t'},
          {name: 'Fidessa Minerva', pc:{r:280, t:260}, movement:'t'},
          {name: 'SalesForce', pc:{r:275, t:282}, movement:'t'},
          {name: 'Factset Terminals', pc:{r:240, t:260}, movement:'t'},
          {name: 'IDC Market-Q Terminals', pc:{r:275, t:190}, movement:'t'},
          {name: 'Ubuntu', pc:{r:235, t:210}, movement:'t'},
          {name: 'Exergy', pc:{r:260, t:220}, movement:'t'},
          {name: 'Azure', pc:{r:295, t:180}, movement:'t'},
          // Hold: r 300 - 400
          {name: 'Hitachi SAN', pc: {r:390, t:190}, movement:'c'},
          {name: 'Bloomberg Terminals', pc: {r:350, t:215}, movement:'c'},
          {name: 'Solaris', pc: {r:390, t:215}, movement:'t'},
          {name: 'Windows 2003 Servers', pc: {r:390, t:260}, movement:'c'},
          {name: 'Windows File Servers', pc: {r:350, t:245}, movement:'c'},
          {name: 'BlackBerry', pc: {r:390, t:215}, movement:'t'}

        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+10),
        "top" :   (h/2 + 18),
        "items" : [
          // t: 270-360
          // Adopt: r 0-100,
          {name: 'KendoUI', pc:{r:50, t:295}, movement:'t'},
          {name: 'Scala', pc:{r:80, t:340}, movement:'t'},
          {name: 'AngularJS', pc:{r:70, t:320}, movement:'t'},
          {name: 'Bootstrap', pc:{r:50, t:340}, movement:'t'},
          {name: 'jQuery', pc:{r:80, t:300}, movement:'t'},
          {name: 'Java 1.8', pc:{r:28, t:295}, movement:'t'},
          // Trial: r 100 - 200
          {name: 'HTCondor', pc:{r:120, t:340}, movement:'t'},
          {name: 'Redis', pc:{r:130, t:310}, movement:'t'},
          {name: 'Less CSS', pc:{r:180, t:280}, movement:'t'},
          {name: 'D3', pc:{r:180, t:340}, movement:'t'},
          // Assess: r 200 - 300
          {name: 'Ufora', pc:{r:250, t:300}, movement:'t'},
          // Hold : r 300 - 400
          {name: 'ASP.NET', pc: {r: 320, t: 330 }, movement:'t'}

        ]
    }
];
