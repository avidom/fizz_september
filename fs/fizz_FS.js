(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 500,
	fps: 60,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/apple.png", id:"apple"},
		{src:"images/barrel.png", id:"barrel"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/Bottle.png", id:"Bottle"},
		{src:"images/br1.png", id:"br1"},
		{src:"images/br2.png", id:"br2"},
		{src:"images/slogan.png", id:"slogan"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.apple = function() {
	this.initialize(img.apple);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,98);


(lib.barrel = function() {
	this.initialize(img.barrel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,104);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,500);


(lib.Bottle = function() {
	this.initialize(img.Bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,342);


(lib.br1 = function() {
	this.initialize(img.br1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,108);


(lib.br2 = function() {
	this.initialize(img.br2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,100);


(lib.slogan = function() {
	this.initialize(img.slogan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,58);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8B9IAAj6IA8AAQAdAAAOAPQAOAPAAAdIAAAJQAAATgHAMQgGANgNAGQAQAGAHAMQAHAOAAAUIAAAVQAAAdgQAPQgPAPgeAAgAgUBZIAUAAQALABAFgGQAFgFAAgOIAAgXQAAgRgGgGQgGgHgMAAIgRAAgAgUgWIAPAAQAJAAAHgGQAGgFAAgPIAAgPQAAgNgFgHQgFgFgIgBIgTAAg");
	this.shape.setTransform(94.5,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrBwQgQgRAAgeIAAiBQAAgfAQgQQAPgRAcAAQAdAAAPARQAQAQAAAfIAACBQAAAegQARQgPARgdAAQgcAAgPgRgAgNhVQgGAEAAAPIAACGQAAANAGAGQAFAFAIABQAJgBAFgFQAGgGAAgNIAAiGQAAgPgGgEQgFgHgJAAQgIAAgFAHg");
	this.shape_1.setTransform(79.8,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag5B9IAAj6IA5AAQAdAAAOAQQAPAQAAAfIAAAgQAAAegPAPQgOAQgdAAIgSAAIAABegAgSgDIASAAQAIAAAFgFQAFgGAAgNIAAgmQAAgOgFgFQgFgEgIgBIgSAAg");
	this.shape_2.setTransform(66.5,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrBwQgQgRAAgeIAAiBQAAgfAQgQQAPgRAcAAQAdAAAPARQAQAQAAAfIAACBQAAAegQARQgPARgdAAQgcAAgPgRgAgNhVQgGAEAAAPIAACGQAAANAGAGQAFAFAIABQAJgBAFgFQAGgGAAgNIAAiGQAAgPgGgEQgFgHgJAAQgIAAgFAHg");
	this.shape_3.setTransform(52,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSB9IAAjWIgqAAIAAgkIB5AAIAAAkIgqAAIAADWg");
	this.shape_4.setTransform(38.5,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdB9IgHgtIgvAAIgGAtIglAAIApj6IA4AAIAoD6gAgUAuIAlAAIgRh+g");
	this.shape_5.setTransform(24.8,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrBwQgPgRAAgeIAAgbIAmAAIAAAeQgBANAGAGQAGAFAJABQAIAAAFgHQAFgFAAgRIAAgUQABgRgHgHQgFgIgMAAIgKAAIAAgiIAMAAQAJAAAGgGQAHgFgBgPIAAgPQAAgRgFgFQgFgHgIAAQgJAAgGAHQgGAEABAPIAAAUIglAAIAAgTQAAgfAOgPQAPgQAcgBQAdAAAPARQAPAQAAAfIAAAHQAAAogdAMQAQAFAGANQAHANAAATIAAAUQAAAegPARQgPARgdAAQgcAAgPgRg");
	this.shape_6.setTransform(10.4,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAbB9IAAivIgRA8IgfBzIgoAAIAAj6IAjAAIAACeIAOg2IAfhoIArAAIAAD6g");
	this.shape_7.setTransform(-4.4,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSB9IAAjWIgqAAIAAgkIB5AAIAAAkIgqAAIAADWg");
	this.shape_8.setTransform(-18.5,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAdB9IgHgtIgvAAIgGAtIglAAIApj6IA4AAIAoD6gAgUAuIAlAAIgRh+g");
	this.shape_9.setTransform(-32.3,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAtB9IAAiyIgbCyIgkAAIgdivIAACvIgjAAIAAj6IA3AAIAcCxIAbixIA3AAIAAD6g");
	this.shape_10.setTransform(-49.4,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgrBwQgQgRAAgeIAAiBQAAgfAQgQQAPgRAcAAQAdAAAPARQAQAQAAAfIAACBQAAAegQARQgPARgdAAQgcAAgPgRgAgNhVQgGAEAAAPIAACGQAAANAGAGQAFAFAIABQAJgBAFgFQAGgGAAgNIAAiGQAAgPgGgEQgFgHgJAAQgIAAgFAHg");
	this.shape_11.setTransform(-66.2,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag5B9IAAj6IA5AAQAdAAAOAQQAPAQAAAfIAAAgQAAAegPAPQgOAQgdAAIgSAAIAABegAgSgDIASAAQAIAAAFgFQAFgGAAgNIAAgmQAAgOgFgFQgFgEgIgBIgSAAg");
	this.shape_12.setTransform(-79.6,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAdB9IgHgtIgvAAIgGAtIglAAIApj6IA4AAIAoD6gAgUAuIAlAAIgRh+g");
	this.shape_13.setTransform(-94.2,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.6,-20.7,207.3,41.5);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AgFBKQgKgIgFgLQgFgLgCgOIgCgaIgVAAIAABKIgTAAIAAibIATAAIAABCIAWAAQABgkANgQQAMgRAWAAQAaAAAMATQAMATAAAoIAAARQgBAKgCAJQgBAJgEAJQgDAIgFAHQgGAGgIAEQgJAEgMAAQgQAAgIgHgAAHg9QgGAEgBAFQgEAGgBAHIgDAOIgBAOIAAALQAAAjAHAPQAFAQAQAAQAIAAAGgEQAGgEAEgIQAEgIACgMQABgMAAgSQAAgQgBgMQgCgNgEgIQgDgIgGgDQgGgEgIAAQgIAAgFADg");
	this.shape.setTransform(107.7,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AgrBOIAAibIATAAIAABAIAWAAQAJAAAJADQAJACAGAFQAGADAEAJQADAIAAALQAAAagMAMQgLAMgXAAgAgYA+IAPAAIANgBQAHgBAFgEQAEgDACgGQADgGAAgKQAAgJgDgGQgCgGgEgDQgEgEgHgBIgLgBIgSAAg");
	this.shape_1.setTransform(94.3,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.498)").s().p("AgtBOIAAibIAqAAQAIAAAJACQAJACAFAFQAGAEADAIQADAIAAALQAAANgFAIQgHAJgKAEQAOADAGAHQAIAKAAAQQAAAXgNALQgOALgUAAgAgaA/IAOAAIALgBIAGAAQAKgCAGgHQAFgIABgMQAAgQgLgIIgEgDIgFgCIgHgBIgIAAIgSAAgAgagKIATAAQANAAAIgFQAIgGgBgPQAAgIgCgFQgCgFgFgDQgDgDgHgBIgKgBIgSAAg");
	this.shape_2.setTransform(83.2,8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.498)").s().p("AgTBNQgHgDgGgHQgGgGgDgIQgDgIgCgJIgCgTIgBgRQAAgpAMgTQANgUAZAAQAZAAAMATQAMATAAAoIgBARIgBATIgGASQgDAIgGAHQgFAGgIAEQgJAEgLAAQgKAAgJgEgAgLg9QgGAEgEAFQgDAGgCAHQgBAGgBAIIgBAOIAAALQAAAjAHAPQAHAQAPAAQAHAAAGgEQAGgEAEgIQAEgIACgMQACgMAAgSQAAgQgCgMQgCgNgEgIQgDgIgGgDQgGgEgIAAQgGAAgFADg");
	this.shape_3.setTransform(71.1,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.498)").s().p("AgqBOIAAibIApAAQAUAAAMALQAMAKAAAYQAAAXgMAJQgMALgVAAIgVAAIAABDgAgXgCIARAAQAGAAAFgBQAGgCAEgDQAFgEACgFQACgGAAgJQAAgJgDgGQgCgGgFgDQgEgDgHgBQgEgCgIAAIgOAAg");
	this.shape_4.setTransform(60,8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.498)").s().p("AgTBNQgHgDgGgHQgFgGgEgIQgDgIgCgJIgCgTIgBgRQAAgpAMgTQANgUAZAAQAZAAAMATQAMATAAAoIgBARIgBATIgGASQgDAIgGAHQgFAGgIAEQgJAEgLAAQgKAAgJgEgAgMg9QgFAEgEAFQgDAGgBAHQgDAGAAAIIgBAOIAAALQAAAjAHAPQAHAQAPAAQAHAAAGgEQAGgEAEgIQAEgIACgMQABgMAAgSQAAgQgBgMQgCgNgEgIQgEgIgFgDQgGgEgIAAQgGAAgGADg");
	this.shape_5.setTransform(48.2,8.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.498)").s().p("AAqBiIAAgoIhSAAIAAAoIgTAAIAAg5IAMAAQAMgVAFgZQAFgbAAghIAAggIBFAAIAACKIAQAAIAAA5gAgGg4QAAAOgCAPQgBAOgCANIgHAWQgEAKgFAJIA0AAIAAh5IgfAAg");
	this.shape_6.setTransform(35.9,10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.498)").s().p("AgjBEQgLgMAAgZIATAAQAAAHACAHQABAGADAEQADAFAFADQAGACAHAAQANAAAHgHQAIgIAAgPQAAgSgJgHQgIgHgPAAIgCAAIgDAAIgDAAIAAgNIACAAIACAAIACAAIALgBQAGgBAEgDQAEgEACgFQACgGAAgIQAAgNgGgGQgFgHgMAAQgGAAgFACQgFACgCAEQgDADgBAFQgCAGAAAGIgTAAIAAgCQAAgUAMgLQAMgKAUAAQAVAAAKALQAKAKAAATQAAAOgHAKQgHAKgLACQAOACAIAIQAIAKAAARQAAAWgMAMQgMAMgXAAQgYAAgLgMg");
	this.shape_7.setTransform(24.3,8.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.498)").s().p("AgHBOIAAiKIgpAAIAAgRIBgAAIAAARIgnAAIAACKg");
	this.shape_8.setTransform(8.5,8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.498)").s().p("AAcBOIAAhaIAAgWIACgWIgBAAQgCAKgFAMIgLAaIghBWIgYAAIAAibIAUAAIAABZIgBAVIgBAVIAAAAIAEgKIAEgOIAFgNIAEgLIAihTIAYAAIAACbg");
	this.shape_9.setTransform(-2.7,8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.498)").s().p("AAqBiIAAgoIhSAAIAAAoIgTAAIAAg5IAMAAQAMgVAFgZQAFgbAAghIAAggIBFAAIAACKIAQAAIAAA5gAgGg4QAAAOgCAPQgBAOgCANIgHAWQgEAKgFAJIA0AAIAAh5IgfAAg");
	this.shape_10.setTransform(-15,10.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.498)").s().p("AgoBOIAAibIBPAAIAAARIg8AAIAAAyIA4AAIAAAOIg4AAIAAA5IA+AAIAAARg");
	this.shape_11.setTransform(-25.7,8.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.498)").s().p("AgqBOIAAibIApAAQAUAAAMALQAMAKAAAYQAAAXgMAJQgMALgVAAIgVAAIAABDgAgXgCIARAAQAGAAAFgBQAGgCAEgDQAFgEACgFQACgGAAgJQAAgJgDgGQgCgGgFgDQgEgDgHgBQgEgCgIAAIgOAAg");
	this.shape_12.setTransform(-36.2,8.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.498)").s().p("AgtBOIAAibIArAAQAHAAAJACQAIACAGAFQAGAEADAIQADAIABALQgBANgFAIQgHAJgLAEQAPADAGAHQAIAKAAAQQAAAXgNALQgOALgUAAgAgaA/IAPAAIAKgBIAGAAQAKgCAGgHQAFgIAAgMQAAgQgKgIIgEgDIgFgCIgHgBIgIAAIgSAAgAgagKIATAAQAOAAAHgFQAIgGgBgPQAAgIgCgFQgCgFgFgDQgDgDgHgBIgKgBIgSAAg");
	this.shape_13.setTransform(-47.2,8.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.498)").s().p("AAkBOIgLgrIgxAAIgLArIgUAAIAtibIAXAAIArCbgAAAg5IgBAJIgSBDIAoAAIgShCIgBgJIgCgJIAAAAIAAAIg");
	this.shape_14.setTransform(-64,8.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.498)").s().p("AgqBOIAAibIApAAQAUAAAMALQAMAKAAAYQAAAXgMAJQgMALgVAAIgVAAIAABDgAgXgCIARAAQAGAAAFgBQAGgCAEgDQAFgEACgFQACgGAAgJQAAgJgDgGQgCgGgFgDQgEgDgHgBQgEgCgIAAIgOAAg");
	this.shape_15.setTransform(-74.5,8.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.498)").s().p("AAqBiIAAgoIhSAAIAAAoIgTAAIAAg5IAMAAQAMgVAFgZQAFgbAAghIAAggIBFAAIAACKIAQAAIAAA5gAgGg4QAAAOgCAPQgBAOgCANIgHAWQgEAKgFAJIA0AAIAAh5IgfAAg");
	this.shape_16.setTransform(-86.3,10.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.498)").s().p("AAcBOIAAhaIAAgWIACgWIgBAAQgCAKgFAMIgLAaIghBWIgYAAIAAibIAUAAIAABZIgBAVIgBAVIAAAAIAEgKIAEgOIAFgNIAEgLIAihTIAYAAIAACbg");
	this.shape_17.setTransform(-98.4,8.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.498)").s().p("AgZBKQgJgIgFgLQgFgMgCgOIgBgbIABgbQACgOAFgNQAFgMAKgIQAKgIAPAAQAXAAALANQAMAMAAAYIgTAAQAAgGgCgHQgBgGgDgEQgDgFgFgDQgFgCgIAAQgFAAgGAEQgFADgEAGQgDAFgCAHQgBAIgBAHIgBAPIAAALIAAALIABAPIACANQACAIADAEQAEAGAFADQAFADAGABQAbAAABgqIATAAQgBANgCAKQgDAKgFAIQgGAHgIAEQgKAFgNAAQgOAAgLgHg");
	this.shape_18.setTransform(-110,8.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.498)").s().p("AglBHIAAiNIBIAAIAAAQIg2AAIAAAtIAzAAIAAANIgzAAIAAA0IA5AAIAAAPg");
	this.shape_19.setTransform(110.2,-12.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.498)").s().p("AAZBHIAAhSIABgUQAAgKABgJIAAAAQgCAIgFALIgKAYIgeBOIgVAAIAAiNIARAAIAABRIAAATIgCAUIABAAIACgKIAFgMIAEgNIAEgJIAfhMIAWAAIAACNg");
	this.shape_20.setTransform(99.7,-12.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.498)").s().p("AAYBHIAAhFIgvAAIAABFIgRAAIAAiNIARAAIAAA7IAvAAIAAg7IARAAIAACNg");
	this.shape_21.setTransform(88.8,-12.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.498)").s().p("AgkBHIAAiNIBHAAIAAAQIg2AAIAAAtIAzAAIAAANIgzAAIAAA0IA4AAIAAAPg");
	this.shape_22.setTransform(79.2,-12.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.498)").s().p("AgpBIIgFgBIAAgOIAEABIAEAAQADAAAEgBQACgCACgEQACgFACgIIABgYIADhVIBCAAIAACMIgRAAIAAh9IghAAIgDBQIgCAVQgCAJgDAGQgDAGgFADQgGADgIAAIgGAAg");
	this.shape_23.setTransform(68.3,-12.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.498)").s().p("AgoBHIAAiNIBJAAIAAAPIg4AAIAAAtIAWAAQAJAAAIACQAIACAGAFQAGACADAIQACAHAAALQAAAXgKAKQgLALgUAAgAgXA5IARAAIALgBQAGgBAEgDQAFgDACgGQACgFAAgJQAAgJgCgFQgDgFgDgDQgEgDgGgBIgKgBIgTAAg");
	this.shape_24.setTransform(58.5,-12.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.498)").s().p("AgkBHIAAiNIBHAAIAAAQIg2AAIAAAtIAzAAIAAANIgzAAIAAA0IA4AAIAAAPg");
	this.shape_25.setTransform(48.8,-12.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.498)").s().p("AgnBHIAAiNIAmAAQASAAALAKQALAKAAAVQAAAVgLAIQgLAKgTAAIgTAAIAAA9gAgVgBIAQAAQAFAAAFgCQAGgBADgDQAEgDACgFQACgGgBgIQAAgIgBgGQgDgFgEgDQgEgDgGgBIgLgBIgNAAg");
	this.shape_26.setTransform(39.3,-12.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.498)").s().p("AgHBHIAAh9IgkAAIAAgQIBXAAIAAAQIgkAAIAAB9g");
	this.shape_27.setTransform(29.6,-12.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.498)").s().p("AgRBGQgHgEgFgFQgFgFgDgIQgDgHgCgJQgCgIAAgJIAAgPQAAglALgSQALgRAWgBQAXABALARQALARAAAkIAAAPIgCASQgCAIgDAIQgDAIgFAFQgFAGgIAEQgHADgKAAQgKAAgHgDgAgLg3QgEADgEAFQgDAFgBAGIgDANIgBANIAAAKQAAAgAHANQAGAOAOABQAGgBAGgDQAFgDAEgIQADgGACgMQABgLAAgQQAAgOgBgMQgCgLgDgIQgDgGgGgEQgFgDgHAAQgGAAgFADg");
	this.shape_28.setTransform(19.4,-12.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.498)").s().p("AAYBHIAAh9IgvAAIAAB9IgRAAIAAiNIBRAAIAACNg");
	this.shape_29.setTransform(8.5,-12.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.498)").s().p("AgeBHIgFgBIAAgOIAFABIAEAAQAGAAAEgCQAEgDACgFIAEgPIgphmIATAAIATAxIAFALIADAJIABAGIABAHIABAAQABgIADgHIAIgVIAQguIASAAIgqBxIgFAMQgBAFgDADQgEAEgFACQgGACgIAAIgEAAg");
	this.shape_30.setTransform(-1.6,-12.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.498)").s().p("AglBHIAAiNIBIAAIAAAQIg2AAIAAAtIAzAAIAAANIgzAAIAAA0IA5AAIAAAPg");
	this.shape_31.setTransform(-15.4,-12.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.498)").s().p("AgRBGQgHgEgFgFQgFgFgDgIQgDgHgCgJQgCgIAAgJIAAgPQAAglALgSQALgRAWgBQAXABALARQALARAAAkIAAAPIgCASQgCAIgDAIQgDAIgFAFQgFAGgIAEQgHADgKAAQgKAAgHgDgAgLg3QgEADgEAFQgDAFgBAGIgDANIgBANIAAAKQAAAgAHANQAGAOAOABQAGgBAGgDQAFgDAEgIQADgGACgMQABgLAAgQQAAgOgBgMQgCgLgDgIQgDgGgGgEQgFgDgHAAQgGAAgFADg");
	this.shape_32.setTransform(-26,-12.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.498)").s().p("AAYBHIAAhFIgvAAIAABFIgRAAIAAiNIARAAIAAA7IAvAAIAAg7IARAAIAACNg");
	this.shape_33.setTransform(-36.9,-12.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.498)").s().p("AgmBHIAAiNIAlAAQASAAALAKQAMAKgBAVQABAVgMAIQgLAKgSAAIgUAAIAAA9gAgVgBIAPAAQAGAAAFgCQAGgBADgDQAEgDACgFQABgGAAgIQAAgIgCgGQgCgFgEgDQgEgDgGgBIgLgBIgNAAg");
	this.shape_34.setTransform(-46.8,-12.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.498)").s().p("AgkBHIAAiNIBHAAIAAAQIg2AAIAAAtIAzAAIAAANIgzAAIAAA0IA4AAIAAAPg");
	this.shape_35.setTransform(-56.1,-12.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.498)").s().p("AAoBHIAAhiIABgTIAAgNIgBAAIgBAFIAAAFIgCAFIgBAHIgcBsIgPAAIgbhmIgCgJIgBgIIgCgGIAAgFIgCAAIABAUIABAUIAABaIgRAAIAAiNIAcAAIASBDIAHAbQADAOAAAPIAAAAQABgMADgMIAFgYIAThLIAdAAIAACNg");
	this.shape_36.setTransform(-68.2,-12.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.498)").s().p("AggA9QgKgLAAgWIASAAQAAAHABAGQABAFADAEQADAEAFADQAFACAGAAQAMAAAGgHQAHgHAAgNQAAgRgHgGQgIgHgNABIgCAAIgDAAIgDAAIAAgMIACAAIACAAIACAAQAFABAFgCQAFgBAEgDQADgDACgFQACgFAAgIQAAgLgFgGQgFgGgLAAQgFAAgFACQgEACgDADQgCADgBAFIgBAKIgSAAIAAgCQAAgSALgKQALgJASAAQATAAAJAJQAJALAAAQQAAANgGAKQgGAIgLADQANABAIAHQAHAKAAAPQAAATgLALQgLAMgVAAQgWAAgKgMg");
	this.shape_37.setTransform(-80.3,-12.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.498)").s().p("AglBHIAAiNIBIAAIAAAQIg2AAIAAAtIAzAAIAAANIgzAAIAAA0IA5AAIAAAPg");
	this.shape_38.setTransform(-89.5,-12.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.498)").s().p("AgmBHIAAiNIAlAAQASAAALAKQAMAKgBAVQABAVgMAIQgLAKgSAAIgUAAIAAA9gAgVgBIAPAAQAGAAAFgCQAGgBADgDQAEgDACgFQABgGAAgIQAAgIgCgGQgCgFgEgDQgEgDgGgBIgLgBIgNAAg");
	this.shape_39.setTransform(-99,-12.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.498)").s().p("AAXBHIAAg+IgNADIgLABQgSAAgKgKQgKgHAAgUIAAguIARAAIAAAuQAAAHACAFQACAFADACQADADAEABIAIABIAFAAIAGgBIAGgCIAGgBIAAhCIARAAIAACNg");
	this.shape_40.setTransform(-109.4,-12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.9,-23,235.9,46);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAkCdIgIg5Ig7AAIgIA5IguAAIAyk5IBHAAIAyE5gAgZA5IAuAAIgWidg");
	this.shape.setTransform(45.1,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhICdIAAk5IBIAAQAlAAASAUQASAUAAAmIAAApQAAAlgSATQgSATglABIgXAAIAAB2gAgXgEIAXAAQALgBAGgFQAGgHAAgRIAAgwQAAgQgGgHQgGgGgLAAIgXAAg");
	this.shape_1.setTransform(28.2,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlCdIgJg5Ig7AAIgIA5IguAAIAyk5IBHAAIAyE5gAgYA5IAtAAIgWidg");
	this.shape_2.setTransform(9.9,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAlCdIgnh8IgoB8IguAAIA3igIg0iZIAzAAIAkB0IAmh0IAuAAIg0CZIA4Cgg");
	this.shape_3.setTransform(-8.9,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAkCdIgIg5Ig7AAIgIA5IguAAIAyk5IBHAAIAyE5gAgZA5IAuAAIgWidg");
	this.shape_4.setTransform(-27.8,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag2CMQgSgUAAgnIAAiiQAAglASgVQATgUAjgBQAkABATAUQASAVAAAlIAAAgIgvAAIAAgiQAAgRgHgIQgGgGgMgBQgKABgHAGQgHAIAAARIAACoQAAARAHAGQAHAIAKgBQAMABAGgIQAHgGAAgRIAAgtIAvAAIAAApQAAAngSAUQgTAVgkgBQgjABgTgVg");
	this.shape_5.setTransform(-45.5,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.3,-25.4,112.7,50.8);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyB2IAAjrIBlAAIAAAhIg/AAIAABDIAxAAIAAAgIgxAAIAABFIA/AAIAAAig");
	this.shape.setTransform(65.6,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhXB2IAAjrIAlAAIAADJIAhAAIAAjJIAjAAIAADJIAhAAIAAjJIAlAAIAADrg");
	this.shape_1.setTransform(49,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2B2IAAjrIAmAAIAABZIAQAAQAbAAAOAPQAOANAAAcIAAAgQAAAcgOAPQgOAQgbgBgAgQBUIAQAAQAIABAFgFQAEgFABgNIAAgjQgBgNgEgFQgFgFgIAAIgQAAg");
	this.shape_2.setTransform(32.3,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVB2IAAhlIgpAAIAABlIgmAAIAAjrIAmAAIAABlIApAAIAAhlIAlAAIAADrg");
	this.shape_3.setTransform(18.2,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyB2IAAjrIBlAAIAAAhIg/AAIAABDIAxAAIAAAgIgxAAIAABFIA/AAIAAAig");
	this.shape_4.setTransform(4.9,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArB2IAAioIgaCoIgiAAIgbimIAACmIghAAIAAjrIAzAAIAaCmIAaimIA0AAIAADrg");
	this.shape_5.setTransform(-10.8,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxB2IAAjrIBkAAIAAAhIg/AAIAABDIAxAAIAAAgIgxAAIAABFIA/AAIAAAig");
	this.shape_6.setTransform(-31.3,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA8CHIAAghIibAAIAAjrIAlAAIAADJIAhAAIAAjJIAjAAIAADJIAgAAIAAjJIAmAAIAADKIAQAAIAABCg");
	this.shape_7.setTransform(-48.1,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxB2IAAjrIBjAAIAAAhIg+AAIAABDIAyAAIAAAgIgyAAIAABFIA+AAIAAAig");
	this.shape_8.setTransform(-65.2,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.7,-19.7,147.5,39.4);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.barrel();
	this.instance.setTransform(-53,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-52,107,104);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.apple();
	this.instance.setTransform(-60,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-49,120,98);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbCZIAAivIgRA8IgfBzIgoAAIAAj6IAjAAIAACeIAOg4IAfhmIArAAIAAD6gAgdh8QgKgKAAgTIAYAAQABAKAEAEQAEADAGAAQAIAAAFgDQAEgEABgKIAYAAQAAATgKAKQgLAMgVAAQgTAAgKgMg");
	this.shape.setTransform(63.9,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1B9IAAj6IBqAAIAAAkIhCAAIAABHIA1AAIAAAhIg1AAIAABKIBCAAIAAAkg");
	this.shape_1.setTransform(49.8,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhGB+IAAgkIALgBQAFgBADgCQADgDABgFIACgOIAHi9IBtAAIAAD6IgoAAIAAjWIggAAIgFCXQgBAigNAPQgOAPgdAAg");
	this.shape_2.setTransform(34.2,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1B9IAAj6IBqAAIAAAkIhCAAIAABHIA1AAIAAAhIg1AAIAABKIBCAAIAAAkg");
	this.shape_3.setTransform(20.4,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSB9IAAjWIgqAAIAAgkIB5AAIAAAkIgqAAIAADWg");
	this.shape_4.setTransform(7.1,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbB9IAAivIgRA8IgfBzIgoAAIAAj6IAjAAIAACeIAOg2IAfhoIArAAIAAD6g");
	this.shape_5.setTransform(-6.9,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqBwQgPgRgBgeIAAiBQABgfAPgQQAOgRAcAAQAdAAAPARQAOAQAAAfIAAAZIglAAIAAgbQABgPgHgEQgFgHgJAAQgHAAgGAHQgGAEAAAPIAACGQAAANAGAFQAGAGAHAAQAJAAAFgGQAHgFgBgNIAAglIAlAAIAAAiQAAAegOARQgPARgdAAQgcAAgOgRg");
	this.shape_6.setTransform(-21.5,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdB9IgHgtIgvAAIgGAtIglAAIApj6IA4AAIAoD6gAgUAuIAlAAIgRh+g");
	this.shape_7.setTransform(-35.9,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag5B9IAAj6IA5AAQAdAAAOAQQAPAQAAAfIAAAgQAAAegPAPQgOAQgdAAIgSAAIAABegAgSgDIASAAQAIAAAFgFQAFgGAAgNIAAgmQAAgOgFgFQgFgEgIgBIgSAAg");
	this.shape_8.setTransform(-49.4,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAZB9IglhkIgMAXIAABNIgoAAIAAj6IAoAAIAABvIAyhvIAnAAIg3BxIA3CJg");
	this.shape_9.setTransform(-63.6,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.7,-20.7,147.5,41.5);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhYDkQgeghAAg+IAAg5IBMAAIAAA+QAAAbALAMQAMALASAAQASAAAKgMQAMgLAAgjIAAgoQAAgjgNgPQgMgPgZAAIgUAAIAAhHIAYAAQAUAAANgLQANgMAAgfIAAgcQAAgjgMgLQgKgNgSAAQgTAAgLAMQgMALAAAcIAAApIhKAAIAAgmQABg+AdggQAeghA5AAQA6AAAfAiQAeAhAAA+IAAANQAABSg4AXQAfANAMAaQANAbAAAnIAAApQAAA+geAhQgfAhg6AAQg5AAgfghg");
	this.shape.setTransform(28.6,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhsD/IAAn9IDZAAIAABJIiJAAIAACOIBsAAIAABHIhsAAIAACWICJAAIAABJg");
	this.shape_1.setTransform(1.1,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah7D/IAAn9IDfAAIAABJIiOAAIAACCIAsAAQA9ABAeAgQAfAeAAA+IAAA3QAAA+gfAgQgeAgg9AAgAgqC2IAsAAQAUAAAKgKQAMgLAAgbIAAhBQAAgcgMgKQgKgKgUAAIgsAAg");
	this.shape_2.setTransform(-27.6,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.1,-40,90.2,80);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#98BC33").s().p("Ag1A3QgGgoAkgjQAkgoApAHQAGAqgkAjQgfAfgkAAIgKAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-5.6,11.1,11.1);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#98BC33").s().p("AhhABQAigpA/AAQBFAAAdApQgfAohDAAQg+AAgjgog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-4.1,19.6,8.3);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#98BC33").s().p("AgXAXQgkgiAGgrQApgFAkAlQAkAigGAqIgKABQgkAAgfggg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-5.5,11.1,11.1);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slogan();
	this.instance.setTransform(-134,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134,-29,268,58);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.br2();
	this.instance.setTransform(-40,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-50,80,100);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.br1();
	this.instance.setTransform(-96,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-54,192,108);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsDwIAAhIIBGAAIAABIgAgpCHQgEgMAAgRQAAgaAGgTQAGgTAJgQQAJgQALgNQAJgOAJgSQAJgRAGgVQAGgVAAgeQAAgagKgLQgKgKgPAAQgSAAgKAKQgKALAAAaIAAAzIhHAAIAAgvQAAg5AcgfQAbgfA2AAQA3AAAbAfQAcAfAAA5QAAAggHAWQgGAXgKATQgKASgMANIgVAfQgKAPgGARQgHARAAAVQAAAPADAMg");
	this.shape.setTransform(57.1,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhuDtIAAnaIBuAAQA3AAAcAfQAbAeABA5IAAA+QgBA5gbAdQgcAdg3AAIgiAAIAACzgAgigHIAiAAQAQAAAKgKQAKgJAAgaIAAhHQAAgbgKgJQgKgJgQAAIgiAAg");
	this.shape_1.setTransform(32.9,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABPENIAAhAIieAAIAABAIhJAAIAAiCIAdAAQAKgNAEgOQADgOACgVIARlaIDPAAIAAGYIAhAAIAACCgAgfBMQgBAbgFANQgFAOgKAJIBgAAIAAlTIg9AAg");
	this.shape_2.setTransform(2.3,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAzDtIAAlNIgfBzIg8DaIhNAAIAAnaIBDAAIAAEsIAbhnIA7jFIBSAAIAAHag");
	this.shape_3.setTransform(-28.6,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhSDUQgcgfAAg5IAAj3QAAg5AcgfQAcgfA2AAQA3AAAcAfQAcAfAAA5IAAAvIhGAAIAAgzQAAgagMgLQgJgKgSAAQgQAAgLAKQgKALAAAaIAAD/QAAAaAKAKQALAKAQAAQASAAAJgKQAMgKAAgaIAAhEIBGAAIAABAQAAA5gcAfQgcAfg3AAQg2AAgcgfg");
	this.shape_4.setTransform(-56.1,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.4,-37.4,142.8,74.8);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAkDRIAAjvIgVBSIgrCdIg4AAIAAlVIAwAAIAADXIAUhLIAqiMIA7AAIAAFVgAgnioQgOgPgBgZIAiAAQAAANAGAFQAGAEAIAAQAMAAAFgEQAHgFABgNIAhAAQAAAZgPAPQgOAOgdAAQgaAAgNgOg");
	this.shape.setTransform(83.9,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAkCrIAAjwIgVBTIgrCdIg4AAIAAlVIAwAAIAADXIAUhKIAqiNIA7AAIAAFVg");
	this.shape_1.setTransform(63,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABWDCIAAguIjgAAIAAlVIA2AAIAAEkIAuAAIAAkkIA0AAIAAEkIAvAAIAAkkIA2AAIAAElIAYAAIAABeg");
	this.shape_2.setTransform(37.6,3.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdCrIAAiMIgSAAQgRAAgIAKQgJAKAAAYIAAA2IAAARIgBALIgBAHIgDAHIg2AAQADgKABgJQACgKAAgNIAAg1QAAgaAHgUQAIgSAUgJQgjgOAAg1IAAgbQAAgoATgTQATgUAoAAIBRAAIAAFVgAgPhxQgHAJAAASIAAAiQAAAUAIAIQAJAJANAAIAVAAIAAhqIgaAAQgMAAgGAIg");
	this.shape_3.setTransform(11.4,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7CZQgVgXgBgpIAAixQABgqAVgVQAVgXAmAAQAnAAAVAXQAVAVABAqIAACxQgBApgVAXQgVAWgnAAQgmAAgVgWgAgTh1QgHAHgBATIAAC3QABASAHAJQAHAHAMAAQAMAAAIgHQAHgJABgSIAAi3QgBgTgHgHQgIgIgMAAQgMAAgHAIg");
	this.shape_4.setTransform(-7.7,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZCrIAAkkIg5AAIAAgxIClAAIAAAxIg5AAIAAEkg");
	this.shape_5.setTransform(-26.1,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag7CZQgUgXAAgpIAAixQAAgqAUgVQAVgXAmAAQAnAAAVAXQAUAVAAAqIAAAiIgzAAIAAglQAAgTgIgHQgHgIgNAAQgLAAgHAIQgIAHAAATIAAC3QAAATAIAHQAHAIALAAQANAAAHgIQAIgHAAgTIAAgxIAzAAIAAAuQAAApgUAXQgVAWgnAAQgmAAgVgWg");
	this.shape_6.setTransform(-44.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAnCrIgJg+IhAAAIgJA+IgyAAIA3lVIBNAAIA3FVgAgbA+IAyAAIgYisg");
	this.shape_7.setTransform(-63.7,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdCrIAAiTIg6AAIAACTIg2AAIAAlVIA2AAIAACTIA6AAIAAiTIA3AAIAAFVg");
	this.shape_8.setTransform(-84.1,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.6,-27.5,193.2,55);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhUDHIAAmNICpAAIAAA5IhqAAIAABvIBUAAIAAA3IhUAAIAAB1IBqAAIAAA5g");
	this.shape.setTransform(45,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhFCxQgZgZAAgxIAAjNQAAgxAZgZQAZgaAsAAQAuAAAYAaQAZAZAAAxIAADNQAAAxgZAZQgYAaguAAQgsAAgZgagAgWiJQgJAJAAAVIAADWQAAAWAJAJQAJAJANAAQAOAAAJgJQAJgJAAgWIAAjWQAAgVgJgJQgJgJgOAAQgNAAgJAJg");
	this.shape_1.setTransform(22.9,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAnDHIg7ifIgUAlIAAB6Ig+AAIAAmNIA+AAIAACuIBQiuIA/AAIhXCxIBXDcg");
	this.shape_2.setTransform(0.7,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAuDHIgLhIIhLAAIgLBIIg5AAIBAmNIBZAAIBAGNgAggBJIA7AAIgcjJg");
	this.shape_3.setTransform(-23.5,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeDHIAAlUIhCAAIAAg5IDAAAIAAA5IhBAAIAAFUg");
	this.shape_4.setTransform(-45.2,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.4,-31.7,114.8,63.4);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFCxQgZgZAAgxIAAjNQAAgxAZgZQAZgaAsAAQAuAAAYAaQAZAZAAAxIAADNQAAAxgZAZQgYAaguAAQgsAAgZgagAgWiJQgJAJAAAVIAADWQAAAWAJAJQAJAJANAAQAOAAAJgJQAJgJAAgWIAAjWQAAgVgJgJQgJgJgOAAQgNAAgJAJg");
	this.shape.setTransform(21.9,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeDHIAAlUIhCAAIAAg5IDBAAIAAA5IhCAAIAAFUg");
	this.shape_1.setTransform(0.5,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAiDHIAAihQgKAMgQAFQgNAGgNgBQgmABgUgaQgTgZAAgnIAAipIA+AAIAACjQAAAVALAKQALAHANAAQAPAAAIgIQAJgLAAgUIAAiiIA+AAIAAGNg");
	this.shape_2.setTransform(-21.7,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.3,-31.7,70.7,63.4);


(lib.bottle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bottle();
	this.instance.setTransform(-92,-171);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-171,185,342);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAnEMAAAhOHMAu3AAAMAAABOHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-250,300,500);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.setTransform(-150,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-250,300,500);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.t4 = new lib.Symbol4();
	this.t4.setTransform(0.1,54.4);

	this.t3 = new lib.Symbol3();
	this.t3.setTransform(0.1,-2.7);

	this.t2 = new lib.Symbol2();
	this.t2.setTransform(37.8,-60);

	this.t1 = new lib.Symbol1();
	this.t1.setTransform(-59.6,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.5,-91.7,193.2,183.5);


(lib.Symbol8copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.l6 = new lib.Symbol11();
	this.l6.setTransform(48.1,-9,1,1,0,0,180,5.5,-5.6);

	this.l5 = new lib.Symbol10();
	this.l5.setTransform(49.4,-13.6,1,1,0,0,180,9.8,-0.1);

	this.l4 = new lib.Symbol9();
	this.l4.setTransform(48.1,-18.2,1,1,0,0,180,5.5,5.5);

	this.l3 = new lib.Symbol11();
	this.l3.setTransform(-49.4,-9,1,1,0,0,0,5.5,-5.6);

	this.l2 = new lib.Symbol10();
	this.l2.setTransform(-50.7,-13.6,1,1,0,0,0,9.8,-0.1);

	this.l1 = new lib.Symbol9();
	this.l1.setTransform(-49.4,-18.2,1,1,0,0,0,5.5,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l1},{t:this.l2},{t:this.l3},{t:this.l4},{t:this.l5},{t:this.l6}]}).wait(1));

	// Layer 1
	this.t2 = new lib.Symbol19();
	this.t2.setTransform(39,44.5);

	this.t1 = new lib.Symbol12();
	this.t1.setTransform(-1,-14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,-54.2,213,119.5);


(lib.Symbol8copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.l6 = new lib.Symbol11();
	this.l6.setTransform(60.1,29.8,1,1,0,0,180,5.5,-5.6);

	this.l5 = new lib.Symbol10();
	this.l5.setTransform(61.4,25.2,1,1,0,0,180,9.8,-0.1);

	this.l4 = new lib.Symbol9();
	this.l4.setTransform(60.1,20.6,1,1,0,0,180,5.5,5.5);

	this.l3 = new lib.Symbol11();
	this.l3.setTransform(-61.4,29.8,1,1,0,0,0,5.5,-5.6);

	this.l2 = new lib.Symbol10();
	this.l2.setTransform(-62.7,25.2,1,1,0,0,0,9.8,-0.1);

	this.l1 = new lib.Symbol9();
	this.l1.setTransform(-61.4,20.6,1,1,0,0,0,5.5,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l1},{t:this.l2},{t:this.l3},{t:this.l4},{t:this.l5},{t:this.l6}]}).wait(1));

	// Layer 1
	this.t2 = new lib.Symbol17();
	this.t2.setTransform(-0.4,25);

	this.t1 = new lib.Symbol16();
	this.t1.setTransform(-1.8,-16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.3,-36.6,163.4,87.1);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.l6 = new lib.Symbol11();
	this.l6.setTransform(48.1,-9,1,1,0,0,180,5.5,-5.6);

	this.l5 = new lib.Symbol10();
	this.l5.setTransform(49.4,-13.6,1,1,0,0,180,9.8,-0.1);

	this.l4 = new lib.Symbol9();
	this.l4.setTransform(48.1,-18.2,1,1,0,0,180,5.5,5.5);

	this.l3 = new lib.Symbol11();
	this.l3.setTransform(-49.4,-9,1,1,0,0,0,5.5,-5.6);

	this.l2 = new lib.Symbol10();
	this.l2.setTransform(-50.7,-13.6,1,1,0,0,0,9.8,-0.1);

	this.l1 = new lib.Symbol9();
	this.l1.setTransform(-49.4,-18.2,1,1,0,0,0,5.5,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l1},{t:this.l2},{t:this.l3},{t:this.l4},{t:this.l5},{t:this.l6}]}).wait(1));

	// Layer 1
	this.t2 = new lib.Symbol13();
	this.t2.setTransform(0,33.5);

	this.t1 = new lib.Symbol12();
	this.t1.setTransform(-1,-14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.7,-54.2,147.5,108.5);


(lib.branches2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.br3 = new lib.Symbol5();
	this.br3.setTransform(210.8,-103.1,0.63,0.63,0,-13.4,166.6,-128.3,43.8);

	this.br2 = new lib.Symbol5();
	this.br2.setTransform(-194.1,118.9,0.6,0.6,6.9,0,0,-128.3,43.8);

	this.br4 = new lib.Symbol6();
	this.br4.setTransform(178.2,39.4,1,1,0,0,180,-61.9,-17.6);

	this.br1 = new lib.Symbol5();
	this.br1.setTransform(-216.1,-137.2,0.869,0.869,43.4,0,0,-128.3,43.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.br1},{t:this.br4},{t:this.br2},{t:this.br3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201.9,-179.6,394.5,320.8);


(lib.branches = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.br3 = new lib.Symbol5();
	this.br3.setTransform(254.9,62.9,0.999,0.999,0,-24.5,155.5,-128.4,43.8);

	this.br2 = new lib.Symbol6();
	this.br2.setTransform(-177.9,69.4,1,1,0,0,0,-61.9,-17.6);

	this.br1 = new lib.Symbol5();
	this.br1.setTransform(-205.9,-125.9,1,1,0,0,0,-128.3,43.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.br1},{t:this.br2},{t:this.br3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.6,-223.7,403.3,388.8);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// slogan
	this.slogan = new lib.Symbol7();
	this.slogan.setTransform(-1,-161);

	this.timeline.addTween(cjs.Tween.get(this.slogan).wait(1));

	// t3
	this.t3 = new lib.Symbol8copy2();
	this.t3.setTransform(-51.9,84.3,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t2
	this.t2 = new lib.Symbol8copy();
	this.t2.setTransform(-45.9,83.3,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.Symbol8();
	this.t1.setTransform(-45.9,-46.7,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// apple2
	this.apple2 = new lib.Symbol14();
	this.apple2.setTransform(-40,-44);

	this.timeline.addTween(cjs.Tween.get(this.apple2).wait(1));

	// barrel
	this.barrel = new lib.Symbol15();
	this.barrel.setTransform(-48,-33);

	this.timeline.addTween(cjs.Tween.get(this.barrel).wait(1));

	// apple
	this.apple = new lib.Symbol14();
	this.apple.setTransform(-44,81);

	this.timeline.addTween(cjs.Tween.get(this.apple).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.5,-190,269.5,346.1);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var r = this;
		var count = 1;
		var repeat = 20;
		var time2 = 4.0;
		var time3 = time2 + 3.0;
		var time4 = time3 + 3.0;
		var time5 = time4 + 3.0;
		
		var tl = new TimelineMax();
		tl.fromTo(r.blk, 0.7, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .from(r.warn, 1.0, {y:"+=200", ease:Expo.easeOut}, 0.0)
		  .from(r.bg, 1.1, {scaleX:5.0, scaleY:5.0, ease:Expo.easeOut}, 0.0)
		  .staggerFrom([r.t1.t1, r.t1.t2, r.t1.t3, r.t1.t4], 1.5, {y:"+=80", alpha:0, ease:Expo.easeOut}, 0.05, 0.50)
		  
		  .from(r.br.br1, 1.0, {x:"-=100", y:"-=100", ease:Expo.easeOut}, 0.70)
		  .from(r.br.br2, 1.0, {x:"-=100", y:"+=100", ease:Expo.easeOut}, 0.70)
		  .from(r.br.br3, 1.0, {x:"+=100", y:"+=100", ease:Expo.easeOut}, 0.70)
		  .from(r.br.br1, 3.2, {rotation:"-=30", ease:Elastic.easeOut}, 0.70)
		  .from(r.br.br2, 3.5, {rotation:"+=30", ease:Elastic.easeOut}, 0.80)
		  .from(r.br.br3, 3.0, {rotation:"+=30", ease:Elastic.easeOut}, 0.80)
		  
		  
		  //2
		  .to(r.br.br1, 0.7, {x:"-=200", rotation:"-=90", ease:Expo.easeIn}, time2+0.00)
		  .to(r.br.br2, 0.7, {x:"-=200", rotation:"+=90", ease:Expo.easeIn}, time2+0.00)
		  .to(r.br.br3, 0.7, {x:"+=200", rotation:"+=90", ease:Expo.easeIn}, time2+0.00)
		  .staggerTo([r.t1.t1, r.t1.t2, r.t1.t3, r.t1.t4], 0.7, {x:"-=250", ease:Expo.easeIn}, 0.05, time2+0.00)
		  .from(r.bot1, 1.0, {x:"+=350", ease:Expo.easeOut}, time2+0.50)
		  .from(r.t2.slogan, 1.0, {y:"-=100", alpha:0, ease:Expo.easeOut}, time2+0.70)
		  .staggerFrom([r.t2.t1.t1, r.t2.t1.t2], 1.0, {y:"+=80", alpha:0, ease:Expo.easeOut}, 0.15, time2+0.80)
		  .staggerFrom([r.t2.t1.l1, r.t2.t1.l2, r.t2.t1.l3, r.t2.t1.l4, r.t2.t1.l5, r.t2.t1.l6], 1.5, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut}, 0.1, time2+1.00)
		  .from(r.t2.apple, 1.0, {x:"-=350", ease:Expo.easeOut}, time2+1.20)
		  
		  
		  //3
		  //.to(r.t2.apple, 1.0, {y:"-=150", alpha:0, ease:Expo.easeIn}, time3+0.00)
		  .staggerTo([r.t2.apple, r.t2.t1.t1, r.t2.t1.t2], 0.7, {y:"+=150", alpha:0, ease:Expo.easeIn}, 0.05, time3+0.00)
		  .staggerTo([r.t2.t1.l1, r.t2.t1.l2, r.t2.t1.l3, r.t2.t1.l4, r.t2.t1.l5, r.t2.t1.l6], 0.7, {scaleX:0.0, scaleY:0.0, ease:Back.easeIn}, 0.1, time3+0.00)
		  .staggerFrom([r.t2.barrel, r.t2.t2.t1, r.t2.t2.t2], 1.0, {y:"-=80", alpha:0, ease:Expo.easeOut}, 0.15, time3+0.70)
		  .staggerFrom([r.t2.t2.l1, r.t2.t2.l2, r.t2.t2.l3, r.t2.t2.l4, r.t2.t2.l5, r.t2.t2.l6], 1.5, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut}, 0.1, time3+1.00)
		  
		  
		  //4
		  .staggerTo([r.t2.t2.t2, r.t2.t2.t1, r.t2.barrel], 0.7, {y:"+=150", alpha:0, ease:Expo.easeIn}, 0.05, time4+0.00)
		  .staggerTo([r.t2.t2.l1, r.t2.t2.l2, r.t2.t2.l3, r.t2.t2.l4, r.t2.t2.l5, r.t2.t2.l6], 0.7, {scaleX:0.0, scaleY:0.0, ease:Back.easeIn}, 0.1, time4+0.00)
		  .staggerFrom([r.t2.t3.t2, r.t2.t3.t1, r.t2.apple2], 1.0, {y:"-=80", alpha:0, ease:Expo.easeOut}, 0.15, time4+0.70)
		  .staggerFrom([r.t2.t3.l1, r.t2.t3.l2, r.t2.t3.l3, r.t2.t3.l4, r.t2.t3.l5, r.t2.t3.l6], 1.5, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut}, 0.1, time4+1.00)
		  .to(r.bot1, 1.0, {/*x:68, y:8, */scaleX:0.65, scaleY:0.65, ease:Expo.easeInOut}, time4+0.50)
		  
		  
		  //5
		  //.to(r.t2.slogan, 1.7, {y:"-=50", ease:Expo.easeInOut}, time5+0.00)
		  .staggerTo([r.t2.t3.t2, r.t2.t3.t1, r.t2.apple2], 0.7, {y:"+=80", alpha:0, ease:Expo.easeIn}, 0.15, time5+0.00)
		  .staggerTo([r.t2.t3.l1, r.t2.t3.l2, r.t2.t3.l3, r.t2.t3.l4, r.t2.t3.l5, r.t2.t3.l6], 0.7, {scaleX:0.0, scaleY:0.0, ease:Back.easeIn}, 0.1, time5+0.00)
		  .to(r.bot1, 1.0, {x:6, y:22, scaleX:1.0, scaleY:1.0, ease:Expo.easeInOut}, time5+0.50)
		  .from(r.br2.br1, 1.0, {x:"-=100", y:"+=100", ease:Expo.easeOut}, time5+0.70)
		  .from(r.br2.br2, 1.0, {x:"-=100", y:"+=100", ease:Expo.easeOut}, time5+0.70)
		  .from(r.br2.br3, 1.0, {x:"+=100", y:"+=100", ease:Expo.easeOut}, time5+0.70)
		  .from(r.br2.br4, 1.0, {x:"+=100", y:"+=100", ease:Expo.easeOut}, time5+0.70)
		  .from(r.br2.br1, 3.2, {rotation:"+=30", ease:Elastic.easeOut}, time5+0.50)
		  .from(r.br2.br2, 3.5, {rotation:"+=30", ease:Elastic.easeOut}, time5+0.80)
		  .from(r.br2.br3, 3.0, {rotation:"+=30", ease:Elastic.easeOut}, time5+0.80)
		  .from(r.br2.br4, 3.0, {rotation:"+=30", ease:Elastic.easeOut}, time5+0.80)
		  
		  
		  
		  
		  .call(replay)
		  .to(this.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 18)
		  ;
		
		
		
		function replay() {
		  if (count == repeat){
			  tl.kill();
			  createjs.Ticker.setFPS(1);
		  } else {
		  if (count != repeat) {
			  count++;
			  tl.play();
		  }
		  }
		}
		
		
		function restart() {
			tl.play(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.298)").ss(2,1,1,3,true).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(0,0,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// blk
	this.blk = new lib.blk();

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// warn
	this.warn = new lib.Symbol18();
	this.warn.setTransform(0,175,1.23,1.1);

	this.timeline.addTween(cjs.Tween.get(this.warn).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(-2,-22.3,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// br2
	this.br2 = new lib.branches2();

	this.timeline.addTween(cjs.Tween.get(this.br2).wait(1));

	// br
	this.br = new lib.branches();

	this.timeline.addTween(cjs.Tween.get(this.br).wait(1));

	// t2
	this.t2 = new lib.t2();

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// bot1
	this.bot1 = new lib.bottle();
	this.bot1.setTransform(92,28,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.bot1).wait(1));

	// bg_pattern
	this.bg = new lib.bg_1();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201.9,-251,431.6,502);


// stage content:
(lib.fizz_FS = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var page_body = document.getElementsByTagName("body")[0];
		page_body.style.backgroundColor = "#000000";
		page_body.style.overflow = "hidden";
		page_body.style.position = "fixed";
		
		var page_canvas = document.getElementsByTagName("canvas")[0];
		stageWidth = page_canvas.width;
		stageHeight = page_canvas.height;
		
		var viewport = document.querySelector('meta[name=viewport]');
		var viewportContent = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0';
		
		if (viewport === null) {
		 var head = document.getElementsByTagName('head')[0];
		 viewport = document.createElement('meta');
		 viewport.setAttribute('name', 'viewport');
		 head.appendChild(viewport);
		}
		
		viewport.setAttribute('content', viewportContent);
		
		function onResize() {
		 var widthToHeight = stageWidth / stageHeight;
		 var newWidth = window.innerWidth;
		 var newHeight = window.innerHeight;
		 var newWidthToHeight = newWidth / newHeight;
		 //
		 if (newWidthToHeight < widthToHeight) {
		 newWidth = newHeight * widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 } else {
		 newHeight = newWidth / widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 }
		 scale = newWidthToHeight / widthToHeight;
		 stage.width = newWidth;
		 stage.height = newHeight;
		 page_canvas.style.marginTop = ((window.innerHeight - newHeight) / 2) + "px";
		 page_canvas.style.marginLeft = ((window.innerWidth - newWidth) / 2) + "px";
		}
		
		window.onresize = function () {
		 onResize();
		}
		
		onResize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgXaAnEMAAAhOHMAu1AAAMAAABOHg");
	mask.setTransform(150,250);

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(150,250);

	this.rolik.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,250,300,500);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;