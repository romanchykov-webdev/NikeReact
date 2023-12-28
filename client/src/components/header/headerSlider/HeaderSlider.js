import React, { Component } from "react";
import Slider from "react-slick";
import './HeaderSlider.scss';
import { popupIsActive } from "../../poup/popupReducerSlice";
import { connect } from "react-redux";

class PreviousNextMethods extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        };

        return (
            <div className="wrapperSlider">
                <div className="wrapperPrevNext">
                    <button className=" prevH" onClick={this.previous}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="left arrow / 24 / Outline">
                                <path id="Vector" d="M15.0533 16L19.7733 11.28C20.0217 11.0301 20.1611 10.6922 20.1611 10.34C20.1611 9.9877 20.0217 9.64977 19.7733 9.39995C19.6494 9.27498 19.5019 9.17579 19.3394 9.1081C19.177 9.0404 19.0027 9.00555 18.8267 9.00555C18.6507 9.00555 18.4764 9.0404 18.3139 9.1081C18.1514 9.17579 18.004 9.27498 17.88 9.39995L12.2267 15.0533C12.1017 15.1772 12.0025 15.3247 11.9348 15.4872C11.8671 15.6497 11.8323 15.8239 11.8323 16C11.8323 16.176 11.8671 16.3502 11.9348 16.5127C12.0025 16.6752 12.1017 16.8227 12.2267 16.9466L17.88 22.6666C18.0046 22.7902 18.1523 22.888 18.3148 22.9543C18.4772 23.0207 18.6512 23.0543 18.8267 23.0533C19.0021 23.0543 19.1761 23.0207 19.3385 22.9543C19.501 22.888 19.6488 22.7902 19.7733 22.6666C20.0217 22.4168 20.1611 22.0789 20.1611 21.7266C20.1611 21.3744 20.0217 21.0364 19.7733 20.7866L15.0533 16Z" fill="white"/>
                            </g>
                        </svg>

                        <span>
                        Previous
                    </span>
                    </button>
                    <button className=" nextH" onClick={this.next}>
                        <span>
                        Next
                    </span>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9467 16L12.2267 20.72C11.9783 20.9698 11.8389 21.3077 11.8389 21.66C11.8389 22.0122 11.9783 22.3502 12.2267 22.6C12.3506 22.725 12.4981 22.8242 12.6606 22.8918C12.823 22.9595 12.9973 22.9944 13.1733 22.9944C13.3493 22.9944 13.5236 22.9595 13.6861 22.8918C13.8486 22.8242 13.996 22.725 14.12 22.6L19.7733 16.9467C19.8983 16.8227 19.9975 16.6752 20.0652 16.5128C20.1329 16.3503 20.1677 16.176 20.1677 16C20.1677 15.824 20.1329 15.6497 20.0652 15.4872C19.9975 15.3247 19.8983 15.1773 19.7733 15.0533L14.12 9.33332C13.9954 9.20974 13.8477 9.11198 13.6852 9.04563C13.5228 8.97927 13.3488 8.94564 13.1733 8.94665C12.9979 8.94564 12.8239 8.97927 12.6615 9.04563C12.499 9.11198 12.3512 9.20974 12.2267 9.33332C11.9783 9.58314 11.8389 9.92107 11.8389 10.2733C11.8389 10.6256 11.9783 10.9635 12.2267 11.2133L16.9467 16Z" fill="white"/>
                        </svg>
                    </button>
                </div>
                <Slider className="headerSlider" ref={c => (this.slider = c)} {...settings}>
                    {this.props.items.map(i => (
                        <div key={i.id} className={"wrapperHeaderSlider "} onClick={() => this.props.popupIsActive({i})}>
                            <div className="wrap">
                                <div className="itemCart itemCartSlider">
                                    <div className="wrapImg">
                                        <img src={i.img} alt="imgItem" />
                                    </div>
                                    <span className="name">{i.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

const mapDispatchToProps = {
    popupIsActive
};

export default connect(null, mapDispatchToProps)(PreviousNextMethods);
