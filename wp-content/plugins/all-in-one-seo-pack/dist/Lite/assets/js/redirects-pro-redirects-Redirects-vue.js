(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["redirects-pro-redirects-Redirects-vue","redirects-pro-partials-ServerConfigReloadWarning-vue","redirects-pro-redirects-Table-vue"],{"1c9e":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"aioseo-redirects"},[s("server-config-reload-warning"),s("core-card",{attrs:{slug:"addNewRedirection","header-text":e.strings.addNewRedirection}},[s("core-add-redirection",{attrs:{urls:e.getUrls,target:e.getTarget}})],1),s("Table")],1)},i=[],n=(s("159b"),s("51da")),o=s("e762"),l=s("9c0e"),a=s("ab04"),c=s("3a6a"),d={components:{Table:c["default"],ServerConfigReloadWarning:a["default"]},mixins:[l["g"]],data:function(){return{queryUrls:[],strings:{addNewRedirection:this.$t.__("Add New Redirection",this.$td)}}},computed:{getTarget:function(){return this.queryUrls.length?"/":""},getUrls:function(){var e=this;if(this.queryUrls.length)return this.queryUrls;var t=Object(n["a"])();if(void 0===t["aioseo-add-urls"])return[];var s="";try{s=JSON.parse(o["a"].decode(decodeURIComponent(t["aioseo-add-urls"])))}catch(r){}return s.forEach((function(t){e.queryUrls.push({id:t.id,url:decodeURIComponent(t.url),regex:!1,ignoreSlash:e.slash||!1,ignoreCase:e.case||!1,errors:[],warnings:[]})})),this.queryUrls}}},u=d,h=s("2877"),_=Object(h["a"])(u,r,i,!1,null,null,null);t["default"]=_.exports},"1ddf":function(e,t,s){},2094:function(e,t,s){"use strict";s("1ddf")},"3a6a":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"aioseo-redirects-table"},[s("base-wp-table",{key:e.wpTableKey,ref:"table",attrs:{filters:e.filters,totals:e.totals.main,columns:e.columns,rows:e.getRows,initialPageNumber:e.tableFields.main.paginatedPage,initialSearchTerm:e.tableFields.main.searchTerm,loading:e.wpTableLoading,"search-label":e.strings.searchUrls,"bulk-options":e.bulkOptions,"additional-filters":e.additionalFilters,showBulkActions:e.showBulkActions,showTableFooter:e.showTableFooter,showHeader:e.showHeader},on:{"filter-table":e.filterTable,"process-bulk-action":e.processBulkAction,"process-additional-filters":e.processAdditionalFilters,paginate:e.processPagination,search:e.processSearch},scopedSlots:e._u([{key:"source_url",fn:function(t){var r=t.row,i=t.index,n=t.column,o=t.editRow;return[s("strong",[s("a",{staticClass:"edit-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),o(i)}}},[e._v(e._s(n))])]),s("div",{staticClass:"row-actions"},[s("span",{staticClass:"edit"},[s("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),o(i)}}},[e._v(e._s(e.strings.edit))]),e._v(" | ")]),r.enabled?s("span",{staticClass:"test"},[s("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.showRedirectTest(r)}}},[e._v(e._s(e.strings.checkRedirect))]),e._v(" | ")]):e._e(),s("span",{staticClass:"trash"},[s("a",{staticClass:"submitdelete",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.maybeDeleteRow(i)}}},[e._v(e._s(e.strings.delete))])])])]}},{key:"type",fn:function(t){var s=t.column;return[e._v(" "+e._s(e.getColumnLabel(s))+" ")]}},{key:"enabled",fn:function(t){var r=t.column,i=t.row;return[s("div",{staticStyle:{"text-align":"right"}},[s("base-toggle",{attrs:{value:r},on:{input:function(t){return e.toggleInput(i,r)}}})],1)]}},{key:"edit-row",fn:function(t){var r=t.row,i=t.editRow;return[s("core-add-redirection",{attrs:{edit:"",url:{id:r.id,url:r.source_url,regex:r.regex,ignoreSlash:r.ignore_slash,ignoreCase:r.ignore_case,showOptions:!0,errors:[],warnings:[]},target:r.target_url,type:r.type,query:r.query_param,rules:r.custom_rules,disableSource:e.disableSource},on:{cancel:function(e){return i(null)}}})]}},{key:"actions",fn:function(t){var r=t.row;return[r.custom_rules&&0<r.custom_rules.length?s("span",[s("core-tooltip",{attrs:{type:"action"},scopedSlots:e._u([{key:"tooltip",fn:function(){return[e._v(" "+e._s(e.strings.rules)+" ")]},proxy:!0}],null,!0)},[s("svg-circle-information",{staticClass:"log-info",nativeOn:{click:function(t){return e.showCustomRuleInfo(r)}}})],1)],1):e._e()]}}])}),e.showDeleteModal?s("core-modal",{attrs:{"no-header":""},scopedSlots:e._u([{key:"body",fn:function(){return[s("div",{staticClass:"aioseo-modal-body"},[s("button",{staticClass:"close",on:{click:function(t){t.stopPropagation(),e.showDeleteModal=!1}}},[s("svg-close",{on:{click:function(t){e.showDeleteModal=!1}}})],1),s("h3",[e._v(e._s(e.areYouSureDeleteRedirect))]),s("div",{staticClass:"reset-description",domProps:{innerHTML:e._s(e.strings.actionCannotBeUndone)}}),s("base-button",{attrs:{type:"blue",size:"medium",loading:e.deletingRow},on:{click:e.processDeleteRow}},[e._v(" "+e._s(e.yesDeleteRedirect)+" ")]),s("base-button",{attrs:{type:"gray",size:"medium"},on:{click:function(t){e.showDeleteModal=!1}}},[e._v(" "+e._s(e.strings.noChangedMind)+" ")])],1)]},proxy:!0}],null,!1,1995483884)}):e._e(),e.customRuleInfo?s("core-modal",{on:{close:function(t){e.customRuleInfo=null}},scopedSlots:e._u([{key:"headerTitle",fn:function(){return[e._v(" "+e._s(e.strings.customRules)+" ")]},proxy:!0},{key:"body",fn:function(){return[s("div",{staticClass:"aioseo-modal-body custom-rule-info"},e._l(e.customRuleInfo,(function(t,r){return s("div",{key:r},[s("div",{staticClass:"rule"},[s("strong",[e._v(e._s(e.$constants.REDIRECTS_CUSTOM_RULES_LABELS[t.type])+":")]),e._v(" "+e._s("object"===typeof t.value||t.key?"":e.$constants.REDIRECTS_CUSTOM_RULES_LABELS[t.value]||t.value)+" "),e.isObject(t.value)?s("ul",e._l(t.value,(function(t,r){return s("li",{key:r},[e._v(e._s(e.$constants.REDIRECTS_CUSTOM_RULES_LABELS[t]||t)+" ")])})),0):e._e(),t.key?s("ul",[s("li",[s("strong",[e._v(e._s(t.key)+":")]),e._v(" "+e._s(t.value))])]):e._e()]),t.regex?s("div",{staticClass:"regex"},[s("base-toggle",{attrs:{value:t.regex,disabled:!0}},[e._v(" "+e._s(e.strings.regex)+" ")])],1):e._e()])})),0)]},proxy:!0}],null,!1,2065651901)}):e._e(),e.redirectTestInfo?s("core-modal",{staticClass:"redirect-test",on:{close:function(t){e.redirectTestInfo=null}},scopedSlots:e._u([{key:"headerTitle",fn:function(){return[s("div",{staticClass:"title"},[e._v(e._s(e.strings.redirectTest)+":")]),s("core-tooltip",{scopedSlots:e._u([{key:"tooltip",fn:function(){return[s("div",[e._v(" "+e._s(e.redirectTestInfo.source_url)+" ")])]},proxy:!0}],null,!1,1774762636)},[s("div",{staticClass:"source"},[e._v(e._s(e.redirectTestInfo.source_url))])])]},proxy:!0},{key:"body",fn:function(){return[s("div",{staticClass:"aioseo-modal-body"},[s("div",{staticClass:"custom-url"},[e.redirectTestInfo.regex?s("core-alert",{staticClass:"alert-regex",attrs:{type:"blue",size:"medium"}},[s("svg-circle-information"),s("span",{domProps:{innerHTML:e._s(e.strings.regexNeedsUrl)}})],1):e._e(),s("div",{staticClass:"label"},[e._v(" "+e._s(e.strings.customUrl)+" "),s("core-tooltip",{scopedSlots:e._u([{key:"tooltip",fn:function(){return[s("span",{domProps:{innerHTML:e._s(e.customUrlDescription(e.redirectTestInfo))}})]},proxy:!0}],null,!1,2322812326)},[s("svg-circle-question-mark")],1)],1),s("div",{staticClass:"custom-url-input"},[s("base-input",{attrs:{size:"medium",value:e.redirectTestUrl,disabled:e.redirectTestLoading},on:{input:function(t){return e.redirectTestUrl=t}}}),s("base-button",{attrs:{type:"green",size:"medium",loading:e.redirectTestLoading},on:{click:function(t){return t.preventDefault(),e.redirectTest(e.redirectTestInfo.id)}}},[e._v(" "+e._s(e.strings.testUrl)+" ")])],1)],1),e.redirectTestResult?s("div",{staticClass:"redirect-results"},[s("div",{staticClass:"result"},[0===e.redirectTestResult.errors.length?s("core-alert",{attrs:{type:"green",size:"medium"}},[s("svg-circle-check"),e._v(" "+e._s(e.strings.redirectResultOk)+" ")],1):e._e(),0<e.redirectTestResult.errors.length?s("core-alert",{attrs:{type:"red",size:"medium"}},[s("svg-circle-close"),e._v(" "+e._s(e.strings.redirectResultError)+" ")],1):e._e()],1),s("div",{staticClass:"summary"},[s("div",{staticClass:"label"},[e._v(e._s(e.strings.summary))]),s("table",{staticClass:"redirects-options-table small"},[s("thead",[s("tr",[s("td"),s("td",[e._v(e._s(e.strings.expected))]),s("td",[e._v(e._s(e.strings.result))])])]),s("tbody",[s("tr",{staticClass:"even"},[s("td",[e._v(e._s(e.strings.responseCode)+":")]),s("td",[e._v(e._s(e.redirectTestInfo.type))]),s("td",[e._v(e._s(e.redirectTestResult.redirect.responseCode))])]),e.redirectTestResult.redirect.location?s("tr",[s("td",[e._v(e._s(e.strings.targetUrl)+":")]),s("td",[e._v(e._s(e.redirectTestResult.redirect.targetUrl))]),s("td",[e._v(e._s(e.redirectTestResult.redirect.location))])]):e._e(),e.redirectTestResult.redirect.xRedirectBy?s("tr",{staticClass:"even"},[s("td",[e._v(e._s(e.strings.xRedirectBy)+":")]),s("td",[e._v("AIOSEO")]),s("td",[e._v(e._s(e.redirectTestResult.redirect.xRedirectBy))])]):e._e()])])]),0<e.redirectTestResult.errors.length?s("div",{staticClass:"errors"},[s("div",{staticClass:"label"},[e._v(e._s(e.strings.errors))]),s("core-alert",{attrs:{type:"red",size:"medium"}},[s("ul",e._l(e.redirectTestResult.errors,(function(t,r){return s("li",{key:r},[s("span",{domProps:{innerHTML:e._s(t)}})])})),0)])],1):e._e()]):e._e()])]},proxy:!0}],null,!1,1483869538)}):e._e()],1)},i=[],n=s("53ca"),o=s("5530"),l=(s("c740"),s("4de4"),s("7db0"),s("99af"),s("d81d"),s("ac1f"),s("841c"),s("fb6a"),s("5319"),s("2f62")),a=s("9c0e"),c={mixins:[a["g"]],props:{showBulkActions:{type:Boolean,default:function(){return!0}},showTableFooter:{type:Boolean,default:function(){return!0}},showHeader:{type:Boolean,default:function(){return!0}},disableSource:{type:Boolean,default:function(){return!1}},excludeColumns:Array},data:function(){return{queryUrls:[],deletingRow:!1,showDeleteModal:!1,shouldDeleteRow:null,wpTableKey:0,wpTableLoading:!1,strings:{searchUrls:this.$t.__("Search URLs",this.$td),edit:this.$t.__("Edit",this.$td),checkRedirect:this.$t.__("Check Redirect",this.$td),delete:this.$t.__("Delete",this.$td),areYouSureDeleteRedirect:this.$t.__("Are you sure you want to delete this redirect?",this.$td),areYouSureDeleteRedirects:this.$t.__("Are you sure you want to delete these redirects?",this.$td),actionCannotBeUndone:this.$t.__("This action cannot be undone.",this.$td),yesDeleteRedirect:this.$t.__("Yes, I want to delete this redirect",this.$td),yesDeleteRedirects:this.$t.__("Yes, I want to delete these redirects",this.$td),noChangedMind:this.$t.__("No, I changed my mind",this.$td),rules:this.$t.__("Rules",this.$td),customRules:this.$t.__("Custom Rules",this.$td),regex:this.$t.__("Regex",this.$td),redirectTest:this.$t.__("Check redirect for",this.$td),summary:this.$t.__("Summary",this.$td),errors:this.$t.__("Errors",this.$td),responseCode:this.$t.__("Response Code",this.$td),sourceUrl:this.$t.__("Source URL",this.$td),targetUrl:this.$t.__("Target URL",this.$td),xRedirectBy:this.$t.__("Redirected By",this.$td),customUrl:this.$t.__("Custom URL",this.$td),testUrl:this.$t.__("Test Redirect",this.$td),redirectResultOk:this.$t.__("Woohoo! Your redirect worked perfectly!",this.$td)+" 🎉",redirectResultError:this.$t.__("Whoops! Your URL failed to redirect properly.",this.$td)+" 🤔",expected:this.$t.__("Expected",this.$td),result:this.$t.__("Result",this.$td),regexNeedsUrl:this.$t.sprintf(this.$t.__("You are using %1$sRegex%2$s for this redirect so you will need to manually add a URL to test.",this.$td),"<strong>","</strong>")},bulkOptions:[{label:this.$t.__("Enable",this.$td),value:"enable"},{label:this.$t.__("Disable",this.$td),value:"disable"},{label:this.$t.__("Reset Hits",this.$td),value:"reset-hits"},{label:this.$t.__("Delete",this.$td),value:"delete"}],customRuleInfo:null,redirectTestInfo:null,redirectTestResult:!1,redirectTestLoading:!1,redirectTestUrl:""}},watch:{rows:{deep:!0,handler:function(){this.wpTableKey+=1}}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(l["c"])("redirects",["rows","getCurrentFilter"])),Object(l["e"])("redirects",["filters","totals","tableFields","options","selectedFilters"])),{},{areYouSureDeleteRedirect:function(){return Array.isArray(this.shouldDeleteRow)?this.strings.areYouSureDeleteRedirects:this.strings.areYouSureDeleteRedirect},yesDeleteRedirect:function(){return Array.isArray(this.shouldDeleteRow)?this.strings.yesDeleteRedirects:this.strings.yesDeleteRedirect},columns:function(){var e=this,t=[{slug:"source_url",label:this.$t.__("Source URL",this.$td)},{slug:"target_url",label:this.$t.__("Target URL",this.$td)},{slug:"hits",label:this.$t.__("Hits",this.$td),width:"97px"},{slug:"type",label:this.$t.__("Type",this.$td),width:"100px"},{slug:"group",label:this.$t.__("Group",this.$td),width:"150px"},{slug:"enabled",label:this.$constants.GLOBAL_STRINGS.enabled,width:"80px"},{slug:"actions",label:"",width:"40px"}];if("server"===this.options.main.method){var s=t.findIndex((function(e){return"hits"===e.slug}));-1!==s&&this.$delete(t,s)}return this.excludeColumns&&this.excludeColumns.length?t.filter((function(t){return!e.excludeColumns.find((function(e){return e===t.slug}))})):t},additionalFilters:function(){return[{label:this.$t.__("Filter by Group",this.$td),name:"group",options:[{label:this.$t.__("All Groups",this.$td),value:"all"}].concat(this.$constants.REDIRECT_GROUPS)}]},getRows:function(){return this.rows.map((function(e){return e.target_url=e.target_url||"-",e}))}}),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(l["b"])("redirects",["filter","bulk","paginate","search","delete","test"])),Object(l["d"])("redirects",["setPaginatedPage"])),{},{filterTable:function(e){var t=this;this.wpTableLoading=!0,this.tableFields.main.searchTerm="",this.filter(e).then((function(){t.wpTableLoading=!1}))},refreshTable:function(){this.filterTable({slug:"all",page:this.$refs.table.pageNumber})},toggleInput:function(e,t){var s=this;this.wpTableLoading=!0,this.bulk({action:t?"disable":"enable",rowIds:[e.id]}).then((function(){s.wpTableLoading=!1}))},processBulkAction:function(e){var t=this,s=e.action,r=e.selectedRows;if(r.length){if("delete"===s)return this.shouldDeleteRow=r,void(this.showDeleteModal=!0);this.wpTableLoading=!0,this.bulk({action:s,rowIds:r}).then((function(){t.wpTableLoading=!1}))}},processAdditionalFilters:function(e){var t=e.filters,s=this.getCurrentFilter||{slug:"all"};this.filterTable({slug:s.slug,additional:t,page:this.$refs.table.pageNumber})},processPagination:function(e,t){var s=this;this.setPaginatedPage({group:"main",page:e}),this.wpTableLoading=!0;var r=t?"search":"paginate";this[r]({searchTerm:t,page:e,additional:this.selectedFilters}).then((function(){s.wpTableLoading=!1}))},processSearch:function(e){var t=this;this.wpTableLoading=!0,this.tableFields.main.searchTerm=e,this.search({searchTerm:e,page:1}).then((function(){t.wpTableLoading=!1}))},getColumnLabel:function(e){return 0===e?this.$t.__("Pass through",this.$td):e},maybeDeleteRow:function(e){var t=this.rows.find((function(t,s){return s===e}));t&&(this.showDeleteModal=!0,this.shouldDeleteRow=t.id)},processDeleteRow:function(){var e=this;if(this.deletingRow=!0,Array.isArray(this.shouldDeleteRow))return this.bulk({action:"delete",rowIds:this.shouldDeleteRow}).then((function(){e.deletingRow=!1,e.showDeleteModal=!1,e.shouldDeleteRow=null,e.refreshTable()}));this.delete(this.shouldDeleteRow).then((function(){e.deletingRow=!1,e.showDeleteModal=!1,e.shouldDeleteRow=null,e.refreshTable()}))},showCustomRuleInfo:function(e){this.customRuleInfo=e.custom_rules.map((function(e){switch(e.type){case"role":e.value=e.value.map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)}));break}return e}))},isObject:function(e){return"object"===Object(n["a"])(e)},showRedirectTest:function(e){this.redirectTestResult=!1,this.redirectTestUrl=e.regex?"":e.source_url,e.regex||this.redirectTest(e.id),this.redirectTestInfo=e},redirectTest:function(e){var t=this;this.redirectTestLoading=!0,this.test({id:e,payload:{sourceUrl:this.redirectTestUrl}}).then((function(e){t.redirectTestLoading=!1,t.redirectTestResult=e.body})).catch((function(){t.redirectTestLoading=!1}))},customUrlDescription:function(e){var t=e.source_url.replace(this.$aioseo.urls.mainSiteUrl,"");return this.$t.sprintf(this.$t.__("You can test redirects with a URL that includes your domain name ( %1$s ) or just the path ( %2$s )",this.$td),this.$aioseo.urls.mainSiteUrl+t,t)}}),mounted:function(){this.$bus.$on("added-redirect",this.refreshTable)},beforeDestroy:function(){this.$bus.$off("added-redirect",this.refreshTable)}},d=c,u=(s("467f"),s("2877")),h=Object(u["a"])(d,r,i,!1,null,null,null);t["default"]=h.exports},"467f":function(e,t,s){"use strict";s("873b")},"873b":function(e,t,s){},ab04:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.redirectServerTest.failed&&"server"===e.redirectOptions.main.method?s("core-alert",{attrs:{size:"small",type:"yellow"}},[s("div",{domProps:{innerHTML:e._s(e.strings.nginxReload)}}),s("div",{domProps:{innerHTML:e._s(e.strings.dontKnow)}}),s("base-button",{attrs:{type:"blue",size:"small",loading:e.redirectServerTest.testing},on:{click:function(t){return e.testServerRedirects()}}},[e._v(" "+e._s(e.strings.checkAgain)+" ")])],1):e._e()},i=[],n=s("5530"),o=s("2f62"),l={data:function(){return{strings:{nginxReload:this.$t.sprintf(this.$t.__("Your redirect settings have been updated. In order for them to work properly you may need to reload your %1$s configuration. %2$s",this.$td),this.detectedServer(),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"redirectServerConfigReload",!0)),dontKnow:this.$t.__("If you don't know how to do that please revert your Redirect Method to PHP.",this.$td),checkAgain:this.$t.__("Check Again",this.$td)}}},computed:Object(n["a"])({},Object(o["c"])("redirects",["redirectOptions","redirectServerTest"])),methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])("redirects",["testServerRedirects"])),{},{maybeTest:function(){this.testServerRedirects()},detectedServer:function(){return this.$aioseo.data.server.apache?"Apache":this.$aioseo.data.server.nginx?"NGINX":this.$t.__("Server",this.$td)}}),mounted:function(){this.maybeTest(),this.$bus.$on("changes-saved",this.maybeTest)},beforeDestroy:function(){this.$bus.$off("changes-saved",this.maybeTest)}},a=l,c=(s("2094"),s("2877")),d=Object(c["a"])(a,r,i,!1,null,"7fef8436",null);t["default"]=d.exports}}]);