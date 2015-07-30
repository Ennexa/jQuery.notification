# jQuery.notification

Simple jQuery plugin for unobtrusive notification. This plugin was built for Twitter Bootstrap and requires the Alert plugin.


## Usage

Notifications can be created using

```js 
new $.notification('Hello! How are you? I will auto disappear after 5 seconds.');
```

Existing elements can also be used as notification

```js 
$('#test').notification();
```

or you may also use

```js
$('<strong>Hello! How are you?</strong>').notification();
```

### Customization

#### Timeout
Use `timeout` parameter to enable auto closing of notification. Set `timeout` to null to disable it.
```js 
new $.notification('Oops! Something aweful happened', {"class": "alert-danger", timeout: null});
```

#### Click
Use `click` option to handle user click on the notification. Default action is to close the notification. Set to null to disable it.

```js 
var notification1 = new $.notification('Oops! Something aweful happened', {"class": "alert-danger", click: null});

var notification2 = new $.notification('Oops! Something aweful happened', {"class": "alert-danger", click: function(e) {
	e.preventDefault();
	if (confirm('Do you wish to close this notification')) {
		notification2.close();
	}
}});
```

#### Close Button
Set `close` option to false to remove the close button. For example, use the following code to create a persistent notification.
```js 
var notification2 = new $.notification('Oops! Something aweful happened', {"class": "alert-danger", timeout: null, click: null});
```


## CSS
In addition to Bootstrap CSS, the plugin needs the following CSS. Modify `#notification` to have the notification appear at another location. For example, 
replace `top:45px;right:5px;` with `bottom: 45px; left: 5px` to position the notifications at the bottom left corner.

```css
<style type="text/css">
#notification {width:300px;position:fixed;top:45px;right:5px;list-style-type:none;z-index:10000;}
#notification li{margin-bottom:5px;border:2px #333 solid;box-shadow:1px 1px 3px #333;}
#notification li.in{opacity:0.8;}
#notification li.in:hover{opacity:1;}
#notification .close{outline:none;}
</style>
```

## Credits

This plugin was created for [Prokerala.com](http://www.prokerala.com).