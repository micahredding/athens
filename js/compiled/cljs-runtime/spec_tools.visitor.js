goog.provide('spec_tools.visitor');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.core');
goog.require('spec_tools.parse');
goog.require('spec_tools.impl');
goog.require('spec_tools.form');
spec_tools.visitor.spec_dispatch = (function spec_tools$visitor$spec_dispatch(spec,accept,options){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.spec.alpha.spec_QMARK_(spec);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = cljs.spec.alpha.regex_QMARK_(spec);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return (spec instanceof cljs.core.Keyword);
}
}
})())){
var form = cljs.spec.alpha.form(spec);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818))){
if(cljs.core.seq_QMARK_(form)){
return spec_tools.impl.normalize_symbol(cljs.core.first(form));
} else {
return (spec_tools.visitor.spec_dispatch.cljs$core$IFn$_invoke$arity$3 ? spec_tools.visitor.spec_dispatch.cljs$core$IFn$_invoke$arity$3(form,accept,options) : spec_tools.visitor.spec_dispatch.call(null,form,accept,options));
}
} else {
return spec;
}
} else {
if(cljs.core.set_QMARK_(spec)){
return new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415);
} else {
if(cljs.core.seq_QMARK_(spec)){
return spec_tools.impl.normalize_symbol(cljs.core.first(spec_tools.impl.strip_fn_if_needed(spec)));
} else {
if((spec instanceof cljs.core.Symbol)){
return spec_tools.impl.normalize_symbol(spec);
} else {
return spec_tools.impl.normalize_symbol((spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1 ? spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.form.resolve_form.call(null,spec)));

}
}
}
}
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.visitor !== 'undefined') && (typeof spec_tools.visitor.visit_spec !== 'undefined')){
} else {
spec_tools.visitor.visit_spec = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__56032 = cljs.core.get_global_hierarchy;
return (fexpr__56032.cljs$core$IFn$_invoke$arity$0 ? fexpr__56032.cljs$core$IFn$_invoke$arity$0() : fexpr__56032.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.visitor","visit-spec"),spec_tools.visitor.spec_dispatch,new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
/**
 * Walk a spec definition. Takes 2-3 arguments, the spec and the accept
 *   function, and optionally a options map, and returns the result of
 *   calling the accept function. Options map can be used to pass in context-
 *   specific information to to sub-visits & accepts.
 * 
 *   The accept function is called with 4 arguments: the dispatch term for the
 *   spec (see below), the spec itself, vector with the results of
 *   recursively walking the children of the spec and the options map.
 * 
 *   The dispatch term is one of the following
 *   * if the spec is a function call: a fully qualified symbol for the function
 *  with the following exceptions:
 *  - cljs.core symbols are converted to clojure.core symbols
 *  - cljs.spec.alpha symbols are converted to clojure.spec.alpha symbols
 *   * if the spec is a set: :spec-tools.visitor/set
 *   * otherwise: the spec itself
 */
spec_tools.visitor.visit = (function spec_tools$visitor$visit(var_args){
var G__56034 = arguments.length;
switch (G__56034) {
case 2:
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$2 = (function (spec,accept){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(spec,accept,null);
}));

(spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3 = (function (spec,accept,p__56035){
var map__56036 = p__56035;
var map__56036__$1 = (((((!((map__56036 == null))))?(((((map__56036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56036):map__56036);
var options = map__56036__$1;
var visited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56036__$1,new cljs.core.Keyword("spec-tools.visitor","visited","spec-tools.visitor/visited",820668632));
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(visited,spec))){
var options__$1 = (((spec instanceof cljs.core.Keyword))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(options,new cljs.core.Keyword("spec-tools.visitor","visited","spec-tools.visitor/visited",820668632),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),spec):options);
return (spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3 ? spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3(spec,accept,options__$1) : spec_tools.visitor.visit_spec.call(null,spec,accept,options__$1));
} else {
return (spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3 ? spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3(null,accept,options) : spec_tools.visitor.visit_spec.call(null,null,accept,options));
}
}));

(spec_tools.visitor.visit.cljs$lang$maxFixedArity = 3);

spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415),(function (spec,accept,options){
var G__56038 = new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415);
var G__56039 = spec;
var G__56040 = cljs.core.vec((((spec instanceof cljs.core.Keyword))?spec_tools.impl.extract_form(spec):spec));
var G__56041 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56038,G__56039,G__56040,G__56041) : accept.call(null,G__56038,G__56039,G__56040,G__56041));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null),(function (spec,accept,options){
var keys = spec_tools.impl.extract_keys(spec_tools.impl.extract_form(spec));
var G__56043 = new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null);
var G__56044 = spec;
var G__56045 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56042_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56042_SHARP_,accept,options);
}),keys);
var G__56046 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56043,G__56044,G__56045,G__56046) : accept.call(null,G__56043,G__56044,G__56045,G__56046));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","or","clojure.spec.alpha/or",434904251,null),(function (spec,accept,options){
var vec__56048 = spec_tools.impl.extract_form(spec);
var seq__56049 = cljs.core.seq(vec__56048);
var first__56050 = cljs.core.first(seq__56049);
var seq__56049__$1 = cljs.core.next(seq__56049);
var _ = first__56050;
var map__56051 = seq__56049__$1;
var map__56051__$1 = (((((!((map__56051 == null))))?(((((map__56051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56051):map__56051);
var inner_spec_map = map__56051__$1;
var G__56053 = new cljs.core.Symbol("clojure.spec.alpha","or","clojure.spec.alpha/or",434904251,null);
var G__56054 = spec;
var G__56055 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56047_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56047_SHARP_,accept,options);
}),cljs.core.vals(inner_spec_map));
var G__56056 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56053,G__56054,G__56055,G__56056) : accept.call(null,G__56053,G__56054,G__56055,G__56056));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","and","clojure.spec.alpha/and",-843882543,null),(function (spec,accept,options){
var vec__56058 = spec_tools.impl.extract_form(spec);
var seq__56059 = cljs.core.seq(vec__56058);
var first__56060 = cljs.core.first(seq__56059);
var seq__56059__$1 = cljs.core.next(seq__56059);
var _ = first__56060;
var inner_specs = seq__56059__$1;
var G__56061 = new cljs.core.Symbol("clojure.spec.alpha","and","clojure.spec.alpha/and",-843882543,null);
var G__56062 = spec;
var G__56063 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56057_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56057_SHARP_,accept,options);
}),inner_specs);
var G__56064 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56061,G__56062,G__56063,G__56064) : accept.call(null,G__56061,G__56062,G__56063,G__56064));
}));
spec_tools.visitor.visit_merge = (function spec_tools$visitor$visit_merge(spec,accept,options){
var vec__56066 = spec_tools.impl.extract_form(spec);
var seq__56067 = cljs.core.seq(vec__56066);
var first__56068 = cljs.core.first(seq__56067);
var seq__56067__$1 = cljs.core.next(seq__56067);
var _ = first__56068;
var inner_specs = seq__56067__$1;
var G__56069 = new cljs.core.Symbol("clojure.spec.alpha","merge","clojure.spec.alpha/merge",472136035,null);
var G__56070 = spec;
var G__56071 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56065_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56065_SHARP_,accept,options);
}),inner_specs);
var G__56072 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56069,G__56070,G__56071,G__56072) : accept.call(null,G__56069,G__56070,G__56071,G__56072));
});
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","merge","clojure.spec.alpha/merge",472136035,null),(function (spec,accept,options){
return spec_tools.visitor.visit_merge(spec,accept,options);
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("spec-tools.core","merge","spec-tools.core/merge",2048449266,null),(function (spec,accept,options){
return spec_tools.visitor.visit_merge(spec,accept,options);
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","every","clojure.spec.alpha/every",-1327408778,null),(function (spec,accept,options){
var vec__56092 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56092,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56092,(1),null);
var G__56095 = new cljs.core.Symbol("clojure.spec.alpha","every","clojure.spec.alpha/every",-1327408778,null);
var G__56096 = spec;
var G__56097 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__56098 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56095,G__56096,G__56097,G__56098) : accept.call(null,G__56095,G__56096,G__56097,G__56098));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","every-kv","clojure.spec.alpha/every-kv",814515928,null),(function (spec,accept,options){
var vec__56104 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56104,(0),null);
var inner_spec1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56104,(1),null);
var inner_spec2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56104,(2),null);
var G__56111 = new cljs.core.Symbol("clojure.spec.alpha","every-kv","clojure.spec.alpha/every-kv",814515928,null);
var G__56112 = spec;
var G__56113 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56103_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56103_SHARP_,accept,options);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inner_spec1,inner_spec2], null));
var G__56114 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56111,G__56112,G__56113,G__56114) : accept.call(null,G__56111,G__56112,G__56113,G__56114));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","coll-of","clojure.spec.alpha/coll-of",-465249451,null),(function (spec,accept,options){
var form = spec_tools.impl.extract_form(spec);
var pred = cljs.core.second(form);
var map__56115 = spec_tools.parse.parse_spec(form);
var map__56115__$1 = (((((!((map__56115 == null))))?(((((map__56115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56115):map__56115);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56115__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var dispatch = (function (){var G__56117 = type;
var G__56117__$1 = (((G__56117 instanceof cljs.core.Keyword))?G__56117.fqn:null);
switch (G__56117__$1) {
case "map-of":
return new cljs.core.Keyword("spec-tools.visitor","map-of","spec-tools.visitor/map-of",-972613908);

break;
case "set":
return new cljs.core.Keyword("spec-tools.visitor","set-of","spec-tools.visitor/set-of",983982444);

break;
case "vector":
return new cljs.core.Keyword("spec-tools.visitor","vector-of","spec-tools.visitor/vector-of",-1693991985);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56117__$1)].join('')));

}
})();
var G__56118 = dispatch;
var G__56119 = spec;
var G__56120 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(pred,accept,options)], null);
var G__56121 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56118,G__56119,G__56120,G__56121) : accept.call(null,G__56118,G__56119,G__56120,G__56121));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","map-of","clojure.spec.alpha/map-of",2125010727,null),(function (spec,accept,options){
var vec__56123 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56123,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56123,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56123,(2),null);
var G__56126 = new cljs.core.Keyword("spec-tools.visitor","map-of","spec-tools.visitor/map-of",-972613908);
var G__56127 = spec;
var G__56128 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56122_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56122_SHARP_,accept,options);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var G__56129 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56126,G__56127,G__56128,G__56129) : accept.call(null,G__56126,G__56127,G__56128,G__56129));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","*","clojure.spec.alpha/*",-21649262,null),(function (spec,accept,options){
var vec__56130 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56130,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56130,(1),null);
var G__56133 = new cljs.core.Symbol("clojure.spec.alpha","*","clojure.spec.alpha/*",-21649262,null);
var G__56134 = spec;
var G__56135 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__56136 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56133,G__56134,G__56135,G__56136) : accept.call(null,G__56133,G__56134,G__56135,G__56136));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","+","clojure.spec.alpha/+",96423191,null),(function (spec,accept,options){
var vec__56138 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56138,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56138,(1),null);
var G__56141 = new cljs.core.Symbol("clojure.spec.alpha","+","clojure.spec.alpha/+",96423191,null);
var G__56142 = spec;
var G__56143 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__56144 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56141,G__56142,G__56143,G__56144) : accept.call(null,G__56141,G__56142,G__56143,G__56144));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","?","clojure.spec.alpha/?",-1775438615,null),(function (spec,accept,options){
var vec__56145 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56145,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56145,(1),null);
var G__56148 = new cljs.core.Symbol("clojure.spec.alpha","?","clojure.spec.alpha/?",-1775438615,null);
var G__56149 = spec;
var G__56150 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__56151 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56148,G__56149,G__56150,G__56151) : accept.call(null,G__56148,G__56149,G__56150,G__56151));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null),(function (spec,accept,options){
var vec__56154 = spec_tools.impl.extract_form(spec);
var seq__56155 = cljs.core.seq(vec__56154);
var first__56156 = cljs.core.first(seq__56155);
var seq__56155__$1 = cljs.core.next(seq__56155);
var _ = first__56156;
var map__56157 = seq__56155__$1;
var map__56157__$1 = (((((!((map__56157 == null))))?(((((map__56157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56157):map__56157);
var inner_spec_map = map__56157__$1;
var G__56159 = new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null);
var G__56160 = spec;
var G__56161 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56153_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56153_SHARP_,accept,options);
}),cljs.core.vals(inner_spec_map));
var G__56162 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56159,G__56160,G__56161,G__56162) : accept.call(null,G__56159,G__56160,G__56161,G__56162));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","cat","clojure.spec.alpha/cat",-523389547,null),(function (spec,accept,options){
var vec__56164 = spec_tools.impl.extract_form(spec);
var seq__56165 = cljs.core.seq(vec__56164);
var first__56166 = cljs.core.first(seq__56165);
var seq__56165__$1 = cljs.core.next(seq__56165);
var _ = first__56166;
var map__56167 = seq__56165__$1;
var map__56167__$1 = (((((!((map__56167 == null))))?(((((map__56167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56167):map__56167);
var inner_spec_map = map__56167__$1;
var G__56169 = new cljs.core.Symbol("clojure.spec.alpha","cat","clojure.spec.alpha/cat",-523389547,null);
var G__56170 = spec;
var G__56171 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56163_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56163_SHARP_,accept,options);
}),cljs.core.vals(inner_spec_map));
var G__56172 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56169,G__56170,G__56171,G__56172) : accept.call(null,G__56169,G__56170,G__56171,G__56172));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","&","clojure.spec.alpha/&",704695533,null),(function (spec,accept,options){
var vec__56173 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56173,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56173,(1),null);
var G__56176 = new cljs.core.Symbol("clojure.spec.alpha","&","clojure.spec.alpha/&",704695533,null);
var G__56177 = spec;
var G__56178 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__56179 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56176,G__56177,G__56178,G__56179) : accept.call(null,G__56176,G__56177,G__56178,G__56179));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null),(function (spec,accept,options){
var vec__56181 = spec_tools.impl.extract_form(spec);
var seq__56182 = cljs.core.seq(vec__56181);
var first__56183 = cljs.core.first(seq__56182);
var seq__56182__$1 = cljs.core.next(seq__56182);
var _ = first__56183;
var inner_specs = seq__56182__$1;
var G__56184 = new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null);
var G__56185 = spec;
var G__56186 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56180_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56180_SHARP_,accept,options);
}),inner_specs);
var G__56187 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56184,G__56185,G__56186,G__56187) : accept.call(null,G__56184,G__56185,G__56186,G__56187));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","keys*","clojure.spec.alpha/keys*",-1790941751,null),(function (spec,accept,options){
var keys = spec_tools.impl.extract_keys(spec_tools.impl.extract_form(spec));
var G__56189 = new cljs.core.Symbol("clojure.spec.alpha","keys*","clojure.spec.alpha/keys*",-1790941751,null);
var G__56190 = spec;
var G__56191 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56188_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56188_SHARP_,accept,options);
}),keys);
var G__56192 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56189,G__56190,G__56191,G__56192) : accept.call(null,G__56189,G__56190,G__56191,G__56192));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null),(function (spec,accept,options){
var vec__56193 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56193,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56193,(1),null);
var G__56196 = new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null);
var G__56197 = spec;
var G__56198 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__56199 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56196,G__56197,G__56198,G__56199) : accept.call(null,G__56196,G__56197,G__56198,G__56199));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("spec-tools.core","spec","spec-tools.core/spec",-497332036,null),(function (spec,accept,options){
var vec__56200 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56200,(0),null);
var map__56203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56200,(1),null);
var map__56203__$1 = (((((!((map__56203 == null))))?(((((map__56203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56203):map__56203);
var inner_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56203__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var G__56205 = new cljs.core.Keyword("spec-tools.visitor","spec","spec-tools.visitor/spec",1770325200);
var G__56206 = spec;
var G__56207 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__56208 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56205,G__56206,G__56207,G__56208) : accept.call(null,G__56205,G__56206,G__56207,G__56208));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361),(function (spec,accept,options){
var G__56209 = spec_tools.visitor.spec_dispatch(spec,accept,options);
var G__56210 = spec;
var G__56211 = null;
var G__56212 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56209,G__56210,G__56211,G__56212) : accept.call(null,G__56209,G__56210,G__56211,G__56212));
}));
/**
 * a visitor that collects all registered specs. Returns
 *   a map of spec-name => spec.
 */
spec_tools.visitor.spec_collector = (function spec_tools$visitor$spec_collector(){
var specs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (_,spec,___$1,___$2){
var temp__5733__auto__ = cljs.spec.alpha.get_spec(spec);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(specs,cljs.core.assoc,spec,s);
} else {
return cljs.core.deref(specs);
}
});
});

//# sourceMappingURL=spec_tools.visitor.js.map
