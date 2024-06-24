const container = document.querySelector('.container');

const parentPic = document.querySelector('.parent');
parentPic.style.width = '470px';
parentPic.style.height = 'auto';

let thumb = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
    if(e.target.className == 'thumb') {
        parentPic.src = e.target.src; 
        parentPic.classList.add('fade');

        setTimeout(function() {
            parentPic.classList.remove('fade');
        }, 500);

        thumb.forEach(function(thumb) {
            // if( thumb.classList.contains('active') ) {
            //     thumb.classList.remove('active');
            // }

            thumb.className = 'thumb';

        });

        e.target.classList.add('active');
    }
})

