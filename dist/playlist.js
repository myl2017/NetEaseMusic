"use strict";$(function(){$.get("./database.json").then(function(n){n.forEach(function(n){if(n.id<=6){var s=$('\n                    <li>\n                        <a href="./song.html?&id='+n.id+'">\n                            <div class="order song-hot">'+n.id+'</div>\n                            <div class="songInfo">\n                                <h3>'+n.name+"<span>("+n.album+')</span></h3>\n                                <div class="songIntroduce"><span>'+n.singer+" - "+n.description+'</span></div>\n                            </div>\n                            <div class="playButton"><span></span></div>\n                        </a>\n                    </li>\n                ');$(".lists .list").append(s),$(".lists .loading").remove()}})})});