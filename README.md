fbGetCover
==========
Integrate facebook cover photo on to your site easily using javascript.

<h3>Description</h3>
Facebook has changed their look to a new Timeline for Facebook Images. The new look represent a timeline cover image on top of the page that are automatically fit to the width of the container, the top offset are user defined. This simple code will help you imbed the cover images for Facebook timeline photo with your site with the correct offset y calculation given by the Facebook graph API.

<h3>Manual</h3>
<b>.fbGetcover</b>(<b>fbuid</b> [, <b>containerWidth</b> ] [, <b>containerHeight</b> ] [, <b>completeCallback</b> ])

@param <b>fbuid</b> string/integer facebook user ID it can be an integer or string (19292868552 or facebook)<br>
@param <b>containerWidth</b> integer the width of container will be after the image is loaded (default 850 pixel)<br>
@param <b>containerHeight</b> integer the height of container will be after the image is loaded (default 314 pixel)<br>
@param <b>completeCallback</b> function callback to call when fetching is complete, a status argument will be pass to the function (success or failed)<br>
@return <b>jQuery</b> object

<h3>Example</h3>

create a div container for the cover photo 
```html
<div id="cover_photo"></div>
```
then fetch the cover photo using facebook id
```js
$('#cover_photo').fbGetcover(19292868552);
```
fetch using facebook username
```js
$('#cover_photo').fbGetcover('facebook');
```
fetch with the cover width set to 500px
```js
$('#cover_photo').fbGetcover('facebook', 500);
```
fetch with the cover width set to 500px and height to 200px
```js
$('#cover_photo').fbGetcover('facebook', 500, 200);
```
