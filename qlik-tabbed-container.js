/**
  * @license
  * Copyright (c) 2017 Masaki Hamano. All rights reserved.
  *
  * Copyrights licensed under the terms of the MIT license.
  * Original source <https://github.com/mhamano/Qlik-Sense-Tabs>
  */
define(["jquery", "qlik", "./properties", "css!./css/styles.css"], function (S, g, t, e) {
    var E = g.currApp(this),
        _ = {
            TAB: '<li class="lui-tab"></li>',
            TABTEXT: '<span class="lui-tab__text"></span>',
            TABROW: '<ul class="lui-tabset lui-tabset--fill"></ul>',
            TABCONTENT: '<article class="tab-contents"></article>',
            QVOBJECT: '<div class="qvobject viz-without-export"></div>',
            EXTENSION: '<div qv-extension class="tab-row"></div>',
            BLOCK: '<div class="tab-block"></div>'
        };

    function O(t, e) {
        return t + "-" + e
    }

    function A(t, e, n) {
        return t + "_" + e + "-" + n
    }

    function B(t, e, n, i, a, r, o) {
        e.append(function (a, t, e, n, i) {
            for (var r = S(_.TABROW), o = t.num_of_tabs, s = null, c = null, u = 1; u <= o; u++) {
                var l, p = t["tab" + u].label;
                l = S(_.TAB).append(S(_.TABTEXT).text(p)).attr("title", p).attr("tabNr", u).attr("panelid", O(a, u)), i && l.on("click", function (t) {
                    var e = S(t.currentTarget),
                        n = e.attr("panelid"),
                        i = S("#" + a);
                    e.siblings().removeClass("lui-active"),
                        e.addClass("lui-active"),
                        i.children("div").removeClass("activated").hide(),
                        i.children("#" + n).addClass("activated").show(),
                        g.resize("#" + n)
                }), r.append(l), null == s && (s = l)
            }
            return 0 < (c = r.find(":nth-child(" + e + ")")).length ? c[0].click() : s && s.click(), r
        }(n, i, a, 0, o)), t.replaceWith(e)
    }

    function q(t, e) {

        t.find(".tab-instructions").remove(),
            t.find(".tab-contents").remove(),
            e.currentVisualization &&
            (e.currentVisualization.close(), e.currentVisualization = null)
    }
    return {
        initialProperties: {
            version: 1,
            activeTab: 1
        },
        definition: t,
        support: {
            export: !1,
            exportData: !1,
            snapshot: !1
        },
        paint: function (t, n) {
            // alert('Alert in first time.');
            var i, a = n.qInfo.qId,
                e = n.props,
                r = null,
                o = t.find('[id^="export-data"]'),
                s = t.find(".tab-instructions"),
                c = t.parent(),
                u = S(_.EXTENSION),
                l = 0 < c.find(".tab-row").length,
                p = 1 === this._interactionState,
                d = this.options && !0 === this.options.noSelections,
                b = this.options && !0 === this.options.zoomEnabled,
                tabview = t.find("lui-tabset--fill"),
                h = t.find("ul.lui-tabset li.lui-tab.lui-active").attr("tabnr");
            i = e["tab" + (r = null != h ? h : "1")].export;
            console.log(tabview);
            console.log(typeof tabview);
            console.log(S);
            // console.log(t[0]);
            console.log(t);
            console.log(e);
            // console.log(t[0].childNodes);
            for (let i of t[0].childNodes) {
                console.log(i);
            }
            for (var i = 0; i < t[0].childNodes.length; i++) {
                console.log(t[0].childNodes[i]);
            }
            if (e.select_tabsRow_view == 1) {
                /// TOP
                // paddingTop
                // paddingLeft
                // position
                // top right left bottom
                // width 
                // absolute
                // inline-grid
                if (t[0].childNodes) {
                    if(t[0].childNodes[0]){
                        t[0].childNodes[0].style = {};
                        t[0].childNodes[0].width = 'auto';
                        t[0].childNodes[0].style.position = 'absolute';
                        t[0].childNodes[0].style.top = '0px';
                        console.log(t[0].childNodes[0].style);
                    }
                    if(t[0].childNodes[1]){
                        t[0].childNodes[1].style = {};
                        t[0].childNodes[1].style.paddingTop = '40px';
                        console.log(t[0].childNodes[1].style);
                        if(t[0].childNodes[1].childNodes){
                            t[0].childNodes[1].childNodes[0].style = {};
                            t[0].childNodes[1].childNodes[0].style.marginLeft = '1%';
                            t[0].childNodes[1].childNodes[0].style.marginRight = '0%';
                            t[0].childNodes[1].childNodes[0].style.marginTop = '0%';
                            t[0].childNodes[1].childNodes[0].style.marginBottom = '0%';
                            t[0].childNodes[1].childNodes[0].style.height = '110%';
                            console.log(t[0].childNodes[1].childNodes[0],t[0].childNodes[1].childNodes[0].style);
                        }

                    }
                      

                }
            }
            if (e.select_tabsRow_view == 4) { 
                /// BOTTOM
                // paddingTop
                // paddingLeft
                // position
                // top right left bottom
                // width 
                // absolute
                // inline-grid
                if (t[0].childNodes) {
                    if(t[0].childNodes[0]){
                        t[0].childNodes[0].style = {};
                        t[0].childNodes[0].width = 'auto';
                        t[0].childNodes[0].style.position = 'absolute';
                        t[0].childNodes[0].style.bottom = '0px';
                        console.log(t[0].childNodes[0].style);
                    }
                    if(t[0].childNodes[1]){
                        t[0].childNodes[1].style = {};
                        t[0].childNodes[1].style.paddingTop = '0px';
                        console.log(t[0].childNodes[1].style);
                        if(t[0].childNodes[1].childNodes){
                            t[0].childNodes[1].childNodes[0].style = {};
                            t[0].childNodes[1].childNodes[0].style.marginLeft = '1%';
                            t[0].childNodes[1].childNodes[0].style.marginRight = '0%';
                            t[0].childNodes[1].childNodes[0].style.marginTop = '0%';
                            t[0].childNodes[1].childNodes[0].style.marginBottom = '0%';
                            t[0].childNodes[1].childNodes[0].style.height = '110%';
                            console.log(t[0].childNodes[1].childNodes[0].style);
                        } 
                    }
                      

                }
            }
                 if (e.select_tabsRow_view == 2) {
                     /// LEFT 
                // paddingTop
                // paddingLeft
                // position
                // top right left bottom
                // width 
                // absolute
                // inline-grid
                if (t[0].childNodes) {
                    if(t[0].childNodes[0]){
                        t[0].childNodes[0].style = {};
                        // t[0].childNodes[0].style.paddingTop = '0px';
                        t[0].childNodes[0].style.position = 'absolute';
                        t[0].childNodes[0].style.display = 'inline-grid';
                        t[0].childNodes[0].style.width = 'auto';
                        t[0].childNodes[0].style.height = '100%';
                        t[0].childNodes[0].style.left = '0px';
                        console.log(t[0].childNodes[0].style);
                        if(t[0].childNodes[0].childNodes){
                            for(var l=0;l<t[0].childNodes[0].childNodes.length;l++){
                                t[0].childNodes[0].childNodes[l].width ='130px';
                            }
                        }
                    }
                    if(t[0].childNodes[1]){
                        t[0].childNodes[1].style = {};
                        t[0].childNodes[1].style.paddingTop = '0px';
                        t[0].childNodes[1].style.paddingLeft = '14%';
                        console.log(t[0].childNodes[1].style);
                        if(t[0].childNodes[1].childNodes){
                            t[0].childNodes[1].childNodes[0].style = {};
                            t[0].childNodes[1].childNodes[0].style.marginLeft = '0%';
                            t[0].childNodes[1].childNodes[0].style.marginRight = '0%';
                            t[0].childNodes[1].childNodes[0].style.marginTop = '0%';
                            t[0].childNodes[1].childNodes[0].style.marginBottom = '0%';
                            t[0].childNodes[1].childNodes[0].style.height = '110%';
                            t[0].childNodes[1].childNodes[0].style.width = '100%'
                            console.log(t[0].childNodes[1].childNodes[0],t[0].childNodes[1].childNodes[0].style);
                        }
                        
                    }
                      

                }
            }
            if (e.select_tabsRow_view == 3) { 
                /// RIGHT
                // paddingTop
                // paddingLeft
                // position
                // top right left bottom
                // width 
                // absolute
                // inline-grid
                if (t[0].childNodes) {
                    if(t[0].childNodes[0]){
                        t[0].childNodes[0].style = {};
                        t[0].childNodes[0].style.paddingTop = '0px';
                        t[0].childNodes[0].style.position = 'absolute';
                        t[0].childNodes[0].style.display = 'inline-grid';
                        t[0].childNodes[0].style.width = 'auto';
                        t[0].childNodes[0].style.height = '100%';
                        t[0].childNodes[0].style.right = '0px';
                        console.log(t[0].childNodes[0].style);
                    }
                    if(t[0].childNodes[1]){
                        t[0].childNodes[1].style = {};
                        t[0].childNodes[1].style.paddingTop = '0px';
                        t[0].childNodes[1].style.paddingRight = '0px';
                        console.log(t[0].childNodes[1].style);
                        if(t[0].childNodes[1].childNodes){
                            t[0].childNodes[1].childNodes[0].style = {};
                            t[0].childNodes[1].childNodes[0].style.marginLeft = '1%';
                            t[0].childNodes[1].childNodes[0].style.marginRight = '0%';
                            t[0].childNodes[1].childNodes[0].style.marginTop = '0%';
                            t[0].childNodes[1].childNodes[0].style.marginBottom = '0%';
                            t[0].childNodes[1].childNodes[0].style.height = '110%';
                            console.log(t[0].childNodes[1].childNodes[0],t[0].childNodes[1].childNodes[0].style);
                        }
                        
                    }
                      

                }
            }
            var v = {
                noInteraction: !p,
                noSelections: d
            },
                m = e["tab" + r].chart,
                T = A(a, m, r),
                x = function (t) {
                    return t.find(".tab-contents").attr("chart-id")
                }(t);
            l ?
                e.num_of_tabs !== c.data("currTabLimit") || f ?
                    (c.data("currTabLimit", e.num_of_tabs), t.remove(".lui-tabset"),
                        B(t, u, a, e, r, this.backendApi, p)) :
                    (u = c.find(".tab-row"), function (t, r) {
                        t.find(".lui-tab__text").each(function (t, e) {
                            var n = S(e),
                                i = n.text(),
                                a = r["tab" + (t + 1)].label;
                            i !== a && n.text(a)
                        })
                    }(c, e)) :
                (c.data("currTabLimit", e.num_of_tabs),
                    B(t, u, a, e, r, this.backendApi, p)),
                "" !== m && x !== T || f ?
                    (q(t, n),
                        u.append(function (t, e, n, i) {
                            var a = S(_.TABCONTENT),
                                r = S(_.QVOBJECT);
                            return a.attr("id", t),
                                a.attr("chart-id", A(t, n, e)), r.attr("id", O(t, e)), a.append(r), a
                        }(a, r, m)),
                        E.getObjectProperties(m).then(function (e) {
                            return E.getObjectProperties(T).then(function (t) {
                                return t
                            }).catch(function () {
                                return E.createGenericObject({
                                    qInfo: {
                                        qId: T
                                    }
                                }).then(function (t) {
                                    return t.copyFrom(m).then(function () {
                                        return t.getProperties().then(function () {
                                            return t
                                        })
                                    })
                                })
                            }).then(function (t) {
                                return e.properties.qStateName || (t.properties.qStateName = n.qStateName || ""), t.setProperties(t.properties).then(function () {
                                    return E.visualization.get(T).then(function (t) {
                                        return (n.currentVisualization = t).show(O(a, r), v).then(function () {
                                            u.find(".qv-object-wrapper").scope().options.zoomEnabled = b, o.remove(), i && t.model.layout.permissions.exportData && function (e, n, i, t) {
                                                var a, r = t.find(".tab-contents");
                                                a = S("<span/>", {
                                                    class: "lui-button__icon  lui-icon  lui-icon--export"
                                                });
                                                // alert('alert in state function time');
                                                var o = S("<button/>", {
                                                    id: "export-data-" + A(e, i, n),
                                                    class: "lui-button lui-button lui-button",
                                                    title: "Export data"
                                                }).append(a).on("click touchstart", function (t) {
                                                    t.preventDefault(), E.getObject(null, A(e, i, n), null).then(function (t) {
                                                        new g.table(t).exportData({
                                                            download: !0
                                                        })
                                                    })
                                                });
                                                r.append(o)
                                            }(a, r, m, u)
                                        })
                                    })
                                })
                            })
                        })) : !p && "" === m && s.length < 1 && (q(t, n),
                            u.append(S("<div/>", {
                                class: "tab-instructions"
                            }).append(S("<div/>", {
                                class: "title",
                                text: "Follow the instructions below to get started:"
                            })).append(S("<ul/>").append(S("<li/>", {
                                text: "Create charts and add them as master items. (You can remove the charts from the sheet after you have added them to master items if you please)"
                            })).append(S("<li/>", {
                                text: 'Drag and drop the "Container with tabs" extension onto the sheet.'
                            })).append(S("<li/>", {
                                text: "On the extension property panel, navigate to [Appearance] > [Tabs] Here you can change the number of tabs and assign master items to each tab."
                            }))))), !p && t.find(".tab-block").length < 1 ? u.append(S(_.BLOCK).on("click touchstart", function (t) {
                                return t.preventDefault(), !1
                            })) : p && (t.find(".tab-block").remove(), t.find(".tab-instructions").remove())
        }
    }
});