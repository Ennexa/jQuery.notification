/**
 * jQuery.notification - Notification plugin for bootstrap
 * Copyright (c) Ennexa Technologies (P) Ltd | http://www.ennexa.com/
 * Dual licensed under MIT and GPL.
 * Date: 
 * @author Joyce Babu
 * @version 1.0.0
 *
 */

(function($){
	var $wrapper;
	$.notification = function (msg, opt) {
		if (!$wrapper) $wrapper = $('<ul id="notification"></ul>').appendTo(document.body);
		if (typeof msg === 'string') msg = '<p>' + msg + '</p>';
		var options = this.settings = $.extend({}, $.notification.defaults, opt);
		this.init(msg, options);
	};
	$.extend($.notification, {
		defaults : {
			'class' : 'alert-info',
			action : 'append',
			timeout : 5000, 
			close : '<a href="#" data-dismiss="alert" class="close">&times;</a>', 
			click : new Function('e', 'this.close();e.stopPropagation();')
		},
		prototype : {
			elem : null,
			timer : null,
			settings : null,
			init : function (msg, options) {
				var that = this;
				var close = $.proxy(this.close, this);
				this.__startTimer = function() {
					that.timer = setTimeout(close, options.timeout);
				}
				this.message = $(msg);
				var alert = $('<li class="alert-message alert ' + options['class'] + ' fade"/>').append($(options.close), this.message).click($.proxy(options.click, this)).data('notification', this);

				alert[0].offsetWidth // force reflow
				$wrapper[options.action](alert);
				alert.addClass('in');
				
				if (options.timeout) {
					alert.hover(function(){
						clearTimeout(that.timer);
					}, function(){
						that.__startTimer();
					});
					this.__startTimer();
				}

			},
			close : function () {
				this.message.alert('close');
			}
		}
	});
	$.fn.notification = function() {
		var args = arguments;
		return this.each(function(){
			var $t = $(this);
			if (args[0] === 'close') {
				$t.data('notification').close();
			} else {
				$t.data('notification', new $.notification(this, args[0] || {}));
			}
		});
	};
})(jQuery);