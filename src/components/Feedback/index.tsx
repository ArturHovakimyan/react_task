import "./style.css";

const Feedback = () => {
  return (
    <div className={"feedback-container"}>
        <div className={"feedback-text-map"}>
            <span className={"feedback-text"}>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, as opposed to using 'Content here, content here', making it look like readable English.
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik
            </span>
            <img className={'feedback-map'} src="/photos/Rectangle.png" alt=""/>
            <svg
                className={'feedback-elips'}
                width="345" height="366" viewBox="0 0 345 366" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M344.582 97.0911C328.979 67.7441 305.678 43.2005 277.18 26.0952C248.682 8.98994 216.064 -0.0312159 182.827 0.000189368C149.59 0.0315866 116.989 9.11435 88.5237 26.2735C60.0585 43.4326 36.8039 68.0201 21.2562 97.3966C5.70861 126.773 -1.54492 159.829 0.274292 193.016C2.09351 226.204 12.9168 258.269 31.5822 285.77C50.2477 313.271 76.0505 335.169 106.221 349.114C136.391 363.059 169.789 368.524 202.831 364.922L196.201 304.099C174.206 306.496 151.974 302.858 131.891 293.576C111.808 284.293 94.632 269.716 82.2072 251.41C69.7823 233.104 62.5777 211.759 61.3667 189.668C60.1558 167.576 64.9841 145.572 75.3336 126.017C85.683 106.462 101.163 90.0955 120.111 78.6734C139.059 67.2513 160.76 61.2052 182.885 61.1843C205.01 61.1634 226.722 67.1684 245.692 78.5548C264.662 89.9411 280.172 106.279 290.559 125.814L344.582 97.0911Z" fill="url(#paint0_linear_19_9)"/>
                <defs>
                    <linearGradient id="paint0_linear_19_9" x1="97.091" y1="21.4184" x2="268.909" y2="344.582" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0A561A"/>
                        <stop offset="1" stopColor="#009962" stopOpacity="0.54"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <div className={"feedback-form"}>
            <span className={"feedback-form-header"}>ԿԱՊՆՎԵՔ ՄԵԶ ՀԵՏ ՀԻՄԱ</span>
            <input placeholder={'Անուն'} className={"feedback-form-input"} type="text"/>
            <input placeholder={'Էլ․հասցե'} className={"feedback-form-input"} type="text"/>
            <textarea
                placeholder={'Հաղորդագրություն'}
                className={"feedback-form-input"}
                rows={10}
                maxLength={240}
            />
            <button className={"feedback-form-btn"}>ՈՒՂԱՐԿԵԼ</button>
        </div>
	</div>
  )
}

export default Feedback