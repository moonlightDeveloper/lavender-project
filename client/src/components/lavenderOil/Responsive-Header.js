import {TweenMax, Power1} from "gsap";
import {Component} from "react";
import React from "react";

const defaults = {
    imgSrc: "http://platinum-communities.com/wp-content/uploads/2017/11/lavender-1117275_960_720.jpg",
    containerName: "placeholder",
    rows: 5,
    columns: 5,
    margin: 2.5,
    animTime: 0.3
}

class ImageGrid extends Component {

    constructor() {
        super()
        this.state = {
            options: defaults
        };
        this.placeholder = React.createRef();
        this.gridContainer = React.createRef();

        // this.generateCells = this.generateCells.bind(this);

        this.mouseLeaveListener = this.mouseLeaveListener.bind(this);
        this.mouseLeaveListener = this.mouseLeaveListener.bind(this);
    }



    // updateDimensions = () => {
    //     let {rows, columns, margin} = this.state.options;
    //     // let {width, height} = this.state;
    //
    //     let currentWidth = (window.innerWidth / columns) - margin;
    //     let currentHeight = (window.innerWidth / rows) - margin;
    //
    //     // if (width !== currentWidth || height !== currentHeight) {
    //         this.setState({width: currentWidth, height: currentHeight});
    //
    //         this.generateCells(currentWidth, currentWidth);
    //     // }
    // }




    componentDidMount() {
        let {rows, columns, margin} = this.state.options;

        this.placeholder.current.appendChild(this.gridContainer.current);

        let width = (this.gridContainer.current.offsetWidth / columns) - margin;
        let height = (this.gridContainer.current.offsetHeight / rows) - margin;
        this.generateCells(width, height);
        //
        // this.placeholder.current.addEventListener("resize", this.generateCells(width, height));
        this.placeholder.current.addEventListener("mouseover", e => this.mouseOverListener(e));

        this.placeholder.current.addEventListener("mouseleave", e => this.mouseLeaveListener(e, width, height));

    }

    fixTilePosition = (tile, ind, time, w, h) => {

        let {rows, columns} = this.state.options;
        if (time == null) time = 0;
        let centr, centrCol, centrRow, offsetW, offsetH, left, top;

        centr = Math.floor(columns * rows / 2);
        centrCol = Math.ceil(centr / columns);
        centrRow = Math.ceil(centr / rows);

        offsetW = w / centrCol;
        offsetH = h / centrRow;

        left = (Math.round((ind % columns - centrCol + 1) * offsetW));
        top = (Math.round((Math.floor(ind / columns) - centrRow + 1) * offsetH));

        //console.log(left, top)

        TweenMax.to(tile, time, {css: {backgroundPosition: left + "px " + top + "px"}, ease: Power1.easeOut});
    }

    mouseOverListener = (e) => {
        let allTiles = e.currentTarget.querySelectorAll(".gridTile");
        for (let t = 0, le = allTiles.length; t < le; t++) {
            TweenMax.to(allTiles[t], this.state.options.animTime, {
                css: {backgroundPosition: "0px 0px"},
                ease: Power1.easeOut
            });
        }
    }

    mouseLeaveListener = (e, width, height) => {
        let {animTime} = this.state.options;
        let allTiles = e.currentTarget.querySelectorAll(".gridTile");
        for (let ti = 0, len = allTiles.length; ti < len; ti++) {
            this.fixTilePosition(allTiles[ti], ti, animTime, width, height);
        }
    }

    generateCells = (width, height) => {
        let {rows, columns, margin} = this.state.options;
        let gridTile;
        let arr = [];

        for (let i = 0, l = rows * columns; i < l; i++) {
            gridTile = document.createElement('div');
            gridTile.className = "gridTile";
            gridTile.style.backgroundImage = "url(" + defaults.imgSrc + ")";

            arr = [(width + margin) * (i % columns),
                (height + margin) * Math.floor(i / columns),
                ((width + margin) * (i % columns) + width - margin),
                (height + margin) * Math.floor(i / columns),
                ((width + margin) * (i % columns) + width - margin),
                ((height + margin) * Math.floor(i / columns) + height - margin),
                (width + margin) * (i % columns),
                ((height + margin) * Math.floor(i / columns) + height - margin)];

            TweenMax.set(gridTile, {
                webkitClipPath: 'polygon(' + arr[0] + 'px ' + arr[1] + 'px,' + arr[2] + 'px ' + arr[3] + 'px, ' + arr[4] + 'px ' + arr[5] + 'px, ' + arr[6] + 'px ' + arr[7] + 'px)',
                clipPath: 'polygon(' + arr[0] + 'px ' + arr[1] + 'px,' + arr[2] + 'px ' + arr[3] + 'px, ' + arr[4] + 'px ' + arr[5] + 'px, ' + arr[6] + 'px ' + arr[7] + 'px)'
            });

            this.gridContainer.current.appendChild(gridTile);
            this.fixTilePosition(gridTile, i);
        }
    }

    render() {
        return (
            <div className="placeholder" ref={this.placeholder}>
                <div className="gridContainer" ref={this.gridContainer}/>
            </div>
        );
    }
}

export default ImageGrid;

