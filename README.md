## NASA APOD APP

NASA is a United States Agency responsible for scientific study related to air and outer space. NASA offers a lot of scientific information to the public online, some of that public information is used to run this application. It is a database in which a daily picture is posted every day relating to astronomical events and phenomena. In this application, a user enters a date via the arrows in the date selector in order to get one of NASA's daily pictures that was posted on that particular date. Please make sure to select a date in the past as NASA has not gone to the future, yet.

## Built With

- HTML5
- CSS3
- JavaScript
- jQuery
- AJAX
- Bootstrap

## Contributing

To contribute to the project and add your own touch:

**# 1** Fork it!

**# 2** Create your feature branch: `git checkout -b my-new-feature`

**# 3** Commit your changes: `git commit -m 'My new commit'`

**# 4** Push to the branch: `git push origin my-new-feature`

**# 5** Submit your pull request

## Author

Evan Ciavaglia

## Released under the MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.










# nasa-apod-app
#NASA Daily Photograph

#NASA is a United States Agency responsible for scientific study related to air and outer space. NASA offers a lot of scientific information to the public online, some of that public information is used to run this application. It is a database in which a daily picture is posted every day relating to astronomical events and phenomena. In this application, a user enters a date via the arrows in the date selector in order to get one of NASA's daily pictures that was posted on that particular date. Please make sure to select a date in the past as NASA has not gone to the future, yet.

#The tech used in making this application is HTML5, CSS3, JavaScript, jQuery, AJAX and Bootstrap.

#Methodology NASA Daily Image Viewer api let us extract image based on date. API: https://api.nasa.gov/planetary/apod This API expects two parameters: • Date[yyyy-mm-dd] • ApiKey In return, give JSON data:

#{ "copyright": "Fritz Helmut Hemmerich", "date": "2017-01-02", "explanation": "An old comet has returned to the inner Solar System. Not only is Comet 45P/Honda�Mrkos�Pajdu�áková physically ancient, it was first discovered 13 orbits ago in 1948. Comet 45P spends most of its time out near the orbit of Jupiter and last neared the Sun in 2011. Over the past few months, however, Comet 45P's new sunward plummet has brightened it considerably. Two days ago, the comet passed the closest part of its orbit to the Sun. The comet is currently visible with binoculars over the western horizon just after sunset, not far from the much brighter planet Venus. Pictured, Comet 45P was captured last week sporting a long ion tail with impressive structure. Comet 45P will pass relatively close to the Earth early next month. APOD Lecture: Friday, Jan. 6, Amateur Astronomers Association of New York City", "hdurl": "http://apod.nasa.gov/apod/image/1701/Comet45P_Hemmerich_2180.jpg", "media_type": "image", "service_version": "v1", "title": "Comet 45P Returns", "url": "http://apod.nasa.gov/apod/image/1701/Comet45P_Hemmerich_960.jpg" } On submit we are passing date and getting data in return which is displayed using frontend.
