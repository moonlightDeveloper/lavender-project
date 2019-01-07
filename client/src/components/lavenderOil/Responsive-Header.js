let options = {
    imgSrc2:"http://platinum-communities.com/wp-content/uploads/2017/11/lavender-1117275_960_720.jpg",
    imgSrc1:"https://cdn.shopify.com/s/files/1/2493/4696/files/Terre_Bleu_Lavender_Farm_Children_in_Field_2000x.jpg?v=1513896023",
    containerName : "placeholder",
    columns:16,
    margin:3
}


function VenetianBlinds(defaults)
{
    let cols = defaults.columns;
    let margin = defaults.margin;
    let img1 = defaults.imgSrc1;
    let img2 = defaults.imgSrc2;
    let placeholder = document.getElementsByClassName(defaults.containerName)[0];
    let directionX, directionY;

    let column, blind, blindImg;
    let bgImg, rot;
    let colL;
    let colW = (placeholder.offsetWidth / cols) - margin;
    for (let i=0; i < cols; i++)
    {
        colL = ((colW + margin) * i);

        column = document.createElement('div');
        column.className = "column";
        column.style.width = colW + "px";
        column.style.left = colL + "px";
        placeholder.appendChild(column);

        for (let j=0; j<4; j++)
        {
            blind = document.createElement('div');
            blind.className = "blind";
            blind.style.width = colW + "px";
            blindImg = document.createElement('div');
            blindImg.className = "blindImg";

            switch (j){
                case 0:
                    TweenMax.set(blind, {rotationY: "0"});
                    bgImg = img1;
                    break;
                case 1:
                    TweenMax.set(blind, {rotationY: "90"});
                    bgImg = img2;
                    break;
                case 2:
                    TweenMax.set(blind, {rotationY: "180"});
                    bgImg = img1;
                    break;
                case 3:
                    TweenMax.set(blind, {rotationY: "270"});
                    bgImg = img2;
                    break;
            }
            blindImg.style.width = placeholder.offsetWidth + "px";
            blindImg.style.backgroundImage = "url("+bgImg+")";
            blindImg.style.left = -colL + "px";

            column.appendChild(blind);
            blind.appendChild(blindImg);

            TweenMax.set(blind, { transformOrigin:"50% 50% " + -colW/2, transformStyle: "preserve-3d"});
        }

        TweenMax.set(column, {transformStyle:"preserve-3d", transformPerspective:1000, rotationY:0});

        column.addEventListener("mouseenter", function(event){
            var elem = event.currentTarget;
            var rotY = elem._gsTransform.rotationY;

            if(directionX > 0){
                TweenMax.to(elem, 1, {rotationY:Math.floor(rotY/90)*90+90, transformOrigin:"50% 50% -" + colW/2, ease:Back.easeOut});
            }else{
                TweenMax.to(elem, 1, {rotationY:Math.floor(rotY/90)*90-90, transformOrigin:"50% 50% -" + colW/2, ease:Back.easeOut});
            }
        })
    }
    document.addEventListener('mousemove', function (event) {
        directionX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
        directionY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
    });
}

VenetianBlinds(options);