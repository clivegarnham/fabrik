/*! fabrik */
var Canvas=new Class({Implements:[Options],options:{tabs:["page1"],tabelement:"",pagecontainer:"packagepages",editable:!1},initialize:function(a){this.setOptions(a),Fabrik.addEvent("fabrik.page.insert",function(a){this.insertPage(a)}.bind(this)),this.iconGen=new IconGenerator({scale:.5}),this.pages=new Pages(this.options.pagecontainer,this.options.editable),this.tabs=new Tabs(this.options.tabelement,this.options.tabs,this.options.editable)},setup:function(){this.pages.fromJSON(this.options.layout)},setDrags:function(){document.id("typeList").getElements("li").each(function(a){a.addEvent("mousedown",function(b){var c=a.clone().setStyles(a.getCoordinates()).store("type",a.retrieve("type")).setStyles({opacity:.7,position:"absolute"}).addEvent("emptydrop",function(){a.dispose()}).inject(document.body),d=c.makeDraggable({droppables:this.drops,onComplete:function(){this.detach()},onEnter:function(a,b){b.tween("background-color","#98B5C1")},onLeave:function(a,b){b.tween("background-color","#fff")},onDrop:function(a,b){b&&(this.insertLocation=a.getCoordinates(b),this.openListWindow(a.retrieve("type")),b.tween("background-color","#fff")),c.dispose()}.bind(this)});d.start(b)}.bind(this))}.bind(this))},setDrops:function(){this.options.tabs=this.tabs.tabs.getKeys(),this.drops=this.pages.getHTMLPages()}});