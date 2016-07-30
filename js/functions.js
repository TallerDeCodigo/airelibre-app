$(window).load(function(){
	$(function() {

		$("a.menu").click(function(){
			$(".overscreen").show();
			setTimeout(function() {$(".overscreen").addClass('active');}, 100);
		});

		$("div.fitted").click(function(){
			$(".overscreen").removeClass('active');
			setTimeout(function() {$(".overscreen").hide();}, 600);
		});

	});

});

(function($){

	"use strict";

	$(function(){

		console.log('hello from functions.js');

		/**
		 * Validación de emails
		 */
		window.validateEmail = function (email) {
			var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return regExp.test(email);
		};

		/**
		 * Regresa todos los valores de un formulario como un associative array 
		 */
		window.getFormData = function (selector) {
			var result = [],
				data   = $(selector).serializeArray();

			$.map(data, function (attr) {
				result[attr.name] = attr.value;
			});
			return result;
		}

	});

})(jQuery);