/**
 * Created by justinbennett on 2016-01-06.
 */
var buildUI = (function(items) {
    console.time('UI Build');
    console.log("BUILD UI CALLED");

    var movieList = items,
        list = document.createElement('ul'),
        parent = document.querySelector('.app'),
        cnt,
        upperBound = movieList.length,
        video = document.createElement('video');

    list.setAttribute('class', 'movie_list');
    parent.appendChild(list);

    for(cnt = 0; cnt < upperBound; cnt++) {

        // Create some DOM nodes
        var listItem = document.createElement('li'),
            img = document.createElement('img'),
            title = document.createElement('h3'),
            date = document.createElement('p'),
            wrapper = document.createElement('div');



        //////////////////////////////////////////
        // Let's make em!

        // listener to get to movie trailer
        // TODO: need function to call trailer view
        listItem.addEventListener('click', function() {

            parent.removeChild(list);

            //video.setAttribute('autoplay',true);
            video.setAttribute('autoplay','true');

            video.setAttribute('controls','controls');
            var src = document.createElement('source');
            src.setAttribute('src', movieList[this.id].getTrailerURL());
            video.appendChild(src);
            parent.appendChild(video);

            //var v = document.getElementsByTagName("video");
            //console.log(v);

            video.addEventListener('ended', function() {
                console.log("VIDEO ENDED");
                parent.removeChild(video);

                //want to reuse the video elem but wipe out current one
                video = document.createElement('video');
                parent.appendChild(list);
            });

            //alert(this.id);
        });
//http://movietrailers.apple.com/movies/lionsgate/godsofegypt/godsofegypt-tlr1_i320.m4v

        // SET ATTRIBUTES AND TEXT VALUES

        // TODO: primary Key / ID here
        listItem.setAttribute('id', cnt);


        listItem.setAttribute('class', 'movie_item');
        wrapper.setAttribute('class', 'text_wrapper');

        // Movie title
        title.textContent = movieList[cnt].prettyTitle();
        title.setAttribute('class', 'movie_title');


        date.textContent = "Published on: " + movieList[cnt].getPubDate();
        date.setAttribute('class', 'publish_date');

        // links to sources
        img.setAttribute('src', movieList[cnt].getPosterURL());
        img.setAttribute('class', 'movie_poster');

        // TODO: trailer link here

        // CONNECT THEM TOGETHER


        // wrapper for text elements
        wrapper.appendChild(title);
        wrapper.appendChild(date);

        // append content to list item container
        listItem.appendChild(img);
        listItem.appendChild(wrapper);

        // append to view
        list.appendChild(listItem);

        // initially decided to append to a document fragment but
        // want to give the appearance of the app doing something once the
        // first list item is built.
    }

    console.timeEnd('UI Build');
});