$(window).ready(function() {
	$("#BoxCodeButton-1").click(function() {
		$(this).text("COPIED"),
			$("#BoxCodeButton-2").text("COPY COUPON"),
			TweenMax.to("#BoxCode-1", 0.2, {
				x: 20,
				delay: 0,
				ease: Quad.easeOut,
				repeat: 1,
				yoyo: !0
			}),
			TweenLite.to("#BoxCode-1", 0.2, {
				backgroundColor: "rgba(242, 236, 34, 1)",
				color: "#008c11",
				delay: 0,
				ease: Quad.easeOut,
				onComplete: function() {
					TweenLite.to("#BoxCode-1", 0.3, {
						backgroundColor: "rgba(87, 16, 39, 0.75)",
						color: "#ffffff",
						delay: 0,
						ease: Quad.easeOut
					});
				}
			});
	});

	// Change coupon ID here
	new ClipboardJS("#BoxCodeButton-1");
});
