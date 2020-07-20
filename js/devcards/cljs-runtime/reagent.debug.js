goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__31599__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31599 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31604__i = 0, G__31604__a = new Array(arguments.length -  0);
while (G__31604__i < G__31604__a.length) {G__31604__a[G__31604__i] = arguments[G__31604__i + 0]; ++G__31604__i;}
  args = new cljs.core.IndexedSeq(G__31604__a,0,null);
} 
return G__31599__delegate.call(this,args);};
G__31599.cljs$lang$maxFixedArity = 0;
G__31599.cljs$lang$applyTo = (function (arglist__31605){
var args = cljs.core.seq(arglist__31605);
return G__31599__delegate(args);
});
G__31599.cljs$core$IFn$_invoke$arity$variadic = G__31599__delegate;
return G__31599;
})()
);

(o.error = (function() { 
var G__31606__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31606 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31609__i = 0, G__31609__a = new Array(arguments.length -  0);
while (G__31609__i < G__31609__a.length) {G__31609__a[G__31609__i] = arguments[G__31609__i + 0]; ++G__31609__i;}
  args = new cljs.core.IndexedSeq(G__31609__a,0,null);
} 
return G__31606__delegate.call(this,args);};
G__31606.cljs$lang$maxFixedArity = 0;
G__31606.cljs$lang$applyTo = (function (arglist__31610){
var args = cljs.core.seq(arglist__31610);
return G__31606__delegate(args);
});
G__31606.cljs$core$IFn$_invoke$arity$variadic = G__31606__delegate;
return G__31606;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
