var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;

function setDetails(imageUrl, titleText) {
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function (event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails() {
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
    'use strict';
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function () {
        frame.classList.remove(TINY_EFFECT_CLASS);
    }, 50);
}

function addKeyPressHandler() {
    'use strict';
    document.body.addEventListener('keyup', function(event) {
        event.preventDefault();
        console.log(event.keyCode);
        if(event.keyCode === ESC_KEY) {
            hideDetails();
        }
    });
}

function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
}

initializeEvents();

// Previous Button
var left_btn = document.querySelector('.left-button');
left_btn.addEventListener('click', ()=> {
    // Retrieve array
    var thumbnails = getThumbnailsArray();
    // Retrieves current image being displayed
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    var a = detailImage.getAttribute('src');
    var curr;
    // Finds the current image and matches it to item in thumbnail array
    for (i = 0; i < thumbnails.length; i++) {
        var b = thumbnails[i].getAttribute('data-image-url');
        console.log(b);
        if (a === b) {
            console.log("true");
            curr = thumbnails[i];
            console.log('Curr = ', curr);
        }
    }

    // Assigns index to the current image being displayed
    if(curr.getAttribute('data-image-url') === 'img/otter1.jpg') {
        curr = 0;
        console.log(curr);
    } else if (curr.getAttribute('data-image-url') === 'img/otter2.jpg') {
        curr = 1;
        console.log(curr);
    } else if (curr.getAttribute('data-image-url') === 'img/otter3.jpg') {
        curr = 2;
        console.log(curr);
    } else if (curr.getAttribute('data-image-url') === 'img/otter4.jpg') {
        curr = 3;
        console.log(curr);
    } else if (curr.getAttribute('data-image-url') === 'img/otter5.jpg') {
        curr = 4;
        console.log(curr);
    }

    // Displays the previous image in array
    if(curr === 0) {
        curr = thumbnails.length;
    }
    curr = curr - 1;
    console.log('i = ', curr);
    setDetailsFromThumb(thumbnails[curr]);
});

// Next button
var right_btn = document.querySelector('.right-button');
right_btn.addEventListener('click', ()=> {
    // Retrieve array
    var thumbnails = getThumbnailsArray();

    // Retrieves current image being displayed
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    var a = detailImage.getAttribute('src');
    var curr;

    // Finds the current image and matches it to item in thumbnail array
    for (i = 0; i < thumbnails.length; i++) {
        var b = thumbnails[i].getAttribute('data-image-url');
        console.log(b);
        if (a === b) {
            console.log("true");
            curr = thumbnails[i];
            console.log('Curr = ', curr);
        }
    }

    // Assigns index to the current image being displayed
    if(curr.getAttribute('data-image-url') === 'img/otter1.jpg') {
        curr = 0;
        console.log(curr);
    } else if (curr.getAttribute('data-image-url') === 'img/otter2.jpg') {
        curr = 1;
        console.log(curr);
    } else if (curr.getAttribute('data-image-url') === 'img/otter3.jpg') {
        curr = 2;
        console.log(curr);
    } else if (curr.getAttribute('data-image-url') === 'img/otter4.jpg') {
        curr = 3;
        console.log(curr);
    } else if (curr.getAttribute('data-image-url') === 'img/otter5.jpg') {
        curr = 4;
        console.log(curr);
    }

    // Displays next image in array
    curr = curr + 1;
    curr = curr % thumbnails.length;
    setDetailsFromThumb(thumbnails[curr]);
});
