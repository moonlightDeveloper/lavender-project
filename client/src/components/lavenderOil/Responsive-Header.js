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
    }

    resize = () => {
        let {rows, columns, margin} = this.state.options;
        let width = (this.gridContainer.current.offsetWidth / columns) - margin;
        let height = (this.gridContainer.current.offsetHeight / rows) - margin;
        this.generateCells(width, height);
    }

    componentDidMount() {
        this.placeholder.current.appendChild(this.gridContainer.current);
        this.resize();
        window.addEventListener("resize", this.resize.bind(this));
        this.gridContainer.current.querySelectorAll(".purple").forEach((el) => {
            el.addEventListener("mouseover", this.mouseOverListener.bind(this))
        });
        this.gridContainer.current.querySelectorAll(".purple").forEach((el) => {
            el.addEventListener("mouseleave", this.mouseLeaveListener.bind(this))
        });
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

        TweenMax.to(tile, time, {
            css: {backgroundPosition: left + "px " + top + "px"},
            ease: Power1.easeOut
        });
    }

    mouseOverListener = () => {
        let allTiles = this.gridContainer.current.querySelectorAll(".gridTile");
        for (let t = 0, le = allTiles.length; t < le; t++) {
            TweenMax.to(allTiles[t], this.state.options.animTime, {
                css: {backgroundPosition: "0px 0px"},
                ease: Power1.easeOut
            });
        }
    }

    componentWillUnmount() {
        this.gridContainer.current.querySelectorAll(".purple").forEach((el) => {
            el.removeEventListener("mouseover", this.mouseOverListener)
        });
        this.gridContainer.current.querySelectorAll(".purple").forEach((el) => {
            el.removeEventListener("mouseleave", this.mouseLeaveListener)
        });
    }

    mouseLeaveListener = () => {

        let {rows, columns, margin} = this.state.options;
        let width = (this.gridContainer.current.offsetWidth / columns) - margin;
        let height = (this.gridContainer.current.offsetHeight / rows) - margin;
        let {animTime} = this.state.options;
        let allTiles = this.gridContainer.current.querySelectorAll(".gridTile");
        for (let ti = 0, len = allTiles.length; ti < len; ti++) {
            this.fixTilePosition(allTiles[ti], ti, animTime, width, height);
        }
    }

    generateCells = (width, height) => {
        let {rows, columns, margin, animTime} = this.state.options;
        let gridTile;
        let arr = [];

        while (this.gridContainer.current.hasChildNodes()) {
            this.gridContainer.current.removeChild(this.gridContainer.current.lastChild);
        }

        for (let i = 0, l = rows * columns; i < l; i++) {
            gridTile = document.createElement('div');
            gridTile.id = `gridTile-${i}`;
            if (i === 7 || i === 8) {
                gridTile.style.background = "#9773dd";
                gridTile.className = "gridTile purple";
            } else {
                gridTile.style.backgroundImage = "url(" + defaults.imgSrc + ")";
                gridTile.className = "gridTile";
            }

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
            this.fixTilePosition(gridTile, i, animTime, width, height);
        }
        this.gridContainer.current.querySelectorAll(".purple").forEach((el) => {
            el.addEventListener("mouseover", this.mouseOverListener.bind(this))
        });
        this.gridContainer.current.querySelectorAll(".purple").forEach((el) => {
            el.addEventListener("mouseleave", this.mouseLeaveListener.bind(this))
        });
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

