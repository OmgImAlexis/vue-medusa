(function () {
/**
 * Install plugin
 * @param Vue
 * @param medusa
 */

	const plugin = (Vue, medusa) => {
		if (plugin.installed) {
			return;
		}
		plugin.installed = true;

		if (!medusa) {
			console.error('You have to install medusa-lib');
			return;
		}

		Vue.medusa = medusa;

		Object.defineProperties(Vue.prototype, {
			medusa: {
				get() {
					return medusa;
				}
			}
		});
	};

	if (typeof exports === 'object') {
		module.exports = plugin;
	} else if (typeof define === 'function' && define.amd) {
		define([], () => {
			return plugin;
		});
	} else if (window.Vue && window.medusa) {
		Vue.use(plugin, window.medusa);
	}
})();
