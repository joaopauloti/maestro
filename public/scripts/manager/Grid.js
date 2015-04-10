//>>built
define("manager/Grid",["dojo/_base/declare","dojo/store/Memory"],function(f,g){return f("Manager.Grid",[],{constructor:function(a,b){this.name=a;this.page=b;this.idSelect=this.name+"_SELECT_CHECKED";this.firstIndex=0;this.data=null;this.goPageStore=new g;this.hover()},hover:function(){dojo.query("table#"+this.name+" tbody tr").forEach(function(a,b,c){manager.hover(a.id,function(a){a.currentTarget.originalClassName="row"+b%2;a.currentTarget.className=a.currentTarget.className.replace(a.currentTarget.originalClassName,
"rowenter")},function(a){a.currentTarget.className=a.currentTarget.className.replace("rowenter",a.currentTarget.originalClassName)})})},selectRow:function(a){dojo.query("table#"+this.name+" tbody tr").forEach(function(b,c,d){b.index=c;dojo.connect(b,"ondblclick",function(b){a(b.currentTarget.index)})})},setData:function(a){this.data=a},addGoPage:function(a){for(var b=0;b<a.length;b++)this.goPageStore.add(a[b])},getGoPage:function(){return this.goPageStore},changeRow:function(a){var b=manager.byId(this.name+
"-row-"+a);b||(b=manager.byId(this.name+"DGrid-row-"+a));a=dijit.byId(this.name+"_SELECT["+a+"]");var c=b.originalClassName?b.originalClassName:b.className;a.get("checked")?b.className=c+"Checked":b.className=c.replace("Checked","")},check:function(a,b){var c=dijit.byId(this.name+"_SELECT["+a+"]"),d=manager.getElementById(this.idSelect);c.get("checked")?d.value=(""!=d.value?d.value+":":"")+b:d.value=d.value.replace(RegExp("^"+b+":?|"+b+":?|:?"+b+"$"),"");this.changeRow(a)},checkAll:function(a){for(var b=
dijit.byId(this.name+"chkAll"),c=0;c<a;c++){var d=this.firstIndex+c,e=dijit.byId(this.name+"_SELECT["+d+"]");b.checked!=e.checked&&(e.checked?(value=e.get("value"),e.set("checked",!1)):(e.set("checked",!0),value=e.get("value")),this.check(d,value))}},checkEachRow:function(a){for(var b=0;b<a;b++)this.changeRow(this.firstIndex+b)},goPage:function(a){manager.setElementValueById(this.name+"_PAGING","yes");manager.setElementValueById(this.name+"_PAGE",this.page);manager.setElementValueById(this.name+"_GOPAGE",
a);manager.doPostBack(this.name)}})});
//@ sourceMappingURL=Grid.js.map