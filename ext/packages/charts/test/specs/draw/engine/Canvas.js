describe('Ext.draw.engine.Canvas', function () {

    describe('surface splitting', function () {
        var isAndroid51 = navigator.userAgent.search('Android 5.1') >= 0;

        // In TeamCity's only "Android@Browser@5.1: Modern Toolkit" the following error is reported: "Expected 16 to be 9."
        (isAndroid51 ? xit : it)("should split the surface into canvas tiles vertically and horizontally based on splitThreshold", function () {
            var side = 400,
                threshold = 200,
                proto = Ext.draw.engine.Canvas.prototype,
                originalThreshold = proto.splitThreshold;

            proto.splitThreshold = threshold;
            var draw = new Ext.draw.Container({
                renderTo: Ext.getBody(),
                engine: 'Ext.draw.engine.Canvas',
                width: side,
                height: side
            });
            var surface = draw.getSurface();
            var expectedCanvasCount = Math.pow(Math.ceil((side * (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI)) / threshold), 2);
            expect(surface.innerElement.select('canvas').elements.length).toBe(expectedCanvasCount);
            proto.splitThreshold = originalThreshold;
            Ext.destroy(draw);
        });
    });

});